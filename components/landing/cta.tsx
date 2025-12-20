"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SparklesIcon, ZapIcon, GlobeIcon, ArrowRightIcon } from "lucide-react"
import { DotGrid } from "@/components/ui/dot-grid"

export default function CTA() {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden border-t border-border">
            <DotGrid dotSize={1.5} dotColor="rgba(34, 197, 94, 0.15)" spacing={25} />
            <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Ready to Build Your <span className="text-primary italic">AI Agent?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-12">
                        Start with a free 30-minute consultation to explore what's possible for your business.
                    </p>

                    <div className="bg-card/40 border border-border p-8 rounded-2xl backdrop-blur-sm text-left shadow-2xl">
                        <form className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-primary uppercase tracking-widest pl-1">guestname.input</label>
                                <Input
                                    placeholder="Full Name"
                                    className="bg-background/50 border-white/5 focus-visible:ring-primary/50 h-10"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-primary uppercase tracking-widest pl-1">company.endpoint</label>
                                <Input
                                    placeholder="Company Name"
                                    className="bg-background/50 border-white/5 focus-visible:ring-primary/50 h-10"
                                />
                            </div>
                            <div className="sm:col-span-2 space-y-2">
                                <label className="text-[10px] font-mono text-primary uppercase tracking-widest pl-1">work_email.auth</label>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Input
                                        type="email"
                                        placeholder="Enter your work email"
                                        className="bg-background/50 border-white/5 focus-visible:ring-primary/50 h-12 flex-1"
                                    />
                                    <Button className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-bold group">
                                        Schedule Consultation
                                        <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground opacity-60">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            Free consultation
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            No obligation
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            Quick response
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
