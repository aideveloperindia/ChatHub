'use client'

import { useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

const faqs = [
  {
    question: 'Is ChatHub free?',
    answer: 'Yes! ChatHub is completely free to download and use. You can chat with people worldwide without any subscription fees.',
  },
  {
    question: 'Do I need an account?',
    answer: 'No account required! ChatHub allows you to start chatting instantly without any registration, login, or OTP verification.',
  },
  {
    question: 'Are chats anonymous?',
    answer: 'Yes, you can chat anonymously. However, you can choose to share your profile information if you want to connect more personally.',
  },
  {
    question: 'Is video chat private?',
    answer: 'Yes, all video chats are private and encrypted. Only you and the person you\'re chatting with can see and hear each other.',
  },
  {
    question: 'How do I report a user?',
    answer: 'You can report any user directly from their profile or during a chat. Our moderation team reviews all reports promptly to ensure a safe community.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-shine opacity-20" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-shine mb-6">
            <Sparkles className="w-5 h-5 text-shine-gold animate-pulse-shine" />
            <span className="text-sm font-semibold text-shine-gold">FAQ</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Frequently Asked <span className="text-shine">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about ChatHub
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-shine rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-shine group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group-hover:text-shine-gold transition-colors"
              >
                <span className="text-xl md:text-2xl font-bold text-white group-hover:glow-text transition-all">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-shine-gold transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-300 leading-relaxed text-lg">
                  {faq.answer}
                </div>
              </div>
              
              {/* Shining border on open */}
              {openIndex === index && (
                <div className="absolute inset-0 rounded-2xl border-2 border-shine-gold/50 shadow-shine pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
