import { ButtonLink } from "@/components/mvf/ButtonLink";

export function SupportCta() {
  return (
    <section className="bg-mvf-blue px-6 py-16 text-center text-white">
      <h2 className="text-3xl font-bold md:text-5xl">We Need Your Support Today!</h2>
      <ButtonLink href="/support-us#donate" variant="white" className="mt-10 min-w-[210px]">
        Donate
      </ButtonLink>
    </section>
  );
}
