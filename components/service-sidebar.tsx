"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServiceSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-full md:w-80 shrink-0 bg-[#2e2b7c] text-white p-6 rounded-lg md:min-h-[500px]">
            <h2 className="text-2xl font-bold mb-6">Services</h2>
            <nav className="flex flex-col space-y-2">
                {services.map((service) => {
                    const isActive = pathname === `/services/${service.slug}`;
                    return (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className={cn(
                                "block px-4 py-3 rounded-md transition-colors text-sm md:text-base",
                                isActive
                                    ? "bg-white/20 font-medium"
                                    : "hover:bg-white/10 text-white/90"
                            )}
                        >
                            {service.title}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
