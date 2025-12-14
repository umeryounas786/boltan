# Environment Variables Setup

## Your Stripe Keys

You have provided the following LIVE Stripe keys:

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_51SDEBkDsoYoQhpIXaeKiU5OKE1cjmt3SsZMKzU3v3J4QBoUQ200exRfwwH5LlczsM83cN9aZwjCRuhkaS1eK1Q1O00QexX6beU
STRIPE_SECRET_KEY=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
STRIPE_WEBHOOK_SECRET=whsec_iSYSLmibilF7Mn1LjDrtVqjRP8jnDnkm
```

## Setup Instructions

### 1. For Local Development

Create a `.env` file in the root directory of your project with the following content:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_51SDEBkDsoYoQhpIXaeKiU5OKE1cjmt3SsZMKzU3v3J4QBoUQ200exRfwwH5LlczsM83cN9aZwjCRuhkaS1eK1Q1O00QexX6beU
STRIPE_SECRET_KEY=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
STRIPE_WEBHOOK_SECRET=whsec_iSYSLmibilF7Mn1LjDrtVqjRP8jnDnkm
SMTP_EMAIL=emergency@urgentdentalcare.co.uk
SMTP_PASSWORD=6o/kQR1eF+Y
```

**Note:** The `.env` file is already in `.gitignore` so it won't be committed to git.

### 2. For Vercel Deployment

1. Go to your Vercel project dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

   **For Production:**
   - `VITE_STRIPE_PUBLISHABLE_KEY` = `pk_live_51SDEBkDsoYoQhpIXaeKiU5OKE1cjmt3SsZMKzU3v3J4QBoUQ200exRfwwH5LlczsM83cN9aZwjCRuhkaS1eK1Q1O00QexX6beU`
   - `STRIPE_SECRET_KEY` = `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`
   - `STRIPE_WEBHOOK_SECRET` = `whsec_iSYSLmibilF7Mn1LjDrtVqjRP8jnDnkm`

   **For Preview and Development:**
   - Add the same variables (you can use the same values or different test keys)

5. Click **Save** for each variable
6. **Redeploy** your application for the changes to take effect

### 3. Stripe Webhook Setup

To receive payment events, configure the webhook in Stripe:

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/webhooks)
2. Click **Add endpoint**
3. Enter your endpoint URL: `https://urgentdentalcare.co.uk/api/webhook`
   (Or your Vercel deployment URL: `https://your-project.vercel.app/api/webhook`)
4. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Click **Add endpoint**
6. Copy the **Signing secret** (it should match: `whsec_iSYSLmibilF7Mn1LjDrtVqjRP8jnDnkm`)
7. Make sure this secret is set in your Vercel environment variables

### 4. Verify Setup

After deploying:

1. Test the booking flow at: `https://urgentdentalcare.co.uk/book-appointment`
2. Complete a test payment
3. Check Stripe Dashboard → **Payments** to see the payment
4. Check Stripe Dashboard → **Webhooks** to see webhook events
5. Verify confirmation emails are being sent

## Security Notes

⚠️ **Important:**
- These are LIVE keys - they process real payments
- Never commit `.env` file to git (already in `.gitignore`)
- Never share these keys publicly
- The webhook secret is used to verify webhook events come from Stripe

## Files Updated

- ✅ `api/create-checkout-session.js` - Uses `STRIPE_SECRET_KEY` from env
- ✅ `api/webhook.js` - Uses `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` from env
- ✅ `src/pages/BookingPage.jsx` - Uses `VITE_STRIPE_PUBLISHABLE_KEY` from env
- ✅ `server.js` - Uses `STRIPE_SECRET_KEY` from env for local dev
- ✅ `.gitignore` - Added `.env` to prevent committing secrets

## Next Steps

1. Create `.env` file locally with the keys above
2. Add environment variables to Vercel
3. Configure Stripe webhook endpoint
4. Redeploy on Vercel
5. Test the payment flow

