import Image from "next/image";
import type { PortfolioVideo } from "@/content/types";
import { platformName } from "@/lib/embeds";

interface VideoCardProps {
  video: PortfolioVideo;
  categoryLabel: string;
  onOpen: () => void;
}

export function VideoCard({ video, categoryLabel, onOpen }: VideoCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Video abspielen: ${video.title} (${categoryLabel})`}
      className="group block w-full cursor-pointer text-left"
    >
      <span className="relative block aspect-[9/16] overflow-hidden bg-beige">
        {video.cover ? (
          <Image
            src={video.cover}
            alt=""
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"
            className="object-cover transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.045]"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-beige to-blush p-6 text-center font-display text-2xl text-ink-soft">
            {video.title}
          </span>
        )}

        <span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        />

        {video.type !== "file" ? (
          <span className="absolute left-3 top-3 bg-cream/90 px-2 py-1 text-[0.6rem] tracking-[0.2em] uppercase text-ink">
            {platformName[video.type]}
          </span>
        ) : null}

        <span
          aria-hidden
          className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border border-cream/80 text-cream backdrop-blur-sm transition-[background-color,color,transform] duration-500 ease-soft group-hover:scale-110 group-hover:bg-cream group-hover:text-ink sm:bottom-4 sm:left-4 sm:h-12 sm:w-12"
        >
          <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
            <path d="M1 1.2v11.6a.6.6 0 0 0 .9.5l9.6-5.8a.6.6 0 0 0 0-1L1.9.7a.6.6 0 0 0-.9.5Z" />
          </svg>
        </span>
      </span>

      <span className="mt-3 block">
        <span className="eyebrow block text-[0.6rem]">{categoryLabel}</span>
        <span className="mt-1 block font-display text-xl leading-snug sm:text-2xl">
          {video.title}
        </span>
      </span>
    </button>
  );
}
