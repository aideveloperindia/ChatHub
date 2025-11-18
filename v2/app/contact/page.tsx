import Link from 'next/link'
import { ArrowLeft, Mail, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">Contact Us</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <p className="text-lg leading-relaxed">
                Have questions, feedback, or need support? We'd love to hear from you!
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-neon-gradient">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Email Us</h2>
                </div>
                <p className="text-gray-400">
                  Send us an email and we'll get back to you as soon as possible.
                </p>
                <a
                  href="mailto:chatstrangersapps@gmail.com"
                  className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors"
                >
                  chatstrangersapps@gmail.com
                </a>
              </div>

              <div className="glass rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-neon-gradient">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">In-App Support</h2>
                </div>
                <p className="text-gray-400">
                  Report issues or get help directly from within the ChatHub app.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors"
                >
                  Open ChatHub
                </a>
              </div>
            </div>

            <section className="glass rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Developer</h2>
              <p className="text-gray-300">
                <strong className="text-white">Peppty Technologies Pvt Ltd</strong>
              </p>
              <p className="text-gray-400 mt-2">
                We're committed to providing the best chatting experience. Your feedback helps us improve!
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}


