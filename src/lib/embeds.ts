import type { SocialVideo } from "@/content/types";

/**
 * Baut aus einem TikTok- oder Instagram-Link die Adresse des offiziellen
 * Einbettungs-Players. Es wird nichts heruntergeladen oder ausgelesen.
 * Gibt `null` zurück, wenn der Link nicht eingebettet werden kann
 * (z. B. Kurzlinks) – dann zeigt die Galerie nur einen Link zur Plattform.
 */
export function getEmbedUrl(video: SocialVideo): string | null {
  try {
    const url = new URL(video.url);

    if (video.type === "tiktok") {
      const id = url.pathname.match(/\/video\/(\d+)/)?.[1];
      return id ? `https://www.tiktok.com/player/v1/${id}?rel=0` : null;
    }

    if (video.type === "instagram") {
      const match = url.pathname.match(/\/(reels?|p|tv)\/([A-Za-z0-9_-]+)/);
      if (!match) return null;
      const kind = match[1].startsWith("reel") ? "reel" : match[1];
      return `https://www.instagram.com/${kind}/${match[2]}/embed/`;
    }
  } catch {
    return null;
  }
  return null;
}

export const platformName = {
  tiktok: "TikTok",
  instagram: "Instagram",
} as const;
