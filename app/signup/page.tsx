"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, ArrowLeft, Github, Chrome, AlertCircle } from "lucide-react"

export default function SignupPage() {
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        setSuccess(false)

        const formData = new FormData(e.currentTarget)
        const email = formData.get("email") as string
        const companyName = formData.get("company") as string

        // Basic personal email providers list
        const personalDomains = [
            "gmail.com", "yahoo.com", "hotmail.com", "outlook.com",
            "aol.com", "icloud.com", "protonmail.com", "mail.com", "live.com"
        ]

        if (!email || !companyName) {
            setError("Please fill in all required fields.")
            return
        }

        const domain = email.split("@")[1]?.toLowerCase()

        if (personalDomains.includes(domain)) {
            setError("Please use your work email address. Personal email providers are not accepted.")
            return
        }

        // Simulate success
        setSuccess(true)
        console.log("Form submitted:", Object.fromEntries(formData))
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-cyan-500/10 blur-[100px] opacity-30" />
                <div className="absolute bottom-[0%] left-[0%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[100px] opacity-30" />
            </div>

            <Button variant="ghost" className="absolute top-20 left-4 z-20 group md:top-24" asChild>
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back
                </Link>
            </Button>

            <Card className="relative z-10 w-full max-w-md shadow-xl border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-1 items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-xl mb-2">
                        <Rocket className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                    <CardDescription>
                        Get started with CampaignStudio today
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {error && (
                        <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="bg-green-500/15 text-green-600 text-sm p-3 rounded-md flex items-center gap-2">
                            <span>Account created successfully! (Simulation)</span>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" name="firstName" placeholder="John" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" name="lastName" placeholder="Doe" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input id="company" name="company" placeholder="Acme Inc." required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Work Email</Label>
                            <Input id="email" name="email" placeholder="name@company.com" type="email" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" placeholder="Create a password" type="password" required />
                            <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
                        </div>

                        <Button className="w-full" size="lg" type="submit">Create Account</Button>
                    </form>

                    <div className="relative my-2">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or sign up with</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" type="button" className="gap-2">
                            <Github className="h-4 w-4" /> GitHub
                        </Button>
                        <Button variant="outline" type="button" className="gap-2">
                            <Chrome className="h-4 w-4" /> Google
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="justify-center">
                    <div className="text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="font-medium text-primary hover:underline">
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
