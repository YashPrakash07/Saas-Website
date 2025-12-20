import Link from "next/link"
import { Rocket } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-muted/20 pt-16 pb-8 mt-auto">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                            <Rocket className="h-6 w-6 text-primary" />
                            <span>CampaignStudio</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Intelligent campaign delivery platform for growing teams. Analyze, optimize, and scale with ease.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/features#api" className="hover:text-primary transition-colors">API Access</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>

                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-sm text-muted-foreground">
                            <p className="leading-relaxed">
                                J1/15A, Khirki Extension,<br />
                                Panchsheel Extension, Malviya Nagar,<br />
                                New Delhi-110017
                            </p>
                            <p>GST No. 07AAHCC4303J1ZU</p>
                            <a href="mailto:connect@campaignstudio.in" className="hover:text-primary transition-colors block">
                                connect@campaignstudio.in
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} CampaignStudio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/gdpr" className="hover:text-primary transition-colors">GDPR Compliance</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
