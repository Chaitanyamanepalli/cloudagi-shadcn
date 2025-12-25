"use client"

import { Button } from "@/components/ui/button"
import { ArrowRightIcon, TerminalIcon, LockIcon, SparklesIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Hero() {
    return (
        <section className="relative pt-32 pb-40 overflow-hidden min-h-screen bg-black">
            {/* Animated Motion Trails Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                {/* Base gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-purple-950/20" />

                {/* Animated flowing lines */}
                <svg className="absolute inset-0 w-full h-full opacity-75" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="trail1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.85" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                        </linearGradient>
                        <linearGradient id="trail2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.75" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                        </linearGradient>
                        <linearGradient id="trail3" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Flowing trail paths */}
                    <path
                        d="M-100,200 Q400,100 800,300 T1600,400"
                        stroke="url(#trail1)"
                        strokeWidth="3.5"
                        fill="none"
                        filter="url(#glow)"
                        className="animate-trail-1"
                    />
                    <path
                        d="M-100,400 Q300,300 700,500 T1500,600"
                        stroke="url(#trail2)"
                        strokeWidth="3"
                        fill="none"
                        filter="url(#glow)"
                        className="animate-trail-2"
                    />
                    <path
                        d="M-100,600 Q500,500 900,700 T1700,800"
                        stroke="url(#trail3)"
                        strokeWidth="3.5"
                        fill="none"
                        filter="url(#glow)"
                        className="animate-trail-3"
                    />
                    <path
                        d="M1920,100 Q1500,200 1100,150 T300,200"
                        stroke="url(#trail1)"
                        strokeWidth="3"
                        fill="none"
                        filter="url(#glow)"
                        className="animate-trail-4"
                    />
                </svg>

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float shadow-md shadow-cyan-400/50"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${5 + Math.random() * 10}s`,
                                opacity: Math.random() * 0.4 + 0.4
                            }}
                        />
                    ))}
                </div>

                {/* Radial glow effects */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
            </div>

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65 z-[1]" />

            {/* Content Layer */}
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-[10px] font-bold text-cyan-300 uppercase tracking-[0.2em] animate-fade-in backdrop-blur-md shadow-lg shadow-cyan-500/20">
                        <LockIcon className="w-3 h-3" />
                        Terminal Agent
                    </div>
                    <Badge variant="outline" className="text-cyan-300 border-cyan-400/40 bg-cyan-500/10 py-1 px-4 text-xs font-mono italic backdrop-blur-md shadow-lg shadow-cyan-500/10">
                        v4.2.0-stable • Multi-Agent Deployment Ready
                    </Badge>

                    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white max-w-4xl mx-auto leading-[1.1] animate-fade-in drop-shadow-2xl">
                        Build Custom AI Agents<br />
                        That Actually Solve<br />
                        Your Problems
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed animate-fade-in drop-shadow-lg">
                        Deploy autonomous AI agents that handle complex engineering and research tasks with precision, security, and enterprise-grade reliability.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Button size="lg" className="h-12 px-10 text-base font-semibold rounded-md shadow-xl shadow-cyan-500/30 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-300 border border-cyan-400/30">
                            Deploy Agents
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-10 text-base font-semibold rounded-md border-cyan-400/30 bg-black/50 backdrop-blur-md text-cyan-100 hover:bg-cyan-500/20 transition-all duration-300 shadow-lg hover:scale-105">
                            View Use Cases
                        </Button>
                    </div>
                </div>
                <div className="relative max-w-5xl mx-auto mt-16">
                    {/* Dark Terminal Preview with enhanced glass effect */}
                    <div className="relative rounded-xl border border-cyan-400/30 bg-black/40 shadow-2xl shadow-cyan-500/20 overflow-hidden aspect-[16/9] md:aspect-[2.2/1] backdrop-blur-xl">
                        <div className="absolute top-0 left-0 right-0 h-10 bg-cyan-500/10 border-b border-cyan-400/20 flex items-center px-4 gap-1.5 backdrop-blur-md">
                            <div className="w-3 h-3 rounded-full bg-red-500/70 shadow-lg shadow-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70 shadow-lg shadow-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-cyan-500/70 shadow-lg shadow-cyan-500/50" />
                            <div className="ml-4 text-[10px] font-bold text-cyan-300/80 uppercase tracking-widest">Enterprise Console v2.0</div>
                        </div>

                        <div className="p-8 pt-14 font-mono text-sm sm:text-base h-full">
                            <div className="space-y-4 text-left">
                                <div className="flex gap-3">
                                    <span className="text-cyan-400">$</span>
                                    <span className="text-gray-200">cloudagi-cli deploy --agent=researcher --target=market-analysis</span>
                                </div>
                                <div className="text-cyan-400 font-bold pl-6 flex items-center gap-2">
                                    <SparklesIcon className="w-4 h-4" />
                                    <span>Initializing Autonomous Research Agent...</span>
                                </div>
                                <div className="text-gray-400/80 pl-6 space-y-1 font-medium">
                                    <div>[12:45:01] Loading enterprise knowledge base...</div>
                                    <div>[12:45:03] Connecting to real-time data streams...</div>
                                    <div>[12:45:05] Synchronizing multi-agent protocols...</div>
                                </div>
                                <div className="text-cyan-400 font-bold pl-6 flex items-center gap-2">
                                    <span>✓ Research Agent V2 deployed successfully</span>
                                </div>
                                <div className="flex gap-3 mt-6">
                                    <span className="text-cyan-400">$</span>
                                    <span className="animate-pulse w-2 h-5 bg-cyan-400/60" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes trail-1 {
                    0%, 100% { transform: translateX(0) translateY(0); opacity: 0.6; }
                    50% { transform: translateX(-50px) translateY(30px); opacity: 1; }
                }
                @keyframes trail-2 {
                    0%, 100% { transform: translateX(0) translateY(0); opacity: 0.5; }
                    50% { transform: translateX(40px) translateY(-20px); opacity: 0.9; }
                }
                @keyframes trail-3 {
                    0%, 100% { transform: translateX(0) translateY(0); opacity: 0.4; }
                    50% { transform: translateX(-30px) translateY(-40px); opacity: 0.8; }
                }
                @keyframes trail-4 {
                    0%, 100% { transform: translateX(0) translateY(0); opacity: 0.5; }
                    50% { transform: translateX(60px) translateY(25px); opacity: 0.7; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-20px) translateX(10px); }
                    50% { transform: translateY(-40px) translateX(-10px); }
                    75% { transform: translateY(-20px) translateX(5px); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.1); }
                }
                .animate-trail-1 { animation: trail-1 8s ease-in-out infinite; }
                .animate-trail-2 { animation: trail-2 10s ease-in-out infinite; }
                .animate-trail-3 { animation: trail-3 12s ease-in-out infinite; }
                .animate-trail-4 { animation: trail-4 9s ease-in-out infinite; }
                .animate-float { animation: float linear infinite; }
                .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
            `}</style>
        </section>
    )
}
