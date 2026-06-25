import Link from "next/link";
import { foundationDetails } from "@/lib/donations";

export const metadata = {
  title: "Donation cancelled | MV Foundation",
  description: "Return to the Moonee Valley Foundation donation page.",
};

export default function DonationCancelledPage() {
  return (
    <main className="bg-mvf-soft px-6 pt-[148px] pb-20">
      <section className="mx-auto max-w-[720px] border border-mvf-border bg-white p-8 text-mvf-ink md:p-12">
        <p className="text-sm font-bold uppercase text-mvf-purple">Checkout cancelled</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-mvf-grey md:text-5xl">No donation was processed.</h1>
        <p className="mt-6 text-lg font-medium leading-8">
          You can return to the secure donation form when you&apos;re ready, or email the Foundation if you would prefer to
          arrange another way to give.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/support-us#donate"
            className="inline-flex min-h-10 items-center justify-center bg-mvf-purple px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-mvf-purple-dark"
          >
            Return to donation form
          </Link>
          <a
            href={`mailto:${foundationDetails.publicEmail}`}
            className="inline-flex min-h-10 items-center justify-center border border-mvf-purple px-8 py-3 text-sm font-bold text-mvf-purple transition-colors hover:bg-mvf-purple hover:text-white"
          >
            Email the Foundation
          </a>
        </div>
      </section>
    </main>
  );
}
