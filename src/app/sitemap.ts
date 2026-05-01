import type { MetadataRoute } from "next";
import { tools } from "@/data/tools-registry";

const BASE_URL = "https://globalpathway.app";

const guides = [
  "schengen-90-180-rule",
  "how-to-read-uscis-receipt-notice",
  "express-entry-vs-pnp",
  "how-to-check-uscis-case-status",
  "strongest-passports-2026",
  "canada-pr-pathways",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/tools`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/guides`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];

  const toolRoutes: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE_URL}${tool.slug}`,
    lastModified: new Date(tool.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: new Date("2026-04-26"),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...toolRoutes, ...guideRoutes];
}
