"use client";


import { cn } from "@/lib/utils"

interface HeroSectionProps {
    title?: string
    highlightText?: string
    description?: string
    buttonText?: string
    onButtonClick?: () => void
    colors?: string[] // Start, Middle, End colors for blobs
    speed?: number // Animation speed multiplier
    className?: string
    titleClassName?: string
    descriptionClassName?: string
    buttonClassName?: string
    maxWidth?: string
    veilOpacity?: string
    fontFamily?: string
    fontWeight?: number
    children?: React.ReactNode
}

export function HeroSection({
    title = "Intelligent AI Agents for",
    highlightText = "Smart Brands",
    description = "Transform your brand and evolve it through AI-driven brand guidelines and always up-to-date core components.",
    buttonText = "Join Waitlist",
    onButtonClick,
    colors = ["#7e22ce", "#4f46e5", "#2563eb"],
    speed = 1,
    className = "",
    titleClassName = "",
    descriptionClassName = "",
    buttonClassName = "",
    maxWidth = "max-w-6xl",
    veilOpacity = "bg-white/20 dark:bg-black/25",
    fontFamily = "Satoshi, sans-serif",
    fontWeight = 500,
    children
}: HeroSectionProps) {


    const handleButtonClick = () => {
        if (onButtonClick) {
            onButtonClick()
        }
    }

    const blobColors = colors;
    const animDuration = `${10 / speed}s`;

    return (
        <section className={cn("relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center", className)}>
            <div className="absolute inset-0 w-full h-full bg-slate-900 overflow-hidden">
                <div
                    className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob"
                    style={{ backgroundColor: blobColors[0], animationDuration: animDuration }}
                ></div>
                <div
                    className="absolute top-[20%] -right-[20%] w-[70%] h-[80%] rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob animation-delay-2000"
                    style={{ backgroundColor: blobColors[1], animationDuration: animDuration }}
                ></div>
                <div
                    className="absolute -bottom-[40%] left-[20%] w-[80%] h-[80%] rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-blob animation-delay-4000"
                    style={{ backgroundColor: blobColors[2], animationDuration: animDuration }}
                ></div>

                <div className={cn("absolute inset-0 pointer-events-none bg-black/40", veilOpacity)} />
            </div>

            <style jsx global>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 10s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>

            <div className={cn("relative z-10 mx-auto px-6 w-full", maxWidth)}>
                {children ? (
                    children
                ) : (
                    <div className="text-center">
                        <h1
                            className={cn("font-bold text-foreground text-balance text-4xl sm:text-5xl md:text-6xl xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.1] mb-6 lg:text-7xl", titleClassName)}
                            style={{ fontFamily, fontWeight }}
                        >
                            {title} <span className="text-primary">{highlightText}</span>
                        </h1>
                        <p className={cn("text-lg sm:text-xl text-white text-pretty max-w-2xl mx-auto leading-relaxed mb-10 px-4", descriptionClassName)}>
                            {description}
                        </p>
                        <button
                            onClick={handleButtonClick}
                            className={cn("px-6 py-4 sm:px-8 sm:py-6 rounded-full border-4 bg-[rgba(63,63,63,1)] border-card text-sm sm:text-base text-white hover:bg-[rgba(63,63,63,0.9)] transition-colors", buttonClassName)}
                        >
                            {buttonText}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
