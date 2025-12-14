# Quick Start Guide - Fixing the 500 Error

## The Problem
You're getting a `500 Internal Server Error` because the API server on port 3001 is not running.

## Solution

### Option 1: Run Both Servers Together (Recommended)

Open a terminal and run:
```bash
npm run dev:all
```

This will start:
- Vite dev server on port 5173 (frontend)
- Express API server on port 3001 (backend)

### Option 2: Run Servers Separately

**Terminal 1** - Start the API server:
```bash
npm run dev:server
```

**Terminal 2** - Start the Vite dev server:
```bash
npm run dev
```

## Create .env File (Optional but Recommended)

Create a `.env` file in the root directory with:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_51SDEBkDsoYoQhpIXaeKiU5OKE1cjmt3SsZMKzU3v3J4QBoUQ200exRfwwH5LlczsM83cN9aZwjCRuhkaS1eK1Q1O00QexX6beU
STRIPE_SECRET_KEY=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
STRIPE_WEBHOOK_SECRET=whsec_iSYSLmibilF7Mn1LjDrtVqjRP8jnDnkm
SMTP_EMAIL=emergency@urgentdentalcare.co.uk
SMTP_PASSWORD=6o/kQR1eF+Y
```

**Note:** The code now has your Stripe keys as fallbacks, so it will work even without the .env file, but using .env is better practice.

## Verify It's Working

1. Start the servers: `npm run dev:all`
2. Visit: `http://localhost:5173/book-appointment`
3. Fill out the form
4. Click "Confirm & Pay Online"
5. You should be redirected to Stripe checkout

## For Vercel Deployment

Make sure to add these environment variables in Vercel Dashboard:
- `VITE_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

See `ENV_SETUP.md` for detailed instructions.

