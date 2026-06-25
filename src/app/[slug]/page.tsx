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
    description:
      slug === "support-us"
        ? "Donate securely to support young people through the Moonee Valley Foundation."
        : "Moonee Valley Foundation supports young adults across Melbourne's north-west.",
  };
}

function getSearchParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  if (!isPageSlug(slug)) notFound();

  const resolvedSearchParams = await searchParams;

  return <MainPage slug={slug} donationError={getSearchParam(resolvedSearchParams.donationError)} />;
}
