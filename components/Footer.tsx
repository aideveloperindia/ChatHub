import { Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">ChatHub</h3>
            <p className="text-gray-400">
              Meet people worldwide instantly. No login required.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:chatstrangersapps@gmail.com"
                className="hover:text-neon-blue transition-colors"
              >
                chatstrangersapps@gmail.com
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/features"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Developer Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Developer</h4>
            <p className="text-gray-400 mb-2">
              Peppty Technologies Pvt Ltd
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors"
            >
              View on Play Store
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-dark-border pt-8 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Peppty Technologies Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


