'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glass border-b border-dark-border backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity">
            ChatHub
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-gray-300 hover:text-neon-blue transition-colors">
              Features
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-neon-blue transition-colors">
              Contact
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button text-sm px-6 py-2"
            >
              Download
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-neon-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-dark-border">
            <Link
              href="/features"
              className="block text-gray-300 hover:text-neon-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-neon-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.peppty.android.strangerschatapp"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button inline-block text-sm px-6 py-2"
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

