import type { MetadataRoute } from "next";
import { docs, meta } from "@/.source/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { siteConfig } from "@/lib/site";

const blogSource = loader({
  baseUrl: "/blog",
  source: toFumadocsSource(docs, meta),
});

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = blogSource.getPages().map((post) => ({
    url: `${siteConfig.url}${post.url}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      changeFrequency: "daily",
      priority: 1,
    },
    ...posts,
  ];
}
