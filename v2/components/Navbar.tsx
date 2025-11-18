'use client'

import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-shine shadow-shine' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-3xl font-black text-shine hover:scale-110 transition-transform duration-300 flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-shine-gold animate-pulse-shine" />
            ChatHub
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-gray-300 hover:text-shine-gold transition-all duration-300 font-semibold relative group">
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-shine-gradient group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-shine-gold transition-all duration-300 font-semibold relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-shine-gradient group-hover:w-full transition-all duration-300" />
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-button text-sm px-6 py-2"
            >
              Download
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-shine-gold hover:text-shine-silver transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-white/20 animate-slide-up">
            <Link
              href="/features"
              className="block text-gray-300 hover:text-shine-gold transition-colors font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-shine-gold transition-colors font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
              target="_blank"
              rel="noopener noreferrer"
              className="shine-button inline-block text-sm px-6 py-2"
              onClick={() => setIsOpen(false)}
            >
              Download
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
