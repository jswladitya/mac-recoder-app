"use client";

import React, { useRef } from "react";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import {
  BellIcon,
  Share2Icon,
  MessageSquare,
  Code,
  Database,
  Mail,
  HardDrive,
  ShoppingBag,
  Cpu,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Marquee } from "@/components/ui/marquee";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { AnimatedList } from "@/components/ui/animated-list";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const files = [
  {
    name: "recording.mp4",
    body: "HD video recording with smooth 60fps screen captures and system audio integration.",
  },
  {
    name: "auto-zoom.json",
    body: "Calculated layout zoom patterns highlighting visual click areas with intelligent pixel framing.",
  },
  {
    name: "branding.svg",
    body: "Custom brand overlay logos and matching backdrop palettes rendered in crystal-clear vector paths.",
  },
  {
    name: "shortcut.key",
    body: "Keyboard mapping configuration for starting and stopping sleek captures at lightning speed.",
  },
  {
    name: "export_gif.gif",
    body: "Optimized micro-format animations ready for Slack, Notion, and standard web embeds.",
  },
];

interface NotificationItem {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const notifications: NotificationItem[] = [
  {
    name: "Recording ready",
    description: "Feature_Demo.mp4 is processed",
    time: "Just now",
    icon: "🎥",
    color: "#00C9A7",
  },
  {
    name: "Uploaded to cloud",
    description: "Shared with team at Acme",
    time: "2m ago",
    icon: "☁️",
    color: "#1E88E5",
  },
  {
    name: "New view detected",
    description: "14 views on Notion page",
    time: "10m ago",
    icon: "👀",
    color: "#FFB800",
  },
  {
    name: "Export completed",
    description: "Converted to optimized GIF",
    time: "15m ago",
    icon: "✨",
    color: "#FF3D71",
  },
];

function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col p-4 overflow-hidden", className)}>
      <AnimatedList delay={1800}>
        {notifications.map((item, idx) => (
          <div
            key={idx}
            className="flex w-full items-center gap-3 rounded-xl border border-border bg-card/60 p-3 backdrop-blur-md shadow-sm transition-all hover:bg-card"
          >
            <div
              className="flex size-8 shrink-0 items-center justify-center rounded-lg text-sm shadow-inner"
              style={{ backgroundColor: item.color + "20", color: item.color }}
            >
              {item.icon}
            </div>
            <div className="flex flex-col overflow-hidden">
              <div className="flex flex-row items-center gap-1.5">
                <span className="text-xs font-semibold text-foreground truncate">
                  {item.name}
                </span>
                <span className="text-[10px] text-muted-foreground">•</span>
                <span className="text-[9px] text-muted-foreground whitespace-nowrap">
                  {item.time}
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground truncate">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </AnimatedList>
    </div>
  );
}

function AnimatedBeamMultipleOutputDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const divCenterRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[280px] w-full items-center justify-between p-6 overflow-hidden",
        className
      )}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-6">
        {/* Left Column - Sources */}
        <div className="flex flex-col justify-center gap-4 z-10">
          <div
            ref={div1Ref}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:scale-105 transition-transform"
          >
            <MessageSquare className="h-4.5 w-4.5 text-sky-500" />
          </div>
          <div
            ref={div2Ref}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:scale-105 transition-transform"
          >
            <Code className="h-4.5 w-4.5 text-foreground" />
          </div>
          <div
            ref={div3Ref}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:scale-105 transition-transform"
          >
            <Database className="h-4.5 w-4.5 text-emerald-500" />
          </div>
        </div>

        {/* Center Column - App Logo */}
        <div className="flex flex-col justify-center z-10">
          <div
            ref={divCenterRef}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card shadow-md shadow-primary/10 hover:scale-105 transition-transform"
          >
            <Cpu className="h-6 w-6 text-primary animate-pulse" />
          </div>
        </div>

        {/* Right Column - Targets */}
        <div className="flex flex-col justify-center gap-4 z-10">
          <div
            ref={div4Ref}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:scale-105 transition-transform"
          >
            <Mail className="h-4.5 w-4.5 text-rose-500" />
          </div>
          <div
            ref={div5Ref}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:scale-105 transition-transform"
          >
            <HardDrive className="h-4.5 w-4.5 text-amber-500" />
          </div>
          <div
            ref={div6Ref}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:scale-105 transition-transform"
          >
            <ShoppingBag className="h-4.5 w-4.5 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={divCenterRef}
        curvature={-40}
        gradientStartColor="#38bdf8"
        gradientStopColor="#6366f1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={divCenterRef}
        curvature={0}
        gradientStartColor="#4f46e5"
        gradientStopColor="#06b6d4"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={divCenterRef}
        curvature={40}
        gradientStartColor="#10b981"
        gradientStopColor="#3b82f6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={divCenterRef}
        curvature={-40}
        gradientStartColor="#ec4899"
        gradientStopColor="#f43f5e"
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={divCenterRef}
        curvature={0}
        gradientStartColor="#f59e0b"
        gradientStopColor="#eab308"
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={divCenterRef}
        curvature={40}
        gradientStartColor="#a855f7"
        gradientStopColor="#8b5cf6"
        reverse
      />
    </div>
  );
}

const bentoFeatures = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 mask-[linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-3",
              "border-gray-950/8 bg-gray-950/1 hover:bg-gray-950/4",
              "dark:border-gray-50/8 dark:bg-gray-50/2 dark:hover:bg-gray-50/6",
              "transform-gpu blur-[0.5px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <figcaption className="text-xs font-semibold dark:text-white">
                {f.name}
              </figcaption>
            </div>
            <blockquote className="mt-1 text-[10px] text-muted-foreground leading-normal">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute top-2 right-2 h-[260px] w-full scale-75 border-none mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-80" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-2 right-2 h-[260px] border-none mask-[linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-102" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2026, 4, 22, 0, 0, 0)}
        className="absolute top-10 right-0 origin-top scale-75 rounded-md border border-border bg-card/50 mask-[linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-80"
      />
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-6 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">
          Powerful Features
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-balance bg-linear-to-b from-white via-white via-20% to-zinc-400/90 bg-clip-text text-transparent pb-1">
          Everything you need for perfect demos
        </h3>
      </div>

      <BentoGrid className="lg:grid-cols-3">
        {bentoFeatures.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
