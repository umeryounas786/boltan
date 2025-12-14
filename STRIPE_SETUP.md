# Stripe Integration Setup Guide

## Overview
This project now includes full Stripe payment integration for booking emergency dental appointments.

## Files Created/Modified

### New Files:
- `api/create-checkout-session.js` - Vercel serverless function for creating Stripe checkout sessions
- `src/pages/BookingSuccessPage.jsx` - Success page after payment
- `STRIPE_SETUP.md` - This file

### Modified Files:
- `src/pages/BookingPage.jsx` - Added Stripe checkout integration
- `src/App.jsx` - Added booking success route
- `server.js` - Added Stripe checkout endpoint for local development
- `package.json` - Added `stripe` package

## Setup Instructions

### 1. Get Your Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Sign up or log in to your account
3. Navigate to **Developers** → **API keys**
4. Copy your **Publishable key** (starts with `pk_test_` or `pk_live_`)
5. Copy your **Secret key** (starts with `sk_test_` or `sk_live_`)

### 2. Configure Environment Variables

#### For Local Development:
Create a `.env` file in the root directory:
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY
```

#### For Vercel Deployment:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - `VITE_STRIPE_PUBLISHABLE_KEY` = `pk_test_YOUR_PUBLISHABLE_KEY` (or `pk_live_` for production)
   - `STRIPE_SECRET_KEY` = `sk_test_YOUR_SECRET_KEY` (or `sk_live_` for production)
4. Make sure to add them for **Production**, **Preview**, and **Development** environments

### 3. Update Code with Your Keys

#### Option 1: Use Environment Variables (Recommended)
The code is already set up to use environment variables. Just add them to Vercel.

#### Option 2: Hardcode for Testing (Not Recommended for Production)
If you want to test quickly, you can temporarily update:
- `src/pages/BookingPage.jsx` line 24: Replace `YOUR_STRIPE_PUBLISHABLE_KEY`
- `api/create-checkout-session.js` line 5: Replace `YOUR_STRIPE_SECRET_KEY`
- `server.js` line 11: Replace `YOUR_STRIPE_SECRET_KEY`

### 4. Pricing Configuration

Pricing is configured in both `api/create-checkout-session.js` and `server.js` in the `SERVICE_PRICES` object. Prices are in **pence** (GBP):

```javascript
const SERVICE_PRICES = {
  'Emergency Consultation': 5000,    // £50.00
  'Toothache Relief': 8000,          // £80.00
  'Broken Tooth Repair': 12000,      // £120.00
  // ... etc
};
```

Update these prices as needed.

### 5. Update Success/Cancel URLs

In `api/create-checkout-session.js`, update the success and cancel URLs:
- Line 50: `success_url` - Should point to your production domain
- Line 51: `cancel_url` - Should point to your booking page

Currently set to:
- Success: `https://urgentdentalcare.co.uk/booking-success?session_id={CHECKOUT_SESSION_ID}`
- Cancel: `https://urgentdentalcare.co.uk/book-appointment`

### 6. Testing

#### Local Testing:
1. Start the development server: `npm run dev:all`
2. Visit `http://localhost:5173/book-appointment`
3. Fill out the form and click "Confirm & Pay Online"
4. Use Stripe test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any 3-digit CVC
   - Any ZIP code

#### Production Testing:
1. Deploy to Vercel
2. Test with Stripe test mode first
3. Once verified, switch to live mode keys

### 7. Webhook Setup (Optional but Recommended)

For production, set up Stripe webhooks to handle payment events:

1. Go to Stripe Dashboard → **Developers** → **Webhooks**
2. Add endpoint: `https://your-domain.vercel.app/api/webhook`
3. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
4. Copy the webhook signing secret

Then create `api/webhook.js` to handle webhook events (for sending confirmation emails, etc.)

## Deployment Checklist

- [ ] Stripe keys added to Vercel environment variables
- [ ] Success/Cancel URLs updated to production domain
- [ ] Pricing configured correctly
- [ ] Test payment flow in Stripe test mode
- [ ] Verify email notifications work
- [ ] Switch to live mode keys when ready for production

## Support

For Stripe-related issues:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com/)

