import Link from "next/link";
import { AlumniVoices } from "@/components/mvf/AlumniVoices";
import { AssetImage } from "@/components/mvf/AssetImage";
import { DonationForm } from "@/components/mvf/DonationForm";
import { InfoSections } from "@/components/mvf/InfoSections";
import { NewsCard } from "@/components/mvf/NewsCard";
import { PageBanner } from "@/components/mvf/PageBanner";
import { SupportCta } from "@/components/mvf/SupportCta";
import { ContactFormVisual } from "@/components/mvf/VisualForms";
import {
  aboutSections,
  alumniSections,
  faqs,
  grantSections,
  images,
  pastWinners,
  posts,
  siteEmail,
} from "@/data/mvf-content";

export const pageSlugs = ["apply", "grants", "about", "past-winners", "alumni", "faqs", "support-us", "contact", "news"] as const;

export type PageSlug = (typeof pageSlugs)[number];

export const pageTitles: Record<PageSlug, string> = {
  apply: "Apply Now.",
  grants: "Grants",
  about: "About",
  "past-winners": "Past Winners",
  alumni: "Alumni",
  faqs: "Frequently asked questions",
  "support-us": "Support Us",
  contact: "Contact",
  news: "Latest News",
};

export function MainPage({ slug, donationError }: { slug: PageSlug; donationError?: string }) {
  if (slug === "news") return <NewsPage />;
  if (slug === "past-winners") return <PastWinnersPage />;
  if (slug === "contact") return <ContactPage />;
  if (slug === "support-us") return <SupportPage donationError={donationError} />;
  if (slug === "apply") return <ApplyPage />;
  if (slug === "grants") return <GrantsPage />;
  if (slug === "about") return <AboutPage />;
  if (slug === "alumni") return <AlumniPage />;
  return <FaqPage />;
}

function GrantsPage() {
  return (
    <main>
      <PageBanner title="Grants" />
      <section className="bg-mvf-soft px-8 py-20">
        <div className="mx-auto max-w-[980px]">
          <h2 className="text-3xl font-bold text-mvf-ink">Moonee Valley Foundation Grants</h2>
          <p className="mt-6 text-lg font-medium leading-8 text-mvf-ink">The MVF awards the following two sets of grants.</p>
        </div>
        <div className="mt-14">
          <InfoSections sections={grantSections} />
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <PageBanner title="About" />
      <section className="bg-mvf-soft px-8 py-20">
        <div className="mx-auto grid max-w-[1080px] gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <InfoSections sections={aboutSections} />
          <div className="grid content-start gap-5">
            <AssetImage asset={images.aboutAlumni} className="aspect-[1.25]" sizes="(min-width: 1000px) 440px, 90vw" />
            <div className="grid grid-cols-2 gap-5">
              <AssetImage
                asset={{ src: "/images/mvf/033-about.jpg", alt: "Foundation awards night attendee", width: 478, height: 850 }}
                className="aspect-[.72]"
                sizes="220px"
              />
              <AssetImage
                asset={{ src: "/images/mvf/041-39661-131593070216687-2011520-n-jpg.jpg", alt: "Historic alumni event", width: 654, height: 576 }}
                className="aspect-[.72]"
                sizes="220px"
              />
            </div>
          </div>
        </div>
      </section>
      <SupportCta />
    </main>
  );
}

function AlumniPage() {
  return (
    <main>
      <PageBanner title="Alumni" />
      <AlumniVoices
        title="Stories from past awardees"
        intro="MVF alumni have used their awards to travel, train, study, compete, and build the confidence to keep contributing long after the original grant."
      />
      <section className="bg-mvf-soft px-8 py-20">
        <InfoSections sections={alumniSections} narrow />
      </section>
    </main>
  );
}

function FaqPage() {
  return (
    <main>
      <PageBanner title="Frequently asked questions" />
      <section className="bg-mvf-soft px-8 py-20">
        <div className="mx-auto max-w-[980px]">
          <div className="grid gap-12">
            {faqs.map((faq) => (
              <article key={faq.number} className="grid gap-6 border-b border-mvf-border pb-12 md:grid-cols-[90px_1fr]">
                <p className="text-3xl font-bold text-mvf-purple">{faq.number}</p>
                <div>
                  <h2 className="text-2xl font-bold text-mvf-ink">{faq.question}</h2>
                  <p className="mt-5 text-base font-medium leading-8 text-mvf-grey">{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ApplyPage() {
  return (
    <main>
      <PageBanner title="Apply Now." />
      <section className="bg-mvf-soft px-8 py-20">
        <div className="mx-auto grid max-w-[1040px] gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <AssetImage asset={images.applyHero} className="min-h-[520px]" sizes="(min-width: 1000px) 45vw, 90vw" />
          <div>
            <p className="text-lg font-medium leading-8 text-mvf-ink">
              The Moonee Valley Foundation awards the following grants, with the aim of helping young adults achieve their
              ambitions and to acknowledge the positive community contribution.
            </p>
            <div className="mt-12 grid gap-8">
              <ApplyCard
                title="Awards of Excellence"
                body={`Click on the below button to download the 'Award of Excellence' form. Fill it in and email it to us at ${siteEmail}.`}
                button="Award of Excellence"
                href="https://www.mooneevalleyfoundation.org.au/_files/ugd/b72280_ced493a39ee34e82952f41e075cd4432.doc?dn=MVF-Grant-Application-Form-2026.doc"
              />
              <ApplyCard
                title="School Grants"
                body={`Click on the below button to download the 'School Grants' form. Fill it in and email it to us at ${siteEmail}.`}
                button="School Grant"
                href="https://www.mooneevalleyfoundation.org.au/_files/ugd/b72280_090b054451d94f0fb3a9f69111cd6cc1.doc?dn=MVFschoolaward%20form%202026.doc"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ApplyCard({ title, body, button, href }: { title: string; body: string; button: string; href: string }) {
  return (
    <article className="border border-mvf-border bg-white p-8">
      <h2 className="text-2xl font-bold text-mvf-grey">{title}</h2>
      <p className="mt-5 text-base font-medium leading-8 text-mvf-ink">{body}</p>
      <a
        href={href}
        className="mt-8 inline-flex min-h-10 items-center bg-mvf-purple px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-mvf-purple-dark"
      >
        {button}
      </a>
    </article>
  );
}

function ContactPage() {
  return (
    <main>
      <PageBanner title="Contact" />
      <section className="grid bg-mvf-soft lg:grid-cols-2">
        <div className="px-8 py-20 lg:px-24">
          <h2 className="mb-14 text-4xl font-bold text-mvf-grey md:text-5xl">Get in Touch</h2>
          <ContactFormVisual />
        </div>
        <AssetImage asset={images.contact} className="min-h-[640px]" sizes="(min-width: 1000px) 50vw, 100vw" />
      </section>
      <SupportCta />
    </main>
  );
}

function SupportPage({ donationError }: { donationError?: string }) {
  return (
    <main>
      <PageBanner title="Support Us" />
      <section className="bg-mvf-soft px-5 py-12 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-[1050px] gap-12 lg:grid-cols-[minmax(320px,.9fr)_minmax(0,1.1fr)]">
          <AssetImage asset={images.support} className="min-h-[360px]" sizes="(min-width: 1000px) 45vw, 90vw" />
          <div className="min-w-0">
            <h2 className="text-4xl font-bold text-mvf-grey">Get Involved</h2>
            <p className="mt-8 text-lg leading-8 text-mvf-ink">
              See the below for details to get involved by donating now. Help us support the talented and resilient young
              people in our community.
            </p>
            <div className="mt-12">
              <DonationForm error={donationError} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function NewsPage() {
  return (
    <main>
      <PageBanner title="Latest News" />
      <section className="bg-mvf-soft px-8 py-20">
        <div className="mx-auto max-w-[1080px]">
          <p className="text-lg font-bold text-mvf-grey">All Posts</p>
          <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {posts.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <SupportCta />
    </main>
  );
}

function PastWinnersPage() {
  return (
    <main>
      <PageBanner title="Past Winners" />
      <section className="bg-mvf-soft px-8 py-20">
        <div className="mx-auto grid max-w-[980px] gap-12 md:grid-cols-[240px_1fr]">
          <h2 className="text-2xl font-bold text-mvf-ink">Past Winners</h2>
          <div className="grid gap-10">
            {pastWinners.map((group) => (
              <section key={group.year}>
                <h3 className="text-lg font-bold text-mvf-purple">{group.year}</h3>
                <div className="mt-4 grid gap-5">
                  {group.entries.map((entry, index) => (
                    <article key={`${group.year}-${entry.name}-${index}`}>
                      <p className="text-sm font-bold text-mvf-purple-dark">{entry.name}</p>
                      {entry.detail ? <p className="mt-1 text-sm font-medium text-mvf-purple">{entry.detail}</p> : null}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function PostPage({ post }: { post: (typeof posts)[number] }) {
  const recentPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-mvf-soft pt-[68px]">
      <article className="mx-auto max-w-[900px] px-8 py-20">
        <Link href="/news" className="text-sm font-bold text-mvf-grey hover:text-mvf-purple">
          All Posts
        </Link>
        <h1 className="mt-8 text-4xl font-bold leading-tight text-mvf-ink md:text-6xl">{post.title}</h1>
        <p className="mt-6 text-sm font-medium text-mvf-grey">
          {post.author} · {post.date} · {post.readTime}
        </p>
        <AssetImage asset={post.image} className="mt-10 aspect-[1.8]" sizes="900px" />
        <div className="mt-12 grid gap-6 text-lg font-medium leading-9 text-mvf-ink">
          {post.body.map((paragraph) =>
            paragraph.startsWith("https://") ? (
              <a key={paragraph} href={paragraph} className="break-words text-mvf-purple underline">
                {paragraph}
              </a>
            ) : (
              <p key={paragraph}>{paragraph}</p>
            ),
          )}
        </div>
      </article>
      <section className="mx-auto max-w-[980px] border-t border-mvf-border px-8 py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-mvf-ink">Recent Posts</h2>
          <Link href="/news" className="text-sm font-bold text-mvf-purple">
            See All
          </Link>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {recentPosts.map((item) => (
            <NewsCard key={item.slug} post={item} compact />
          ))}
        </div>
      </section>
    </main>
  );
}
