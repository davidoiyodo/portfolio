import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Work from '../components/Work'
import About from '../components/About'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Iyodo David — Design Engineer | Figma, Framer & Fintech UI"
        description="Senior Design Engineer with 5+ years designing and shipping digital products in fintech, medtech, web3, and traveltech."
        path="/"
      />
      <Hero />
      <Work />
      <About />
      <Experience />
      <Contact />
    </>
  )
}
