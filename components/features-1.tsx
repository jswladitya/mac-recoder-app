"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-balance text-4xl font-bold tracking-tight bg-gradient-to-b from-white via-white via-20% to-zinc-400/90 bg-clip-text text-transparent pb-1 lg:text-5xl">Timeline Editing & Customizations</h2>
          {/* <p className="mt-4 text-muted-foreground text-lg">Create polished and professional video demos effortlessly with simple & intuitive timeline.</p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 sm:mt-16 items-center lg:w-[87.5%] mx-auto">
          {/* Video Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden px-2"
          >
            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative w-full overflow-hidden rounded-3xl border p-1.5 sm:p-4 shadow-xl shadow-zinc-950/15 ring-1 border-border/80 group hover:border-foreground/20 transition-colors duration-500">
              <div className="bg-background aspect-square relative rounded-2xl overflow-hidden bg-muted">
                <video
                  src="https://kh12dfduhh.ufs.sh/f/mdESasgdsJvWdUOmRpFY8fsJOCgbBFaxWDv02QPZjcIAmn4E"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
            {/* Subtle bottom fade to blend with page separator */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-background to-transparent pointer-events-none" />
          </motion.div>

          {/* Image Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative overflow-hidden px-2"
          >
            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative w-full overflow-hidden rounded-3xl border p-1.5 sm:p-4 shadow-xl shadow-zinc-950/15 ring-1 border-border/80 group hover:border-foreground/20 transition-colors duration-500">
              <div className="bg-background aspect-square relative rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="https://kh12dfduhh.ufs.sh/f/mdESasgdsJvWUPqRYlil5bc2Ke6NAXLQiRrmJWqfdwuFSnYp"
                  alt="Feature showcase illustration"
                  fill
                  className="object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            </div>
            {/* Subtle bottom fade to blend with page separator */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-background to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
