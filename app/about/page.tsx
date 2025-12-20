import { Metadata } from "next"
import Image from "next/image"
import { Users, Target, Zap, Heart, Globe, TrendingUp, Award, Rocket } from "lucide-react"

export const metadata: Metadata = {
    title: "About CampaignStudio – Our Mission & Values",
    description: "Learn about CampaignStudio’s mission to simplify intelligent campaign delivery.",
}

const stats = [
    { label: "Emails Sent Daily", value: "50M+", icon: Rocket },
    { label: "Uptime SLA", value: "99.99%", icon: Zap },
    { label: "Global Reach", value: "190+", suffix: "Countries", icon: Globe },
    { label: "Team Members", value: "45", icon: Users },
]

const values = [
    {
        title: "Performance First",
        desc: "Speed and reliability are non-negotiable features of our platform. We obsess over milliseconds.",
        icon: TrendingUp
    },
    {
        title: "Simplicity in Design",
        desc: "Complex power should be accessible through simple, intuitive interfaces. We hide the complexity.",
        icon: Target
    },
    {
        title: "Radical Transparency",
        desc: "We believe in open metrics, clear pricing, and honest communication with our customers.",
        icon: Globe
    },
    {
        title: "Customer Obsession",
        desc: "We build what you need, not just what's cool. Your growth is our primary metric of success.",
        icon: Heart
    }
]



import { CTASection } from "@/components/cta-section"

export default function AboutPage() {
    return (
        <div className="pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-muted/20 border-b border-border/40">
                <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
                    <div className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-sm px-3 py-1 text-sm font-medium text-muted-foreground mb-6" data-aos="fade-up">
                        <Award className="mr-2 h-4 w-4 text-primary" />
                        Celebrating 5 Years of Innovation
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight" data-aos="fade-up" data-aos-delay="100">
                        Empowering the world to <br />
                        <span className="text-primary">communicate better.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        We&apos;re building the infrastructure that powers the next generation of customer communication. fast, reliable, and intelligent.
                    </p>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            </section>

            {/* Stats Section */}
            <section className="container px-4 md:px-6 mx-auto -mt-16 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-card border border-border/50 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center justify-center hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="p-3 bg-primary/10 rounded-full mb-4 text-primary">
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                            <div className="text-sm font-medium text-muted-foreground">{stat.label} {stat.suffix && <span className="block text-xs opacity-70">{stat.suffix}</span>}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Story Section */}
            <section className="container px-4 md:px-6 mx-auto py-24 md:py-32">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative" data-aos="fade-right">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105 blur-lg" />
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Team working together"
                            width={2070}
                            height={1380}
                            className="relative rounded-3xl shadow-2xl border border-border/50 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="space-y-6" data-aos="fade-left">
                        <h2 className="text-3xl md:text-5xl font-bold">Our Story</h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Founded in 2020, CampaignStudio began with a simple question: <span className="text-foreground font-medium">Why is sending emails at scale still so hard?</span>
                            </p>
                            <p>
                                Developers were stuck with legacy protocols, and marketers were fighting clunky interfaces. There had to be a better way to bridge the gap between technical reliability and user experience.
                            </p>
                            <p>
                                Today, we are proud to support thousands of forward-thinking companies. We&apos;ve grown from a garage startup to a global team, but our core mission remains unchanged: <strong>simplify the complex world of digital delivery.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-zinc-950 text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Values That Drive Us</h2>
                        <p className="text-zinc-400 text-lg">
                            Culture isn&apos;t just about perks. It&apos;s about how we make decisions and how we treat each other and our customers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {values.map((val, i) => (
                            <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="shrink-0">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                                        <val.icon className="h-6 w-6 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed">{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    )
}
