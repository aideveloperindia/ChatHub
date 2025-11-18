'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about ChatHub
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden transition-all duration-300 hover:border-neon-blue/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-semibold text-white group-hover:text-neon-blue transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-neon-blue transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


