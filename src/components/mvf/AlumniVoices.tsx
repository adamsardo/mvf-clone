import type { AlumniQuote } from "@/types/mvf";
import { alumniQuotes } from "@/data/mvf-content";
import { cn } from "@/lib/utils";

interface AlumniVoicesProps {
  title?: string;
  intro?: string;
  quotes?: AlumniQuote[];
  variant?: "soft" | "blue";
  className?: string;
}

export function AlumniVoices({
  title = "Alumni voices",
  intro = "Past awardees show how practical support at the right moment can shape careers, confidence, and community contribution for years to come.",
  quotes = alumniQuotes,
  variant = "soft",
  className,
}: AlumniVoicesProps) {
  const isBlue = variant === "blue";

  return (
    <section className={cn("px-6 py-20", isBlue ? "bg-mvf-blue text-white" : "bg-mvf-soft text-mvf-ink", className)}>
      <div className="mx-auto max-w-[1080px]">
        <div className="max-w-[720px]">
          <p className={cn("text-sm font-bold uppercase", isBlue ? "text-white/80" : "text-mvf-purple")}>Alumni stories</p>
          <h2 className={cn("mt-4 text-4xl font-bold md:text-5xl", isBlue ? "text-white" : "text-mvf-grey")}>{title}</h2>
          <p className={cn("mt-6 text-lg font-medium leading-8", isBlue ? "text-white" : "text-mvf-ink")}>{intro}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {quotes.map((item) => (
            <article
              key={`${item.name}-${item.award}`}
              className={cn(
                "border p-7",
                isBlue ? "border-white/35 bg-white text-mvf-ink" : "border-mvf-border bg-white text-mvf-ink",
              )}
            >
              <blockquote className="text-2xl font-bold leading-9 text-mvf-purple-dark">&ldquo;{item.quote}&rdquo;</blockquote>
              <p className="mt-6 text-base font-medium leading-7 text-mvf-grey">{item.impact}</p>
              <p className="mt-6 text-sm font-bold text-mvf-purple">{item.name}</p>
              <p className="mt-1 text-sm font-medium text-mvf-grey">
                {item.award}, {item.descriptor}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
