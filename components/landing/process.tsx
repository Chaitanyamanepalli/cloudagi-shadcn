"use client"

import { CheckCircle2Icon } from "lucide-react"

const steps = [
    {
        number: "01",
        title: "Discovery & Analysis",
        description: "We analyze your internal workflows to identify high-value automation targets.",
    },
    {
        number: "02",
        title: "Agent Architecture",
        description: "We design a multi-agent system tailored to your specific tools and data sources.",
    },
    {
        number: "03",
        title: "Deployment & Integration",
        description: "Seamlessly integrate agents into your CI/CD pipelines or Slack workspaces.",
    },
]

export function Process() {
    return (
        <section id="process" className="py-32 border-t border-white/5 bg-background relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-start justify-between max-w-7xl mx-auto">
                    <div className="md:w-1/3 sticky top-32">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                            How We Build
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-sm">
                            We define a clear path from manual drudgery to automated efficiency. Our process is iterative, transparent, and security-focused.
                        </p>
                        <div className="flex items-center gap-3 text-sm font-medium text-white/80 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
                            <CheckCircle2Icon className="w-4 h-4 text-green-500" />
                            <span>SOC2 Compliant Process</span>
                        </div>
                    </div>

                    <div className="md:w-2/3 grid gap-12">
                        {steps.map((step, index) => (
                            <div key={index} className="relative pl-12 md:pl-16 border-l border-white/10 py-4 group">
                                <div className="absolute left-0 top-6 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                                <span className="text-8xl font-bold text-white/[0.03] absolute -top-8 right-0 pointer-events-none select-none group-hover:text-white/[0.08] transition-colors duration-500">
                                    {step.number}
                                </span>
                                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
