import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  label?: string;
}

export function ImagePlaceholder({ className, label = "No image selected yet" }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "grid min-h-[360px] place-items-center border border-dashed border-mvf-line bg-white p-8 text-center text-mvf-grey",
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="grid max-w-[260px] justify-items-center gap-5">
        <span className="grid size-16 place-items-center rounded-[min(var(--radius-md),12px)] border border-mvf-border bg-mvf-soft">
          <ImageIcon className="size-8 text-mvf-muted" aria-hidden="true" strokeWidth={1.75} />
        </span>
        <div>
          <p className="text-sm font-bold uppercase text-mvf-grey">{label}</p>
          <div className="mt-4 grid gap-2">
            <span className="block h-3 w-44 bg-mvf-soft" />
            <span className="mx-auto block h-3 w-32 bg-mvf-soft" />
          </div>
        </div>
      </div>
    </div>
  );
}
