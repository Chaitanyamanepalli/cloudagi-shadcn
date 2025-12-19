"use client"

import { Button } from "@/components/ui/button"
import { ArrowRightIcon, TerminalIcon, Code2Icon, SparklesIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 bg-background">
            {/* Background gradients & Patterns */}
            <div className="absolute inset-0 bg-dot-white/[0.2] -z-10 h-full w-full" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-transparent z-0 pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-10">
                    <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-4 py-1.5 rounded-full z-10 backdrop-blur-sm shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                        <SparklesIcon className="w-3 h-3 mr-2" />
                        Next Gen AI Workforce
                    </Badge>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/50 max-w-5xl mx-auto pb-2">
                        Build Your Workforce of <span className="text-primary inline-flex animate-pulse">Intelligent Agents</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We specialize in building custom **Coding** and **Research** agents.
                        Automate complex workflows with precision, from codebase refactoring to deep market analysis.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                        <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_30px_-10px_rgba(var(--primary),0.6)] hover:shadow-[0_0_40px_-5px_rgba(var(--primary),0.8)] transition-all duration-300">
                            Deploy Agents
                            <ArrowRightIcon className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-10 text-lg hover:bg-muted/50 border-white/10">
                            View Use Cases
                        </Button>
                    </div>

                    {/* Visual Element / "Terminal" */}
                    <div className="mt-24 w-full max-w-6xl relative z-20">
                        {/* Glow effect behind the terminal */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-2xl blur-xl opacity-50 animate-pulse" />

                        <div className="relative rounded-xl border border-border/50 bg-background/90 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[2.4/1] ring-1 ring-white/10">
                            <div className="flex items-center gap-2 px-6 py-4 border-b border-border/50 bg-muted/20">
                                <div className="flex gap-2 mr-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="text-sm text-muted-foreground font-mono flex items-center gap-2">
                                    <TerminalIcon className="w-4 h-4" />
                                    agent-workspace — bash — 85x24
                                </div>
                            </div>
                            <div className="p-8 font-mono text-base text-foreground space-y-3 text-left">
                                <div className="flex">
                                    <span className="text-primary mr-3">❯</span>
                                    <span className="typing-cursor">initializing_agents...</span>
                                </div>
                                <div className="opacity-80 pl-4 border-l-2 border-primary/20 ml-1">
                                    <div className="grid grid-cols-[auto_1fr] gap-4">
                                        <span className="text-green-500">✓</span> <span>Coding Agent loaded <span className="text-muted-foreground">(v2.4)</span></span>
                                        <span className="text-green-500">✓</span> <span>Research Agent loaded <span className="text-muted-foreground">(v1.1)</span></span>
                                        <span className="text-green-500">✓</span> <span>Connected to codebase <span className="text-muted-foreground">(d:/shadcn-updated)</span></span>
                                    </div>
                                </div>
                                <div className="flex pt-4">
                                    <span className="text-primary mr-3">❯</span>
                                    <span>run optimization_task --target="src/components"</span>
                                </div>
                                <div className="pt-2 pl-4 text-blue-400/90">
                                    Analyzing dependency graph...<br />
                                    Found <span className="font-bold text-white">12</span> optimization opportunities.
                                </div>
                            </div>

                            {/* Overlay Gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

