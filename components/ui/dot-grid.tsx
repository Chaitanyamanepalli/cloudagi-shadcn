"use client"

import React from "react"

interface DotGridProps {
    dotSize?: number
    dotColor?: string
    spacing?: number
    className?: string
}

export function DotGrid({
    dotSize = 1,
    dotColor = "rgba(34, 197, 94, 0.3)",
    spacing = 20,
    className = "",
}: DotGridProps) {
    const dotStyle = {
        backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
    }

    return (
        <div
            className={`absolute inset-0 ${className}`}
            style={dotStyle}
            aria-hidden="true"
        />
    )
}
