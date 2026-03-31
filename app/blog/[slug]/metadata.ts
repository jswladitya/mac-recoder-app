import { Metadata } from "next";
import { docs, meta } from "@/.source/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { siteConfig } from "@/lib/site";

const blogSource = loader({
  baseUrl: "/blog",
  source: toFumadocsSource(docs, meta),
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = blogSource.getPage([slug]);

  if (!page) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const canonical = `${siteConfig.url}/blog/${slug}`;

  return {
    title: page.data.title,
    description: page.data.description,
    keywords: [page.data.title, ...(page.data.tags || []), "blog", "nextjs", "react", "mdx", "long-tail-keywords"],
    robots: { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: page.data.title,
      description: page.data.description,
      url: canonical,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
    },
  };
}
