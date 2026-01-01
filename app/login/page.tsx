import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Github, Chrome } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[100px] opacity-30" />
                <div className="absolute bottom-[0%] right-[0%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[100px] opacity-30" />
            </div>

            <Button variant="ghost" className="absolute top-20 left-4 z-20 group md:top-24" asChild>
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back
                </Link>
            </Button>

            <Card className="relative z-10 w-full max-w-md shadow-xl border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="space-y-1 items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-xl mb-2 relative h-14 w-14 flex items-center justify-center">
                        <Image
                            src="/logo.jpg"
                            alt="CampaignStudio Logo"
                            fill
                            className="object-contain p-2"
                        />
                    </div>
                    <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                    <CardDescription>
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="name@example.com" type="email" autoCapitalize="none" autoComplete="email" autoCorrect="off" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="text-xs font-medium text-primary hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                        <Input id="password" placeholder="••••••••" type="password" autoComplete="current-password" />
                    </div>
                    <Button className="w-full" size="lg">Sign In</Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or continue with</span></div>
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
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="font-medium text-primary hover:underline">
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
