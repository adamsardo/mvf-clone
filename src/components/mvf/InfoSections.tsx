import type { InfoSection } from "@/types/mvf";

interface InfoSectionsProps {
  sections: InfoSection[];
  narrow?: boolean;
}

export function InfoSections({ sections, narrow = false }: InfoSectionsProps) {
  return (
    <div className={narrow ? "mx-auto max-w-[760px]" : "mx-auto max-w-[980px]"}>
      <div className="grid gap-14">
        {sections.map((section) => (
          <section key={section.title}>
            {section.eyebrow ? <p className="mb-3 text-sm font-bold uppercase text-mvf-purple">{section.eyebrow}</p> : null}
            <h2 className="text-3xl font-bold text-mvf-grey md:text-5xl">{section.title}</h2>
            <div className="mt-7 grid gap-5 text-base font-medium leading-8 text-mvf-ink">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.bullets ? (
              <ul className="mt-7 grid gap-3 pl-5 text-base font-medium leading-7 text-mvf-ink">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="list-disc">
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
