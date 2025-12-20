
import { services } from "@/lib/services";
import { redirect } from "next/navigation";

export default function ServicesIndexPage() {
    if (services.length > 0) {
        redirect(`/services/${services[0].slug}`);
    }

    return (
        <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Services</h1>
                <p className="text-muted-foreground">Please select a service from the menu.</p>
            </div>
        </div>
    );
}
