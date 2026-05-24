'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function CTA() {
  return (
    <section id="cta" className="relative py-20 overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-zinc-800/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-6 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tighter lg:text-5xl bg-linear-to-b from-white via-white via-20% to-zinc-400/90 bg-clip-text text-transparent pb-1">
            Start recording beautiful demos with SleekDemo today
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto cursor-pointer rounded-xl font-semibold px-8 py-6 text-base border-zinc-800 hover:bg-zinc-800 text-zinc-100 transition-all duration-200"
            >
              Buy now
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2 cursor-pointer rounded-xl font-semibold px-6 py-6 text-base bg-zinc-100 hover:bg-white text-zinc-950 shadow-lg shadow-zinc-950/20 transition-all duration-200">
                  <span>Try for free</span>
                  <ChevronDown className="size-4.5 opacity-80" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 p-1.5 bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl">
                <DropdownMenuItem asChild className="rounded-lg">
                  <Link href="https://github.com/jswladitya/updater-releases/releases/download/v1.6.0/SleekDemo-Mac-arm64-Installer.dmg" className="flex items-center gap-2.5 px-3 py-2.5 cursor-pointer hover:bg-zinc-900 duration-100 text-zinc-200 hover:text-white">
                    <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.005 1.45 2.187 3.068 3.76 3.007 1.514-.06 2.088-.973 3.914-.973 1.824 0 2.343.973 3.918.94 1.602-.027 2.637-1.463 3.611-2.885 1.13-1.65 1.6-3.243 1.627-3.328-.035-.015-3.136-1.2-3.17-4.786-.03-2.985 2.45-4.417 2.56-4.484-1.4-2.048-3.57-2.28-4.324-2.33-1.89-.153-3.3.94-3.914.94zm2.146-4.662c.813-.973 1.345-2.234 1.19-3.504-1.09.043-2.4.723-3.18 1.627-.69.799-1.293 2.078-1.127 3.328 1.21.094 2.427-.602 3.117-1.451z"/>
                    </svg>
                    <span className="font-semibold text-sm">Mac (Apple Silicon)</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg">
                  <Link href="https://github.com/jswladitya/updater-releases/releases/download/v1.6.0/SleekDemo-Mac-x64-Installer.dmg" className="flex items-center gap-2.5 px-3 py-2.5 cursor-pointer hover:bg-zinc-900 duration-100 text-zinc-200 hover:text-white">
                    <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.005 1.45 2.187 3.068 3.76 3.007 1.514-.06 2.088-.973 3.914-.973 1.824 0 2.343.973 3.918.94 1.602-.027 2.637-1.463 3.611-2.885 1.13-1.65 1.6-3.243 1.627-3.328-.035-.015-3.136-1.2-3.17-4.786-.03-2.985 2.45-4.417 2.56-4.484-1.4-2.048-3.57-2.28-4.324-2.33-1.89-.153-3.3.94-3.914.94zm2.146-4.662c.813-.973 1.345-2.234 1.19-3.504-1.09.043-2.4.723-3.18 1.627-.69.799-1.293 2.078-1.127 3.328 1.21.094 2.427-.602 3.117-1.451z"/>
                    </svg>
                    <span className="font-semibold text-sm">Mac (Intel)</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg">
                  <Link href="https://github.com/jswladitya/updater-releases/releases/download/v1.6.0/SleekDemo-Windows-Setup.exe" className="flex items-center gap-2.5 px-3 py-2.5 cursor-pointer hover:bg-zinc-900 duration-100 text-zinc-200 hover:text-white">
                    <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM10.8 1.95L24 0v11.55H10.8V1.95zM10.8 12.45H24v11.55l-13.2-1.95v-9.6z"/>
                    </svg>
                    <span className="font-semibold text-sm">Windows (Beta)</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
}
