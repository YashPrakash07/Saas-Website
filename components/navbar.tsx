"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Rocket className="h-6 w-6 text-primary" />
                    <span>CampaignStudio</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    <Link href="/features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
                    <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
                    <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
                    <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pricing</Link>

                    <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                </nav>

                <div className="hidden md:flex gap-4 items-center">
                    <ModeToggle />
                    {/* Placeholder Login/Signup */}
                    <Button variant="ghost" asChild>
                        <Link href="/login">Log in</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/signup">Get Started</Link>
                    </Button>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ModeToggle />
                    <button className="p-2 text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-b border-border/40 bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in-20">
                    <Link href="/features" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary">Features</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary">Services</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary">About</Link>
                    <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary">Pricing</Link>

                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-primary">Contact</Link>
                    <div className="flex flex-col gap-2 pt-2 border-t border-border/40">

                        <Button variant="ghost" className="justify-start w-full" asChild onClick={() => setIsOpen(false)}>
                            <Link href="/login">Log in</Link>
                        </Button>
                        <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
                            <Link href="/signup">Get Started</Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
