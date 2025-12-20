import { FloatingShapes } from "@/components/ui/floating-shapes"
import { DotGrid } from "@/components/ui/dot-grid"

const categories = [
    {
        name: "LLM Providers",
        items: ["OpenAI", "Anthropic", "Google", "xAI", "Open-source"],
    },
    {
        name: "Agent Frameworks",
        items: ["LangChain", "LlamaIndex", "AutoGen", "CrewAI"],
    },
    {
        name: "MCPs & Integrations",
        items: ["Custom MCPs", "API Sync", "Tool Calling", "Vector DBs"],
    },
    {
        name: "Platforms",
        items: ["Vercel", "Supabase", "GCP", "Cloudflare"],
    },
]

export default function TechStack() {
    return (
        <section id="tech-stack" className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
            <DotGrid dotSize={1.5} dotColor="rgba(34, 197, 94, 0.15)" spacing={25} />
            <FloatingShapes count={6} color="#10B981" />
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">The Stack</h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground italic">
                        Technology We Work With
                    </h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, idx) => (
                        <div key={idx} className="p-6 bg-card/20 border border-white/5 rounded-xl hover:border-primary/20 transition-all duration-300">
                            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {category.name}
                            </h4>
                            <div className="space-y-3">
                                {category.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground group">
                                        <span className="text-primary/20 group-hover:text-primary transition-colors font-mono">&gt;</span>
                                        <span className="group-hover:text-foreground transition-colors font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-16 text-center text-muted-foreground text-sm italic opacity-60">
                    "We're technology-agnostic - we choose what's best for your use case."
                </p>
            </div>
        </section>
    )
}
