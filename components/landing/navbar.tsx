"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BotIcon } from "lucide-react"

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter text-foreground">
                        <BotIcon className="h-6 w-6 text-primary" />
                        <span>CloudAGI</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground/80">
                        <Link href="#services" className="hover:text-primary transition-colors">
                            Services
                        </Link>
                        <Link href="#process" className="hover:text-primary transition-colors">
                            Process
                        </Link>
                        <Link href="#about" className="hover:text-primary transition-colors">
                            About
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="default" className="shadow-lg shadow-primary/20">
                            Book a Call
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
