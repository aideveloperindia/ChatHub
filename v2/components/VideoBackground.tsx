'use client'

import { useEffect, useRef } from 'react'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Create a colorful animated background using canvas instead of video
    // This ensures it works without needing an actual video file
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.zIndex = '0'
    canvas.style.opacity = '0.3'
    document.body.appendChild(canvas)

    let animationFrame: number
    let time = 0

    function animate() {
      if (!ctx) return
      time += 0.01
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Create flowing gradient waves
      for (let i = 0; i < 5; i++) {
        const gradient = ctx.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height
        )
        const hue = (time * 50 + i * 72) % 360
        gradient.addColorStop(0, `hsla(${hue}, 100%, 50%, 0.3)`)
        gradient.addColorStop(0.5, `hsla(${(hue + 60) % 360}, 100%, 50%, 0.2)`)
        gradient.addColorStop(1, `hsla(${(hue + 120) % 360}, 100%, 50%, 0.3)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(
          canvas.width / 2 + Math.sin(time + i) * 200,
          canvas.height / 2 + Math.cos(time + i) * 200,
          300 + Math.sin(time * 2 + i) * 100,
          0,
          Math.PI * 2
        )
        ctx.fill()
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', handleResize)
      document.body.removeChild(canvas)
    }
  }, [])

  return null
}

