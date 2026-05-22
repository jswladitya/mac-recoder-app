"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart3, Database, Fingerprint, IdCard } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";

export default function AccordionFeatures() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image: "/charts.png",
      alt: "Database visualization",
    },
    "item-2": {
      image: "/music.png",
      alt: "Security authentication",
    },
    "item-3": {
      image: "/mail2.png",
      alt: "Identity management",
    },
    "item-4": {
      image: "/payments.png",
      alt: "Analytics dashboard",
    },
  };

  return (
    <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]" />
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">


        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0 items-center">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => value && setActiveItem(value as ImageKey)}
            className="w-full flex flex-col gap-4"
          >
            <AccordionItem value="item-1" className="border border-border/50 rounded-xl px-4 bg-muted/20 backdrop-blur-xs transition-all hover:bg-muted/40">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-base font-semibold">
                  <Database className="size-4.5 text-yellow-500" />
                  Database Visualization
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border/50 rounded-xl px-4 bg-muted/20 backdrop-blur-xs transition-all hover:bg-muted/40">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-base font-semibold">
                  <Fingerprint className="size-4.5 text-blue-500" />
                  Advanced Authentication
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border/50 rounded-xl px-4 bg-muted/20 backdrop-blur-xs transition-all hover:bg-muted/40">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-base font-semibold">
                  <IdCard className="size-4.5 text-purple-500" />
                  Identity Management
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border/50 rounded-xl px-4 bg-muted/20 backdrop-blur-xs transition-all hover:bg-muted/40">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-base font-semibold">
                  <BarChart3 className="size-4.5 text-emerald-500" />
                  Analytics Dashboard
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-muted/30 relative flex overflow-hidden rounded-3xl border p-2 aspect-76/59 items-center justify-center backdrop-blur-xs shadow-2xl">
            <div className="w-15 absolute inset-y-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-950 shadow-md relative"
                >
                  <Image
                    src={images[activeItem].image}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-500 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
