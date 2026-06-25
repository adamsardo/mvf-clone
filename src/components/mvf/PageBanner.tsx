interface PageBannerProps {
  title: string;
}

export function PageBanner({ title }: PageBannerProps) {
  return (
    <section className="flex min-h-[210px] items-end justify-center bg-mvf-blue px-6 pb-14 pt-28 text-center text-white">
      <h1 className="text-5xl font-bold md:text-7xl">{title}</h1>
    </section>
  );
}
