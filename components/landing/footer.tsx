"use client"

import Link from "next/link"
import { BotIcon, TwitterIcon, GithubIcon, LinkedinIcon } from "lucide-react"
import { DotGrid } from "@/components/ui/dot-grid"

export function Footer() {
    return (
        <footer className="bg-[#020617] text-[#E2E8F0] border-t border-white/5 py-12 md:py-20 relative overflow-hidden">
            <DotGrid dotSize={1.5} dotColor="rgba(34, 197, 94, 0.1)" spacing={25} />
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-white mb-6">
                            <BotIcon className="h-6 w-6 text-primary" />
                            <span>CloudAGI</span>
                        </Link>
                        <p className="max-w-xs text-base leading-relaxed text-[#94A3B8] mb-8">
                            Transforming enterprise output through autonomous AI intelligence. Scalable, secure, and ready for production.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-[#E2E8F0] hover:text-[#22C55E] transition-colors">
                                <TwitterIcon className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-[#E2E8F0] hover:text-[#22C55E] transition-colors">
                                <GithubIcon className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Product</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#services" className="hover:text-[#22C55E] transition-colors">Services</Link></li>
                            <li><Link href="#use-cases" className="hover:text-[#22C55E] transition-colors">Use Cases</Link></li>
                            <li><Link href="#" className="hover:text-[#22C55E] transition-colors">Enterprise</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-[#22C55E] transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-[#22C55E] transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-[#22C55E] transition-colors">Privacy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Connect</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-[#22C55E] transition-colors">Twitter</Link></li>
                            <li><Link href="#" className="hover:text-[#22C55E] transition-colors">LinkedIn</Link></li>
                            <li><Link href="#" className="hover:text-[#22C55E] transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#94A3B8]">
                    <p>© 2025 CloudAGI Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-[#22C55E] transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-[#22C55E] transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
