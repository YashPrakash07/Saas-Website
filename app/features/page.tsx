import { Metadata } from "next"
import { Shield, Network, Lock } from "lucide-react"
import { FeatureCodeTabs } from "@/components/feature-code-tabs"

export const metadata: Metadata = {
    title: "CampaignStudio Features – Powerful Campaign Tools",
    description: "Explore CampaignStudio’s APIs, SMTP, analytics, and delivery intelligence.",
}



import { CTASection } from "@/components/cta-section"

export default function FeaturesPage() {
    return (
        <div className="pb-20">
            <div className="bg-muted/30 py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Powerful Campaign Tools</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to build, send, and analyze your campaigns.
                </p>
            </div>

            {/* Interactive Feature Tabs Section */}
            <FeatureCodeTabs />

            {/* Deliverability Section */}
            <section className="bg-muted/30 py-24 border-y border-border/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Unmatched Deliverability</h2>
                        <p className="text-xl text-muted-foreground">
                            Stop worrying about the spam folder. We provide the tools to ensure your emails land where they belong.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Reputation Management", desc: "Monitor your IP and domain health with automated alerts.", icon: Shield },
                            { title: "Smart Routing", desc: "Our AI routes traffic through the best performing paths.", icon: Network },
                            { title: "Compliance Ready", desc: "Automatic handling of GDPR, CAN-SPAM, and unsubscribe headers.", icon: Lock }
                        ].map((item, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-background p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    )
}
