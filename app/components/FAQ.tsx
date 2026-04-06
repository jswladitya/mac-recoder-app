import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer a really free version?",
    answer: "Yes, you can get started completely for free with our Basic plan which includes core features and up to 5 projects. No credit card is required to sign up.",
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Absolutely. Our platform gives you full flexibility. You can adjust your plan at any time from your account settings. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle.",
  },
  {
    question: "How do you handle data privacy?",
    answer: "We employ industry-standard encryption for data locally and in transit. Your data is stored securely and we never sell your personal information to third parties.",
  },
  {
    question: "Do you offer special pricing for startups?",
    answer: "Yes! We love supporting early-stage companies. Reach out to our support team with a link to your company website and we can discuss setting you up on a startup discount.",
  },
  {
    question: "What kind of support is included?",
    answer: "Different plans come with different levels of support. Basic plans include community support and standard email response within 48 hours. Enterprise plans feature 24/7 dedicated support and a dedicated account manager.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-6 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">
          FAQ
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance text-foreground">
          Common Questions
        </h3>
        <p className="text-muted-foreground text-lg text-balance">
          Here are some of our most frequently asked questions. Unsure about something? Reach out to our team.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border/50">
            <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
