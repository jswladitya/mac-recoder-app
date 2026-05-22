import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
    return (
        <section id="pricing" className="relative py-24 md:py-36 overflow-hidden bg-background">
            {/* Ambient Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse duration-[6000ms]" />
            <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[300px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse duration-[8000ms]" />

            <div className="mx-auto max-w-5xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 border border-zinc-800/80 px-3 py-1 text-xs font-semibold text-zinc-400">
                        ✨ Limited Offer
                    </span>
                    <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight bg-gradient-to-b from-white via-white to-zinc-400 bg-clip-text text-transparent sm:text-5xl">
                        One-Time Payment, Lifetime Access
                    </h2>
                    <p className="mt-4 text-zinc-400 text-base max-w-md mx-auto">
                        Gain complete access to SleekDemo. Absolutely no subscriptions, no monthly fees, and no hidden charges.
                    </p>
                </div>

                {/* Premium Centered Single Pricing Card */}
                <div className="mx-auto max-w-xl">
                    <div className="relative group rounded-3xl bg-linear-to-b from-zinc-900/60 to-zinc-950/80 p-8 md:p-10 border border-zinc-800/80 shadow-2xl hover:border-zinc-700/80 transition-all duration-300 backdrop-blur-md">

                        {/* Top Badge / Meta info */}
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <span className="text-lg font-bold uppercase tracking-wider">Lifetime Pass</span>
                            </div>
                            <span className="inline-flex items-center rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-350 shadow-xs">
                                Special Launch Pricing
                            </span>
                        </div>

                        {/* Price Display */}
                        <div className="flex items-baseline gap-2.5 mb-8">
                            <span className="text-6xl font-extrabold text-white tracking-tight">$59</span>
                            <span className="text-zinc-500 line-through text-lg font-medium">$79</span>
                            <span className="text-zinc-400 text-sm font-medium ml-2">one-time investment</span>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-zinc-800/80 mb-8" />

                        {/* Features List */}
                        <ul className="space-y-5 mb-8">
                            {[
                                { text: 'All features included', desc: 'Auto-zoom, motion blur, auto caption, ultra HD 4K exports and a lot more' },
                                { text: 'Free lifetime updates', desc: 'Get every future release, platform improvement, and additional feature automatically forever.' },
                                { text: 'Use on up to 3 devices', desc: 'Run SleekDemo on your personal Mac, desktop, and work laptop concurrently.' }
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full border mt-0.5 shadow-inner">
                                        <Check className="size-3" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-zinc-200">{item.text}</h4>
                                        <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Divider */}
                        <div className="w-full h-px bg-zinc-800/80 mb-8" />

                        {/* Purchase Button & Guarantees */}
                        <div className="space-y-4">
                            <Button
                                asChild
                                size="lg"
                                className="w-full py-6 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold shadow-lg shadow-zinc-950/20 transition-all duration-300 cursor-pointer hover:scale-[1.01] active:scale-[0.99] border-t border-white/20">
                                <Link href="#" className="flex justify-center items-center gap-2">
                                    Get SleekDemo Lifetime License
                                </Link>
                            </Button> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
