"use client"

import { useEffect, useRef } from "react"

interface LightPillarProps {
    topColor?: string
    bottomColor?: string
    intensity?: number
    glowAmount?: number
    className?: string
}

export function LightPillar({
    topColor = "#22C55E",
    bottomColor = "#10B981",
    intensity = 1.0,
    glowAmount = 0.8,
    className = "",
}: LightPillarProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resizeCanvas = () => {
            const parent = canvas.parentElement
            if (parent) {
                canvas.width = parent.offsetWidth
                canvas.height = parent.offsetHeight
            }
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        let rotation = 0

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const centerX = canvas.width / 2
            const pillarWidth = Math.min(canvas.width * 0.4, 600)

            // Slowly rotate the pillar
            rotation += 0.0005

            // Create main pillar gradient
            const gradient = ctx.createLinearGradient(
                centerX - pillarWidth / 2,
                0,
                centerX + pillarWidth / 2,
                canvas.height
            )

            // Add gradient stops with opacity based on intensity
            gradient.addColorStop(0, `${topColor}${Math.round(intensity * 25).toString(16).padStart(2, '0')}`)
            gradient.addColorStop(0.3, `${topColor}${Math.round(intensity * 40).toString(16).padStart(2, '0')}`)
            gradient.addColorStop(0.5, `${bottomColor}${Math.round(intensity * 50).toString(16).padStart(2, '0')}`)
            gradient.addColorStop(0.7, `${bottomColor}${Math.round(intensity * 40).toString(16).padStart(2, '0')}`)
            gradient.addColorStop(1, `${bottomColor}${Math.round(intensity * 15).toString(16).padStart(2, '0')}`)

            // Draw main pillar with slight rotation effect
            ctx.save()
            ctx.translate(centerX, canvas.height / 2)
            ctx.rotate(rotation)
            ctx.translate(-centerX, -canvas.height / 2)

            // Draw the pillar
            ctx.fillStyle = gradient
            ctx.fillRect(
                centerX - pillarWidth / 2,
                0,
                pillarWidth,
                canvas.height
            )

            // Add glow layers
            for (let i = 0; i < 3; i++) {
                const glowGradient = ctx.createRadialGradient(
                    centerX,
                    canvas.height / 2,
                    pillarWidth / 4,
                    centerX,
                    canvas.height / 2,
                    pillarWidth / 2 + i * 100
                )

                const glowOpacity = Math.round((glowAmount * intensity * (3 - i) * 10)).toString(16).padStart(2, '0')
                glowGradient.addColorStop(0, `${topColor}${glowOpacity}`)
                glowGradient.addColorStop(1, `${bottomColor}00`)

                ctx.fillStyle = glowGradient
                ctx.fillRect(
                    centerX - (pillarWidth / 2 + i * 100),
                    0,
                    pillarWidth + i * 200,
                    canvas.height
                )
            }

            ctx.restore()

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [topColor, bottomColor, intensity, glowAmount])

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{
                mixBlendMode: "screen",
                opacity: 0.7,
                width: "100%",
                height: "100%"
            }}
        />
    )
}
