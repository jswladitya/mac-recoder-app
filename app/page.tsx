import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import AccordionFeatures from "./components/AccordionFeatures";
// import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { siteConfig } from "@/lib/site";

const DottedSeparator = () => (
  <div className="mx-auto max-w-7xl px-6">
    <div className="w-full h-px border-t border-dotted border-border" />
  </div>
);

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "macOS",
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.png`,
    featureList: [
      "Automatic click zoom for screen recordings",
      "Timeline editing and customization",
      "4K exports for demos and tutorials",
      "Offline desktop recording workflow for Mac",
    ],
    offers: {
      "@type": "Offer",
      price: "59",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://checkout.dodopayments.com/buy/pdt_0Nf7VduORcHwUr1WWx7lX?quantity=1&redirect_url=https://sleekdemo.com",
    },
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
      {/* <DottedSeparator /> */}
      <Features />
      <AccordionFeatures />
      {/* <DottedSeparator />
      <Testimonials /> */}
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
