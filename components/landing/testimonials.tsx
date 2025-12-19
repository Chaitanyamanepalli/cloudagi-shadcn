"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { QuoteIcon, StarIcon } from "lucide-react"

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
        <section className="py-32 bg-background relative">
            <div className="absolute inset-0 bg-grid-small-white/[0.05] -z-10" />

            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 text-muted-foreground border-white/10">Testimonials</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60">
                        Loved by Engineering Teams
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        See how teams are transforming their workflows with intelligent automation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="relative overflow-hidden border-white/10 bg-white/5 hover:border-primary/30 transition-all duration-300 group">
                            <CardContent className="p-8">
                                <QuoteIcon className="w-10 h-10 text-primary/20 mb-4" />

                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <StarIcon key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>

                                <p className="text-foreground/90 leading-relaxed mb-6 text-base">
                                    "{testimonial.quote}"
                                </p>

                                <div className="border-t border-white/10 pt-4">
                                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </CardContent>

                            {/* Hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
