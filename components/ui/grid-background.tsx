"use client"

import { useEffect, useRef } from "react"

interface GridBackgroundProps {
    className?: string
}

interface Orb {
    x: number
    y: number
    radius: number
    vx: number
    vy: number
    color: string
    pulseSpeed: number
    pulseOffset: number
}

export function GridBackground({ className = "" }: GridBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Create floating orbs
        const orbs: Orb[] = [
            {
                x: canvas.width * 0.2,
                y: canvas.height * 0.3,
                radius: 300,
                vx: 0.3,
                vy: 0.2,
                color: "rgba(34, 197, 94, 0.15)",
                pulseSpeed: 0.002,
                pulseOffset: 0,
            },
            {
                x: canvas.width * 0.7,
                y: canvas.height * 0.6,
                radius: 350,
                vx: -0.2,
                vy: 0.3,
                color: "rgba(16, 185, 129, 0.12)",
                pulseSpeed: 0.0025,
                pulseOffset: Math.PI,
            },
            {
                x: canvas.width * 0.5,
                y: canvas.height * 0.1,
                radius: 250,
                vx: 0.25,
                vy: -0.15,
                color: "rgba(74, 222, 128, 0.1)",
                pulseSpeed: 0.003,
                pulseOffset: Math.PI / 2,
            },
            {
                x: canvas.width * 0.8,
                y: canvas.height * 0.2,
                radius: 200,
                vx: -0.15,
                vy: 0.25,
                color: "rgba(6, 78, 59, 0.2)",
                pulseSpeed: 0.0018,
                pulseOffset: Math.PI * 1.5,
            },
        ]

        let time = 0

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw orbs
            orbs.forEach((orb) => {
                // Update position
                orb.x += orb.vx
                orb.y += orb.vy

                // Bounce off edges
                if (orb.x < -orb.radius || orb.x > canvas.width + orb.radius) {
                    orb.vx *= -1
                }
                if (orb.y < -orb.radius || orb.y > canvas.height + orb.radius) {
                    orb.vy *= -1
                }

                // Pulsing effect
                const pulse = Math.sin(time * orb.pulseSpeed + orb.pulseOffset) * 50
                const currentRadius = orb.radius + pulse

                // Create gradient
                const gradient = ctx.createRadialGradient(
                    orb.x,
                    orb.y,
                    0,
                    orb.x,
                    orb.y,
                    currentRadius
                )
                gradient.addColorStop(0, orb.color)
                gradient.addColorStop(1, "rgba(34, 197, 94, 0)")

                // Draw orb
                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(orb.x, orb.y, currentRadius, 0, Math.PI * 2)
                ctx.fill()
            })

            time++
            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [])

    return (
        <>
            <canvas
                ref={canvasRef}
                className={`fixed inset-0 pointer-events-none z-0 ${className}`}
                style={{ opacity: 0.6 }}
            />
            {/* Noise texture overlay */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
            {/* Subtle gradient overlay */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.03) 0%, transparent 50%)",
                }}
            />
        </>
    )
}
