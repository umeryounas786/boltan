import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import Stripe from 'stripe';

const app = express();
const PORT = 3001;

// Initialize Stripe - use environment variable or fallback to provided key
// Initialize Stripe - require environment variable
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.error('❌ ERROR: STRIPE_SECRET_KEY environment variable is required');
  console.error('Please set STRIPE_SECRET_KEY in your .env file or environment variables');
  process.exit(1);
}
// Log key status (first 20 chars only for security)
console.log('🔑 Stripe Key Status:', stripeSecretKey ? `Loaded (${stripeSecretKey.substring(0, 20)}...)` : 'NOT SET');
console.log('🔑 Key Type:', stripeSecretKey.startsWith('sk_live_') ? 'LIVE' : stripeSecretKey.startsWith('sk_test_') ? 'TEST' : 'UNKNOWN');

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-12-18.acacia',
});

// Pricing for different services (in pence for GBP)
const SERVICE_PRICES = {
  'Emergency Consultation': 5000, // £50.00
  'Toothache Relief': 8000, // £80.00
  'Broken Tooth Repair': 12000, // £120.00
  'Wisdom Tooth Pain': 10000, // £100.00
  'Lost Filling or Crown': 15000, // £150.00
  'Dental Abscess': 12000, // £120.00
  'Root Canal Treatment': 25000, // £250.00
  'Emergency Extraction': 8000, // £80.00
  'Pediatric Emergency': 6000, // £60.00
  'Other Urgent Issue': 5000, // £50.00
};

// Middleware
app.use(cors());

// Stripe webhook needs raw body for signature verification
app.use('/api/webhook', express.raw({ type: 'application/json' }));

// JSON parser for other routes
app.use(express.json());

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, phone, email, service, preferredTime, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'emergency@urgentdentalcare.co.uk',
        pass: '6o/kQR1eF+Y'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content
    const mailOptions = {
      from: 'emergency@urgentdentalcare.co.uk',
      to: 'emergency@urgentdentalcare.co.uk',
      replyTo: email,
      subject: `Emergency Dental Request - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            New Emergency Dental Request
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Appointment Details</h3>
            <p><strong>Service Needed:</strong> ${service}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          </div>

          <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <h3 style="color: #1f2937; margin-top: 0;">Dental Issue Description</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This is an automated message from the Emergency Dentistry contact form.</p>
            <p>Please respond to the patient at: ${email} or call: ${phone}</p>
          </div>
        </div>
      `,
      text: `
New Emergency Dental Request

Contact Information:
- Name: ${name}
- Phone: ${phone}
- Email: ${email}

Appointment Details:
- Service Needed: ${service}
- Preferred Time: ${preferredTime}

Dental Issue Description:
${message}

---
This is an automated message from the Emergency Dentistry contact form.
Please respond to the patient at: ${email} or call: ${phone}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

// Stripe checkout session endpoint
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    // Verify Stripe is initialized correctly
    if (!stripeSecretKey || stripeSecretKey.includes('YOUR_STRIPE') || stripeSecretKey.includes('sk_test_YOUR')) {
      console.error('❌ Invalid Stripe key detected in checkout handler');
      return res.status(500).json({ 
        error: 'Stripe configuration error',
        details: 'Invalid API key. Please check your STRIPE_SECRET_KEY environment variable.'
      });
    }

    const { name, phone, email, service, preferredTime, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !service) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Get price for the service
    const amount = SERVICE_PRICES[service] || SERVICE_PRICES['Emergency Consultation'];

    console.log(`💳 Creating checkout session for ${service} - Amount: £${(amount / 100).toFixed(2)}`);

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `${service} - Emergency Dental Appointment`,
              description: `Emergency dental consultation for ${service}. Preferred time: ${preferredTime}${message ? `. Notes: ${message}` : ''}`,
              images: [],
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin || 'http://localhost:5173'}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || 'http://localhost:5173'}/book-appointment`,
      customer_email: email,
      metadata: {
        customer_name: name,
        customer_phone: phone,
        customer_email: email,
        service: service,
        preferred_time: preferredTime,
        message: message || '',
      },
      payment_intent_data: {
        metadata: {
          customer_name: name,
          customer_phone: phone,
          customer_email: email,
          service: service,
          preferred_time: preferredTime,
        },
      },
    });

    return res.status(200).json({ 
      sessionId: session.id,
      url: session.url 
    });

  } catch (error) {
    console.error('❌ Error creating checkout session:', error);
    console.error('Error details:', {
      message: error.message,
      type: error.type,
      code: error.code,
      keyUsed: stripeSecretKey ? `${stripeSecretKey.substring(0, 20)}...` : 'NOT SET'
    });
    
    // Provide more helpful error messages
    let errorMessage = error.message;
    if (error.message.includes('Invalid API Key')) {
      errorMessage = 'Stripe API key is invalid. Please check your STRIPE_SECRET_KEY configuration.';
    }
    
    return res.status(500).json({ 
      error: 'Failed to create checkout session',
      details: errorMessage 
    });
  }
});

// Stripe webhook endpoint (for local testing with Stripe CLI)
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        console.log('Checkout completed:', session.id);
        // Handle successful checkout
        break;
      case 'payment_intent.succeeded':
        console.log('Payment succeeded:', event.data.object.id);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return res.status(500).json({ error: 'Webhook handler failed' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API server running on http://localhost:${PORT}`);
  console.log(`   - Email endpoint: /api/send-email`);
  console.log(`   - Stripe checkout: /api/create-checkout-session`);
  console.log(`   - Stripe webhook: /api/webhook`);
});

