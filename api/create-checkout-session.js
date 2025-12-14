import Stripe from 'stripe';

// Initialize Stripe with secret key from environment variable
// Fallback to provided live key for local development
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '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';

// Validate key format
if (!stripeSecretKey || stripeSecretKey.includes('YOUR_STRIPE') || stripeSecretKey.includes('sk_test_YOUR')) {
  console.error('❌ ERROR: Invalid Stripe secret key detected!');
  console.error('Please set STRIPE_SECRET_KEY environment variable or update the fallback key.');
}

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

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, service, preferredTime, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !service) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Get price for the service
    const amount = SERVICE_PRICES[service] || SERVICE_PRICES['Emergency Consultation'];

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
      success_url: `${req.headers.origin || 'https://urgentdentalcare.co.uk'}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || 'https://urgentdentalcare.co.uk'}/book-appointment`,
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
    console.error('Error creating checkout session:', error);
    return res.status(500).json({ 
      error: 'Failed to create checkout session',
      details: error.message 
    });
  }
}

