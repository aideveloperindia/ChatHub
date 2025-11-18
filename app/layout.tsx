import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChatHub - Meet People Worldwide Instantly',
  description: 'No login. No verification. Just enter & start chatting. Connect with strangers worldwide through text, voice, and video.',
  keywords: 'chat app, stranger chat, anonymous chat, video chat, voice chat, meet people',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}

