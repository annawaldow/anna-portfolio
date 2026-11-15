import { work } from "@/content/portfolio-content";
import { getActiveCategories, getPortfolioVideos } from "@/lib/videos";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WorkGallery } from "./work/WorkGallery";

export async function Work() {
  const videos = await getPortfolioVideos();
  const categories = getActiveCategories(videos);

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="border-t border-line bg-cream py-20 md:py-32"
    >
      <div className="container-page">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            number="03"
            label={work.label}
            title={work.headline}
            id="work-title"
          />
          <Reveal delay={0.1}>
            <p className="max-w-xs text-ink-soft md:text-right">{work.intro}</p>
          </Reveal>
        </div>

        <WorkGallery
          videos={videos}
          categories={categories}
          allLabel={work.allLabel}
        />
      </div>
    </section>
  );
}
