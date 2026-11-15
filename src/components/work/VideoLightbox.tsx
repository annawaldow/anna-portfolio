"use client";

import { useEffect, useRef } from "react";
import type { PortfolioVideo } from "@/content/types";
import { SocialEmbed } from "./SocialEmbed";

interface VideoLightboxProps {
  video: PortfolioVideo | null;
  categoryLabel: string;
  position: string;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

/**
 * Lightbox auf Basis des nativen <dialog>-Elements: Fokus bleibt im Dialog,
 * Esc schließt, Pfeiltasten wechseln das Video. Ton und Vollbild laufen
 * über die Bedienelemente des Players.
 */
export function VideoLightbox({
  video,
  categoryLabel,
  position,
  onClose,
  onPrevious,
  onNext,
}: VideoLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (video && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    }
    if (!video && dialog.open) dialog.close();
    if (!video) document.documentElement.style.overflow = "";
  }, [video]);

  useEffect(() => () => {
    document.documentElement.style.overflow = "";
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="lightbox-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") onPrevious();
        if (event.key === "ArrowRight") onNext();
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-cream"
    >
      {video ? (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-4 md:flex-row md:gap-10 md:px-10"
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <div className="relative aspect-[9/16] h-auto max-h-[calc(100dvh-11.5rem)] w-auto max-w-full overflow-hidden bg-ink shadow-2xl md:max-h-[calc(100dvh-5rem)]">
            {video.type === "file" ? (
              <video
                key={video.id}
                src={video.src}
                poster={video.cover}
                controls
                autoPlay
                playsInline
                loop
                preload="metadata"
                className="h-full w-full bg-ink object-contain"
              >
                Dein Browser kann dieses Video nicht abspielen.
              </video>
            ) : (
              <SocialEmbed key={video.id} video={video} />
            )}
          </div>

          <div className="w-full max-w-sm md:w-72">
            <p className="eyebrow text-cream/70">
              {categoryLabel} · {position}
            </p>
            <h3 id="lightbox-title" className="display mt-2 text-3xl md:mt-3 md:text-4xl">
              {video.title}
            </h3>
            {video.description ? (
              <p className="mt-2 hidden text-sm text-cream/85 md:mt-4 md:block">
                {video.description}
              </p>
            ) : null}

            <div className="mt-3 flex items-center gap-2 md:mt-8">
              <button
                type="button"
                onClick={onPrevious}
                aria-label="Vorheriges Video"
                className="flex h-11 w-11 cursor-pointer items-center justify-center border border-cream/40 transition-colors hover:bg-cream hover:text-ink"
              >
                <Arrow direction="left" />
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Nächstes Video"
                className="flex h-11 w-11 cursor-pointer items-center justify-center border border-cream/40 transition-colors hover:bg-cream hover:text-ink"
              >
                <Arrow direction="right" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="ml-auto h-11 cursor-pointer border border-cream/40 px-5 text-[0.7rem] tracking-[0.2em] uppercase transition-colors hover:bg-cream hover:text-ink"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path d="M0 6h16M11 1l5 5-5 5" />
    </svg>
  );
}
