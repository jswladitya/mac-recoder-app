import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute top-0 left-0 z-0 w-full h-[200px] [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
        <FlickeringGrid
          className="absolute top-0 left-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.05}
        />
      </div>
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Marketing Page
          </p>
          <h1 className="text-4xl md:text-6xl tracking-tight font-medium text-balance">
            Build beautiful interfaces faster with Magic UI.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl text-balance">
            High-quality, production-ready UI components for modern product
            teams. Explore implementation guides, deep dives, and updates in
            our blog.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Button asChild>
              <Link href="/blog">Read the Blog</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/blog?tag=Next.js">Next.js Articles</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
