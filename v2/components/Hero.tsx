'use client'

import Image from 'next/image'
import { Play, Sparkles, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 animate-pulse-shine" />
      
      {/* Shining orbs that follow mouse */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-40 transition-all duration-700 ease-out"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, rgba(255, 20, 147, 0.4) 50%, transparent 70%)',
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-shine-gradient rounded-full blur-2xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-shine-gradient rounded-full blur-2xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-shine-gradient rounded-full blur-xl opacity-30 animate-rotate" />
      
      <div className="container mx-auto px-4 z-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-shine mb-4">
              <Sparkles className="w-5 h-5 text-shine-gold animate-pulse-shine" />
              <span className="text-sm font-semibold text-shine-gold">New Generation Chat</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="text-shine block">ChatHub</span>
              <span className="text-white glow-text block mt-2">Meet People</span>
              <span className="text-shine block">Worldwide</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 font-light max-w-2xl">
              No login. No verification.
              <br />
              <span className="text-shine-gold font-semibold">Just enter & start chatting.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-button inline-flex items-center gap-3 group"
              >
                <Play className="w-6 h-6" />
                Download Now
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
                  width={220}
                  height={65}
                  className="rounded-lg filter drop-shadow-glow-cyan"
                />
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-shine-gold">1M+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-shine-gold">150+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-shine-gold">24/7</div>
                <div className="text-sm text-gray-400">Available</div>
              </div>
            </div>
          </div>
          
          {/* Right Image - 3D Card Effect */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in">
            <div className="relative w-full max-w-md card-3d">
              <div className="absolute inset-0 bg-shine-gradient rounded-3xl blur-3xl opacity-50 animate-pulse-shine" />
              <div className="relative rounded-3xl overflow-hidden shadow-shine-lg bg-white p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-shine" />
                <Image
                  src="/chathubimage.webp"
                  alt="ChatHub Registration Screen"
                  width={400}
                  height={800}
                  className="w-full h-auto rounded-2xl relative z-10"
                  priority
                />
              </div>
              {/* Shining border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-shine-gradient opacity-0 hover:opacity-100 transition-opacity duration-300" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor', padding: '2px' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-shine-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-shine-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
