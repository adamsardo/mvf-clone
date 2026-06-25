import Link from "next/link";
import { AssetImage } from "@/components/mvf/AssetImage";
import type { NewsPost } from "@/types/mvf";

interface NewsCardProps {
  post: NewsPost;
  compact?: boolean;
}

export function NewsCard({ post, compact = false }: NewsCardProps) {
  return (
    <article className="border border-mvf-border bg-white">
      <Link href={`/post/${post.slug}`} className="block">
        <AssetImage
          asset={post.image}
          className={compact ? "aspect-[1.05]" : "aspect-[1.34]"}
          sizes="(min-width: 900px) 30vw, 90vw"
        />
      </Link>
      <div className="p-6">
        <Link href={`/post/${post.slug}`} className="block">
          <h3 className="text-base font-bold leading-6 text-mvf-ink hover:text-mvf-purple">{post.title}</h3>
        </Link>
        {!compact ? <p className="mt-4 text-sm leading-6 text-mvf-grey">{post.excerpt}</p> : null}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-mvf-muted">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
