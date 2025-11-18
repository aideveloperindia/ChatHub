'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Play } from 'lucide-react'

export default function DownloadCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Glowing ring animation background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glow-ring w-[600px] h-[600px] md:w-[800px] md:h-[800px]" />
        <div className="glow-ring w-[500px] h-[500px] md:w-[700px] md:h-[700px]" style={{ animationDelay: '0.5s' }} />
        <div className="glow-ring w-[400px] h-[400px] md:w-[600px] md:h-[600px]" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className={`space-y-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to <span className="text-gradient">Connect</span>?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300">
              Download ChatHub now and start meeting amazing people worldwide
            </p>
          </div>
          
          {/* App Screenshot */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-xs md:max-w-sm">
              <div className="absolute inset-0 bg-neon-gradient rounded-3xl blur-3xl opacity-40 animate-pulse-glow" />
              <div className="relative rounded-2xl overflow-hidden shadow-glow bg-white">
                <Image
                  src="/chathubimage.webp"
                  alt="ChatHub App"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button inline-flex items-center gap-3 text-lg px-10 py-5"
            >
              <Play className="w-6 h-6" />
              Download on Google Play
            </a>
            
            <a
              href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/play-store-badge.svg"
                alt="Get it on Google Play"
                width={220}
                height={65}
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

