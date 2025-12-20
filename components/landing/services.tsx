"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, ZapIcon, CommandIcon, BoxesIcon, RefreshCwIcon, Code2Icon, MicroscopeIcon, CpuIcon, LayersIcon } from "lucide-react"
import { FloatingShapes } from "@/components/ui/floating-shapes"
import { DotGrid } from "@/components/ui/dot-grid"

const services = [
    {
        title: "Custom AI Agent Development",
        description: "Build internal tools, customer-facing bots, and complex workflow automation tailored to your business.",
        icon: <Code2Icon className="w-6 h-6" />,
        badge: "active-agent",
    },
    {
        title: "POC & MVP Development",
        description: "Validate your AI use case with a working prototype in weeks, not months. Fast, lean, and focused.",
        icon: <ZapIcon className="w-6 h-6" />,
        badge: "rapid-deploy",
    },
    {
        title: "Agent Tech Stack Consulting",
        description: "Get expert guidance on models, frameworks (LangChain, LlamaIndex), MCPs, and tools.",
        icon: <LayersIcon className="w-6 h-6" />,
        badge: "stack-sync",
    },
    {
        title: "Prompt Engineering & Optimization",
        description: "Craft and refine prompts for maximum agent performance, accuracy, and cost-efficiency.",
        icon: <CommandIcon className="w-6 h-6" />,
        badge: "prompt-v4",
    },
    {
        title: "Model & MCP Selection",
        description: "Navigate the landscape to find the perfect fit for your specific needs, privacy, and budget.",
        icon: <BoxesIcon className="w-6 h-6" />,
        badge: "mcp-ready",
    },
    {
        title: "Ongoing Support & Iteration",
        description: "Keep your agents running smoothly and improving over time with real-world performance data.",
        icon: <RefreshCwIcon className="w-6 h-6" />,
        badge: "support-live",
    },
]

export function Services() {
    return (
        <section id="services" className="py-32 bg-background relative overflow-hidden">
            <DotGrid dotSize={1.5} dotColor="rgba(34, 197, 94, 0.15)" spacing={25} />
            <FloatingShapes count={8} color="#22C55E" />
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-24">
                    <Badge variant="outline" className="mb-6 text-primary border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">
                        Specialized Intelligence
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Enterprise-Ready Capabilities
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Our autonomous agents are designed to integrate with your existing infrastructure and handle mission-critical tasks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <Card key={index} className="group relative overflow-hidden border-border bg-card/40 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <div className="px-2 py-1 rounded bg-white/5 border border-white/5 font-mono text-[10px] text-primary/60 uppercase tracking-widest">
                                    {service.badge}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground italic">{service.title}</h3>
                            <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                                {service.description}
                            </p>
                            <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                                Learn more <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
