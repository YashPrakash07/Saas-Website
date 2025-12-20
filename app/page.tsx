import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Zap, BarChart, Code, Globe, ArrowRight, Terminal, Megaphone, Building2, ShoppingCart, ShieldCheck } from "lucide-react"

import { Testimonials } from "@/components/testimonials"
import { DemoOne } from "@/components/hero-195-demo"
import { LogoCloud } from "@/components/logo-cloud"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { Globe as WorldGlobe } from "@/components/ui/globe"
import { CTASection } from "@/components/cta-section"
import { CampaignFlowVisualizer } from "@/components/ui/campaign-flow-visualizer"
import { IntegrationsSection } from "@/components/integrations-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32 overflow-hidden relative">
      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      <DemoOne />

      <LogoCloud />

      {/* Features Section - Bento Grid */}
      <section className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Built for Performance. Designed for Scale.</h2>
          <p className="text-muted-foreground text-lg">Everything you need to deliver world-class campaigns.</p>
        </div>

        <BentoGrid className="max-w-4xl mx-auto">
          {[
            {
              Icon: BarChart,
              name: "Real-Time Analytics",
              description: "Process 1M+ events/sec with live insights. Track opens, clicks, and conversions instantly.",
              href: "/features",
              cta: "View Analytics",
              className: "md:col-span-1",
              background: (
                <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100 mask-image-linear-gradient">
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 flex items-end justify-between px-6 pb-6 gap-2">
                    {[40, 70, 50, 80, 60, 90, 45].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-violet-500/40 rounded-t-sm transition-all duration-500 group-hover:bg-violet-500/60"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              ),
            },
            {
              Icon: Check,
              name: "99.99% Reliability",
              description: "Inbox-first routing with guaranteed uptime. Your campaigns land where they belong, every time.",
              href: "/features",
              cta: "See Uptime Report",
              className: "md:col-span-2",
              background: (
                <div className="absolute right-0 top-0 h-full w-full opacity-60 bg-gradient-to-l from-green-500/10 to-transparent overflow-hidden">
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 translate-x-12 group-hover:translate-x-8 transition-transform duration-500 ease-out">
                    <div className="bg-card border border-green-500/20 rounded-xl p-4 shadow-xl w-64 backdrop-blur-md">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-medium text-foreground">System Status</div>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-[10px] font-bold">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                          OPERATIONAL
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[99.9%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                          <span>API</span>
                          <span>99.99%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              Icon: Zap,
              name: "Automation Engine",
              description: "Save 20h+ per week with behavior-based triggers. Build complex journeys visually.",
              href: "/features",
              cta: "Start Automating",
              className: "md:col-span-2",
              background: (
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent overflow-hidden">
                  <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center opacity-80">
                    <div className="relative group-hover:scale-105 transition-transform duration-500">
                      {/* Node 1 */}
                      <div className="absolute -left-20 -top-12 bg-card border border-border p-3 rounded-lg shadow-sm w-32 border-l-4 border-l-amber-500">
                        <div className="h-1.5 w-12 bg-amber-500/20 rounded mb-2" />
                        <div className="h-1 w-20 bg-muted rounded" />
                      </div>
                      {/* Connection Line */}
                      <svg className="absolute -left-6 -top-4 w-20 h-20 pointer-events-none text-border" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10,10 C40,10 40,50 70,50" />
                      </svg>
                      {/* Node 2 (Center) */}
                      <div className="bg-card border border-amber-500/30 p-3 rounded-lg shadow-lg w-36 z-10 relative">
                        <div className="text-[10px] font-semibold text-amber-600 mb-1">On Click</div>
                        <div className="h-1.5 w-16 bg-muted rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              Icon: Code,
              name: "Developer APIs",
              description: "<100ms latency. Simple REST APIs and SMTP support. Integrate with your stack in minutes.",
              href: "/docs",
              cta: "Read Docs",
              className: "md:col-span-1",
              background: (
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent">
                  <div className="absolute right-4 top-4 group-hover:top-8 transition-all duration-500 opacity-60 group-hover:opacity-100">
                    <div className="bg-slate-950 text-slate-50 text-[10px] font-mono p-3 rounded-lg border border-slate-800 shadow-xl w-48">
                      <div className="flex gap-1.5 mb-2 opacity-50">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex"><span className="text-purple-400 mr-2">POST</span> /v1/send</div>
                        <div className="text-slate-400">{`{`}</div>
                        <div className="pl-2 text-green-400">&quot;status&quot;: &quot;queued&quot;</div>
                        <div className="text-slate-400">{`}`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
          ].map((feature, i) => (
            <BentoCard
              key={i}
              {...feature}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Product Capabilities / How It Works */}
      <section className="container px-4 md:px-6 mx-auto py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center text-left" data-aos="fade-right">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Complete Campaign Orchestration</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Visualize your entire workflow from drafting to delivery in one interactive view.
              Seamlessly manage every stage of your campaign lifecycle.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  text: "Real-time workflow visualization",
                  description: "See your data flow in real-time as it moves through your custom pipeline.",
                  color: "text-blue-400",
                  bg: "bg-blue-400/10",
                },
                {
                  icon: Check,
                  text: "Seamless stage progression tracking",
                  description: "Track every request status from initiation to final delivery.",
                  color: "text-green-400",
                  bg: "bg-green-400/10",
                },
                {
                  icon: BarChart,
                  text: "Integrated analytics at every step",
                  description: "Gain deep insights into performance bottlenecks and optimization opportunities.",
                  color: "text-purple-400",
                  bg: "bg-purple-400/10",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className={`h-10 w-10 shrink-0 rounded-full ${item.bg} flex items-center justify-center ${item.color} mt-1`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">{item.text}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="h-12 px-8 w-full sm:w-auto whitespace-nowrap shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105" asChild>
                <Link href="/features">
                  Explore API Docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 w-full sm:w-auto whitespace-nowrap shrink-0 rounded-xl border-blue-200 hover:border-blue-400 hover:bg-blue-50 text-blue-700 dark:border-blue-800 dark:hover:border-blue-700 dark:hover:bg-blue-950 dark:text-blue-400 transition-all duration-300" asChild>
                <Link href="/signup">
                  View Full Demo
                </Link>
              </Button>
            </div>
          </div>

          <div data-aos="fade-left" className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl bg-card/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />
            <CampaignFlowVisualizer />
          </div>
        </div>
      </section>

      <IntegrationsSection />

      {/* Global Infrastructure */}
      <section className="container px-4 md:px-6 mx-auto py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 overflow-hidden rounded-lg bg-muted/30 border border-border/50 p-8 md:p-12 relative">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

          <div className="w-full md:w-1/2 relative space-y-6 z-10" data-aos="fade-right">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary shadow-sm mb-2">
              <Globe className="mr-2 h-3.5 w-3.5" />
              Global Infrastructure
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Global Edge Network
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg">
              CampaignStudio is deployed on a massive global edge network, ensuring your data is delivered faster, no matter where your audience is located.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-background/50 p-4 rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <Zap className="h-6 w-6 text-yellow-500" /> 50ms
                </div>
                <div className="text-sm font-medium mt-1">Global Latency</div>
                <div className="text-xs text-muted-foreground mt-1">Instant real-time updates</div>
              </div>
              <div className="bg-background/50 p-4 rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <Globe className="h-6 w-6 text-blue-500" /> 35+
                </div>
                <div className="text-sm font-medium mt-1">Edge Regions</div>
                <div className="text-xs text-muted-foreground mt-1">deployed worldwide coverage</div>
              </div>
              <div className="bg-background/50 p-4 rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <div className="text-green-500">99.99%</div>
                </div>
                <div className="text-sm font-medium mt-1">Uptime SLA</div>
                <div className="text-xs text-muted-foreground mt-1">Guaranteed reliability</div>
              </div>
              <div className="bg-background/50 p-4 rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-primary" /> SOC2
                </div>
                <div className="text-sm font-medium mt-1">Enterprise Security</div>
                <div className="text-xs text-muted-foreground mt-1">GDPR & HIPAA Ready</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] flex items-center justify-center relative" data-aos="fade-left">
            <WorldGlobe className="bg-transparent shadow-none" />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-muted/20 py-24 border-y border-border/40">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16" data-aos="fade-up">Built for Every Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Developers",
                icon: Terminal,
                text: "Ship faster with robust infrastructure.",
                features: ["Simple REST APIs", "Webhooks & Events", "Comprehensive SDKs"],
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "hover:border-blue-500/50"
              },
              {
                title: "Marketing Teams",
                icon: Megaphone,
                text: "Create campaigns without code.",
                features: ["Drag-n-Drop Builder", "Smart A/B Testing", "Audience Segmentation"],
                color: "text-pink-500",
                bg: "bg-pink-500/10",
                border: "hover:border-pink-500/50"
              },
              {
                title: "Enterprises",
                icon: Building2,
                text: "Scale securely with total control.",
                features: ["SSO & SAML", "99.99% Uptime SLA", "Dedicated Account Manager"],
                color: "text-indigo-500",
                bg: "bg-indigo-500/10",
                border: "hover:border-indigo-500/50"
              },
              {
                title: "eCommerce",
                icon: ShoppingCart,
                text: "Drive revenue with automated flows.",
                features: ["Abandoned Cart Recovery", "Transactional Emails", "Purchase Analytics"],
                color: "text-emerald-500",
                bg: "bg-emerald-500/10",
                border: "hover:border-emerald-500/50"
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`group bg-background rounded-xl p-8 border border-border transition-all duration-300 shadow-sm hover:shadow-xl ${item.border}`}
              >
                <div className={`h-12 w-12 rounded-lg ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.text}</p>
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground/80">
                      <div className={`h-1.5 w-1.5 rounded-full mr-3 bg-current ${item.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <Testimonials />
      <CTASection />
    </div >
  );
}
