import Image from "next/image";

const testimonials = [
  {
    body: "Magic UI has completely transformed how our team builds applications. The components are gorgeous out of the box and seamlessly customizable.",
    author: "Alice Smith",
    handle: "@alicesmith_dev",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    body: "I was able to launch my landing page in literally a fraction of the time it usually takes. The quality of the React components is top-tier.",
    author: "Bob Johnson",
    handle: "@bobjohnson_io",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
  },
  {
    body: "The animations alone make this kit worth it. My clients are absolutely blown away by the liquid smooth transitions.",
    author: "Charlie Davis",
    handle: "@charlie_designs",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
  },
  {
    body: "This is exactly what the React ecosystem needed. A beautiful, opinionated set of defaults that just work flawlessly.",
    author: "Diana Prince",
    handle: "@diana_codes",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
  },
  {
    body: "I've tried almost every UI kit out there, but Magic UI strikes the perfect balance between aesthetics and developer experience.",
    author: "Evan Wright",
    handle: "@evanwright_tech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
  {
    body: "An absolute game-changer for solo founders. You get an enterprise-grade landing page look without needing a full design team.",
    author: "Fiona Gallagher",
    handle: "@fiona_builds",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="text-center mb-16 px-6">
        <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">
          Loved by Developers
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance text-foreground">
          Don&apos;t just take our word for it
        </h3>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 justify-around [gap:var(--gap)] min-w-full animate-marquee">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="relative w-80 max-w-full flex-none cursor-pointer overflow-hidden rounded-xl border bg-card p-6 shadow-sm hover:bg-muted/50 transition-colors"
                >
                  <div className="flex flex-row items-center gap-3 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full object-cover shadow-sm"
                      unoptimized
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">
                        {testimonial.author}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {testimonial.handle}
                      </span>
                    </div>
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground/80">
                    &quot;{testimonial.body}&quot;
                  </blockquote>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Gradients on the edges for smooth fading */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background z-10"></div>
      </div>
    </section>
  );
}
