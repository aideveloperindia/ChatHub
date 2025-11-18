import { Mail, ExternalLink, Sparkles, Github, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/20 py-16 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-shine-gold animate-pulse-shine" />
              <h3 className="text-3xl font-black text-shine">ChatHub</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Meet people worldwide instantly. No login required.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:chatstrangersapps@gmail.com"
                className="hover:text-shine-gold transition-colors"
              >
                chatstrangersapps@gmail.com
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white glow-text">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/features"
                  className="text-gray-400 hover:text-shine-gold transition-colors font-semibold"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-shine-gold transition-colors font-semibold"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-shine-gold transition-colors font-semibold"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-shine-gold transition-colors font-semibold"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Developer Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white glow-text">Developer</h4>
            <p className="text-gray-400 mb-4 leading-relaxed">
              <strong className="text-white">Peppty Technologies Pvt Ltd</strong>
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-shine-gold hover:text-shine-silver transition-colors font-semibold"
            >
              View on Play Store
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white glow-text">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full glass-shine flex items-center justify-center hover:shadow-shine transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-shine-gold" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full glass-shine flex items-center justify-center hover:shadow-shine transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5 text-shine-gold" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full glass-shine flex items-center justify-center hover:shadow-shine transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-shine-gold" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Peppty Technologies Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
