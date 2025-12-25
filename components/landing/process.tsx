"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { SectionGlow } from "@/components/ui/section-glow"
import { DotGrid } from "@/components/ui/dot-grid"
import { useScrollReveal } from "@/lib/use-scroll-reveal"

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
    const [activeStep, setActiveStep] = useState(0)
    const selectedStep = steps[activeStep]
    const { ref: cardRef, isVisible } = useScrollReveal<HTMLDivElement>()

    return (
        <section id="process" className="py-32 bg-background relative overflow-hidden">
            <DotGrid dotSize={1.5} dotColor="rgba(34, 197, 94, 0.15)" spacing={25} />
            <SectionGlow position="right" color="#06B6D4" intensity={0.2} />
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
                    <div
                        ref={cardRef}
                        className={`bg-[#020617] rounded-xl border border-white/5 shadow-2xl overflow-hidden font-mono text-sm transition duration-700 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                    >
                        <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5 flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-destructive/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-primary/50" />
                            <span className="ml-3 text-[10px] text-muted-foreground/60 uppercase tracking-widest">engagement-protocol.log</span>
                        </div>
                        <div className="relative border-b border-white/5 bg-white/5/50 px-6 sm:px-8 py-5 sm:py-6 flex flex-col gap-2 overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-[3px] bg-white/5" />
                            <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#22d3ee_0%,#34d399_50%,#22d3ee_100%)] animate-progress" />
                            <div className="flex items-center justify-between gap-2 text-[11px] text-muted-foreground/60 uppercase tracking-[0.08em]">
                                <span>Selected Step</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px]">[{selectedStep.time}]</span>
                                    <span className={`text-[9px] px-1.5 py-0.5 rounded border ${selectedStep.status === 'RUNNING' ? 'border-primary/30 text-primary bg-primary/5' : 'border-white/5 text-muted-foreground/30'}`}>
                                        {selectedStep.status}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start justify-between gap-3">
                                <div className="space-y-1">
                                    <p className="text-xs text-muted-foreground/60">ENGAGEMENT-PROTOCOL/STP-{activeStep + 1}</p>
                                    <p className="text-base sm:text-lg font-semibold text-foreground">{selectedStep.title}</p>
                                </div>
                                <div className="flex items-center gap-2 text-[11px] text-muted-foreground/60">
                                    <span className="hidden sm:inline">Navigate</span>
                                    <div className="flex items-center overflow-hidden rounded border border-white/5">
                                        <button
                                            type="button"
                                            className="px-2 py-1 hover:bg-white/5 transition"
                                            onClick={() => setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))}
                                            aria-label="Previous step"
                                        >
                                            ←
                                        </button>
                                        <div className="px-2 py-1 border-l border-r border-white/5 text-[10px]">
                                            {activeStep + 1}/{steps.length}
                                        </div>
                                        <button
                                            type="button"
                                            className="px-2 py-1 hover:bg-white/5 transition"
                                            onClick={() => setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))}
                                            aria-label="Next step"
                                        >
                                            →
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                                {selectedStep.description}
                            </p>
                        </div>
                        <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                            {steps.map((step, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setActiveStep(index)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault()
                                            setActiveStep(index)
                                        }
                                    }}
                                    aria-pressed={activeStep === index}
                                    className={`w-full text-left flex gap-4 sm:gap-6 group rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 ${
                                        activeStep === index
                                            ? 'border-primary/30 bg-primary/5 shadow-[0_0_0_1px_rgba(59,130,246,0.15)]'
                                            : 'border-white/5 hover:border-white/10 hover:bg-white/5'
                                    }`}
                                >
                                    <div className="flex flex-col items-center py-4">
                                        <div className={`w-2 h-2 rounded-full mt-1.5 ${step.status === 'RUNNING' ? 'bg-primary animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-muted/40'}`} />
                                        {index !== steps.length - 1 && <div className="w-px flex-1 bg-white/5 my-2" />}
                                    </div>
                                    <div className="flex-1 py-4 pr-4 space-y-2">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                            <h4 className={`text-sm sm:text-base font-bold leading-tight transition-colors group-hover:text-primary ${step.status === 'RUNNING' ? 'text-primary' : 'text-foreground/80'}`}>
                                                STP-{index + 1}: {step.title}
                                            </h4>
                                            <div className="flex items-center gap-2 sm:gap-3 flex-wrap text-[10px] sm:text-[11px]">
                                                <span className="text-muted-foreground/50">[{step.time}]</span>
                                                <span className={`text-[9px] px-1.5 py-0.5 rounded border ${step.status === 'RUNNING' ? 'border-primary/30 text-primary bg-primary/5' : 'border-white/5 text-muted-foreground/30'}`}>
                                                    {step.status}
                                                </span>
                                            </div>
                                        </div>
                                        <p className={`text-muted-foreground leading-relaxed text-xs sm:text-sm ${activeStep === index ? '' : 'line-clamp-2 sm:line-clamp-3'}`}>
                                            {step.description}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes progress {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(0%); }
                    100% { transform: translateX(100%); }
                }
                .animate-progress { animation: progress 6s linear infinite; }
            `}</style>
        </section>
    )
}
