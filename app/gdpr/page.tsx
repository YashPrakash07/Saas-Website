import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Lock, FileText, CheckCircle } from "lucide-react"

export default function GDPRPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 md:py-24 bg-muted/30">
                    <div className="container px-4 md:px-6 mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">GDPR Compliance</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We are committed to protecting your data and privacy. Learn how CampaignStudio adheres to the General Data Protection Regulation.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 md:py-20">
                    <div className="container px-4 md:px-6 mx-auto max-w-4xl space-y-12">

                        {/* Introduction */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Shield className="h-6 w-6 text-primary" />
                                Our Commitment
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                At CampaignStudio, we take data protection seriously. The General Data Protection Regulation (GDPR) is a comprehensive data protection law that regulates the use of personal data of EU residents. We are fully committed to compliance with GDPR and ensuring that our users&apos; data is secure and respected.
                            </p>
                        </div>

                        {/* Key Principles */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Lock className="h-6 w-6 text-primary" />
                                Data Protection Principles
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-card border rounded-xl p-6 shadow-sm">
                                    <h3 className="font-semibold mb-2">Transparency</h3>
                                    <p className="text-sm text-muted-foreground">
                                        We clearly communicate how we collect, use, and store your personal data through our Privacy Policy.
                                    </p>
                                </div>
                                <div className="bg-card border rounded-xl p-6 shadow-sm">
                                    <h3 className="font-semibold mb-2">Data Security</h3>
                                    <p className="text-sm text-muted-foreground">
                                        We implement industry-standard security measures to protect your data from unauthorized access or breaches.
                                    </p>
                                </div>
                                <div className="bg-card border rounded-xl p-6 shadow-sm">
                                    <h3 className="font-semibold mb-2">User Control</h3>
                                    <p className="text-sm text-muted-foreground">
                                        You have full control over your data, including the right to access, correct, or delete your information.
                                    </p>
                                </div>
                                <div className="bg-card border rounded-xl p-6 shadow-sm">
                                    <h3 className="font-semibold mb-2">Accountability</h3>
                                    <p className="text-sm text-muted-foreground">
                                        We regularly audit our processes to ensure ongoing compliance with all GDPR requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Your Rights */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <FileText className="h-6 w-6 text-primary" />
                                Your Rights Under GDPR
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "The right to be informed about how your data is used.",
                                    "The right to access the personal data we hold about you.",
                                    "The right to rectification of inaccurate or incomplete data.",
                                    "The right to erasure (the 'right to be forgotten').",
                                    "The right to restrict processing of your personal data.",
                                    "The right to data portability.",
                                    "The right to object to processing of your data."
                                ].map((right, index) => (
                                    <li key={index} className="flex gap-3 text-muted-foreground">
                                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                        <span>{right}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="bg-muted/50 rounded-2xl p-8 border text-center">
                            <h3 className="text-xl font-bold mb-4">Have Questions About Your Data?</h3>
                            <p className="text-muted-foreground mb-6">
                                Our Data Protection Officer is here to help. If you have any questions or requests regarding your data, please don&apos;t hesitate to reach out.
                            </p>
                            <Button asChild>
                                <Link href="/contact">Contact Support</Link>
                            </Button>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}
