import Image from 'next/image'
import { Globe, Filter, MessageCircle, Video, Users, MapPin, Coins, Hash, Megaphone } from 'lucide-react'

const features = [
  {
    id: 1,
    title: 'People from all around the world',
    image: '/chathubimage1.webp',
    icon: Globe,
    points: [
      { icon: MapPin, text: 'Nearby' },
      { icon: Coins, text: 'Free coins' },
      { icon: Users, text: 'Groups' },
      { icon: Hash, text: 'Posts' },
      { icon: Megaphone, text: 'Channels' },
    ],
    description: 'Connect with users from every corner of the globe. Discover nearby people or explore international connections.',
  },
  {
    id: 2,
    title: 'Find people using filters',
    image: '/chathubimage2.webp',
    icon: Filter,
    points: [
      { icon: Users, text: 'Gender filter' },
      { icon: Globe, text: 'Country filter' },
      { icon: Users, text: 'Age range' },
      { icon: Globe, text: 'Language preference' },
    ],
    description: 'Use advanced filters to find the perfect match. Filter by gender, country, age, and language.',
  },
  {
    id: 3,
    title: 'Chat · Voice · Video',
    image: '/chathubimage3.webp',
    icon: Video,
    points: [
      { icon: MessageCircle, text: 'Text chat' },
      { icon: MessageCircle, text: 'Voice calls' },
      { icon: Video, text: 'Video calls' },
    ],
    description: 'Multiple ways to connect. Chat via text, make voice calls, or start a video conversation.',
  },
  {
    id: 4,
    title: 'Detailed Profiles (Dark Theme)',
    image: '/chathubimage4.webp',
    icon: Users,
    points: [
      { icon: Users, text: 'Rich profiles' },
      { icon: Users, text: 'Profile photos' },
      { icon: Users, text: 'Bio & interests' },
    ],
    description: 'View detailed profiles with photos, bios, and interests. Get to know people before you chat.',
  },
]

export default function Features() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to connect with people worldwide
          </p>
        </div>
        
        <div className="space-y-32">
          {features.map((feature, index) => {
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
                <div
                  className={`relative ${
                    !isEven ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-neon-gradient rounded-3xl blur-2xl opacity-20" />
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
                  <div className="inline-flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-neon-gradient">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-300">
                    {feature.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {feature.points.map((point, idx) => {
                      const PointIcon = point.icon
                      return (
                        <div
                          key={idx}
                          className="glass rounded-lg p-4 flex items-center gap-3 hover:border-neon-blue/50 transition-colors"
                        >
                          <PointIcon className="w-5 h-5 text-neon-blue flex-shrink-0" />
                          <span className="text-gray-300">{point.text}</span>
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

