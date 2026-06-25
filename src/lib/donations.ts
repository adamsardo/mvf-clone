export const foundationDetails = {
  legalName: "The Moonee Valley Foundation Inc",
  displayName: "Moonee Valley Foundation",
  abn: "44 702 596 884",
  abnCompact: "44702596884",
  publicEmail: "info@mooneevalleyfoundation.org.au",
  websiteUrl: "https://www.mooneevalleyfoundation.org.au/",
  donationUrl: "https://www.mooneevalleyfoundation.org.au/support-us",
  dgrFundName: "THE MOONEE VALLEY FOUNDATION SCHOLARSHIP FUND",
  dgrItem: "Item 1",
  dgrEffectiveDate: "1 July 2024",
} as const;

export const suggestedDonationAmounts = [25, 50, 100, 250] as const;

export type DonationFrequency = "once" | "monthly";

export interface ParsedDonation {
  amountCents: number;
  frequency: DonationFrequency;
  donorEmail?: string;
}

export type DonationErrorCode = "amount" | "frequency" | "stripe-not-configured" | "stripe-session";

export interface DonationFormSuccess {
  ok: true;
  donation: ParsedDonation;
}

export interface DonationFormFailure {
  ok: false;
  error: DonationErrorCode;
}

export type DonationFormResult = DonationFormSuccess | DonationFormFailure;

export function formatAud(cents: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}

export function parseDonationForm(formData: FormData): DonationFormResult {
  const frequency = formData.get("frequency");
  if (frequency !== "once" && frequency !== "monthly") {
    return { ok: false, error: "frequency" };
  }

  const selectedAmount = formData.get("amount");
  const customAmount = formData.get("customAmount");
  const rawAmount = typeof customAmount === "string" && customAmount.trim() !== "" ? customAmount : selectedAmount;

  if (typeof rawAmount !== "string") {
    return { ok: false, error: "amount" };
  }

  const amount = Number(rawAmount);
  const amountCents = Math.round(amount * 100);

  if (!Number.isFinite(amount) || amountCents < 500 || amountCents > 500000) {
    return { ok: false, error: "amount" };
  }

  const email = formData.get("email");
  const donorEmail = typeof email === "string" && email.includes("@") ? email.trim() : undefined;

  return {
    ok: true,
    donation: {
      amountCents,
      frequency,
      donorEmail,
    },
  };
}

export function getDonationErrorMessage(error?: string) {
  if (error === "amount") return "Choose a donation amount between $5 and $5,000.";
  if (error === "frequency") return "Choose whether this is a one-time or monthly donation.";
  if (error === "stripe-not-configured") {
    return "Donation checkout is not configured yet. Please email the Foundation and try again later.";
  }
  if (error === "stripe-session") {
    return "Stripe could not start checkout. Please try again or email the Foundation.";
  }

  return undefined;
}

export function getSiteOrigin(request: Request) {
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
  if (configuredOrigin) return configuredOrigin.replace(/\/$/, "");

  return new URL(request.url).origin;
}
