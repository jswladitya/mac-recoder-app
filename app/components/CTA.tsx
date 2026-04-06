import { BarChart, File, Globe, HeartHandshake, Rss, Shield } from "lucide-react";

const icons = [
  { icon: BarChart, color: "from-gray-600 via-gray-500 to-gray-400" },
  { icon: File, color: "from-green-500 via-teal-500 to-emerald-600" },
  { icon: HeartHandshake, color: "from-orange-600 via-rose-600 to-violet-600" },
  { icon: Globe, color: "from-cyan-500 via-blue-500 to-indigo-500" },
  { icon: Rss, color: "from-orange-600 via-rose-600 to-violet-600" },
  { icon: Shield, color: "from-yellow-400 via-orange-500 to-yellow-600" },
];

export function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden h-[400px]">
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-10 font-bold text-6xl flex items-center justify-center text-center">
            Start building your <br /> next project today.
          </div>
          
          {[...Array(3)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={`group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row ${
                rowIndex % 2 === 0 ? "[--duration:20s]" : "[--duration:30s] [animation-direction:reverse]"
              }`}
            >
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className={`flex shrink-0 justify-around [gap:var(--gap)] min-w-full ${rowIndex % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"}`}>
                  {icons.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-card shadow-sm dark:bg-transparent"
                      >
                        <Icon className="size-full text-foreground/50" />
                        <div
                          className={`pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r ${item.color} opacity-70 blur-[20px] filter`}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background z-20"></div>
        </div>
      </div>
    </section>
  );
}
