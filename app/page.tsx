import HeroSection from "@/components/hero-section";
import { Features } from "./components/Features";
import AccordionFeatures from "./components/AccordionFeatures";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

const DottedSeparator = () => (
  <div className="mx-auto max-w-7xl px-6">
    <div className="w-full h-px border-t border-dotted border-border" />
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <HeroSection />
      {/* <DottedSeparator /> */}
      <Features />
      <DottedSeparator />
      <AccordionFeatures />
      <DottedSeparator />
      <Testimonials />
      <DottedSeparator />
      <Pricing />
      <DottedSeparator />
      <FAQ />
      <DottedSeparator />
      <CTA />
      <DottedSeparator />
      <Footer />
    </div>
  );
}
