import Link from "next/link";
import { footerCopy, navItems, siteEmail } from "@/data/mvf-content";

export function SiteFooter() {
  return (
    <footer className="bg-white text-mvf-ink">
      <div className="mx-auto grid max-w-[1180px] gap-12 px-8 py-20 md:grid-cols-[1fr_1.25fr_.7fr] md:px-12">
        <section>
          <h2 className="text-xl font-bold">Moonee Valley Foundation</h2>
          <p className="mt-6 max-w-[330px] text-sm font-bold leading-7">{footerCopy}</p>
          <p className="mt-12 text-sm font-bold">
            Email:{" "}
            <a className="underline" href={`mailto:${siteEmail}`}>
              {siteEmail}
            </a>
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold">Get Monthly Updates</h2>
          <form className="mt-2 max-w-[520px]" aria-label="Newsletter signup visual form">
            <label className="block text-sm font-bold text-mvf-grey" htmlFor="newsletter-email">
              Enter your email here *
            </label>
            <input
              id="newsletter-email"
              type="email"
              className="mt-8 h-10 w-full border-0 border-b border-mvf-ink bg-transparent px-0 text-mvf-ink outline-none"
            />
            <button
              type="button"
              className="mt-8 flex h-12 w-full items-center justify-center bg-mvf-purple text-sm font-medium text-white"
            >
              Sign Up!
            </button>
          </form>
        </section>
        <section>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <nav className="mt-6 grid gap-5 text-sm font-bold">
            {navItems
              .filter((item) => ["About", "Support Us", "Contact"].includes(item.label))
              .map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-mvf-purple">
                  {item.label}
                </Link>
              ))}
            <Link href="/news" className="hover:text-mvf-purple">
              News
            </Link>
            <Link href="/" className="hover:text-mvf-purple">
              Events
            </Link>
          </nav>
        </section>
      </div>
      <div className="bg-mvf-footer px-6 py-4 text-center text-xs font-bold text-white">
        © 2025 by Moonee Valley Foundation. Proudly created by{" "}
        <a href="http://www.wildwebdevs.com/" className="underline">
          Wild Web Design
        </a>
      </div>
    </footer>
  );
}
