"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
    const ref = useRef<T | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node || typeof window === "undefined") return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -5% 0px", ...options }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [options])

    return { ref, isVisible }
}
