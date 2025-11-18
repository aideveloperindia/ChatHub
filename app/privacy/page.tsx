import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Last Updated: {new Date().toLocaleDateString()}</h2>
              <p>
                Peppty Technologies Pvt Ltd ("we", "our", or "us") operates the ChatHub mobile application. 
                This Privacy Policy explains how we collect, use, and protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p>
                ChatHub is designed to work without requiring account registration. We may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Device information and identifiers</li>
                <li>Usage data and app interactions</li>
                <li>Content you share within the app (messages, photos, etc.)</li>
                <li>Location data (if you enable location services)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and improve our services</li>
                <li>To match you with other users</li>
                <li>To ensure safety and prevent abuse</li>
                <li>To analyze app usage and performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your information. However, 
                no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-neon-blue">
                <a href="mailto:chatstrangersapps@gmail.com" className="hover:underline">
                  chatstrangersapps@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}


