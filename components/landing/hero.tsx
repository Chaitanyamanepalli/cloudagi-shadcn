"use client"

import { Button } from "@/components/ui/button"
import { ArrowRightIcon, TerminalIcon, LockIcon, SparklesIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DotGrid } from "@/components/ui/dot-grid"

export function Hero() {
    return (
        <section className="relative pt-32 pb-40 bg-background overflow-hidden">
            <DotGrid dotSize={1.5} dotColor="rgba(34, 197, 94, 0.15)" spacing={25} />
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-[0.2em] animate-fade-in">
                        <LockIcon className="w-3 h-3" />
                        Terminal Agent
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 py-1 px-4 text-xs font-mono italic">
                        v4.2.0-stable • Multi-Agent Deployment Ready
                    </Badge>

                    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-foreground max-w-4xl mx-auto leading-[1.1] animate-fade-in">
                        Build Custom AI Agents<br />
                        That Actually Solve<br />
                        Your Problems
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-fade-in">
                        Deploy autonomous AI agents that handle complex engineering and research tasks with precision, security, and enterprise-grade reliability.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Button size="lg" className="h-12 px-10 text-base font-semibold rounded-md shadow-sm bg-primary text-primary-foreground hover:bg-primary/90">
                            Deploy Agents
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-10 text-base font-semibold rounded-md border-border bg-transparent text-foreground hover:bg-muted/10 transition-colors shadow-sm">
                            View Use Cases
                        </Button>
                    </div>
                </div>
                <div className="relative max-w-5xl mx-auto">
                    {/* Dark Terminal Preview for high contrast */}
                    <div className="relative rounded-xl border border-white/10 bg-card/50 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[2.2/1] backdrop-blur-sm">
                        <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-destructive/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-primary/50" />
                            <div className="ml-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">Enterprise Console v2.0</div>
                        </div>

                        <div className="p-8 pt-14 font-mono text-sm sm:text-base h-full">
                            <div className="space-y-4 text-left">
                                <div className="flex gap-3">
                                    <span className="text-muted-foreground">$</span>
                                    <span className="text-foreground">cloudagi-cli deploy --agent=researcher --target=market-analysis</span>
                                </div>
                                <div className="text-primary font-bold pl-6 flex items-center gap-2">
                                    <SparklesIcon className="w-4 h-4" />
                                    <span>Initializing Autonomous Research Agent...</span>
                                </div>
                                <div className="text-muted-foreground/60 pl-6 space-y-1 font-medium">
                                    <div>[12:45:01] Loading enterprise knowledge base...</div>
                                    <div>[12:45:03] Connecting to real-time data streams...</div>
                                    <div>[12:45:05] Synchronizing multi-agent protocols...</div>
                                </div>
                                <div className="text-primary font-bold pl-6 flex items-center gap-2">
                                    <span>✓ Research Agent V2 deployed successfully</span>
                                </div>
                                <div className="flex gap-3 mt-6">
                                    <span className="text-muted-foreground">$</span>
                                    <span className="animate-pulse w-2 h-5 bg-primary/40" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
