import { HeroHeader } from "@/components/header";
import { Footer } from "@/app/components/Footer";
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Setup Your License - SleekDemo',
  description: 'Step-by-step guide to activate your SleekDemo license key',
};

export default function SetupLicensePage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
      <HeroHeader />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-4 mx-1" />
            <span className="text-foreground">Setup License</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
            How to Setup Your License Key
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Thanks for purchasing SleekDemo! Follow these simple steps to activate your lifetime license and start recording beautiful demos.
          </p>

          <div className="space-y-12">
            {/* Step 1 */}
            <section className="relative pl-8 md:pl-0 border-l border-zinc-800 md:border-none ml-3 md:ml-0">
              <div className="md:hidden absolute left-[-17px] top-1 h-8 w-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center font-bold text-sm">1</div>
              
              <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                <div className="hidden md:flex md:col-span-1 justify-center mt-1">
                  <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center font-bold text-lg text-white">
                    1
                  </div>
                </div>
                <div className="md:col-span-11">
                  <h2 className="text-2xl font-semibold mb-3 text-white">Copy your License Key</h2>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    You should have received your license key via email after your purchase on Dodopayments. It looks something like <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300 font-mono text-sm">XXXX-XXXX-XXXX-XXXX</code>. Copy this key to your clipboard.
                  </p>
                  <div className="aspect-square bg-zinc-900/50 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500 overflow-hidden relative shadow-inner">
                    <img src="https://kh12dfduhh.ufs.sh/f/mdESasgdsJvW2Eqge3N6n8PCOTK4N5wI3YZcLrXGAoulEDUH" alt="Email with License Key" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="relative pl-8 md:pl-0 border-l border-zinc-800 md:border-none ml-3 md:ml-0">
              <div className="md:hidden absolute left-[-17px] top-1 h-8 w-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center font-bold text-sm">2</div>
              
              <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                <div className="hidden md:flex md:col-span-1 justify-center mt-1">
                  <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center font-bold text-lg text-white">
                    2
                  </div>
                </div>
                <div className="md:col-span-11">
                  <h2 className="text-2xl font-semibold mb-3 text-white">Enter Key & Activate</h2>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Navigate to the <strong>License Key Needed</strong> tab in left corner. Paste your license key into the input field and click the <strong>Activate</strong> button. You should see a success message indicating your app is now fully unlocked!
                  </p>
                  <div className="aspect-square bg-zinc-900/50 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500 overflow-hidden relative shadow-inner">
                    <img src="https://kh12dfduhh.ufs.sh/f/mdESasgdsJvWItOO0EmVsNqlHWUQKtfyv84uen3EwakCBioX" alt="Activation Settings Tab" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center">
            <h3 className="text-xl font-medium text-white mb-2">Need help?</h3>
            <p className="text-zinc-400 mb-6">If you are having trouble activating your license, please reach out to our support team.</p>
            <a href="mailto:adityaships66@gmail.com" className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white text-zinc-950 shadow hover:bg-zinc-200 h-10 px-6">
              Contact Support
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
