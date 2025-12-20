"use client"

interface SectionGlowProps {
    position?: "left" | "right" | "center"
    color?: string
    intensity?: number
    className?: string
}

export function SectionGlow({
    position = "center",
    color = "#22C55E",
    intensity = 0.3,
    className = "",
}: SectionGlowProps) {
    const positionStyles = {
        left: "left-0 -translate-x-1/2",
        right: "right-0 translate-x-1/2",
        center: "left-1/2 -translate-x-1/2",
    }

    return (
        <div
            className={`absolute top-1/2 -translate-y-1/2 ${positionStyles[position]} pointer-events-none ${className}`}
            style={{
                width: "600px",
                height: "600px",
                background: `radial-gradient(circle, ${color}${Math.round(intensity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
                filter: "blur(80px)",
                opacity: intensity,
            }}
        />
    )
}
