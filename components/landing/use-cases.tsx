"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckIcon, Code2Icon, MicroscopeIcon } from "lucide-react"

const codingFeatures = [
    "Automated code reviews and PR analysis",
    "Intelligent refactoring suggestions",
    "Test generation and coverage optimization",
    "Documentation auto-generation",
    "Bug detection and security scanning",
]

const researchFeatures = [
    "Market trend analysis and reporting",
    "Competitive intelligence gathering",
    "Academic paper summarization",
    "Data synthesis from multiple sources",
    "Custom research workflows",
]

export function UseCases() {
    return (
        <section className="py-32 bg-muted/30 relative">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 text-muted-foreground border-white/10">Use Cases</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60">
                        Built for Your Workflow
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore how our agents integrate seamlessly into your development and research processes.
                    </p>
                </div>

                <Tabs defaultValue="coding" className="max-w-5xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 mb-12 bg-white/5 border border-white/10 p-1">
                        <TabsTrigger value="coding" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            <Code2Icon className="w-4 h-4 mr-2" />
                            Coding Agents
                        </TabsTrigger>
                        <TabsTrigger value="research" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            <MicroscopeIcon className="w-4 h-4 mr-2" />
                            Research Agents
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="coding" className="space-y-6">
                        <Card className="border-white/10 bg-white/5">
                            <CardHeader>
                                <CardTitle className="text-2xl">Autonomous Code Intelligence</CardTitle>
                                <CardDescription className="text-base">
                                    Let AI handle the repetitive tasks while you focus on architecture and innovation.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {codingFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckIcon className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-foreground/90 text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="research" className="space-y-6">
                        <Card className="border-white/10 bg-white/5">
                            <CardHeader>
                                <CardTitle className="text-2xl">Deep Research Automation</CardTitle>
                                <CardDescription className="text-base">
                                    Transform weeks of research into hours with AI-powered analysis and synthesis.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {researchFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckIcon className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-foreground/90 text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
