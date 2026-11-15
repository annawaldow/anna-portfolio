import Image from "next/image";
import { contact, gallery } from "@/content/portfolio-content";
import { Reveal } from "./Reveal";

/** Bildergalerie mit Lifestyle- und Travel-Fotos (Inhalte: portfolio-content.ts). */
export function Gallery() {
  if (gallery.images.length === 0) return null;

  return (
    <section
      id="momente"
      aria-labelledby="gallery-title"
      className="bg-sand py-20 md:py-32"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-line" />
              {gallery.label}
            </p>
            <h2
              id="gallery-title"
              className="display mt-5 text-[2.6rem] sm:text-6xl lg:text-7xl"
            >
              {gallery.headline}
            </h2>
          </div>
          <p className="max-w-sm text-[1.05rem] text-ink-soft">{gallery.intro}</p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-x-3 gap-y-8 md:mt-16 md:grid-cols-4 md:gap-x-6 md:gap-y-12">
          {gallery.images.map((image, index) => (
            <li
              key={image.src}
              className={index % 2 === 1 ? "md:translate-y-10" : undefined}
            >
              <Reveal delay={(index % 4) * 0.08}>
                <figure className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-beige">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 768px) 23vw, 46vw"
                      className="object-cover transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.045]"
                    />
                  </div>
                  <figcaption className="eyebrow mt-3 text-[0.6rem]">
                    {image.caption}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-14 md:mt-24">
          <a
            href={contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            {gallery.linkLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
