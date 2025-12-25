"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarIcon } from "lucide-react"
import { SectionGlow } from "@/components/ui/section-glow"
import { DotGrid } from "@/components/ui/dot-grid"

const testimonials = [
    {
        quote: "CloudAGI's coding agents reduced our PR review time by 70%. It's like having a senior engineer available 24/7.",
        author: "Sarah Chen",
        role: "CTO, TechFlow",
        rating: 5,
    },
    {
        quote: "The research agents are incredible. They synthesize market data faster than our entire analyst team combined.",
        author: "Marcus Rodriguez",
        role: "VP Product, DataCore",
        rating: 5,
    },
    {
        quote: "We automated our entire testing pipeline. The ROI was immediate and the quality improvements were measurable.",
        author: "Aisha Patel",
        role: "Engineering Lead, CloudScale",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
            <DotGrid dotSize={1.5} dotColor="rgba(34, 197, 94, 0.15)" spacing={25} />
            <SectionGlow position="center" color="#06B6D4" intensity={0.15} />
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-24">
                    <Badge variant="outline" className="mb-6 text-primary border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">
                        Wall of Love
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Trusted by Engineering Leaders
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        See how top teams are scaling their output with CloudAGI autonomous agents.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-border bg-card/40 hover:bg-card/60 p-2 rounded-xl transition-all duration-300 backdrop-blur-sm">
                            <CardHeader className="p-8 pb-4">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} className="w-4 h-4 fill-[#06B6D4] text-[#06B6D4]" />
                                    ))}
                                </div>
                                <blockquote className="text-lg text-foreground leading-relaxed mb-6 font-medium italic">
                                    "{testimonial.quote}"
                                </blockquote>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold border-2 border-accent">
                                    {testimonial.author[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">{testimonial.author}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
