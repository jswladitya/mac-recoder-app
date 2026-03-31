/* eslint-disable @next/next/no-img-element */
import { docs, meta } from "@/.source/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import Link from "next/link";

const blogSource = loader({
  baseUrl: "/blog",
  source: toFumadocsSource(docs, meta),
});

interface BlogData {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  thumbnail?: string;
}

interface BlogPage {
  url: string;
  data: BlogData;
}

interface ReadMoreSectionProps {
  currentSlug: string[];
  currentTags?: string[];
}

export function ReadMoreSection({ currentSlug, currentTags = [] }: ReadMoreSectionProps) {
  const allPages = blogSource.getPages() as BlogPage[];
  const currentUrl = `/blog/${currentSlug.join("/")}`;

  const otherPosts = allPages
    .filter((page) => page.url !== currentUrl)
    .filter((page) => page.data.tags?.some((tag) => currentTags.includes(tag)))
    .slice(0, 3);

  if (otherPosts.length === 0) return null;

  return (
    <section className="border-t border-border p-0">
      <div className="p-6 lg:p-10">
        <h2 className="text-2xl font-medium mb-8">Read more</h2>
        <div className="flex flex-col gap-8">
          {otherPosts.map((post) => (
            <Link key={post.url} href={post.url} className="group grid grid-cols-1 lg:grid-cols-12 items-center gap-4 cursor-pointer">
              {post.data.thumbnail && (
                <div className="flex-shrink-0 col-span-1 lg:col-span-4">
                  <img src={post.data.thumbnail} alt={post.data.title} className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity" />
                </div>
              )}
              <div className="space-y-2 flex-1 col-span-1 lg:col-span-8">
                <h3 className="text-lg group-hover:underline underline-offset-4 font-semibold text-card-foreground line-clamp-2">{post.data.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{post.data.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
