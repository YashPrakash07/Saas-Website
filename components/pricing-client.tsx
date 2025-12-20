"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, X, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Badge } from "./ui/badge"
import { CTASection } from "@/components/cta-section"

export function PricingClient() {
    const [annual, setAnnual] = useState(false)
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const plans = [
        {
            name: "Starter",
            desc: "Perfect for side projects and early startups.",
            price: 0,
            annualPrice: 0,
            features: [
                "1,000 emails/mo",
                "Basic analytics",
                "API & SMTP Access",
                "Community Support",
            ],
            notIncluded: [
                "Dedicated IP",
                "SSO / SAML",
                "SLA",
            ],
            cta: "Get Started",
            href: "/signup",
            popular: false
        },
        {
            name: "Growth",
            desc: "For scaling teams needing automation and insights.",
            price: 49,
            annualPrice: 39,
            features: [
                "100,000 emails/mo",
                "Advanced analytics",
                "Automation workflows",
                "Priority support",
                "A/B Testing",
                "Unlimited Seats",
            ],
            notIncluded: [
                "Dedicated IP",
            ],
            cta: "Start Free Trial",
            href: "/signup",
            popular: true
        },
        {
            name: "Enterprise",
            desc: "For high-volume senders needing dedicated resources.",
            price: "Custom",
            annualPrice: "Custom",
            features: [
                "Unlimited volume",
                "Dedicated IPs",
                "Custom throughput",
                "SLA & Account Manager",
                "SSO & Advanced Security",
                "Concierge Onboarding"
            ],
            notIncluded: [],
            cta: "Contact Sales",
            href: "/contact",
            popular: false
        }
    ]

    const faqs = [
        {
            q: "Can I switch plans later?",
            a: "Yes, you can upgrade or downgrade your plan at any time. Prorated charges will be applied automatically."
        },
        {
            q: "Do you offer a free trial for the Growth plan?",
            a: "Absolutely! You can try the Growth plan for 14 days with no credit card required."
        },
        {
            q: "What happens if I exceed my email limit?",
            a: "We will notify you when you approach your limit. You can choose to upgrade or pay a small overage fee per 1,000 emails."
        },
        {
            q: "Is there a discount for non-profits?",
            a: "Yes, we offer a 50% discount for registered non-profit organizations. Contact sales for details."
        },
    ]

    return (
        <div className="pb-20">
            {/* Header & Toggle */}
            <div className="pt-24 pb-12 text-center container px-4 mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple Pricing That Scales With You</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    Choose the plan that fits your growth stage. Transparency built-in.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <span className={cn("text-sm font-medium transition-colors", !annual ? "text-foreground" : "text-muted-foreground")}>Monthly</span>
                    <button
                        onClick={() => setAnnual(!annual)}
                        className="relative w-14 h-7 bg-muted rounded-full p-1 transition-colors border border-border"
                    >
                        <div className={cn("w-5 h-5 bg-primary rounded-full shadow-sm transition-transform duration-300", annual ? "translate-x-7" : "translate-x-0")} />
                    </button>
                    <span className={cn("text-sm font-medium transition-colors flex items-center gap-2", annual ? "text-foreground" : "text-muted-foreground")}>
                        Yearly <Badge variant="secondary" className="text-xs text-primary bg-primary/10 hover:bg-primary/20 bg-emerald-500/10 text-emerald-500 border-emerald-200/20">-20%</Badge>
                    </span>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="container px-4 md:px-6 mx-auto grid md:grid-cols-3 gap-8 max-w-6xl mb-24">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        className={cn(
                            "rounded-2xl border p-8 flex flex-col relative transition-all duration-300",
                            plan.popular
                                ? "bg-card border-primary shadow-2xl scale-105 z-10"
                                : "bg-card/50 border-border hover:border-primary/50"
                        )}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 right-0 -mt-4 mr-4">
                                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg">Most Popular</span>
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
                            <p className="text-muted-foreground text-sm h-10">{plan.desc}</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                                {typeof plan.price === 'number' ? (
                                    <>
                                        <span className="text-4xl font-bold">
                                            ${annual ? plan.annualPrice : plan.price}
                                        </span>
                                        <span className="text-muted-foreground">/mo</span>
                                    </>
                                ) : (
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                )}
                            </div>
                            {annual && typeof plan.price === 'number' && typeof plan.annualPrice === 'number' && plan.price > 0 && (
                                <p className="text-xs text-muted-foreground mt-2">Billed ${plan.annualPrice * 12} yearly</p>
                            )}
                        </div>

                        <Button
                            variant={plan.popular ? "default" : "outline"}
                            className={cn("w-full mb-8 h-12 text-base", plan.popular && "shadow-lg shadow-primary/20")}
                            asChild
                        >
                            <Link href={plan.href}>{plan.cta}</Link>
                        </Button>

                        <div className="space-y-4 flex-1">
                            <p className="text-sm font-medium">Included features:</p>
                            <ul className="space-y-3">
                                {plan.features.map((feat, k) => (
                                    <li key={k} className="flex gap-3 text-sm">
                                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                                        <span className="text-muted-foreground">{feat}</span>
                                    </li>
                                ))}
                                {plan.notIncluded.map((feat, k) => (
                                    <li key={k} className="flex gap-3 text-sm opacity-50">
                                        <X className="h-5 w-5 text-muted-foreground shrink-0" />
                                        <span className="text-muted-foreground line-through">{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* FAQ Section */}
            <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">Have a different question and can’t find the answer you’re looking for? Reach out to our support team.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-border rounded-lg bg-card overflow-hidden">
                            <button
                                onClick={() => toggleFaq(i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                            >
                                <span className="font-semibold text-lg">{faq.q}</span>
                                {openFaq === i ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                            </button>
                            <div
                                className={cn(
                                    "px-6 text-muted-foreground overflow-hidden transition-all duration-300 ease-in-out",
                                    openFaq === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CTASection />
        </div>
    )
}
