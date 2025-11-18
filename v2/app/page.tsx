import VideoBackground from '@/components/VideoBackground'
import Particles from '@/components/Particles'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import WhyChatHub from '@/components/WhyChatHub'
import DownloadCTA from '@/components/DownloadCTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <VideoBackground />
      <Particles />
      <Navbar />
      <Hero />
      <Features />
      <WhyChatHub />
      <DownloadCTA />
      <FAQ />
      <Footer />
    </main>
  )
}
