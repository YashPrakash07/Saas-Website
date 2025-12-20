
import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header Section */}
            <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">{service.title}</h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
                    {service.fullContent}
                </p>
            </div>

            {/* Features Grid */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Zap className="h-6 w-6 text-yellow-500" />
                    Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {service.features.map((feature, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <div className="mt-1 h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">{feature}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits Section */}
            <div>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Star className="h-6 w-6 text-primary" />
                    Why Choose Our {service.title}?
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {service.benefits.map((benefit, i) => (
                        <div key={i} className="bg-card border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="pt-8 border-t">
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="text-base h-12 px-8" asChild>
                        <Link href="/contact">
                            Get Started
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-base h-12 px-8" asChild>
                        <Link href="/pricing">
                            View Pricing
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
