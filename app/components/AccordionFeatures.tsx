"use client";

import { ChevronDown, Crop, Image as ImageIcon, MousePointer2, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Frame, FramePanel } from "@/components/reui/frame";

export default function AccordionFeatures() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((current) => {
        const currentItemNum = parseInt(current.split("-")[1]);
        const nextItemNum = currentItemNum === 4 ? 1 : currentItemNum + 1;
        return `item-${nextItemNum}` as ImageKey;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const images = {
    "item-1": {
      image: "https://kh12dfduhh.ufs.sh/f/mdESasgdsJvW4nAraATzsqxDcP1oREOXradZVh7eUIjtN3iF",
      alt: "Screen recording toolbar",
    },
    "item-2": {
      image: "https://kh12dfduhh.ufs.sh/f/mdESasgdsJvW9ebxF5GL5pYzhbUB3PXAMR08rlTH4aNKxCSI",
      alt: "sleek zoom effects",
    },
    "item-3": {
      image: "https://kh12dfduhh.ufs.sh/f/mdESasgdsJvWH1JbEW73JY1ThM0N8BrgPCdyj4UWVmFZpaOR",
      alt: "wallpapers",
    },
    "item-4": {
      image: "https://kh12dfduhh.ufs.sh/f/mdESasgdsJvWVX2eIouXA3wbnzavTGdqsIpyWNrkhU6QEJlV",
      alt: "aspect ratio",
    },
  };

  const features = [
    {
      id: "item-1",
      title: "Floating toolbar and controls",
      icon: MousePointer2,
      iconColor: "text-yellow-500",
      content: "Capture your entire screen, a single window. Add camera, mic, or system audio. Start in seconds.",
    },
    {
      id: "item-2",
      title: "Smooth zoom and pan",
      icon: ZoomIn,
      iconColor: "text-blue-500",
      content: "Pan and zoom in and out of your recording.",
    },
    {
      id: "item-3",
      title: "Wallpapers",
      icon: ImageIcon,
      iconColor: "text-purple-500",
      content: "Choose from a collection of stunning wallpapers to enhance your screen recordings.",
    },
    {
      id: "item-4",
      title: "Aspect ratio",
      icon: Crop,
      iconColor: "text-emerald-500",
      content: "Export your recording in multiple aspect ratios",
    },
  ];

  return (
    <section className="relative py-12 md:py-20 lg:py-12 overflow-hidden">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]" />
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-balance text-4xl font-bold tracking-tight bg-gradient-to-b from-white via-white via-20% to-zinc-400/90 bg-clip-text text-transparent pb-1 lg:text-5xl leading-tight">
            More and more...
          </h2>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-1 lg:grid-cols-12 lg:gap-11 lg:px-0 items-stretch">
          <div className="w-full flex flex-col lg:col-span-5">
            <Frame stacked spacing="sm" className="h-full">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <FramePanel
                    key={feature.id}
                    className="flex flex-col justify-center transition-all duration-500 ease-in-out p-0"
                    style={{ flexGrow: activeItem === feature.id ? 2.2 : 1 }}
                  >
                    <div className="w-full flex flex-col justify-center">
                      <button
                        className="flex items-center justify-between w-full text-left px-5 py-4 focus:outline-none cursor-pointer"
                        onClick={() => setActiveItem(feature.id as ImageKey)}
                        aria-expanded={activeItem === feature.id}
                      >
                        <div className="flex items-center gap-3 text-base font-semibold">
                          <Icon className={`size-5 ${feature.iconColor}`} />
                          <span className="text-foreground/90 font-semibold tracking-tight">
                            {feature.title}
                          </span>
                        </div>
                        <ChevronDown
                          className={`size-4 text-muted-foreground/70 transition-transform duration-300 ${activeItem === feature.id ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${activeItem === feature.id
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden text-muted-foreground pb-4 pl-13 pr-5 leading-relaxed text-sm">
                          {feature.content}
                        </div>
                      </div>
                    </div>
                  </FramePanel>
                );
              })}
            </Frame>
          </div>

          <div className="lg:col-span-7 inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative flex overflow-hidden rounded-2xl border p-1.5 sm:p-4 shadow-lg shadow-zinc-950/15 ring-1 aspect-[4/3] items-center justify-center">
            <div className="bg-background relative w-full h-full rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl relative"
                >
                  <Image
                    src={images[activeItem].image}
                    className="w-full h-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
