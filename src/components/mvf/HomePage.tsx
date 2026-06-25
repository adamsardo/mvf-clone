import Link from "next/link";
import Image from "next/image";
import { AlumniVoices } from "@/components/mvf/AlumniVoices";
import { AssetImage } from "@/components/mvf/AssetImage";
import { ButtonLink } from "@/components/mvf/ButtonLink";
import { NewsCard } from "@/components/mvf/NewsCard";
import { awardNightImages, images, posts } from "@/data/mvf-content";

export function HomePage() {
  return (
    <main>
      <section className="relative min-h-[700px] overflow-hidden pt-[68px] text-white">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 flex min-h-[632px] items-center justify-center px-6 text-center">
          <h1 className="max-w-[820px] text-5xl font-bold leading-tight md:text-7xl">
            Helping Young Adults
            <br />
            achieve their dreams
          </h1>
        </div>
      </section>

      <section className="grid text-center text-white md:grid-cols-2">
        <Link href="/about" className="bg-mvf-purple px-6 py-10 transition-opacity hover:opacity-95">
          <h2 className="text-3xl font-bold md:text-4xl">Our Mission</h2>
          <p className="mt-3 text-sm font-bold">Our Goal, Vision &amp; Commitment</p>
        </Link>
        <Link href="/support-us#donate" className="bg-mvf-blue px-6 py-10 transition-opacity hover:opacity-95">
          <h2 className="text-3xl font-bold md:text-4xl">Get Involved</h2>
          <p className="mt-3 text-sm font-bold">Volunteer, Participate, or Donate</p>
        </Link>
      </section>

      <section className="bg-mvf-soft px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-mvf-grey">Recent Awards Nights</h2>
        <div className="mx-auto mt-10 grid max-w-[790px] grid-cols-2 gap-2 md:grid-cols-4">
          {awardNightImages.map((image, index) => (
            <AssetImage
              key={`${image.src}-${index}`}
              asset={image}
              className={index === 3 ? "aspect-[.7] md:row-span-2 md:h-full" : "aspect-[1.25]"}
              sizes="(min-width: 900px) 210px, 45vw"
            />
          ))}
        </div>
      </section>

      <section className="bg-mvf-soft px-6 py-20">
        <h2 className="text-center text-4xl font-bold text-mvf-grey">Latest News</h2>
        <div className="mx-auto mt-16 grid max-w-[940px] gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <NewsCard key={post.slug} post={post} compact />
          ))}
        </div>
        <div className="mt-14 text-center">
          <ButtonLink href="/news">Read More</ButtonLink>
        </div>
      </section>

      <AlumniVoices variant="blue" />

      <section className="grid bg-mvf-blue text-white md:grid-cols-[.8fr_1.2fr]">
        <div className="flex min-h-[430px] items-center px-10 md:px-28">
          <div>
            <h2 className="text-5xl font-bold md:text-6xl">Join Us</h2>
            <p className="mt-5 text-2xl font-bold leading-9">
              Empower Our
              <br />
              Young Minds
            </p>
            <ButtonLink href="/support-us#donate" className="mt-8">
              Donate Now
            </ButtonLink>
          </div>
        </div>
        <div className="h-[430px] overflow-hidden">
          <Image
            src={images.joinHands.src}
            alt={images.joinHands.alt}
            width={images.joinHands.width}
            height={images.joinHands.height}
            priority
            sizes="(min-width: 900px) 60vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
