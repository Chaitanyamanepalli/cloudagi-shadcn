"use client"

import { Badge } from "@/components/ui/badge"
import { SectionGlow } from "@/components/ui/section-glow"
import { DotGrid } from "@/components/ui/dot-grid"

const steps = [
    {
        title: "Discovery Call",
        time: "30-60 min",
        description: "Understand your problem and goals. Assess if AI agents are the right solution.",
        status: "RUNNING",
    },
    {
        title: "Strategy Session",
        time: "1-2 hours",
        description: "Map your workflows and requirements. Recommend tech stack and approach.",
        status: "PENDING",
    },
    {
        title: "Prototype Development",
        time: "2-3 weeks",
        description: "Build working POC with core functionality. Iterate based on your feedback.",
        status: "PENDING",
    },
    {
        title: "Refinement & Deployment",
        time: "2-4 weeks",
        description: "Optimize performance and UX. Integrate and deploy to production.",
        status: "PENDING",
    },
    {
        title: "Support & Iteration",
        time: "Ongoing",
        description: "Monitor performance metrics. Continuous improvement based on usage.",
        status: "PENDING",
    },
]

export function Process() {
    return (
        <section id="process" className="py-32 bg-background relative overflow-hidden">
            <DotGrid dotSize={1.5} dotColor="rgba(34, 197, 94, 0.15)" spacing={25} />
            <SectionGlow position="right" color="#10B981" intensity={0.2} />
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-24">
                    <Badge variant="outline" className="mb-6 text-primary border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">
                        How We Work
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Enterprise-Grade Implementation
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        A systematic, SOC2-compliant approach to deploying autonomous intelligence within your organization.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#020617] rounded-xl border border-white/5 shadow-2xl overflow-hidden font-mono text-sm">
                        <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-destructive/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-primary/50" />
                            <span className="ml-3 text-[10px] text-muted-foreground/60 uppercase tracking-widest">engagement-protocol.log</span>
                        </div>
                        <div className="p-8 space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-2 h-2 rounded-full mt-1.5 ${step.status === 'RUNNING' ? 'bg-primary animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-muted/40'}`} />
                                        {index !== steps.length - 1 && <div className="w-px flex-1 bg-white/5 my-2" />}
                                    </div>
                                    <div className="flex-1 pb-2">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                            <h4 className={`text-base font-bold transition-colors group-hover:text-primary ${step.status === 'RUNNING' ? 'text-primary' : 'text-foreground/80'}`}>
                                                STP-{index + 1}: {step.title}
                                            </h4>
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] text-muted-foreground/40 font-mono">[{step.time}]</span>
                                                <span className={`text-[9px] px-1.5 py-0.5 rounded border ${step.status === 'RUNNING' ? 'border-primary/30 text-primary bg-primary/5' : 'border-white/5 text-muted-foreground/30'}`}>
                                                    {step.status}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed text-xs">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
