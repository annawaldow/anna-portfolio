import Image from "next/image";
import { contact, contactSection } from "@/content/portfolio-content";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

export function Contact() {
  const socials = [
    { name: "Instagram", ...contact.instagram },
    { name: "TikTok", ...contact.tiktok },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-32">
      <div className="container-page grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-line" />
              <span>
                <span className="text-rose-deep">05</span>
                <span aria-hidden> · </span>
                {contactSection.label}
              </span>
            </p>
            <h2
              id="contact-title"
              className="display mt-5 text-[3.2rem] sm:text-7xl lg:text-[6.5rem]"
            >
              {contactSection.headline}
            </h2>
            <p className="mt-7 max-w-lg text-[1.05rem] text-ink-soft">
              {contactSection.text}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={`mailto:${contact.email}`} className="btn btn-solid">
                {contactSection.emailButton}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="break-all text-ink-soft underline decoration-line underline-offset-4 hover:decoration-ink sm:ml-3"
              >
                {contact.email}
              </a>
            </div>

            <ul className="mt-10 border-t border-line">
              {socials.map((social) => (
                <li key={social.name} className="border-b border-line">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-14 items-center justify-between gap-4 py-3"
                  >
                    <span className="eyebrow">{social.name}</span>
                    <span className="flex items-center gap-3 font-display text-2xl">
                      {social.handle}
                      <span
                        aria-hidden
                        className="text-base transition-transform duration-500 ease-soft group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        ↗
                      </span>
                      <span className="sr-only">(öffnet in neuem Tab)</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {contact.showForm ? (
            <Reveal delay={0.15} className="mt-14">
              <h3 className="font-display text-3xl">Oder direkt hier schreiben</h3>
              <div className="mt-6">
                <ContactForm email={contact.email} />
              </div>
            </Reveal>
          ) : null}
        </div>

        <Reveal className="md:col-span-4 md:col-start-9" delay={0.1}>
          <div className="relative md:sticky md:top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-beige">
              <Image
                src={contactSection.image.src}
                alt={contactSection.image.alt}
                fill
                sizes="(min-width: 768px) 32vw, 100vw"
                className="object-cover object-[62%_center]"
              />
            </div>
            <p className="mt-4 -rotate-3 text-right font-script text-3xl text-rose-deep">
              {contactSection.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
