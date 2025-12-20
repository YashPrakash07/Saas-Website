"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

export function Preloader() {
    const pathname = usePathname();
    // Using pathname as a key triggers a complete re-mount of the PreloaderInner component
    // whenever the route changes. This automatically resets the state (progress 0, visible true)
    // without needing complex useEffect logic or manual state resets.
    return <PreloaderInner key={pathname} />;
}

function PreloaderInner() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = "hidden";

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Random increment for realistic feel
                const diff = Math.random() * 10;
                return Math.min(prev + diff, 100);
            });
        }, 100);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        if (progress === 100) {
            // Wait a bit before fading out
            const timeout = setTimeout(() => {
                setIsVisible(false);
                // Re-enable scrolling after fade out starts
                setTimeout(() => {
                    document.body.style.overflow = "";
                }, 500);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [progress]);

    if (!isVisible) return null;

    return (
        <div
            className={cn(
                "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-700",
                progress === 100 ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
        >
            <div className="relative flex flex-col items-center">
                {/* Pulsing Icon Container */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/20 duration-1000" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 shadow-2xl shadow-primary/20 backdrop-blur-sm">
                        <Zap className="h-10 w-10 text-primary animate-pulse" />
                    </div>

                    {/* Orbiting particles */}
                    <div className="absolute inset-0 animate-spin-slow-reverse opacity-60">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    </div>
                    <div className="absolute inset-0 animate-spin-around opacity-60" style={{ animationDuration: '3s' }}>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                    </div>
                </div>

                {/* Text Branding */}
                <div className="text-center space-y-2 mb-8">
                    <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500 animate-gradient-x">
                        CampaignStudio
                    </h1>
                    <div className="h-4 flex items-center justify-center overflow-hidden">
                        <p className="text-sm text-muted-foreground animate-slide-up-fade">
                            {progress < 40 && "Initializing Core..."}
                            {progress >= 40 && progress < 80 && "Loading Analytics..."}
                            {progress >= 80 && "Ready."}
                        </p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="h-1 w-64 bg-muted overflow-hidden rounded-full">
                    <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="mt-2 text-xs font-mono text-muted-foreground/50">
                    {Math.round(progress)}%
                </div>
            </div>

            {/* Decorative Grid or Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>
    );
}
