
import { AlertCircleIcon, ShieldAlertIcon, ClockIcon } from "lucide-react"
import { DotGrid } from "@/components/ui/dot-grid"

const problems = [
    {
        title: "Too Many Options",
        description: "Hundreds of models, frameworks, and MCPs - where do you even begin your journey?",
        icon: <AlertCircleIcon className="w-6 h-6 text-primary" />,
    },
    {
        title: "Limited Expertise",
        description: "Your team knows your business inside out, but specialized AI architecture is a different beast.",
        icon: <ShieldAlertIcon className="w-6 h-6 text-primary" />,
    },
    {
        title: "Fast-Moving Space",
        description: "What's considered best practice today might be completely outdated by tomorrow morning.",
        icon: <ClockIcon className="w-6 h-6 text-primary" />,
    },
]

export default function Problem() {
    return (
        <section id="problem" className="py-24 bg-background relative overflow-hidden border-t border-white/5">
            <DotGrid dotSize={1.5} dotColor="rgba(34, 197, 94, 0.15)" spacing={25} />
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">The Challenge</h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        The AI Agent Landscape <br />
                        <span className="italic opacity-80">Is Overwhelming</span>
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {problems.map((problem, index) => (
                        <div key={index} className="group p-8 rounded-2xl bg-card/30 border border-white/5 hover:border-primary/20 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                {problem.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-foreground">{problem.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                {problem.description}
                            </p>
                            <div className="mt-6 h-1 w-0 group-hover:w-full bg-primary/20 transition-all duration-500 rounded-full" />
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-muted-foreground italic text-lg">
                        "That's where <span className="text-primary font-bold not-italic">CloudAGI</span> comes in."
                    </p>
                </div>
            </div>
        </section>
    )
}
