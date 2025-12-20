"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, UserPlus, CheckCircle2, Split } from "lucide-react";
import { cn } from "@/lib/utils";

// Node Interface
interface FlowNodeProps {
    icon: React.ElementType;
    label: string;
    subLabel?: string;
    color?: string;
    x: number;
    y: number;
    delay?: number;
}

const FlowNode = ({ icon: Icon, label, subLabel, color = "bg-blue-500", x, y, delay = 0 }: FlowNodeProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            style={{ left: x, top: y }}
            className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                className={cn(
                    "relative h-12 w-12 rounded-2xl flex items-center justify-center shadow-lg border border-white/10 backdrop-blur-md",
                    "bg-gradient-to-br from-gray-900 to-gray-800",
                    "group-hover:shadow-cyan-500/50 transition-shadow duration-300"
                )}
            >
                <div className={cn("absolute inset-0 rounded-2xl opacity-20", color)} />
                <Icon className={cn("h-6 w-6 text-white relative z-10")} />

                {/* Status Indicator */}
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-gray-900" />
            </motion.div>

            {/* Label */}
            <div className="absolute top-14 flex flex-col items-center w-32 text-center">
                <span className="text-xs font-bold text-foreground bg-background/80 px-2 py-0.5 rounded-full border border-border shadow-sm whitespace-nowrap">
                    {label}
                </span>
                {subLabel && (
                    <span className="text-[10px] text-muted-foreground mt-1 bg-background/50 px-1 rounded">
                        {subLabel}
                    </span>
                )}
            </div>

            {/* Hover Card (AI Insights) */}
            <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none z-20">
                <div className="bg-slate-900/90 backdrop-blur-xl p-3 rounded-lg border border-white/10 shadow-xl w-48 text-xs">
                    <div className="flex justify-between mb-1">
                        <span className="text-slate-400">Throughput</span>
                        <span className="text-emerald-400 font-mono">245/min</span>
                    </div>
                    <div className="flex justify-between mb-1">
                        <span className="text-slate-400">Success Rate</span>
                        <span className="text-emerald-400 font-mono">99.8%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
                        <div className="h-full w-[98%] bg-gradient-to-r from-emerald-500 to-cyan-500" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Connection Path with Signal
const ConnectionPath = ({
    start,
    end,
    delay = 0,
    duration = 2,
    orientation = "horizontal"
}: {
    start: { x: number, y: number },
    end: { x: number, y: number },
    delay?: number,
    duration?: number,
    orientation?: "horizontal" | "vertical"
}) => {

    const isHorizontal = orientation === "horizontal";
    const curvature = 50;

    // Adjust control points based on orientation
    const pathD = isHorizontal
        ? `M ${start.x} ${start.y} C ${start.x + curvature} ${start.y}, ${end.x - curvature} ${end.y}, ${end.x} ${end.y}`
        : `M ${start.x} ${start.y} C ${start.x} ${start.y + curvature}, ${end.x} ${end.y - curvature}, ${end.x} ${end.y}`;

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {/* Background Path */}
            <path
                d={pathD}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-200/20 dark:text-slate-800"
            />
            {/* Animated Gradient Signal */}
            <path
                d={pathD}
                fill="none"
                stroke="url(#gradient-signal)"
                strokeWidth="2"
                strokeDasharray="10 100"
                strokeLinecap="round"
                className="opacity-70"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    from="110"
                    to="-110"
                    dur={`${duration}s`}
                    repeatCount="indefinite"
                    begin={`${delay}s`}
                />
            </path>
            <defs>
                <linearGradient id="gradient-signal" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#3b82f6" /> {/* Blue */}
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export function CampaignFlowVisualizer() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isVertical, setIsVertical] = useState(false);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentRect.width < 700) {
                    setIsVertical(true);
                } else {
                    setIsVertical(false);
                }
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    // Configuration for Desktop vs Mobile Layouts
    const layout = isVertical ? {
        // Mobile/Narrow (Vertical)
        trigger: { x: 180, y: 50 },
        decision: { x: 180, y: 150 },
        email: { x: 80, y: 260 },
        sms: { x: 280, y: 260 },
        conversion: { x: 180, y: 380 }
    } : {
        // Desktop/Wide (Horizontal)
        trigger: { x: 100, y: 225 },
        decision: { x: 280, y: 225 },
        email: { x: 450, y: 150 },
        sms: { x: 450, y: 300 },
        conversion: { x: 620, y: 225 }
    };

    const orientation = isVertical ? "vertical" : "horizontal";

    return (
        <div ref={containerRef} className="relative w-full h-[500px] md:h-[450px] bg-background/40 rounded-xl overflow-hidden flex items-center justify-center select-none border border-white/5">
            {/* Grid Background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0" />

            {/* Container for SVG Lines and Nodes */}
            <div className="relative z-10 w-full h-full mx-auto">
                <div className="relative w-full h-full max-w-[360px] md:max-w-4xl mx-auto">
                    {/* SVG Lines - Now inside the constrained container */}
                    <div className="absolute inset-0 z-0">
                        {/* Path 1: Start -> Decision */}
                        <ConnectionPath start={layout.trigger} end={layout.decision} delay={0} duration={3} orientation={orientation} />

                        {/* Path 2: Decision -> Top/Left (Email) */}
                        <ConnectionPath start={layout.decision} end={layout.email} delay={1.5} duration={3} orientation={orientation} />

                        {/* Path 3: Decision -> Bottom/Right (SMS) */}
                        <ConnectionPath start={layout.decision} end={layout.sms} delay={1.5} duration={3} orientation={orientation} />

                        {/* Path 4: Email -> End */}
                        <ConnectionPath start={layout.email} end={layout.conversion} delay={3} duration={3} orientation={orientation} />

                        {/* Path 5: SMS -> End */}
                        <ConnectionPath start={layout.sms} end={layout.conversion} delay={3} duration={3} orientation={orientation} />
                    </div>

                    {/* Nodes */}
                    {/* Step 1: Trigger */}
                    <FlowNode
                        icon={UserPlus}
                        label="User Signs Up"
                        subLabel="Trigger"
                        x={layout.trigger.x}
                        y={layout.trigger.y}
                        color="bg-indigo-500"
                        delay={0.2}
                    />

                    {/* Step 2: AI Decision */}
                    <FlowNode
                        icon={Split}
                        label="AI Segment"
                        subLabel="Decision Engine"
                        x={layout.decision.x}
                        y={layout.decision.y}
                        color="bg-amber-500"
                        delay={0.4}
                    />

                    {/* Step 3A: Channel 1 */}
                    <FlowNode
                        icon={Mail}
                        label="Send Welcome"
                        subLabel="Email"
                        x={layout.email.x}
                        y={layout.email.y}
                        color="bg-blue-500"
                        delay={0.6}
                    />

                    {/* Step 3B: Channel 2 */}
                    <FlowNode
                        icon={MessageSquare}
                        label="Send Offer"
                        subLabel="SMS"
                        x={layout.sms.x}
                        y={layout.sms.y}
                        color="bg-pink-500"
                        delay={0.6}
                    />

                    {/* Step 4: Convert */}
                    <FlowNode
                        icon={CheckCircle2}
                        label="Conversion"
                        subLabel="Goal Reached"
                        x={layout.conversion.x}
                        y={layout.conversion.y}
                        color="bg-emerald-500"
                        delay={0.8}
                    />
                </div>
            </div>

            {/* Floating Status Badge */}
            <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur border rounded-full px-3 py-1 flex items-center gap-2 text-xs font-mono shadow-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live Orchestration
            </div>
        </div>
    );
}
