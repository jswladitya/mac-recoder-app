'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Monitor, Cpu, HelpCircle } from 'lucide-react'

const faqCategories = [
    {
        title: 'Product Features',
        icon: Cpu,
        items: [
            {
                id: 'pf-1',
                question: 'How does the automatic zoom work?',
                answer: 'SleekDemo detects your mouse movement and clicks in real-time. It automatically applies smooth, cinematic camera zoom-ins whenever you click on UI elements or enter text, ensuring your viewers never miss important details.',
            },
            {
                id: 'pf-2',
                question: 'Can I customize the zoom speed and scale?',
                answer: 'Yes! Within the application settings, you can fully customize the zoom level (up to 3x), adjusting transition speed, hover effects, tracking behaviors, and keyframe options to suit your perfect styling choice.',
            },
        ],
    },
    {
        title: 'Platform & Exports',
        icon: Monitor,
        items: [
            {
                id: 'pe-1',
                question: 'Is SleekDemo available for both macOS and Windows?',
                answer: 'Absolutely! SleekDemo runs natively on both macOS and Windows, optimized perfectly for high performance and low CPU usage. It has full support for Apple Silicon (M1/M2/M3) and modern Intel/AMD processors.',
            },
            {
                id: 'pe-2',
                question: 'What video formats can I export to?',
                answer: 'You can export your completed recordings as ultra-high-definition MP4 files in up to 4K resolution. Pro users can also customize the export encoding speed, frame rate (30fps or 60fps), and add custom branded logos.',
            },
        ],
    },
    {
        title: 'Usage & Licensing',
        icon: HelpCircle,
        items: [
            {
                id: 'ul-1',
                question: 'Do I need an active internet connection to use SleekDemo?',
                answer: 'No, SleekDemo is a native desktop application that processes all video recording and auto-zooming locally on your computer. You can record, edit, and export your files fully offline.',
            },
            {
                id: 'ul-2',
                question: 'What is included in the Free tier versus the Pro plan?',
                answer: 'The Free tier includes fully automatic click zoom recording, up to 1080p outputs, and local savings. The Pro plan unlocks ultra-sharp 4K video exports, custom watermarks/branding, direct video cropping/editing tools, and priority customer support.',
            },
        ],
    },
]

export default function FAQ() {
    return (
        <section id="faq" className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-bold tracking-tighter bg-gradient-to-b from-white via-white via-20% to-zinc-400/90 bg-clip-text text-transparent pb-1">Help Center</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Browse by category to find the answers you need.</p>
                </div>
                <div className="mt-12 space-y-4">
                    {faqCategories.map((category) => (
                        <Card
                            key={category.title}
                            className="p-5">
                            <div className="mb-4 flex items-center gap-2">
                                <category.icon className="text-muted-foreground size-4" />
                                <h3 className="text-foreground font-medium">{category.title}</h3>
                            </div>
                            <Accordion
                                type="single"
                                collapsible>
                                {category.items.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        value={item.id}
                                        className="border-dashed last:border-b-0">
                                        <AccordionTrigger className="cursor-pointer py-3 text-sm font-medium hover:no-underline">{item.question}</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground pb-1 text-sm whitespace-normal text-wrap break-words leading-relaxed">{item.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </Card>
                    ))}
                </div>
                <p className="text-muted-foreground mt-8 text-center text-sm">
                    Need more help?{' '}
                    <Link
                        href="#"
                        className="text-primary font-medium hover:underline">
                        Contact our team
                    </Link>
                </p>
            </div>
        </section>
    )
}
