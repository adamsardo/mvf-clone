import Stripe from "stripe";

const stripeApiVersion = "2026-06-24.dahlia";

let stripeClient: Stripe | null = null;

export function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }

  stripeClient ??= new Stripe(secretKey, {
    apiVersion: stripeApiVersion,
    httpClient: Stripe.createFetchHttpClient(),
    appInfo: {
      name: "Moonee Valley Foundation donation flow",
    },
  });

  return stripeClient;
}

export { stripeApiVersion };
