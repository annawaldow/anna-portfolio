"use client";

import Image from "next/image";
import { useState } from "react";
import type { SocialVideo } from "@/content/types";
import { getEmbedUrl, platformName } from "@/lib/embeds";

/**
 * Zeigt ein TikTok-Video oder Instagram-Reel über den offiziellen Player.
 * Der Player (und damit die Verbindung zur Plattform) wird erst geladen,
 * nachdem die Besucherin oder der Besucher aktiv zugestimmt hat.
 */
export function SocialEmbed({ video }: { video: SocialVideo }) {
  const [consented, setConsented] = useState(false);
  const embedUrl = getEmbedUrl(video);
  const platform = platformName[video.type];

  if (consented && embedUrl) {
    return (
      <iframe
        src={embedUrl}
        title={`${video.title} (${platform})`}
        className="h-full w-full border-0 bg-ink"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-end bg-ink p-6 text-center text-cream">
      {video.cover ? (
        <Image
          src={video.cover}
          alt=""
          fill
          sizes="(min-width: 768px) 420px, 100vw"
          className="object-cover opacity-45"
        />
      ) : null}
      <div className="relative">
        <p className="font-display text-2xl">{video.title}</p>
        <p className="mx-auto mt-3 max-w-xs text-sm text-cream/85">
          Dieses Video liegt bei {platform}. Beim Laden werden Daten an{" "}
          {platform} übertragen.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          {embedUrl ? (
            <button
              type="button"
              onClick={() => setConsented(true)}
              className="btn border-cream bg-cream text-ink hover:bg-blush"
            >
              Video laden
            </button>
          ) : null}
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-cream/60 text-cream hover:bg-cream hover:text-ink"
          >
            Auf {platform} ansehen
          </a>
        </div>
      </div>
    </div>
  );
}
