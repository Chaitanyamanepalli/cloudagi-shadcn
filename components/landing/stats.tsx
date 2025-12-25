"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SectionGlow } from "@/components/ui/section-glow"
import { DotGrid } from "@/components/ui/dot-grid"

const differentiators = [
    {
        title: "Pragmatic, Not Hype-Driven",
        description: "We recommend what works for your business, not what's trending on social media. Stability first.",
        metric: "10x",
        label: "Performance Jump",
    },
    {
        title: "Transparent Process",
        description: "You'll understand exactly how your agent works. No black boxes, no vendor lock-in, just results.",
        metric: "24/7",
        label: "Autonomous Ops",
    },
    {
        title: "Fast Turnaround",
        description: "POCs in 2-3 weeks, MVPs in 4-8 weeks. We move at the speed of your startup.",
        metric: "500+",
        label: "Agents Deployed",
    },
]

export default function Stats() {
    return (
        <section id="why-us" className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
            <DotGrid dotSize={1.5} dotColor="rgba(34, 197, 94, 0.15)" spacing={25} />
            <SectionGlow position="left" color="#06B6D4" intensity={0.25} />
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Why CloudAGI</h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Built by AI Engineers, <br />
                        <span className="italic opacity-80 font-serif">For Real Businesses</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {differentiators.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="text-primary text-5xl font-bold mb-4 font-mono group-hover:scale-110 transition-transform duration-500">
                                {item.metric}
                            </div>
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                                {item.label}
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-foreground italic">{item.title}</h4>
                            <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
