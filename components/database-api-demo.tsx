"use client";

import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";

export function DatabaseApiDemo() {
    return (
        <div className="p-4 rounded-xl bg-accent/20 w-full flex justify-center items-center">
            <DatabaseWithRestApi className="w-full" />
        </div>
    );
}
