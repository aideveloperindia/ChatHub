'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Play, Download, Sparkles } from 'lucide-react'

export default function DownloadCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="py-40 px-4 relative overflow-hidden">
      {/* Animated background with multiple layers */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 animate-pulse-shine" />
      <div className="absolute inset-0 bg-radial-shine opacity-40" />
      
      {/* Glowing rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full border-2 border-shine-gold/30 animate-rotate" style={{ animation: 'rotate 20s linear infinite' }} />
        <div className="absolute w-[600px] h-[600px] rounded-full border-2 border-pink-500/30 animate-rotate" style={{ animation: 'rotate 15s linear infinite reverse' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-cyan-400/30 animate-rotate" style={{ animation: 'rotate 10s linear infinite' }} />
      </div>
      
      {/* Mouse-following glow */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, rgba(255, 20, 147, 0.4) 50%, transparent 70%)',
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className={`space-y-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-shine mb-4">
              <Sparkles className="w-5 h-5 text-shine-gold animate-pulse-shine" />
              <span className="text-sm font-semibold text-shine-gold">Ready to Connect?</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black">
              <span className="text-shine block">Download</span>
              <span className="text-white glow-text block">ChatHub Now</span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
              Join millions of users worldwide and start connecting instantly
            </p>
          </div>
          
          {/* App Screenshot with 3D effect */}
          <div className="relative flex justify-center items-center my-16">
            <div className="relative w-full max-w-sm card-3d">
              <div className="absolute inset-0 bg-shine-gradient rounded-3xl blur-3xl opacity-50 animate-pulse-shine" />
              <div className="relative rounded-3xl overflow-hidden shadow-shine-lg bg-white p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent animate-shine" />
                <Image
                  src="/chathubimage.webp"
                  alt="ChatHub App"
                  width={400}
                  height={800}
                  className="w-full h-auto rounded-2xl relative z-10"
                />
                {/* Shining border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-shine-gold/50 shadow-shine" />
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-button inline-flex items-center gap-3 text-lg px-12 py-6 group"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Download on Google Play
            </a>
            
            <a
              href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/play-store-badge.svg"
                alt="Get it on Google Play"
                width={240}
                height={70}
                className="rounded-lg filter drop-shadow-glow-cyan"
              />
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16">
            <div className="glass-shine rounded-2xl p-6 hover:shadow-shine transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-black text-shine-gold mb-2">1M+</div>
              <div className="text-sm text-gray-400 font-semibold">Downloads</div>
            </div>
            <div className="glass-shine rounded-2xl p-6 hover:shadow-shine transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-black text-shine-gold mb-2">4.8★</div>
              <div className="text-sm text-gray-400 font-semibold">Rating</div>
            </div>
            <div className="glass-shine rounded-2xl p-6 hover:shadow-shine transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-black text-shine-gold mb-2">150+</div>
              <div className="text-sm text-gray-400 font-semibold">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
