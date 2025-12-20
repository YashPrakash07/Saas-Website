"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlobeProps {
    className?: string;
}

export function Globe({ className }: GlobeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // North America
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [34.0522, -118.2437], size: 0.05 },
                { location: [41.8781, -87.6298], size: 0.05 },
                { location: [47.6062, -122.3321], size: 0.05 },
                // Europe
                { location: [51.5074, -0.1278], size: 0.1 },
                { location: [48.8566, 2.3522], size: 0.05 },
                { location: [52.5200, 13.4050], size: 0.05 },
                { location: [40.4168, -3.7038], size: 0.05 },
                // Asia
                { location: [1.3521, 103.8198], size: 0.05 },
                { location: [35.6762, 139.6503], size: 0.1 },
                { location: [22.3193, 114.1694], size: 0.05 },
                { location: [19.0760, 72.8777], size: 0.05 },
                { location: [13.7563, 100.5018], size: 0.05 },
                // Australia
                { location: [-33.8688, 151.2093], size: 0.05 },
                // South America
                { location: [-23.5505, -46.6333], size: 0.05 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.005;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div
            className={cn(
                "relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl",
                className,
            )}
        >
            <div className="absolute top-0 z-[10] h-full w-full bg-gradient-to-b from-background/0 via-background/0 to-background" />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-muted-foreground/80 to-muted-foreground/20 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
                Global
            </span>
            <canvas
                ref={canvasRef}
                style={{
                    width: 600,
                    height: 600,
                    maxWidth: "100%",
                    aspectRatio: 1,
                }}
                className="absolute top-[20%] h-full w-full opacity-100 transition-opacity duration-1000 ease-in-out [mask-image:linear-gradient(to_bottom,white,transparent)]"
            />
        </div>
    );
}
