import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { Services } from "@/components/landing/services";
import { UseCases } from "@/components/landing/use-cases";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Page() {
    return (
        <main className="min-h-screen selection:bg-blue-500/30">
            <Navbar />
            <Hero />
            <Stats />
            <Services />
            <UseCases />
            <Process />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    );
}