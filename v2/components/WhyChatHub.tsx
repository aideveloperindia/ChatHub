'use client'

import { Shield, Zap, Video, Filter, Users, Globe, Sparkles } from 'lucide-react'
import { useState } from 'react'

const reasons = [
  {
    icon: Shield,
    title: 'No login or OTP',
    description: 'Start chatting instantly without any registration or verification process.',
    color: 'from-yellow-400 to-orange-500',
    delay: '0s',
  },
  {
    icon: Zap,
    title: 'Instant chat',
    description: 'Connect with people in seconds. No waiting, no delays.',
    color: 'from-pink-500 to-red-500',
    delay: '0.2s',
  },
  {
    icon: Video,
    title: 'Voice & video supported',
    description: 'Choose how you want to communicate - text, voice, or video calls.',
    color: 'from-cyan-400 to-blue-500',
    delay: '0.4s',
  },
  {
    icon: Filter,
    title: 'Filters for perfect match',
    description: 'Find exactly who you\'re looking for with advanced filtering options.',
    color: 'from-purple-500 to-pink-500',
    delay: '0.6s',
  },
  {
    icon: Shield,
    title: 'Safe & verified users',
    description: 'Our community is moderated to ensure a safe chatting experience.',
    color: 'from-green-400 to-teal-500',
    delay: '0.8s',
  },
  {
    icon: Globe,
    title: 'Global community',
    description: 'Connect with millions of users from around the world.',
    color: 'from-blue-400 to-purple-500',
    delay: '1s',
  },
]

export default function WhyChatHub() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20 animate-pulse-shine" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-shine-gradient rounded-full blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-shine-gradient rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-shine mb-6">
            <Sparkles className="w-5 h-5 text-shine-gold animate-pulse-shine" />
            <span className="text-sm font-semibold text-shine-gold">Why Choose Us</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Why <span className="text-shine">ChatHub</span>?
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Experience the best way to meet new people online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                className="glass-shine rounded-3xl p-8 hover:shadow-shine-lg transition-all duration-500 hover:scale-105 card-3d group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ animationDelay: reason.delay }}
              >
                <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${reason.color} shadow-shine mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-white glow-text">
                  {reason.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
                
                {/* Shining effect on hover */}
                <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 ${
                  isHovered ? `border-transparent bg-gradient-to-br ${reason.color} opacity-10` : 'border-transparent'
                }`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
