'use client'

import { useEffect, useRef } from 'react'

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const particles: HTMLDivElement[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      
      const size = Math.random() * 4 + 2
      const colors = ['#FFD700', '#FF1493', '#00FFFF', '#FF00FF', '#FFFF00']
      const color = colors[Math.floor(Math.random() * colors.length)]
      
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.background = color
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 6}s`
      particle.style.animationDuration = `${4 + Math.random() * 4}s`
      
      containerRef.current.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach(particle => particle.remove())
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10" />
}

