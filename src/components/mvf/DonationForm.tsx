import Image from "next/image";
import {
  formatAud,
  foundationDetails,
  getDonationErrorMessage,
  suggestedDonationAmounts,
  type DonationFrequency,
} from "@/lib/donations";

const donationFrequencies: { value: DonationFrequency; label: string; hint: string }[] = [
  { value: "once", label: "One-time", hint: "A single secure donation" },
  { value: "monthly", label: "Monthly", hint: "Repeat monthly until cancelled" },
];

interface DonationFormProps {
  error?: string;
}

export function DonationForm({ error }: DonationFormProps) {
  const errorMessage = getDonationErrorMessage(error);

  return (
    <div id="donate" className="grid scroll-mt-28 gap-8 text-mvf-ink">
      <section>
        <h2 className="text-3xl font-bold text-mvf-grey">Let&apos;s Make A Change</h2>
        <p className="mt-6 text-lg leading-8">
          Donate securely to help the Foundation support talented and resilient young people across Melbourne&apos;s north-west.
        </p>
        <p className="mt-4 text-sm font-medium leading-6 text-mvf-grey">
          Eligible gifts to {foundationDetails.dgrFundName} may be tax deductible. ABN {foundationDetails.abn}.
        </p>
      </section>

      {errorMessage ? (
        <div className="border border-mvf-purple bg-white px-5 py-4 text-sm font-bold text-mvf-purple" role="alert">
          {errorMessage}
        </div>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-[1fr_230px]">
        <form action="/api/donations/checkout" method="POST" className="grid gap-8 border border-mvf-border bg-white p-6 md:p-8">
          <fieldset className="grid gap-4">
            <legend className="text-sm font-bold uppercase text-mvf-grey">Amount</legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {suggestedDonationAmounts.map((amount, index) => (
                <label
                  key={amount}
                  className="flex min-h-14 cursor-pointer items-center justify-center border border-mvf-border bg-mvf-soft px-3 text-base font-bold text-mvf-ink transition-colors has-checked:border-mvf-purple has-checked:bg-mvf-purple has-checked:text-white"
                >
                  <input
                    type="radio"
                    name="amount"
                    value={amount}
                    defaultChecked={index === 1}
                    className="sr-only"
                    aria-label={`${formatAud(amount * 100)} donation`}
                  />
                  {formatAud(amount * 100)}
                </label>
              ))}
            </div>
            <label className="grid gap-2 text-sm font-bold text-mvf-grey" htmlFor="custom-donation-amount">
              Other amount
              <span className="flex items-center border border-mvf-border bg-white focus-within:border-mvf-purple">
                <span className="px-4 text-lg font-bold text-mvf-grey">$</span>
                <input
                  id="custom-donation-amount"
                  name="customAmount"
                  type="number"
                  inputMode="decimal"
                  min="5"
                  max="5000"
                  step="1"
                  placeholder="75"
                  className="min-h-12 flex-1 bg-transparent px-0 py-3 text-base font-medium text-mvf-ink outline-none"
                />
              </span>
            </label>
          </fieldset>

          <fieldset className="grid gap-4">
            <legend className="text-sm font-bold uppercase text-mvf-grey">Frequency</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {donationFrequencies.map((frequency) => (
                <label
                  key={frequency.value}
                  className="cursor-pointer border border-mvf-border bg-mvf-soft p-4 transition-colors has-checked:border-mvf-purple has-checked:bg-white"
                >
                  <input
                    type="radio"
                    name="frequency"
                    value={frequency.value}
                    defaultChecked={frequency.value === "once"}
                    className="sr-only"
                  />
                  <span className="block text-base font-bold text-mvf-ink">{frequency.label}</span>
                  <span className="mt-1 block text-sm font-medium text-mvf-grey">{frequency.hint}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="grid gap-2 text-sm font-bold text-mvf-grey" htmlFor="donor-email">
            Email for Stripe receipt
            <input
              id="donor-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={foundationDetails.publicEmail}
              className="min-h-12 border border-mvf-border bg-white px-4 py-3 text-base font-medium text-mvf-ink outline-none focus:border-mvf-purple"
            />
          </label>

          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center bg-mvf-purple px-8 py-3 text-base font-bold text-white transition-colors hover:bg-mvf-purple-dark"
          >
            Donate securely
          </button>

          <p className="text-xs font-medium leading-5 text-mvf-grey">
            Payments are processed by Stripe Checkout. Card details are entered on Stripe&apos;s secure checkout page.
          </p>
        </form>

        <aside className="grid content-start gap-5 border border-mvf-border bg-white p-6">
          <div>
            <h3 className="text-xl font-bold text-mvf-grey">Donate by QR</h3>
            <p className="mt-3 text-sm font-medium leading-6 text-mvf-ink">Scan to open the donation page on another device.</p>
          </div>
          <Image
            src="/seo/mvf-donation-qr.svg"
            alt="QR code linking to the Moonee Valley Foundation donation page"
            width={180}
            height={180}
            className="mx-auto h-auto w-full max-w-[180px]"
            unoptimized
          />
          <a className="break-words text-xs font-bold text-mvf-purple underline" href={foundationDetails.donationUrl}>
            {foundationDetails.donationUrl}
          </a>
        </aside>
      </div>
    </div>
  );
}
