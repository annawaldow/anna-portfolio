import Image from "next/image";
import { about } from "@/content/portfolio-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const [portrait, ...more] = about.images;

  return (
    <section id="about" aria-labelledby="about-title" className="py-20 md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-beige">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[70%_center]"
            />
          </div>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7 md:pt-6">
          <SectionHeading
            number="02"
            label={about.label}
            title={about.headline}
            id="about-title"
          />

          <Reveal className="mt-8 space-y-5 text-[1.05rem] text-ink-soft" delay={0.1}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-10 border-t border-line">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-1 border-b border-line py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
                >
                  <dt className="eyebrow pt-1">{fact.label}</dt>
                  <dd className="font-display text-xl">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {more.length > 0 ? (
        <div className="container-page mt-12 grid grid-cols-2 gap-3 md:mt-20 md:gap-6">
          {more.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.1}>
              <div className="relative aspect-[4/3] overflow-hidden bg-beige md:aspect-[2/1]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-soft hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      ) : null}
    </section>
  );
}
