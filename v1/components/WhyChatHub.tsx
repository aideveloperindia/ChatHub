import { Shield, Zap, Video, Filter, Users, Globe } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'No login or OTP',
    description: 'Start chatting instantly without any registration or verification process.',
    color: 'from-neon-blue to-neon-cyan',
  },
  {
    icon: Zap,
    title: 'Instant chat',
    description: 'Connect with people in seconds. No waiting, no delays.',
    color: 'from-neon-purple to-neon-pink',
  },
  {
    icon: Video,
    title: 'Voice & video supported',
    description: 'Choose how you want to communicate - text, voice, or video calls.',
    color: 'from-neon-blue to-neon-purple',
  },
  {
    icon: Filter,
    title: 'Filters for perfect match',
    description: 'Find exactly who you\'re looking for with advanced filtering options.',
    color: 'from-neon-purple to-neon-pink',
  },
  {
    icon: Shield,
    title: 'Safe & verified users',
    description: 'Our community is moderated to ensure a safe chatting experience.',
    color: 'from-neon-blue to-neon-cyan',
  },
  {
    icon: Globe,
    title: 'Global community',
    description: 'Connect with millions of users from around the world.',
    color: 'from-neon-purple to-neon-blue',
  },
]

export default function WhyChatHub() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-radial-neon opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">ChatHub</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the best way to meet new people online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${reason.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {reason.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


