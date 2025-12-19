"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2Icon, MicroscopeIcon, CpuIcon, LayersIcon } from "lucide-react"

const services = [
    {
        title: "Coding Agents",
        description: "Autonomous agents that can read, understand, and modify your codebase. Perfect for refactoring, writing tests, and repetitive feature implementation.",
        icon: Code2Icon,
    },
    {
        title: "Research Agents",
        description: "Deep-dive agents that scour the web, analyze papers, and synthesize complex information into actionable reports.",
        icon: MicroscopeIcon,
    },
    {
        title: "Workflow Automation",
        description: "Connect your tools and let agents handle the glue work. From Jira tickets to PR merges, automate the entire lifecycle.",
        icon: LayersIcon,
    },
    {
        title: "Custom LLM Training",
        description: "We fine-tune models on your proprietary data to create agents that speak your language and understand your domain.",
        icon: CpuIcon,
    },
]

export function Services() {
    return (
        <section id="services" className="py-32 bg-background relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-dot-white/[0.1] -z-10 h-full w-full opacity-30" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge variant="outline" className="mb-4 text-muted-foreground border-white/10">Capabilities</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60">
                        Specialized Intelligence
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                        Our agents are not generic chatbots. They are purpose-built tools designed to integrate deeply into your technical workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <Card key={index} className="group relative overflow-hidden border-white/5 bg-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]">
                            {/* Card gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <CardHeader className="relative z-10">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-7 h-7 text-primary" />
                                </div>
                                <CardTitle className="text-2xl font-semibold tracking-tight">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
