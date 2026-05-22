import Image from 'next/image'

const testimonials = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
        name: 'Meschac Irung',
        role: 'Engineer at Acme',
        quote: "SleekDemo completely changed how I record UI demos. The automatic zoom on click areas is smooth as butter—I don't have to spend hours in video editors anymore!",
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
        name: 'Theo Balick',
        role: 'Founder, CEO - Acme',
        quote: "We use SleekDemo for all our product launches and investor walkthroughs. The 4K exports are incredibly crisp, and our customers love the clean layout and presentation style.",
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/12345678?v=4',
        name: 'Sarah Johnson',
        role: 'DevOps Engineer',
        quote: "As someone who makes a lot of system tutorials, SleekDemo is a lifesaver. The native performance on MAC and Windows is flawless, and it works 100% offline.",
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/34567890?v=4',
        name: 'Aisha Patel',
        role: 'Data Scientist',
        quote: "Creating quick analytical walkthroughs has never been easier. The auto zoom ensures that our stakeholders see exactly where the cursor is clicking without any manual editing.",
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="space-y-4">
                    <h2 className="text-balance text-4xl font-bold tracking-tighter bg-gradient-to-b from-white via-white via-20% to-zinc-400/90 bg-clip-text text-transparent pb-1">What Our Customers Say (Fake Data)</h2>
                    <p className="text-muted-foreground text-balance">Hear from the teams and individuals who have transformed their workflow with our platform.</p>
                </div>
                <div className="@xl:grid-cols-2 mt-12 grid gap-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-card ring-border text-foreground space-y-3 rounded-2xl p-4 text-sm ring-1">
                            <div className="flex gap-3">
                                <div className="before:border-foreground/10 relative size-8 shrink-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="rounded-full object-cover"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <p className="text-sm font-medium">
                                    {testimonial.name} <span className="text-muted-foreground ml-2 font-normal">{testimonial.role}</span>
                                </p>
                            </div>

                            <p className="text-muted-foreground text-sm">{testimonial.quote}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
