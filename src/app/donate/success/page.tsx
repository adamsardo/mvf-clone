import Link from "next/link";
import { foundationDetails } from "@/lib/donations";

export const metadata = {
  title: "Donation received | MV Foundation",
  description: "Thank you for supporting the Moonee Valley Foundation.",
};

export default function DonationSuccessPage() {
  return (
    <main className="bg-mvf-soft px-6 pt-[148px] pb-20">
      <section className="mx-auto max-w-[760px] border border-mvf-border bg-white p-8 text-mvf-ink md:p-12">
        <p className="text-sm font-bold uppercase text-mvf-purple">Donation received</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-mvf-grey md:text-5xl">Thank you for your support.</h1>
        <p className="mt-6 text-lg font-medium leading-8">
          Your donation helps the Foundation continue supporting talented and resilient young people across Melbourne&apos;s
          north-west.
        </p>
        <p className="mt-6 text-sm font-medium leading-6 text-mvf-grey">
          Eligible gifts to {foundationDetails.dgrFundName} may be tax deductible. Keep your Stripe receipt and email{" "}
          <a className="font-bold text-mvf-purple underline" href={`mailto:${foundationDetails.publicEmail}`}>
            {foundationDetails.publicEmail}
          </a>{" "}
          if you need a formal donation receipt.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex min-h-10 items-center justify-center bg-mvf-purple px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-mvf-purple-dark"
          >
            Back home
          </Link>
          <Link
            href="/news"
            className="inline-flex min-h-10 items-center justify-center border border-mvf-purple px-8 py-3 text-sm font-bold text-mvf-purple transition-colors hover:bg-mvf-purple hover:text-white"
          >
            Read latest news
          </Link>
        </div>
      </section>
    </main>
  );
}
