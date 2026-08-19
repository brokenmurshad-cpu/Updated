import type { MetadataRoute } from "next";
import { seo } from "@/data/content";
import { projects } from "@/data/project-showcase";
import {
  portfolioSeoPage,
  seoServicePages,
} from "@/data/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: seo.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${seo.url}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${seo.url}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${seo.url}/${portfolioSeoPage.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${seo.url}/reviews`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const servicePages: MetadataRoute.Sitemap =
    seoServicePages.map((page) => ({
      url: `${seo.url}/services/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    }));

  const projectPages: MetadataRoute.Sitemap =
    projects.map((project) => ({
      url: `${seo.url}/projects/${project.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    ...staticPages,
    ...servicePages,
    ...projectPages,
  ];
}
