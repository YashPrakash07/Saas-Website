"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface CountUpProps {
    to: number;
    from?: number;
    className?: string;
    prefix?: string;
    suffix?: string;
    separator?: string;
    decimals?: number;
    delay?: number;
}

export function CountUp({
    to,
    from = 0,
    className,
    prefix = "",
    suffix = "",
    separator = ",",
    decimals = 0,
    delay = 0,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);

    // Using a spring for smooth, natural movement
    const springValue = useSpring(motionValue, {
        damping: 30, // Higher damping = less oscillation
        stiffness: 70, // Lower stiffness = slower movement
        mass: 1,
    });

    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                motionValue.set(to);
            }, delay * 1000);
            return () => clearTimeout(timer);
        }
    }, [isInView, to, delay, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                // Format the number
                const formatted = latest.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
                ref.current.textContent = `${prefix}${formatted}${suffix}`;
            }
        });
        return unsubscribe;
    }, [springValue, decimals, separator, prefix, suffix]);

    // Initial render content
    return <span className={className} ref={ref}>{prefix + from.toFixed(decimals) + suffix}</span>;
}
