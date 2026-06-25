import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MainPage, pageSlugs, pageTitles, type PageSlug } from "@/components/mvf/Pages";

function isPageSlug(value: string): value is PageSlug {
  return (pageSlugs as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return pageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isPageSlug(slug)) return {};

  return {
    title: `${pageTitles[slug]} | MV Foundation`,
    description: "Moonee Valley Foundation website clone baseline.",
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isPageSlug(slug)) notFound();

  return <MainPage slug={slug} />;
}
