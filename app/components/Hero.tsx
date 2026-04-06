import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
      <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-border bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1">
        <p
          style={{ "--shimmer-width": "100px" } as React.CSSProperties}
          className="mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50 bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-gradient-to-r from-neutral-100 via-black/80 via-50% to-neutral-100 dark:from-neutral-900 dark:via-white/80 dark:to-neutral-900 inline-flex items-center justify-center animate-pulse"
        >
          <span>✨ Introducing Magic UI Template</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </p>
      </div>
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl mt-4">
        Magic UI is the new way
        <br className="hidden md:block" /> to build landing pages.
      </h1>
      <p className="mb-12 text-lg tracking-tight text-gray-500 dark:text-gray-400 md:text-xl text-balance">
        Beautifully designed, animated components and templates built with
        <br className="hidden md:block" /> Tailwind CSS, React, and Framer Motion.
      </p>
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary shadow-sm hover:bg-primary/90 h-9 px-4 py-2 gap-1 rounded-lg text-primary-foreground ease-in-out">
        <span>Get Started for free</span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      <div className="relative mt-20 [perspective:2000px]">
        <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden aspect-[16/9]">
          <div className="w-full h-full bg-muted flex items-center justify-center relative">
            {/* Replaced placeholder with an Unsplash image */}
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Dashboard UI Mockup"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 bottom-0 pointer-events-none translate-y-10" />
      </div>
    </section>
  );
}
