import { ImageResponse } from "next/og";
import { docs, meta } from "@/.source/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";

export const runtime = "nodejs";
export const alt = "Blog Post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const blogSource = loader({
  baseUrl: "/blog",
  source: toFumadocsSource(docs, meta),
});

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = blogSource.getPage([slug]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", padding: "48px" }}>
        <div style={{ border: "4px solid #000", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42, fontWeight: 700, textAlign: "center" }}>
          {page?.data.title || "Blog Post"}
        </div>
      </div>
    ),
    size
  );
}
