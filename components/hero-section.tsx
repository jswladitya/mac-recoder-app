'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { HeroHeader } from "@/components/header"
import { ChevronDown } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-1.5 sm:gap-4 rounded-full border py-0.5 px-2 sm:py-1 sm:px-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-[9px] sm:text-xs md:text-sm font-medium">Introducing SleekDemo — Auto Zoom Recorder</span> 
                                    </Link>
                                </AnimatedGroup>

                                <div className="mx-auto mt-6 flex flex-col items-center justify-center text-center">
                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        as="h1"
                                        className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-5xl xl:text-[5rem] leading-[1.05] select-none"
                                        segmentClassName="bg-gradient-to-b from-white via-white via-20% to-zinc-400/90 bg-clip-text text-transparent">
                                        Beautiful Screen Recordings
                                    </TextEffect>
                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        delay={0.15}
                                        as="h1"
                                        className="text-3xl font-bold tracking-tighter sm:text-6xl md:text-5xl xl:text-[5rem] leading-[1.05] select-none"
                                        segmentClassName="bg-gradient-to-b from-white via-white via-20% to-zinc-400/90 bg-clip-text text-transparent">
                                        with automatic zooms.
                                    </TextEffect>
                                </div>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-3 max-w-4xl text-balance text-lg hidden sm:block">
                                    Create Sleek, professional screen recordings that automatically zoom into click areas. Perfect for demos, tutorials, and product walkthroughs.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row flex-wrap">
                                    <div className="bg-foreground/10 rounded-[calc(var(--radius-lg)+0.125rem)] sm:rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5 w-60 sm:w-auto">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    size="lg"
                                                    className="rounded-lg sm:rounded-xl px-4 sm:px-6 text-sm sm:text-base h-10 sm:h-12 w-full gap-2 cursor-pointer">
                                                    <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.005 1.45 2.187 3.068 3.76 3.007 1.514-.06 2.088-.973 3.914-.973 1.824 0 2.343.973 3.918.94 1.602-.027 2.637-1.463 3.611-2.885 1.13-1.65 1.6-3.243 1.627-3.328-.035-.015-3.136-1.2-3.17-4.786-.03-2.985 2.45-4.417 2.56-4.484-1.4-2.048-3.57-2.28-4.324-2.33-1.89-.153-3.3.94-3.914.94zm2.146-4.662c.813-.973 1.345-2.234 1.19-3.504-1.09.043-2.4.723-3.18 1.627-.69.799-1.293 2.078-1.127 3.328 1.21.094 2.427-.602 3.117-1.451z"/>
                                                    </svg>
                                                    <span>Download for MAC</span>
                                                    <ChevronDown className="size-4 opacity-80" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="center" className="w-56 p-1.5 bg-background border rounded-xl shadow-lg">
                                                <DropdownMenuItem asChild className="rounded-lg">
                                                    <Link href="https://github.com/jswladitya/updater-releases/releases/download/v1.6.0/SleekDemo-Mac-arm64-Installer.dmg" className="flex items-center gap-2.5 px-3 py-2.5 cursor-pointer hover:bg-muted duration-100">
                                                        <span className="font-medium text-sm">Apple Silicon (arm64)</span>
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem asChild className="rounded-lg">
                                                    <Link href="https://github.com/jswladitya/updater-releases/releases/download/v1.6.0/SleekDemo-Mac-x64-Installer.dmg" className="flex items-center gap-2.5 px-3 py-2.5 cursor-pointer hover:bg-muted duration-100">
                                                        <span className="font-medium text-sm">Intel (x64)</span>
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                    <div className="bg-foreground/10 rounded-[calc(var(--radius-lg)+0.125rem)] sm:rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5 w-60 sm:w-auto">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    size="lg"
                                                    variant="outline"
                                                    className="rounded-lg sm:rounded-xl px-4 sm:px-6 text-sm sm:text-base h-10 sm:h-12 w-full gap-2 cursor-pointer bg-background border-transparent">
                                                    <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM10.8 1.95L24 0v11.55H10.8V1.95zM10.8 12.45H24v11.55l-13.2-1.95v-9.6z"/>
                                                    </svg>
                                                    <span>Download for Windows</span>
                                                    <ChevronDown className="size-4 opacity-80" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="center" className="w-56 p-1.5 bg-background border rounded-xl shadow-lg">
                                                <DropdownMenuItem disabled className="rounded-lg flex items-center gap-2.5 px-3 py-2.5 opacity-50">
                                                    <span className="font-medium text-sm">Releases Soon</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20">
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-1.5 sm:p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <div className="bg-background aspect-15/8 relative rounded-2xl overflow-hidden">
                                        <video
                                            src="https://kh12dfduhh.ufs.sh/f/mdESasgdsJvWcKKPRpVcbdrIqaRsGFl4XhtCTf3pZxzEi5kw"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            preload="auto"
                                            poster="https://kh12dfduhh.ufs.sh/f/mdESasgdsJvWOchWjRomcz7er98umXqT1QwkGosMaCVFBlA3"
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background to-transparent pointer-events-none" />
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}
