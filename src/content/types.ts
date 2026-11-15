/**
 * Typen für die Inhalte des Portfolios.
 * Diese Datei musst du normalerweise nicht anfassen –
 * bearbeitet wird nur `portfolio-content.ts`.
 */

export type CategoryId =
  | "lifestyle-travel"
  | "beauty-fashion"
  | "product"
  | "talking-voiceover"
  | "ai-tech";

export interface Category {
  id: CategoryId;
  label: string;
}

interface VideoBase {
  /** Eindeutige Kennung (klein geschrieben, ohne Leerzeichen). */
  id: string;
  title: string;
  category: CategoryId;
  /** Optionaler kurzer Beschreibungstext. */
  description?: string;
  /** Pfad zum Coverbild in /public, z. B. "/covers/mein-video.jpg". */
  cover?: string;
  /**
   * `false` = Platzhalter/Entwurf, wird auf der Website NICHT angezeigt.
   * Weglassen oder `true` = sichtbar.
   */
  published?: boolean;
}

/** Möglichkeit A: eigene MP4-Datei aus /public/videos */
export interface FileVideo extends VideoBase {
  type: "file";
  /** Pfad zur MP4 in /public, z. B. "/videos/mein-video.mp4". */
  src: string;
}

/** Möglichkeit B: Link zu einem eigenen TikTok-Video oder Instagram-Reel */
export interface SocialVideo extends VideoBase {
  type: "tiktok" | "instagram";
  /** Vollständiger Link zum Beitrag. */
  url: string;
}

export type PortfolioVideo = FileVideo | SocialVideo;

export interface ImageAsset {
  src: string;
  alt: string;
}
