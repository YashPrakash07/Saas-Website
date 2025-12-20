"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
    return (
        <section className="container px-4 md:px-6 mx-auto py-20 text-center relative pointer-events-none md:pointer-events-auto">
            <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 px-6 py-16 md:px-12 md:py-24 text-primary-foreground overflow-hidden relative shadow-2xl skew-y-0 transform transition-transform duration-500 hover:scale-[1.01]" data-aos="zoom-in">
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-spin-slow-reverse opacity-50" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
                        Get Your First Campaign <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Live in 5 Minutes</span>
                    </h2>
                    <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of companies using CampaignStudio to connect with their customers through intelligent, scalable messaging.
                    </p>

                    <div className="flex flex-col items-center gap-4 pointer-events-auto">
                        <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-full group" asChild>
                            <Link href="/signup">
                                Start Free Trial
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-primary-foreground/70 font-medium">
                            <Shield className="w-4 h-4" />
                            <span>No credit card required. 14-day free trial.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
