import type { MetadataRoute } from "next";
import { site } from "@/content/portfolio-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }];
}
