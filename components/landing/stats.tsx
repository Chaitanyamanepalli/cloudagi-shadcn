"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const stats = [
    { value: "10K+", label: "Lines of Code Automated" },
    { value: "500+", label: "Hours Saved Monthly" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Agent Availability" },
]

export function Stats() {
    return (
        <section className="py-20 border-y border-white/5 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 text-muted-foreground border-white/10">Proven Results</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Trusted by Forward-Thinking Teams
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <Separator className="my-3 bg-white/10 mx-auto w-12" />
                            <div className="text-sm md:text-base text-muted-foreground">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
