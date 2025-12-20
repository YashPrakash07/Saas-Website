"use client";

import { ArrowRight, MessageCircle, Activity, Star } from "lucide-react";
import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CountUp } from "@/components/ui/count-up";

export function Hero195() {
    return (
        <div className="relative flex flex-col items-center justify-center gap-8 py-24 px-4 md:px-6 overflow-hidden">
            <div className="flex flex-col items-center gap-4 text-center max-w-3xl z-10">
                <Badge variant="outline" className="gap-2 px-4 py-2 text-sm rounded-full backdrop-blur-sm bg-background/50 border-primary/20">
                    <span className="flex h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_8px_2px_rgba(6,182,212,0.6)]"></span>
                    <span className="text-muted-foreground">New: Campaign Optimization AI</span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                    Unlock the Power of <br />
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                        Intelligent Messaging
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    Send personalized campaigns that convert <span className="text-foreground font-semibold">3x better</span>.
                    <br className="hidden md:block" />
                    Automate your growth with real-time analytics and AI-driven insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
                    <Button size="lg" className="h-12 px-8 w-full sm:w-auto bg-[#6366f1] hover:bg-[#5558e6] text-white rounded-xl transition-all shadow-lg shadow-indigo-500/20 hover:scale-[1.02]" asChild>
                        <Link href="/signup">
                            Get Started Free
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 gap-2 w-full sm:w-auto rounded-xl border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all text-foreground" asChild>
                        <Link href="/contact">
                            <MessageCircle className="w-4 h-4" />
                            Talk to Sales
                        </Link>
                    </Button>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border/40 w-full max-w-sm justify-center sm:justify-start mx-auto sm:mx-0">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`h-8 w-8 rounded-full border-2 border-background flex items-center justify-center text-[10px] text-white font-bold
                                ${i === 1 ? 'bg-amber-500' : i === 2 ? 'bg-purple-500' : i === 3 ? 'bg-cyan-500' : 'bg-zinc-700'}`}>
                                {i === 1 ? 'JD' : i === 2 ? 'AS' : i === 3 ? 'MK' : '+2k'}
                            </div>
                        ))}
                    </div>
                    <div className="text-left">
                        <div className="flex gap-0.5 text-yellow-500 mb-0.5">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <Star key={i} className="h-3.5 w-3.5 fill-current" />
                            ))}
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">Trusted by <span className="text-foreground font-bold">10,000+</span> marketers</p>
                    </div>
                </div>
            </div>

            <div className="relative mt-16 w-full max-w-5xl">
                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[50%] bg-blue-500/20 blur-[100px] rounded-full -z-10" />

                <div className="relative rounded-lg border bg-background/50 backdrop-blur-xl shadow-2xl overflow-hidden">
                    <BorderBeam
                        size={300}
                        duration={10}
                        anchor={90}
                        borderWidth={1.5}
                        colorFrom="#3b82f6"
                        colorTo="#06b6d4"
                        delay={0}
                    />

                    <Tabs defaultValue="campaigns" className="w-full">
                        <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                            </div>
                            <TabsList className="h-8 bg-transparent">
                                <TabsTrigger value="campaigns" className="text-xs px-3 bg-transparent hover:bg-muted/50 data-[state=active]:bg-muted data-[state=active]:shadow-none h-7">Campaigns</TabsTrigger>
                                <TabsTrigger value="analytics" className="text-xs px-3 bg-transparent hover:bg-muted/50 data-[state=active]:bg-muted data-[state=active]:shadow-none h-7">Analytics</TabsTrigger>
                                <TabsTrigger value="settings" className="text-xs px-3 bg-transparent hover:bg-muted/50 data-[state=active]:bg-muted data-[state=active]:shadow-none h-7">Settings</TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="p-4 md:p-8 min-h-[400px] h-auto flex items-center justify-center bg-background/40">
                            <TabsContent value="campaigns" className="mt-0 w-full animate-in fade-in zoom-in-95 duration-300">
                                <div className="space-y-4 h-full">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-medium text-foreground">Active Campaigns</div>
                                        <Button size="sm" variant="ghost" className="h-7 text-xs">View All</Button>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { name: "Welcome Series", status: "Active", sent: "12.5k", open: "45%" },
                                            { name: "Re-engagement", status: "Active", sent: "8.2k", open: "32%" },
                                            { name: "Product Launch", status: "Scheduled", sent: "-", open: "-" },
                                            { name: "Newsletter #42", status: "Completed", sent: "45k", open: "58%" }
                                        ].map((campaign, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-lg border bg-card/60 hover:bg-card/80 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-2 h-2 rounded-full ${campaign.status === 'Active' ? 'bg-green-500 animate-pulse' :
                                                        campaign.status === 'Scheduled' ? 'bg-yellow-500' : 'bg-blue-500'
                                                        }`} />
                                                    <div className="text-sm font-medium">{campaign.name}</div>
                                                </div>
                                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                                    <div>{campaign.sent} sent</div>
                                                    <div>{campaign.open} open</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-between mt-auto">
                                        <div className="text-sm font-medium text-primary">Campaign Performance</div>
                                        <div className="text-sm text-primary flex items-center gap-1">
                                            +12.5% <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="analytics" className="mt-0 w-full animate-in fade-in zoom-in-95 duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* Card 1: Total Sent */}
                                    <div className="bg-card/50 border rounded-lg p-4 flex flex-col justify-between h-40">
                                        <div className="text-muted-foreground text-sm mb-2 font-medium">Total Emails Sent</div>
                                        <div className="text-3xl font-bold text-foreground mb-auto">
                                            <CountUp to={2845039} />
                                        </div>
                                        <div className="h-10 w-full flex items-end gap-1 mt-2">
                                            {[40, 65, 45, 80, 55, 90, 75, 85, 60, 95].map((h, i) => (
                                                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-500/80 rounded-sm" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Card 2: Deliverability */}
                                    <div className="bg-card/50 border rounded-lg p-4 flex flex-col justify-between h-40">
                                        <div className="text-muted-foreground text-sm mb-2 font-medium">Deliverability</div>
                                        <div className="flex items-end gap-2 mb-auto">
                                            <div className="text-3xl font-bold text-foreground">
                                                <CountUp to={99.8} decimals={1} suffix="%" />
                                            </div>
                                            <div className="text-green-500 text-sm mb-1 font-bold">↑ 0.2%</div>
                                        </div>
                                        {/* Mock Line Graph */}
                                        <div className="relative h-10 w-full overflow-hidden mt-2 rounded">
                                            <svg className="w-full h-full" preserveAspectRatio="none">
                                                <path d="M0,40 Q30,35 60,30 T120,20 T180,25 T240,10 V50 H0 Z" fill="url(#grad1)" fillOpacity="0.2" stroke="none" />
                                                <path d="M0,40 Q30,35 60,30 T120,20 T180,25 T240,10" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                                                <defs>
                                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                                                        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Card 3: Live Activity */}
                                    <div className="bg-card/50 border rounded-lg p-4 h-40">
                                        <div className="text-muted-foreground text-sm mb-3 font-medium flex items-center gap-2">
                                            <Activity className="w-4 h-4" /> Live Activity
                                        </div>
                                        <div className="space-y-2">
                                            {[
                                                { label: "Email Opened", time: "just now", color: "bg-green-500" },
                                                { label: "Link Clicked", time: "2s ago", color: "bg-blue-500" },
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center justify-between text-xs">
                                                    <div className="flex items-center gap-2">
                                                        <div className={`h-1.5 w-1.5 rounded-full ${item.color}`} />
                                                        <span className="text-foreground/80 font-medium">{item.label}</span>
                                                    </div>
                                                    <span className="text-muted-foreground/60">{item.time}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="settings" className="mt-0 w-full animate-in fade-in zoom-in-95 duration-300">
                                <div className="space-y-4">
                                    <div className="rounded-lg border bg-card/50 p-4 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <div className="text-sm font-medium">API Configuration</div>
                                                <div className="text-xs text-muted-foreground">Manage your API keys and access</div>
                                            </div>
                                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">Pro</Badge>
                                        </div>
                                        <div className="flex items-center gap-2 p-2 rounded bg-muted/50 border">
                                            <code className="text-xs flex-1 text-muted-foreground font-mono">sk_live_51x...892m</code>
                                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 hover:bg-background">
                                                <div className="w-3 h-3 border-2 border-muted-foreground/50 rounded-sm" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="rounded-lg border bg-card/50 p-4 space-y-2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                                <span className="text-xs font-medium">Email</span>
                                            </div>
                                            <div className="text-2xl font-bold">Enabled</div>
                                        </div>
                                        <div className="rounded-lg border bg-card/50 p-4 space-y-2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                                <span className="text-xs font-medium">SMS</span>
                                            </div>
                                            <div className="text-2xl font-bold">Enabled</div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div >
    );
}
