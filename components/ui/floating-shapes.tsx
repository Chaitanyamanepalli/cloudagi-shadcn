"use client"

import { useEffect, useRef } from "react"

interface FloatingShapesProps {
    count?: number
    color?: string
    className?: string
}

export function FloatingShapes({
    count = 5,
    color = "#22C55E",
    className = "",
}: FloatingShapesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Create floating shapes
        const shapes = Array.from({ length: count }, (_, i) => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 20 + Math.random() * 60,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.01,
            opacity: 0.05 + Math.random() * 0.1,
        }))

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            shapes.forEach((shape) => {
                // Update position
                shape.x += shape.vx
                shape.y += shape.vy
                shape.rotation += shape.rotationSpeed

                // Wrap around edges
                if (shape.x < -shape.size) shape.x = canvas.width + shape.size
                if (shape.x > canvas.width + shape.size) shape.x = -shape.size
                if (shape.y < -shape.size) shape.y = canvas.height + shape.size
                if (shape.y > canvas.height + shape.size) shape.y = -shape.size

                // Draw shape
                ctx.save()
                ctx.translate(shape.x, shape.y)
                ctx.rotate(shape.rotation)

                // Draw rounded square
                const halfSize = shape.size / 2
                ctx.strokeStyle = `${color}${Math.round(shape.opacity * 255).toString(16).padStart(2, '0')}`
                ctx.lineWidth = 2
                ctx.beginPath()
                ctx.roundRect(-halfSize, -halfSize, shape.size, shape.size, 8)
                ctx.stroke()

                ctx.restore()
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [count, color])

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{ opacity: 0.4 }}
        />
    )
}
