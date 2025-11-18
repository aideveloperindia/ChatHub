'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Globe, Filter, Video, Users } from 'lucide-react'
import { useState } from 'react'

const detailedFeatures = [
  {
    id: 1,
    title: 'Global Community',
    subtitle: 'People from all around the world',
    image: '/chathubimage1.webp',
    icon: Globe,
    color: 'from-yellow-400 via-pink-500 to-purple-500',
    description: 'Connect with millions of users from every corner of the globe. Whether you want to chat with someone nearby or explore international connections, ChatHub brings the world to your fingertips.',
    features: [
      { text: 'Find people nearby', detail: 'Discover users in your area and make local connections' },
      { text: 'Free coins system', detail: 'Earn and use coins to unlock premium features' },
      { text: 'Join groups', detail: 'Participate in group chats with shared interests' },
      { text: 'Browse posts', detail: 'See what the community is talking about' },
      { text: 'Follow channels', detail: 'Subscribe to channels for regular updates' },
    ],
  },
  {
    id: 2,
    title: 'Smart Filtering',
    subtitle: 'Find people using filters',
    image: '/chathubimage2.webp',
    icon: Filter,
    color: 'from-cyan-400 via-blue-500 to-purple-500',
    description: 'Our advanced filtering system helps you find exactly who you\'re looking for. Customize your search with multiple criteria to match with compatible users.',
    features: [
      { text: 'Gender filter', detail: 'Filter by gender preference' },
      { text: 'Country filter', detail: 'Connect with people from specific countries' },
      { text: 'Age range', detail: 'Set your preferred age range for matches' },
      { text: 'Language preference', detail: 'Chat in your preferred language' },
    ],
  },
  {
    id: 3,
    title: 'Multiple Communication Modes',
    subtitle: 'Chat · Voice · Video',
    image: '/chathubimage3.webp',
    icon: Video,
    color: 'from-green-400 via-teal-500 to-cyan-500',
    description: 'Choose how you want to connect. Whether you prefer texting, voice calls, or face-to-face video chats, ChatHub supports all communication styles.',
    features: [
      { text: 'Text chat', detail: 'Send messages, emojis, and media files' },
      { text: 'Voice calls', detail: 'Make crystal-clear voice calls' },
      { text: 'Video calls', detail: 'See and hear each other in real-time' },
    ],
  },
  {
    id: 4,
    title: 'Rich Profiles',
    subtitle: 'Detailed Profiles',
    image: '/chathubimage4.webp',
    icon: Users,
    color: 'from-pink-400 via-red-500 to-orange-500',
    description: 'Get to know people better with detailed profiles. View photos, read bios, and discover shared interests before starting a conversation.',
    features: [
      { text: 'Rich profiles', detail: 'Comprehensive profile information' },
      { text: 'Profile photos', detail: 'Multiple photos to showcase yourself' },
      { text: 'Bio & interests', detail: 'Share your hobbies and interests' },
    ],
  },
]

export default function FeaturesPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <main className="min-h-screen relative">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-shine border-b border-white/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-shine text-xl font-black hover:scale-110 transition-transform">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <Link href="/" className="text-3xl font-black text-shine flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-shine-gold animate-pulse-shine" />
              ChatHub
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20 animate-pulse-shine" />
        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-shine mb-6">
            <Sparkles className="w-5 h-5 text-shine-gold animate-pulse-shine" />
            <span className="text-sm font-semibold text-shine-gold">Features</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="text-shine">Features</span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Discover everything ChatHub has to offer
          </p>
        </div>
      </section>

      {/* Features List */}
      <section className="py-12 px-4">
        <div className="container mx-auto space-y-40">
          {detailedFeatures.map((feature, index) => {
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
                <div className={`relative ${!isEven ? 'lg:col-start-2' : ''} transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
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
                    <h2 className="text-5xl md:text-6xl font-black text-white glow-text">
                      {feature.title}
                    </h2>
                  </div>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-4">
                    {feature.features.map((item, idx) => (
                      <div
                        key={idx}
                        className="glass-shine rounded-xl p-5 hover:shadow-shine transition-all duration-300 hover:scale-105 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform`} />
                          <div>
                            <h3 className="font-bold text-white mb-1">{item.text}</h3>
                            <p className="text-gray-400 text-sm">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-shine rounded-3xl p-16 text-center space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-shine-gradient opacity-10 animate-pulse-shine" />
            <h2 className="text-5xl md:text-7xl font-black relative z-10">
              Ready to <span className="text-shine">Explore</span>?
            </h2>
            <p className="text-2xl text-gray-300 relative z-10">
              Download ChatHub now and experience all these features
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-button inline-flex items-center gap-3 relative z-10"
            >
              Download on Google Play
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
