import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import Problem from "@/components/landing/problem"
import Approach from "@/components/landing/approach"
import Stats from "@/components/landing/stats"
import { Services } from "@/components/landing/services"
import { UseCases } from "@/components/landing/use-cases"
import { Process } from "@/components/landing/process"
import TechStack from "@/components/landing/tech-stack"
import { Testimonials } from "@/components/landing/testimonials"
import CTA from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"
import { GridBackground } from "@/components/ui/grid-background"

export default function Page() {
    return (
        <main className="min-h-screen selection:bg-primary/30 relative overflow-hidden">
            <GridBackground />
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Problem />
                <Approach />
                <Stats />
                <Services />
                <UseCases />
                <Process />
                <TechStack />
                <Testimonials />
                <CTA />
                <Footer />
            </div>
        </main>
    );
}