import Image from "next/image";
import type { ImageAsset } from "@/types/mvf";

interface AssetImageProps {
  asset: ImageAsset;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function AssetImage({
  asset,
  className = "",
  imageClassName = "object-cover",
  priority = false,
  sizes = "100vw",
}: AssetImageProps) {
  const positioned = /\b(absolute|fixed|sticky)\b/.test(className);

  return (
    <div className={`${positioned ? "" : "relative"} overflow-hidden ${className}`}>
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageClassName}
      />
    </div>
  );
}
