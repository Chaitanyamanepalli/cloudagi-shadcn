
import { SearchIcon, LayersIcon, RocketIcon, RefreshCcwIcon } from "lucide-react"
import { DotGrid } from "@/components/ui/dot-grid"

const approaches = [
    {
        title: "Discover the Right Solution",
        description: "We start by understanding your problem, not pitching technology.",
        icon: <SearchIcon className="w-5 h-5 text-primary" />,
    },
    {
        title: "Find the Best Stack",
        description: "Model selection, MCP integration, and skill recommendations.",
        icon: <LayersIcon className="w-5 h-5 text-primary" />,
    },
    {
        title: "Build & Deploy Fast",
        description: "From POC to production, we move quickly without cutting corners.",
        icon: <RocketIcon className="w-5 h-5 text-primary" />,
    },
    {
        title: "Optimize & Iterate",
        description: "Agents improve with use - we help you refine based on real data.",
        icon: <RefreshCcwIcon className="w-5 h-5 text-primary" />,
    },
]

export default function Approach() {
    return (
        <section id="approach" className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
            <DotGrid dotSize={1.5} dotColor="rgba(34, 197, 94, 0.15)" spacing={25} />
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Methodology</h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground italic">
                        We Don't Just Build - We Guide
                    </h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {approaches.map((item, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-card/20 border border-white/5 hover:bg-card/40 transition-all duration-300 group">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="text-lg font-bold mb-3 text-foreground">{item.title}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
