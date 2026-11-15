import { categories, videos } from "@/content/portfolio-content";
import type { Category, PortfolioVideo } from "@/content/types";

/**
 * Zentrale Stelle, über die die Website ihre Videos bezieht.
 *
 * Aktuell kommen alle Einträge aus `portfolio-content.ts`.
 * Für eine spätere, autorisierte API-Anbindung (z. B. TikTok Display API
 * oder Instagram Graph API) genügt es, hier eine weitere Quelle zu
 * ergänzen und deren Ergebnisse in das Format `PortfolioVideo` zu
 * übersetzen – die Galerie selbst muss dafür nicht geändert werden.
 * Es findet bewusst KEINE automatische Synchronisierung statt.
 */
export async function getPortfolioVideos(): Promise<PortfolioVideo[]> {
  const fromContentFile = videos;
  // const fromApi = await fetchAuthorizedSocialVideos();  ← spätere Erweiterung
  return fromContentFile.filter((video) => video.published !== false);
}

/** Nur Kategorien, zu denen es mindestens ein sichtbares Video gibt. */
export function getActiveCategories(visible: PortfolioVideo[]): Category[] {
  return categories.filter((category) =>
    visible.some((video) => video.category === category.id),
  );
}
