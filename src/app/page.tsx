import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import About from '@/components/About'
import Services from '@/components/Services'
import Impact from '@/components/Impact'
import GetInvolved from '@/components/GetInvolved'
import Gallery from '@/components/Gallery'
import Knowledge from '@/components/Knowledge'
import Emergency from '@/components/Emergency'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Timeline />
      <About />
      <Services />
      <Impact />
      <GetInvolved />
      <Gallery />
      <Knowledge />
      <Emergency />
      <Footer />
    </main>
  )
}
