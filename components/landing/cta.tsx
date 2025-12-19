"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRightIcon, SparklesIcon } from "lucide-react"

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Dramatic background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-600/10 to-background -z-10" />
            <div className="absolute inset-0 bg-dot-white/[0.15] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                        <SparklesIcon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Limited Beta Access Available</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/50">
                        Ready to Deploy Your AI Workforce?
                    </h2>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                        Join innovative teams already automating their workflows. Get started in minutes, not months.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <div className="flex gap-3 w-full sm:w-auto">
                            <Input
                                type="email"
                                placeholder="Enter your work email"
                                className="h-14 px-6 text-base bg-background/50 border-white/10 backdrop-blur-sm w-full sm:w-80"
                            />
                            <Button size="lg" className="h-14 px-8 text-base shadow-[0_0_40px_-10px_rgba(var(--primary),0.8)] hover:shadow-[0_0_50px_-5px_rgba(var(--primary),1)] transition-all duration-300">
                                Get Started
                                <ArrowRightIcon className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        No credit card required • 14-day free trial • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    )
}
