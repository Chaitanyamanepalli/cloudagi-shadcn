"use client"

import Link from "next/link"
import { BotIcon, TwitterIcon, GithubIcon, LinkedinIcon } from "lucide-react"

export function Footer() {
    return (
        <footer className="py-12 border-t border-border bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-foreground mb-4">
                            <BotIcon className="h-6 w-6 text-primary" />
                            <span>CloudAGI</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Empowering developers with intelligent, autonomous workforce solutions.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition-colors">Coding Agents</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Research Agents</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <TwitterIcon className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <GithubIcon className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <LinkedinIcon className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © 2025 CloudAGI Inc. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
