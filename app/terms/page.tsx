import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Last Updated: {new Date().toLocaleDateString()}</h2>
              <p>
                By downloading and using ChatHub, you agree to these Terms of Service. 
                If you do not agree, please do not use the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Harass, threaten, or harm other users</li>
                <li>Share inappropriate, illegal, or offensive content</li>
                <li>Impersonate others or provide false information</li>
                <li>Spam or send unsolicited messages</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">User Content</h2>
              <p>
                You are responsible for all content you share on ChatHub. We reserve the right 
                to remove any content that violates these terms or is otherwise objectionable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p>
                ChatHub is provided "as is" without warranties. We are not liable for any 
                damages arising from your use of the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                For questions about these Terms, contact us at:
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


