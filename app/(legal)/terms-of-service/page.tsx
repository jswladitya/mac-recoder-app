import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | SleekDemo",
    description: "Read SleekDemo Terms of Service. Understand your rights and responsibilities when using our auto-zoom screen recorder app.",
    openGraph: {
        title: "Terms of Service | SleekDemo",
        description: "Read the Terms of Service for using SleekDemo auto-zoom screen recorder.",
        type: "website",
        url: "https://sleekdemo.com/terms-of-service",
    },
    alternates: {
        canonical: "https://sleekdemo.com/terms-of-service",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TOSPage() {
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
                            Terms of Service
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Effective Date: May 22, 2026
                        </p>
                    </div>

                    <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                        <p className="lead text-xl">
                            Welcome to SleekDemo. By accessing or using our service, you agree
                            to be bound by these terms. If you do not agree to these terms,
                            please do not use our service.
                        </p>

                        <section className="space-y-4">
                            <h2 className="font-playfair text-2xl font-semibold">
                                1. Service Description
                            </h2>
                            <p className="text-muted-foreground">
                                SleekDemo provides an auto-zoom screen recorder for creating
                                professional videos. Our service allows users to
                                transform raw recordings into high-quality videos that can be exported.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-playfair text-2xl font-semibold">
                                2. User Responsibilities
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    <strong className="text-foreground">License Security:</strong>{" "}
                                    You are responsible for maintaining the confidentiality and security of your
                                    license activation key.
                                </li>
                                <li>
                                    <strong className="text-foreground">Lawful Use:</strong> You
                                    agree not to use SleekDemo for any illegal purposes or to
                                    generate content that violates the intellectual property rights
                                    of others.
                                </li>
                                <li>
                                    <strong className="text-foreground">Ownership:</strong> You
                                    retain full ownership of the intellectual property rights to the
                                    videos and screen recordings you export using our service.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-playfair text-2xl font-semibold">
                                3. Privacy & Data
                            </h2>
                            <p className="text-muted-foreground">
                                Your use of SleekDemo is also governed by our{" "}
                                <Link
                                    href="/privacy"
                                    className="text-primary hover:underline underline-offset-4"
                                >
                                    Privacy Policy
                                </Link>
                                . By using our service, you acknowledge and agree to the data
                                collection and processing practices described therein.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-playfair text-2xl font-semibold">
                                4. Service Modifications
                            </h2>
                            <p className="text-muted-foreground">
                                We reserve the right to modify, update, or discontinue features of
                                the service at any time to improve the user experience. We shall
                                not be liable to you or any third party for any changes, price
                                adjustments, or discontinuance of the service.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-playfair text-2xl font-semibold">
                                5. Limitation of Liability
                            </h2>
                            <p className="text-muted-foreground">
                                SleekDemo is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis
                                without any warranties, express or implied. We shall not be liable
                                for any indirect, incidental, or consequential damages resulting
                                from your use of the platform or any errors in the auto-generated
                                output.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-playfair text-2xl font-semibold">
                                6. Refund Policy
                            </h2>
                            <p className="text-muted-foreground">
                                SleekDemo is offered as a one-time payment with no recurring subscriptions.
                                We may offer a free trial to allow you to test the app before purchasing.
                                Due to the nature of digital goods and local processing, we generally cannot offer refunds
                                once a license key has been activated.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}