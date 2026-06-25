import { NextResponse } from "next/server";
import { foundationDetails, getSiteOrigin, parseDonationForm } from "@/lib/donations";
import { getStripeClient } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const formData = await request.formData();
  const result = parseDonationForm(formData);

  if (!result.ok) {
    return redirectToSupport(request, result.error);
  }

  let stripe;

  try {
    stripe = getStripeClient();
  } catch {
    return redirectToSupport(request, "stripe-not-configured");
  }

  const origin = getSiteOrigin(request);
  const { amountCents, frequency, donorEmail } = result.donation;
  const isMonthly = frequency === "monthly";
  const metadata = {
    charity_abn: foundationDetails.abnCompact,
    dgr_fund: foundationDetails.dgrFundName,
    donation_amount_cents: String(amountCents),
    donation_frequency: frequency,
  };

  try {
    const session = await stripe.checkout.sessions.create({
      mode: isMonthly ? "subscription" : "payment",
      submit_type: "donate",
      customer_email: donorEmail,
      billing_address_collection: "auto",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "aud",
            unit_amount: amountCents,
            recurring: isMonthly ? { interval: "month" } : undefined,
            product_data: {
              name: isMonthly ? "Monthly donation" : "Donation",
              description: `${foundationDetails.displayName} - ${foundationDetails.dgrFundName}`,
              metadata,
            },
          },
        },
      ],
      metadata,
      payment_intent_data: isMonthly ? undefined : { metadata },
      subscription_data: isMonthly ? { metadata } : undefined,
      success_url: `${origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate/cancelled`,
    });

    if (!session.url) {
      return redirectToSupport(request, "stripe-session");
    }

    return NextResponse.redirect(session.url, 303);
  } catch {
    return redirectToSupport(request, "stripe-session");
  }
}

function redirectToSupport(request: Request, error: string) {
  const url = new URL("/support-us", request.url);
  url.searchParams.set("donationError", error);
  url.hash = "donate";

  return NextResponse.redirect(url, 303);
}
