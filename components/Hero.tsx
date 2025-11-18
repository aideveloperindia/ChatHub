import Image from 'next/image'
import { Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Neon Radial Background */}
      <div className="absolute inset-0 bg-radial-neon opacity-50" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">ChatHub</span>
              <br />
              <span className="text-white">Meet People Worldwide</span>
              <br />
              <span className="text-white">Instantly</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              No login. No verification. Just enter & start chatting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button inline-flex items-center gap-3 group"
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
                  width={200}
                  height={60}
                  className="rounded-lg"
                />
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-neon-gradient rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative rounded-2xl overflow-hidden shadow-glow bg-white">
                <Image
                  src="/chathubimage.webp"
                  alt="ChatHub Registration Screen"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

