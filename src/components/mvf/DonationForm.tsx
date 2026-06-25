"use client";

import Image from "next/image";
import { useState } from "react";
import {
  formatAud,
  foundationDetails,
  getDonationErrorMessage,
  suggestedDonationAmounts,
  type DonationFrequency,
} from "@/lib/donations";
import { cn } from "@/lib/utils";

const donationFrequencies: { value: DonationFrequency; label: string; hint: string }[] = [
  { value: "once", label: "One-time", hint: "A single secure donation" },
  { value: "monthly", label: "Monthly", hint: "Repeat monthly until cancelled" },
];

interface DonationFormProps {
  error?: string;
}

export function DonationForm({ error }: DonationFormProps) {
  const errorMessage = getDonationErrorMessage(error);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState<DonationFrequency>("once");

  return (
    <div id="donate" className="grid min-w-0 scroll-mt-28 gap-8 text-mvf-ink">
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

      <div className="grid min-w-0 gap-8">
        <form action="/api/donations/checkout" method="POST" className="grid min-w-0 gap-8 border border-mvf-border bg-white p-5 sm:p-6 md:p-8">
          <fieldset className="grid gap-4">
            <legend className="text-sm font-bold uppercase text-mvf-grey">Amount</legend>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-[repeat(auto-fit,minmax(4.75rem,1fr))]">
              {suggestedDonationAmounts.map((amount) => (
                <label key={amount} className="cursor-pointer">
                  <input
                    type="radio"
                    name="amount"
                    value={amount}
                    checked={selectedAmount === amount}
                    onChange={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className="sr-only"
                    aria-label={`${formatAud(amount * 100)} donation`}
                  />
                  <span
                    className={cn(
                      "flex min-h-14 items-center justify-center border border-mvf-border bg-mvf-soft px-3 text-base font-bold text-mvf-ink transition-colors",
                      selectedAmount === amount && "border-mvf-purple bg-mvf-purple text-white",
                    )}
                  >
                    {formatAud(amount * 100)}
                  </span>
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
                  value={customAmount}
                  onChange={(event) => {
                    setCustomAmount(event.target.value);
                    if (event.target.value.trim()) {
                      setSelectedAmount(null);
                    }
                  }}
                  placeholder="75"
                  className="min-h-12 min-w-0 flex-1 bg-transparent px-0 py-3 text-base font-medium text-mvf-ink outline-none"
                />
              </span>
            </label>
          </fieldset>

          <fieldset className="grid gap-4">
            <legend className="text-sm font-bold uppercase text-mvf-grey">Frequency</legend>
            <div className="grid gap-3 md:grid-cols-2">
              {donationFrequencies.map((frequency) => (
                <label key={frequency.value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="frequency"
                    value={frequency.value}
                    checked={selectedFrequency === frequency.value}
                    onChange={() => setSelectedFrequency(frequency.value)}
                    className="sr-only"
                  />
                  <span
                    className={cn(
                      "block border border-mvf-border bg-mvf-soft p-4 transition-colors",
                      selectedFrequency === frequency.value && "border-mvf-purple bg-white",
                    )}
                  >
                    <span className="block text-base font-bold text-mvf-ink">{frequency.label}</span>
                    <span className="mt-1 block text-sm font-medium text-mvf-grey">{frequency.hint}</span>
                  </span>
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
              placeholder="you@example.com"
              className="min-h-12 min-w-0 border border-mvf-border bg-white px-4 py-3 text-base font-medium text-mvf-ink outline-none focus:border-mvf-purple"
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

        <aside className="grid min-w-0 gap-5 overflow-hidden border border-mvf-border bg-white p-5 sm:grid-cols-[minmax(0,1fr)_180px] sm:items-center sm:p-6">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-mvf-grey">Donate by QR</h3>
            <p className="mt-3 text-sm font-medium leading-6 text-mvf-ink">Scan to open the donation page on another device.</p>
            <a className="mt-4 block break-all text-xs font-bold text-mvf-purple underline" href={foundationDetails.donationUrl}>
              {foundationDetails.donationUrl}
            </a>
          </div>
          <Image
            src="/seo/mvf-donation-qr.svg"
            alt="QR code linking to the Moonee Valley Foundation donation page"
            width={180}
            height={180}
            className="mx-auto h-auto w-full max-w-[180px]"
            unoptimized
          />
        </aside>
      </div>
    </div>
  );
}
