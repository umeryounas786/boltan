import Stripe from 'stripe';
import nodemailer from 'nodemailer';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
});

// Webhook secret for verifying webhook events
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // For Vercel, we need to get the raw body
  // The body might be a string or already parsed
  let body = req.body;
  
  // If body is a string, convert to buffer
  if (typeof body === 'string') {
    body = Buffer.from(body);
  } else if (Buffer.isBuffer(body)) {
    // Already a buffer, use as is
  } else {
    // If it's an object, we need to stringify it back
    // This shouldn't happen with proper Vercel config, but handle it
    body = Buffer.from(JSON.stringify(body));
  }

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        await handleCheckoutCompleted(session);
        break;

      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        await handlePaymentSucceeded(paymentIntent);
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        await handlePaymentFailed(failedPayment);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return res.status(500).json({ error: 'Webhook handler failed' });
  }
}

// Handle successful checkout
async function handleCheckoutCompleted(session) {
  console.log('Checkout completed:', session.id);
  
  const metadata = session.metadata || {};
  const customerEmail = session.customer_email || metadata.customer_email;

  // Send confirmation email
  if (customerEmail) {
    await sendBookingConfirmationEmail({
      email: customerEmail,
      name: metadata.customer_name || 'Customer',
      phone: metadata.customer_phone || '',
      service: metadata.service || 'Emergency Consultation',
      preferredTime: metadata.preferred_time || 'Any',
      sessionId: session.id,
      amount: session.amount_total ? (session.amount_total / 100).toFixed(2) : '0.00',
    });
  }

  // You can add additional logic here:
  // - Save to database
  // - Send notification to admin
  // - Create calendar event
  // etc.
}

// Handle successful payment
async function handlePaymentSucceeded(paymentIntent) {
  console.log('Payment succeeded:', paymentIntent.id);
  // Additional payment success handling if needed
}

// Handle failed payment
async function handlePaymentFailed(paymentIntent) {
  console.log('Payment failed:', paymentIntent.id);
  // Handle failed payment (e.g., notify admin, log for follow-up)
}

// Send booking confirmation email
async function sendBookingConfirmationEmail({ email, name, phone, service, preferredTime, sessionId, amount }) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 587,
      secure: false,
      auth: {
        user: 'emergency@urgentdentalcare.co.uk',
        pass: '6o/kQR1eF+Y'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: 'emergency@urgentdentalcare.co.uk',
      to: email,
      subject: 'Booking Confirmed - Emergency Dental Appointment',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            Booking Confirmed!
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for booking with us. Your payment of <strong>£${amount}</strong> has been processed successfully.</p>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Booking Details</h3>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Booking ID:</strong> ${sessionId}</p>
          </div>

          <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <h3 style="color: #1f2937; margin-top: 0;">What Happens Next?</h3>
            <p>Our team will contact you within the next few hours to confirm your appointment time and answer any questions you may have.</p>
            <p><strong>Emergency Line:</strong> <a href="tel:07375064619">07375064619</a> (24/7)</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This is an automated confirmation email from Emergency Dentistry Manchester & Bolton.</p>
            <p>If you have any questions, please contact us at <a href="mailto:emergency@urgentdentalcare.co.uk">emergency@urgentdentalcare.co.uk</a></p>
          </div>
        </div>
      `,
      text: `
Booking Confirmed!

Dear ${name},

Thank you for booking with us. Your payment of £${amount} has been processed successfully.

Booking Details:
- Service: ${service}
- Preferred Time: ${preferredTime}
- Phone: ${phone}
- Booking ID: ${sessionId}

What Happens Next?
Our team will contact you within the next few hours to confirm your appointment time and answer any questions you may have.

Emergency Line: 07375064619 (24/7)

---
This is an automated confirmation email from Emergency Dentistry Manchester & Bolton.
If you have any questions, please contact us at emergency@urgentdentalcare.co.uk
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to:', email);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}

