import Link from "next/link";
import { ai } from "@/content/portfolio-content";
import { Reveal } from "./Reveal";

export function AiSection() {
  return (
    <section
      id="ai"
      aria-labelledby="ai-title"
      className="bg-ink py-20 text-cream md:py-32"
    >
      <div className="container-page grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow text-cream/70">
              <span className="text-rose">04</span>
              <span aria-hidden> · </span>
              {ai.label}
            </p>
            <h2
              id="ai-title"
              className="display mt-5 text-[2.6rem] sm:text-6xl lg:text-[4.2rem]"
            >
              {ai.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-md text-[1.05rem] text-cream/80">{ai.intro}</p>
            <Link
              href={ai.cta.href}
              className="btn mt-9 border-cream/70 text-cream hover:bg-cream hover:text-ink"
            >
              {ai.cta.label}
            </Link>
          </Reveal>
        </div>

        <ol className="md:col-span-6 md:col-start-7">
          {ai.areas.map((area, index) => (
            <li key={area.title}>
              <Reveal delay={index * 0.06}>
                <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-cream/20 py-6 last:border-b">
                  <span aria-hidden className="pt-2 text-xs tracking-[0.2em] text-rose">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-display text-3xl">{area.title}</h3>
                      {"status" in area && area.status ? (
                        <span className="border border-cream/30 px-2 py-0.5 text-[0.6rem] tracking-[0.2em] uppercase text-cream/80">
                          {area.status}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-cream/75">{area.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
