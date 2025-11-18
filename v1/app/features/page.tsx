import Image from 'next/image'
import { Globe, Filter, MessageCircle, Video, Users, MapPin, Coins, Hash, Megaphone, Shield, Zap } from 'lucide-react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const detailedFeatures = [
  {
    id: 1,
    title: 'Global Community',
    subtitle: 'People from all around the world',
    image: '/chathubimage1.webp',
    icon: Globe,
    description: 'Connect with millions of users from every corner of the globe. Whether you want to chat with someone nearby or explore international connections, ChatHub brings the world to your fingertips.',
    features: [
      { icon: MapPin, text: 'Find people nearby', detail: 'Discover users in your area and make local connections' },
      { icon: Coins, text: 'Free coins system', detail: 'Earn and use coins to unlock premium features' },
      { icon: Users, text: 'Join groups', detail: 'Participate in group chats with shared interests' },
      { icon: Hash, text: 'Browse posts', detail: 'See what the community is talking about' },
      { icon: Megaphone, text: 'Follow channels', detail: 'Subscribe to channels for regular updates' },
    ],
    color: 'from-neon-blue to-neon-cyan',
  },
  {
    id: 2,
    title: 'Smart Filtering',
    subtitle: 'Find people using filters',
    image: '/chathubimage2.webp',
    icon: Filter,
    description: 'Our advanced filtering system helps you find exactly who you\'re looking for. Customize your search with multiple criteria to match with compatible users.',
    features: [
      { icon: Users, text: 'Gender filter', detail: 'Filter by gender preference' },
      { icon: Globe, text: 'Country filter', detail: 'Connect with people from specific countries' },
      { icon: Users, text: 'Age range', detail: 'Set your preferred age range for matches' },
      { icon: Globe, text: 'Language preference', detail: 'Chat in your preferred language' },
    ],
    color: 'from-neon-purple to-neon-pink',
  },
  {
    id: 3,
    title: 'Multiple Communication Modes',
    subtitle: 'Chat · Voice · Video',
    image: '/chathubimage3.webp',
    icon: Video,
    description: 'Choose how you want to connect. Whether you prefer texting, voice calls, or face-to-face video chats, ChatHub supports all communication styles.',
    features: [
      { icon: MessageCircle, text: 'Text chat', detail: 'Send messages, emojis, and media files' },
      { icon: MessageCircle, text: 'Voice calls', detail: 'Make crystal-clear voice calls' },
      { icon: Video, text: 'Video calls', detail: 'See and hear each other in real-time' },
    ],
    color: 'from-neon-blue to-neon-purple',
  },
  {
    id: 4,
    title: 'Rich Profiles',
    subtitle: 'Detailed Profiles (Dark Theme)',
    image: '/chathubimage4.webp',
    icon: Users,
    description: 'Get to know people better with detailed profiles. View photos, read bios, and discover shared interests before starting a conversation.',
    features: [
      { icon: Users, text: 'Rich profiles', detail: 'Comprehensive profile information' },
      { icon: Users, text: 'Profile photos', detail: 'Multiple photos to showcase yourself' },
      { icon: Users, text: 'Bio & interests', detail: 'Share your hobbies and interests' },
    ],
    color: 'from-neon-purple to-neon-pink',
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-dark-border backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-gradient text-xl font-bold hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <Link href="/" className="text-2xl font-bold text-gradient">
              ChatHub
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-neon opacity-30" />
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Features</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover everything ChatHub has to offer
          </p>
        </div>
      </section>

      {/* Features List */}
      <section className="py-12 px-4">
        <div className="container mx-auto space-y-32">
          {detailedFeatures.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={feature.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-2xl opacity-20`} />
                    <div className="relative rounded-2xl overflow-hidden shadow-glow bg-white">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={400}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-neon-blue uppercase tracking-wide">
                        {feature.subtitle}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                      {feature.title}
                    </h2>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-4">
                    {feature.features.map((item, idx) => {
                      const ItemIcon = item.icon
                      return (
                        <div
                          key={idx}
                          className="glass rounded-lg p-5 hover:border-neon-blue/50 transition-all duration-300 hover:scale-[1.02]"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} flex-shrink-0`}>
                              <ItemIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white mb-1">{item.text}</h3>
                              <p className="text-gray-400 text-sm">{item.detail}</p>
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
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-strong rounded-3xl p-12 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to <span className="text-gradient">Explore</span>?
            </h2>
            <p className="text-xl text-gray-300">
              Download ChatHub now and experience all these features
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button inline-flex items-center gap-3"
            >
              Download on Google Play
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

