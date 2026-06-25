# Donation and Stripe Integration

Last checked: 25 June 2026.

## Verified foundation details

Sources used:

- ACNC Charity Register profile: https://www.acnc.gov.au/charity/charities/82514f0e-9bbf-ed11-9885-00224893bfad/profile
- ABN Lookup current details: https://abr.business.gov.au/ABN/View/44702596884
- Supplied ATO charity tax concession notice: `/Users/adamsardo/Downloads/MVF Charity Endorsement.pdf`
- Supplied ATO DGR approval letter: `/Users/adamsardo/Downloads/THE MOONEE VALLEY FOUNDATION INC-DGR Approval letter.pdf`

Public details safe to use in the donation flow:

- Legal name: The Moonee Valley Foundation Inc
- ABN: 44 702 596 884
- Public email: info@mooneevalleyfoundation.org.au
- Entity type on ABN Lookup: Other Incorporated Entity
- ABN status: Active from 1 July 2020
- GST: Not currently registered for GST
- ACNC registration: Registered as a charity from 1 January 2023
- Charity tax concession: Income Tax Exemption from 1 January 2023
- DGR fund: THE MOONEE VALLEY FOUNDATION SCHOLARSHIP FUND
- DGR item: Item 1 of the table in section 30-15 of the Income Tax Assessment Act 1997
- DGR date of effect: 1 July 2024

Important copy boundary:

- Public copy should say "Eligible gifts to THE MOONEE VALLEY FOUNDATION SCHOLARSHIP FUND may be tax deductible."
- Do not imply that every payment to every Foundation activity is DGR-covered. The ATO DGR letter says income tax deductions are available only where gifts are made to the named fund, authority, or institution.

## Recommended Stripe path

Use a server-side Stripe Checkout Session route.

Why this path:

- Payment Links are simplest, but they push amount/frequency/product control into the Stripe Dashboard and give the site less metadata control.
- Embedded or custom payment forms add more frontend complexity and a larger compliance surface than this charity donation flow needs.
- Checkout Sessions give the site a proper donation form, support one-time and monthly donations, keep card entry on Stripe, and allow metadata/webhooks for receipts and reconciliation.

Implemented path:

- `/support-us#donate` renders the donation form.
- `POST /api/donations/checkout` validates amount/frequency, creates a Stripe Checkout Session, and redirects to Stripe.
- `/donate/success` and `/donate/cancelled` handle the Checkout return states.
- `POST /api/stripe/webhook` verifies Stripe signatures and is ready for receipt/reconciliation work.

## Environment variables

Copy `.env.local.example` to `.env.local` for local testing.

Required for checkout:

```bash
STRIPE_SECRET_KEY=sk_test_replace_me
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Required for webhooks:

```bash
STRIPE_WEBHOOK_SECRET=whsec_replace_me
```

Used by QR generation:

```bash
DONATION_URL=https://www.mooneevalleyfoundation.org.au/support-us
```

No Stripe secret keys are committed.

## Stripe Dashboard setup

1. Create or access the Foundation's Stripe account in test mode first.
2. Set the public business profile to The Moonee Valley Foundation Inc and add the public email `info@mooneevalleyfoundation.org.au`.
3. Configure branding so hosted Checkout matches MVF's identity.
4. Enable dynamic payment methods for Australia in Payment methods.
5. Turn on Stripe email receipts if the Foundation wants Stripe receipts sent automatically.
6. Add the production domain and test domain in any relevant Stripe domain settings for wallets.
7. Create a webhook endpoint for:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `invoice.paid`
   - `invoice.payment_failed`
   - `customer.subscription.deleted`
   - `charge.refunded`
8. Store the webhook signing secret as `STRIPE_WEBHOOK_SECRET`.

Tax receipt note:

- Stripe receipts are payment receipts, not necessarily formal Australian DGR tax receipts. Use the webhook endpoint to trigger a formal donor receipt if MVF needs one.

## Test-mode verification

1. Start the site with Node 24: `npm run dev`.
2. Visit `/support-us#donate`.
3. Submit a one-time test donation with a Stripe test card.
4. Confirm the redirect lands on `/donate/success`.
5. Confirm the Checkout Session in Stripe has metadata:
   - `charity_abn`
   - `dgr_fund`
   - `donation_amount_cents`
   - `donation_frequency`
6. Submit a monthly donation and confirm it creates a test subscription.
7. Use Stripe CLI to forward webhooks:
   `stripe listen --forward-to localhost:3000/api/stripe/webhook`
8. Trigger test events and confirm the webhook returns `{ "received": true }`.

## QR code

The checked-in QR asset is `public/seo/mvf-donation-qr.svg`.

Regenerate it with:

```bash
DONATION_URL=https://www.mooneevalleyfoundation.org.au/support-us npm run generate:donation-qr
```

## Open decisions

- Confirm whether the launch donation URL stays `/support-us` or moves to a dedicated `/donate` route.
- Confirm whether monthly donations should be enabled at launch or hidden until MVF is ready for subscription management.
- Confirm whether all online donations should be treated as gifts to the Scholarship Fund.
- Decide whether formal DGR receipt generation is manual or webhook-driven.
