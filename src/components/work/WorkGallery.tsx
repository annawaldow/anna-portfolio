"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import type { Category, CategoryId, PortfolioVideo } from "@/content/types";
import { VideoCard } from "./VideoCard";
import { VideoLightbox } from "./VideoLightbox";

interface WorkGalleryProps {
  videos: PortfolioVideo[];
  categories: Category[];
  allLabel: string;
}

export function WorkGallery({ videos, categories, allLabel }: WorkGalleryProps) {
  const [filter, setFilter] = useState<CategoryId | "all">("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      filter === "all"
        ? videos
        : videos.filter((video) => video.category === filter),
    [filter, videos],
  );

  const labelOf = (id: CategoryId) =>
    categories.find((category) => category.id === id)?.label ?? "";

  const activeIndex = visible.findIndex((video) => video.id === activeId);
  const active = activeIndex >= 0 ? visible[activeIndex] : null;

  const step = (offset: number) => {
    if (activeIndex < 0) return;
    const next = (activeIndex + offset + visible.length) % visible.length;
    setActiveId(visible[next].id);
  };

  const filters: { id: CategoryId | "all"; label: string }[] = [
    { id: "all", label: allLabel },
    ...categories,
  ];

  return (
    <>
      <div
        role="group"
        aria-label="Videos nach Kategorie filtern"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0"
      >
        {filters.map((item) => {
          const selected = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item.id)}
              className={`min-h-11 shrink-0 cursor-pointer border px-5 text-[0.7rem] tracking-[0.18em] uppercase transition-colors duration-300 ${
                selected
                  ? "border-ink bg-ink text-cream"
                  : "border-line text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} Videos werden angezeigt.
      </p>

      <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 md:mt-12 md:gap-x-6 md:gap-y-12 lg:grid-cols-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((video) => (
            <motion.li
              key={video.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <VideoCard
                video={video}
                categoryLabel={labelOf(video.category)}
                onOpen={() => setActiveId(video.id)}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <VideoLightbox
        video={active}
        categoryLabel={active ? labelOf(active.category) : ""}
        position={active ? `${activeIndex + 1} / ${visible.length}` : ""}
        onClose={() => setActiveId(null)}
        onPrevious={() => step(-1)}
        onNext={() => step(1)}
      />
    </>
  );
}
