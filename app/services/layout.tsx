
import { ServiceSidebar } from "@/components/service-sidebar";

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <aside className="md:sticky md:top-24 h-fit">
                    <ServiceSidebar />
                </aside>
                <main className="flex-1 min-h-[500px]">
                    {children}
                </main>
            </div>
        </div>
    );
}
