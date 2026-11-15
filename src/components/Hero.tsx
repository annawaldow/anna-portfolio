import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/portfolio-content";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-sand pt-24 md:pt-32"
    >
      {/* Mobil: Titel → Foto → Text. Ab Tablet: Text links, Foto rechts. */}
      <div className="container-page grid gap-x-8 gap-y-8 pb-14 md:grid-cols-12 md:grid-rows-[1fr_auto] md:pb-20 lg:min-h-[min(100dvh,54rem)]">
        <div className="self-end md:col-span-7 md:row-start-1">
          <p className="eyebrow animate-rise">{hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="display animate-rise mt-5 text-[3.25rem] [animation-delay:120ms] sm:text-7xl md:text-6xl lg:text-[6.25rem]"
          >
            {hero.headline.map((line, index) => (
              <span key={line} className="block">
                {index === 1 ? <em className="font-normal">{line}</em> : line}
              </span>
            ))}
          </h1>
        </div>

        <div className="relative md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1 md:self-end">
          <div className="animate-unveil relative aspect-[4/5] overflow-hidden bg-beige [animation-delay:150ms]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="animate-rise mt-3 -rotate-2 text-right font-script text-[1.65rem] leading-tight text-rose-deep [animation-delay:900ms] lg:text-3xl">
            {hero.note}
          </p>
        </div>

        <div className="md:col-span-6 md:row-start-2 md:pb-12">
          <p className="animate-rise max-w-md text-[1.05rem] text-ink-soft [animation-delay:240ms]">
            {hero.intro}
          </p>

          <div className="animate-rise mt-8 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <Link href={hero.primaryCta.href} className="btn btn-solid">
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className="btn btn-outline">
              {hero.secondaryCta.label}
            </Link>
          </div>

          <p className="eyebrow animate-rise mt-9 [animation-delay:480ms]">
            {hero.tags}
          </p>
        </div>
      </div>
    </section>
  );
}
