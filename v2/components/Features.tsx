'use client'

import Image from 'next/image'
import { Globe, Filter, Video, Users, MapPin, Coins, Hash, Megaphone, MessageCircle, Sparkles } from 'lucide-react'
import { useState } from 'react'

const features = [
  {
    id: 1,
    title: 'Global Community',
    subtitle: 'People from all around the world',
    image: '/chathubimage1.webp',
    icon: Globe,
    color: 'from-yellow-400 via-pink-500 to-purple-500',
    points: [
      { icon: MapPin, text: 'Nearby', detail: 'Find people close to you' },
      { icon: Coins, text: 'Free coins', detail: 'Earn rewards daily' },
      { icon: Users, text: 'Groups', detail: 'Join communities' },
      { icon: Hash, text: 'Posts', detail: 'Share your thoughts' },
      { icon: Megaphone, text: 'Channels', detail: 'Follow topics' },
    ],
    description: 'Connect with millions of users from every corner of the globe. Discover nearby people or explore international connections.',
  },
  {
    id: 2,
    title: 'Smart Filters',
    subtitle: 'Find people using filters',
    image: '/chathubimage2.webp',
    icon: Filter,
    color: 'from-cyan-400 via-blue-500 to-purple-500',
    points: [
      { icon: Users, text: 'Gender filter', detail: 'Match preferences' },
      { icon: Globe, text: 'Country filter', detail: 'Choose location' },
      { icon: Users, text: 'Age range', detail: 'Set age limits' },
      { icon: Globe, text: 'Language', detail: 'Select language' },
    ],
    description: 'Use advanced filters to find exactly who you\'re looking for. Filter by gender, country, age, and language.',
  },
  {
    id: 3,
    title: 'Multi-Modal Chat',
    subtitle: 'Chat · Voice · Video',
    image: '/chathubimage3.webp',
    icon: Video,
    color: 'from-green-400 via-teal-500 to-cyan-500',
    points: [
      { icon: MessageCircle, text: 'Text chat', detail: 'Instant messaging' },
      { icon: MessageCircle, text: 'Voice calls', detail: 'Crystal clear audio' },
      { icon: Video, text: 'Video calls', detail: 'Face to face' },
    ],
    description: 'Multiple ways to connect. Chat via text, make voice calls, or start a video conversation.',
  },
  {
    id: 4,
    title: 'Rich Profiles',
    subtitle: 'Detailed Profiles',
    image: '/chathubimage4.webp',
    icon: Users,
    color: 'from-pink-400 via-red-500 to-orange-500',
    points: [
      { icon: Users, text: 'Rich profiles', detail: 'Complete information' },
      { icon: Users, text: 'Profile photos', detail: 'Multiple images' },
      { icon: Users, text: 'Bio & interests', detail: 'Share yourself' },
    ],
    description: 'View detailed profiles with photos, bios, and interests. Get to know people before you chat.',
  },
]

export default function Features() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-shine opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-shine-gradient rounded-full blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-shine-gradient rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-shine mb-6">
            <Sparkles className="w-5 h-5 text-shine-gold animate-pulse-shine" />
            <span className="text-sm font-semibold text-shine-gold">Powerful Features</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-shine">Everything You Need</span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of social connection
          </p>
        </div>
        
        <div className="space-y-40">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0
            const isHovered = hoveredId === feature.id

            return (
              <div
                key={feature.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div
                  className={`relative ${!isEven ? 'lg:col-start-2' : ''} transition-all duration-500 ${
                    isHovered ? 'scale-105' : 'scale-100'
                  }`}
                >
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-3xl opacity-30 transition-opacity duration-500 ${isHovered ? 'opacity-50' : ''}`} />
                    <div className="relative rounded-3xl overflow-hidden shadow-shine-lg bg-white p-1">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-20' : ''}`} />
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={400}
                        height={800}
                        className="w-full h-auto rounded-2xl relative z-10"
                      />
                    </div>
                    {/* Shining border on hover */}
                    <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 ${
                      isHovered ? 'border-shine-gold shadow-shine' : 'border-transparent'
                    }`} />
                  </div>
                </div>
                
                {/* Content */}
                <div className={`space-y-8 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''} transition-all duration-500 ${isHovered ? 'translate-x-4' : ''}`}>
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-3">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-shine`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-bold text-shine-gold uppercase tracking-wider">
                        {feature.subtitle}
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-white glow-text">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {feature.points.map((point, idx) => {
                      const PointIcon = point.icon
                      return (
                        <div
                          key={idx}
                          className="glass-shine rounded-xl p-5 hover:shadow-shine transition-all duration-300 hover:scale-105 group"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform`}>
                              <PointIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-white mb-1">{point.text}</h4>
                              <p className="text-sm text-gray-400">{point.detail}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
