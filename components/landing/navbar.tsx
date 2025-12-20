"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BotIcon, ArrowRightIcon } from "lucide-react"

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
            <div className="container px-4 md:px-6 mx-auto h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-foreground transition-all duration-300">
                    <BotIcon className="h-6 w-6 text-primary" />
                    <span>CloudAGI</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all active:scale-95 italic">Services</Link>
                    <Link href="#approach" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all active:scale-95 italic">Approach</Link>
                    <Link href="#process" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all active:scale-95 italic">Process</Link>
                    <Link href="#why-us" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all active:scale-95 italic">Why Us</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="hidden sm:flex text-muted-foreground hover:text-primary active:scale-95 transition-all">
                        Sign In
                    </Button>
                    <Button className="font-bold group active:scale-95 transition-all">
                        Schedule Consultation
                        <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}
