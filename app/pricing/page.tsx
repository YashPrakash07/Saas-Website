import { Metadata } from "next"
import { PricingClient } from "@/components/pricing-client"

export const metadata: Metadata = {
    title: "CampaignStudio Pricing – Simple & Scalable Plans",
    description: "Flexible pricing plans designed to grow with your business.",
}

export default function PricingPage() {
    return (
        <PricingClient />
    )
}
