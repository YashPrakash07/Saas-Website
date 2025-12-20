"use client"

import { useState } from "react"
import { Code, Server, BarChart2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function FeatureCodeTabs() {
    const [activeTab, setActiveTab] = useState<"send-email" | "analytics">("send-email")

    return (
        <section className="container px-4 md:px-6 mx-auto py-20" id="api">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <div className="text-primary font-bold mb-2 tracking-wide text-sm">DEVELOPER FRIENDLY</div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Developers, <br /> Designed for Scale</h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        Whether you need a simple API integration or a robust SMTP relay, we have you covered.
                        Our platform handles the heavy lifting of delivery so you can focus on building your product.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 shrink-0 h-fit">
                                <Code className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Rest API</h3>
                                <p className="text-muted-foreground">Send emails with a single HTTP request. Supports templates, batch sending, and webhooks.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 rounded-lg bg-green-500/10 text-green-500 shrink-0 h-fit">
                                <Server className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">SMTP Relay</h3>
                                <p className="text-muted-foreground">Drop-in replacement for your existing SMTP configuration. Compatible with Postfix, Exim, and more.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500 shrink-0 h-fit">
                                <BarChart2 className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Real-time Analytics</h3>
                                <p className="text-muted-foreground">Track opens, clicks, and message status via webhooks or our dashboard.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left" className="bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 relative">
                    {/* Tab-like Header */}
                    <div className="flex items-center px-4 py-3 bg-zinc-900/50 border-b border-zinc-800 gap-4">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex bg-zinc-800 rounded-lg p-1 text-xs font-mono text-zinc-400">
                            <button
                                onClick={() => setActiveTab("send-email")}
                                className={cn(
                                    "px-3 py-1 rounded-md transition-colors",
                                    activeTab === "send-email" ? "bg-zinc-700 text-zinc-200" : "hover:text-zinc-200"
                                )}
                            >
                                send-email.ts
                            </button>
                            <button
                                onClick={() => setActiveTab("analytics")}
                                className={cn(
                                    "px-3 py-1 rounded-md transition-colors",
                                    activeTab === "analytics" ? "bg-zinc-700 text-zinc-200" : "hover:text-zinc-200"
                                )}
                            >
                                analytics.js
                            </button>
                        </div>
                    </div>

                    {/* Code Area */}
                    <div className="p-6 overflow-x-auto bg-zinc-950/50 backdrop-blur-sm min-h-[400px] flex items-center">
                        <pre className="text-sm font-mono leading-relaxed w-full">
                            {activeTab === "send-email" ? (
                                <code className="language-typescript block text-zinc-100">
                                    <span className="text-purple-400">import</span> {"{ CampaignClient }"} <span className="text-purple-400">from</span> <span className="text-green-400">&apos;@campaign/sdk&apos;</span>;
                                    {"\n\n"}
                                    <span className="text-zinc-500">{"// Initialize the client"}</span>
                                    {"\n"}
                                    <span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-yellow-200">CampaignClient</span>(process.env.API_KEY);
                                    {"\n\n"}
                                    <span className="text-purple-400">await</span> client.emails.<span className="text-blue-400">send</span>({"{"}
                                    {"\n  "}
                                    <span className="text-red-300">from</span>: <span className="text-green-400">&apos;onboarding@campaignstudio.com&apos;</span>,
                                    {"\n  "}
                                    <span className="text-red-300">to</span>: <span className="text-green-400">&apos;user@example.com&apos;</span>,
                                    {"\n  "}
                                    <span className="text-red-300">subject</span>: <span className="text-green-400">&apos;Welcome to the platform!&apos;</span>,
                                    {"\n  "}
                                    <span className="text-red-300">html</span>: <span className="text-green-400">&apos;&lt;h1&gt;Welcome aboard!&lt;/h1&gt;&apos;</span>,
                                    {"\n  "}
                                    <span className="text-red-300">tags</span>: [<span className="text-green-400">&apos;onboarding&apos;</span>, <span className="text-green-400">&apos;v1&apos;</span>]
                                    {"\n"});
                                    {"\n\n"}
                                    console.<span className="text-blue-400">log</span>(<span className="text-green-400">&apos;Email sent successfully!&apos;</span>);
                                </code>
                            ) : (
                                <code className="language-javascript block text-zinc-100 animation-in fade-in duration-300">
                                    <span className="text-purple-400">import</span> {"{ Analytics }"} <span className="text-purple-400">from</span> <span className="text-green-400">&apos;@campaign/analytics&apos;</span>;
                                    {"\n\n"}
                                    <span className="text-zinc-500">{"// Initialize analytics"}</span>
                                    {"\n"}
                                    <span className="text-purple-400">const</span> analytics = <span className="text-purple-400">new</span> <span className="text-yellow-200">Analytics</span>(<span className="text-green-400">&apos;trk_123xyz&apos;</span>);
                                    {"\n\n"}
                                    <span className="text-zinc-500">{"// Track a custom event"}</span>
                                    {"\n"}
                                    <span className="text-purple-400">await</span> analytics.<span className="text-blue-400">track</span>({"{"}
                                    {"\n  "}
                                    <span className="text-red-300">event</span>: <span className="text-green-400">&apos;User Signed Up&apos;</span>,
                                    {"\n  "}
                                    <span className="text-red-300">userId</span>: <span className="text-green-400">&apos;user_123&apos;</span>,
                                    {"\n  "}
                                    <span className="text-red-300">properties</span>: {"{"}
                                    {"\n    "}
                                    <span className="text-red-300">plan</span>: <span className="text-green-400">&apos;Pro&apos;</span>,
                                    {"\n    "}
                                    <span className="text-red-300">source</span>: <span className="text-green-400">&apos;referral&apos;</span>
                                    {"\n  "}
                                    {"}"}
                                    {"\n"});
                                    {"\n\n"}
                                    console.<span className="text-blue-400">log</span>(<span className="text-green-400">&apos;Event tracked!&apos;</span>);
                                </code>
                            )}

                        </pre>
                    </div>

                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                </div>
            </div>
        </section>
    )
}
