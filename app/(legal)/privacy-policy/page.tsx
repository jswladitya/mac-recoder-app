import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | SleekDemo",
    description: "Learn how SleekDemo collects, uses, and protects your personal information and screen recordings. Your privacy is our priority.",
    openGraph: {
        title: "Privacy Policy | SleekDemo",
        description: "Learn how SleekDemo collects, uses, and protects your personal information and screen recordings.",
        type: "website",
        url: "https://sleekdemo.com/privacy-policy",
    },
    alternates: {
        canonical: "https://sleekdemo.com/privacy-policy",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/">
                        <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>

                <div className="space-y-8">
                    <div className="border-b border-border pb-8">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                            Privacy Policy for SleekDemo
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Effective Date: May 23, 2026
                        </p>
                    </div>

                    <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                        <p className="lead text-xl">
                            At SleekDemo, we take your privacy seriously. This policy details
                            how we collect, use, and protect your personal information and
                            screen recordings.
                        </p>

                        <section className="space-y-4">
                            <h2 className="font-playfair text-2xl font-semibold">
                                1. Information We Collect
                            </h2>
                            <p>
                                We collect information that you provide directly to us:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    <strong className="text-foreground">Order Information:</strong>{" "}
                                    Email address collected during checkout solely to send your license
                                    activation key.
                                </li>
                                {/* <li>
                                    <strong className="text-foreground">Design & Project Data:</strong>{" "}
                                    App designs, code exports, uploaded assets, and documentation
                                    used to generate your app screens.
                                </li> */}
                                {/* <li>
                                    <strong className="text-foreground">Usage Data:</strong>{" "}
                                    Information on how you interact with our app, including
                                    feature usage and session patterns to improve the UI/UX.
                                </li> */}
                                <li>
                                    <strong className="text-foreground">Payment Information:</strong>{" "}
                                    Transaction details for your one-time payment (processed securely
                                    via DodoPayments; we do not store credit card numbers).
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-playfair text-2xl font-semibold">
                                2. How We Use Your Information
                            </h2>
                            <p>We use the collected information for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    <strong className="text-foreground">License Activation:</strong>{" "}
                                    To send your license key and verify your purchase.
                                </li>
                                {/* <li>
                                    <strong className="text-foreground">Product Improvement:</strong>{" "}
                                    To analyze usage trends and fix bugs to ensure a seamless
                                    recording experience.
                                </li> */}
                                <li>
                                    <strong className="text-foreground">Communication:</strong> To
                                    send app related emails, such as licence key and other important updates.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-playfair text-2xl font-semibold">
                                3. Data Storage and Security
                            </h2>
                            <p>
                                We implement industry-standard security measures to protect your
                                intellectual property and personal data:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    <strong className="text-foreground">Local Storage:</strong>{" "}
                                    All your screen recordings and videos are processed and saved locally on your device. We do not have access to them.
                                </li>
                                {/* <li>
                                    <strong className="text-foreground">Encryption:</strong> Payment and license data is
                                    encrypted both in transit (SSL/TLS) and at rest.
                                </li>
                                <li>
                                    <strong className="text-foreground">Minimal Access:</strong> Only
                                    authorized personnel have access to backend systems for support
                                    and maintenance purposes.
                                </li> */}
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-playfair text-2xl font-semibold">
                                4. Third-Party Services
                            </h2>
                            <p>We partner with trusted third parties to power SleekDemo:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    <strong className="text-foreground">Payments:</strong> DodoPayments for
                                    secure processing of your one-time payment.
                                </li>
                                <li>
                                    <strong className="text-foreground">Analytics:</strong> Tools
                                    (like Vercel Analytics) to help us understand user
                                    behavior and improve the app.
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}