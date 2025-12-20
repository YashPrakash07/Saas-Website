import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact CampaignStudio – Sales & Support",
    description: "Contact the CampaignStudio team for sales or technical support.",
}

export default function ContactPage() {
    return (
        <div className="container px-4 md:px-6 mx-auto py-20 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                <div data-aos="fade-right">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">We’d Love to Hear From You</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Have questions about our pricing, plans, or features? Our team is here to help.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-lg mb-1">Contact</h3>
                            <a href="mailto:connect@campaignstudio.in" className="block text-muted-foreground hover:text-primary transition-colors">connect@campaignstudio.in</a>
                            <a href="mailto:abhinav@campaignstudio.in" className="block text-muted-foreground hover:text-primary transition-colors">abhinav@campaignstudio.in</a>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Phone</h3>
                            <p className="text-muted-foreground">
                                <a href="tel:+919015504533" className="hover:text-primary transition-colors">+91 9015504533</a>
                                <br />
                                <a href="tel:+918130724833" className="hover:text-primary transition-colors">+91 8130724833</a>
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                            <p className="text-muted-foreground">
                                J1/15A, Khirki Extension,<br />
                                Panchsheel Extension, Malviya Nagar,<br />
                                New Delhi-110017
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border bg-card p-8 shadow-sm" data-aos="fade-left">
                    <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input id="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium">Company</label>
                            <input id="company" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Company Inc." />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="How can we help you?" />
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
