"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckIcon, Code2Icon, MicroscopeIcon, TerminalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DotGrid } from "@/components/ui/dot-grid"

export function UseCases() {
    return (
        <section id="use-cases" className="py-32 bg-background relative overflow-hidden">
            <DotGrid dotSize={1.5} dotColor="rgba(34, 197, 94, 0.15)" spacing={25} />
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-24">
                    <Badge variant="outline" className="mb-6 text-primary border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">
                        Enterprise Solutions
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Built for Complex Workflows
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Our autonomous agents are tailored for specific industry challenges, ensuring high performance and security.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <Tabs defaultValue="engineering" className="w-full">
                        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16 h-12 p-1 bg-muted/30 border border-border rounded-lg">
                            <TabsTrigger value="engineering" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">Engineering</TabsTrigger>
                            <TabsTrigger value="research" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm">Research</TabsTrigger>
                        </TabsList>

                        <TabsContent value="engineering" className="focus-visible:outline-none">
                            <Card className="border-border bg-card rounded-xl overflow-hidden shadow-sm">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="p-12">
                                        <CardTitle className="text-3xl font-bold mb-6 italic">Engineering Agent</CardTitle>
                                        <CardDescription className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                            Automate complex code reviews, bug fixes, and infrastructure management with high precision.
                                        </CardDescription>
                                        <ul className="space-y-4">
                                            {[
                                                "Autonomous Bug Squashing",
                                                "Automated PR Reviews",
                                                "Infrastructure as Code optimization",
                                                "Legacy Code Refactoring",
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-foreground group">
                                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                                                        <CheckIcon className="w-3.5 h-3.5 text-primary" />
                                                    </div>
                                                    <span className="font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="mt-10 px-8 group">
                                            Get Started
                                            <TerminalIcon className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </Button>
                                    </div>
                                    <div className="bg-background/50 relative min-h-[400px] border-l border-border/50">
                                        <div className="absolute inset-6 bg-[#020617] rounded-xl border border-white/5 shadow-2xl overflow-hidden font-mono text-xs flex flex-col">
                                            <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5 flex-shrink-0">
                                                <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                                                <span className="ml-2 text-[10px] text-muted-foreground/60 uppercase tracking-tighter">engineering-agent-cli</span>
                                            </div>
                                            <div className="p-6 space-y-3 overflow-y-auto">
                                                <div className="flex gap-2">
                                                    <span className="text-primary font-bold">$</span>
                                                    <span className="text-foreground">cloudagi run review-pr --repo=main</span>
                                                </div>
                                                <div className="space-y-1 text-muted-foreground/70">
                                                    <div>Analyzing 48 files changed...</div>
                                                    <div>Found 3 edge cases in auth-logic.ts</div>
                                                    <div className="text-primary/80">Suggesting fix: memoize callback...</div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="text-primary font-bold">$</span>
                                                    <span className="text-foreground">cloudagi push fixes</span>
                                                </div>
                                                <div className="text-primary font-bold">✓ PR Review complete. 12 improvements applied.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>

                        <TabsContent value="research" className="focus-visible:outline-none">
                            <Card className="border-border bg-card rounded-xl overflow-hidden shadow-sm">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="p-12">
                                        <CardTitle className="text-3xl font-bold mb-6 italic">Research Agent</CardTitle>
                                        <CardDescription className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                            Gather, analyze, and synthesize large volumes of data into actionable enterprise insights.
                                        </CardDescription>
                                        <ul className="space-y-4">
                                            {[
                                                "Real-time Market Synthesis",
                                                "Competitor Intelligence",
                                                "Investment Data Analysis",
                                                "Academic Literature Review",
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-foreground group">
                                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                                                        <CheckIcon className="w-3.5 h-3.5 text-primary" />
                                                    </div>
                                                    <span className="font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="mt-10 px-8 group">
                                            Get Started
                                            <TerminalIcon className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </Button>
                                    </div>
                                    <div className="bg-background/50 relative min-h-[400px] border-l border-border/50">
                                        <div className="absolute inset-6 bg-[#020617] rounded-xl border border-white/5 shadow-2xl overflow-hidden font-mono text-xs flex flex-col">
                                            <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5 flex-shrink-0">
                                                <div className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                                                <span className="ml-2 text-[10px] text-muted-foreground/60 uppercase tracking-tighter">research-agent-v2</span>
                                            </div>
                                            <div className="p-6 space-y-3 overflow-y-auto">
                                                <div className="text-primary font-bold pl-6 flex items-center gap-2">
                                                    <TerminalIcon className="w-4 h-4" />
                                                    <span>$ cloudagi deploy --agent=researcher --target=market-analysis</span>
                                                </div>
                                                <div className="text-muted-foreground/60 pl-6 space-y-1 font-mono text-sm">
                                                    <div>Initializing Autonomous Research Agent...</div>
                                                    <div>[12:45:01] Loading enterprise knowledge base...</div>
                                                    <div>[12:45:03] Connecting to real-time data streams...</div>
                                                    <div>[12:45:05] Synchronizing multi-agent protocols...</div>
                                                </div>
                                                <div className="text-primary font-bold pl-6 flex items-center gap-2">
                                                    <span>✓ Research Agent V2 deployed successfully</span>
                                                </div>
                                                <div className="text-primary/40 pl-6 font-mono text-sm animate-pulse">
                                                    <span>$ _</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="text-primary font-bold">$</span>
                                                    <span className="text-foreground">cloudagi export --format=pdf</span>
                                                </div>
                                                <div className="text-primary font-bold">✓ Market Synthesis Report generated.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
