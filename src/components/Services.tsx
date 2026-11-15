import { services } from "@/content/portfolio-content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-sand py-20 md:py-32"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <SectionHeading
            number="04"
            label={services.label}
            title={services.headline}
            id="services-title"
          />
        </div>

        <ul className="mt-12 grid border-t border-line sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {services.items.map((item, index) => (
            <li
              key={item.title}
              className="group border-b border-line sm:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <Reveal delay={(index % 3) * 0.08}>
                <div className="px-1 py-8 transition-colors duration-500 group-hover:bg-cream sm:px-7 sm:py-10">
                  <span aria-hidden className="text-xs tracking-[0.2em] text-rose-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-[1.75rem] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-ink-soft">{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
