import Seo from '../components/Seo'
import { motion } from 'framer-motion'
import About from '../components/About'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About — Iyodo David | Senior Design Engineer"
        description="Iyodo David is a Senior Design Engineer with 5+ years across fintech, medtech, web3, and traveltech. Background in Figma, Framer, and AI-assisted front-end engineering."
        path="/about"
      />

      <section
        className="section-pad"
        style={{ paddingTop: '120px', paddingBottom: '4rem', borderBottom: '1px solid var(--border)' }}
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}
        >
          The person
        </motion.p>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="font-geist"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--text-primary)', maxWidth: '700px' }}
        >
          About<br />
          <span style={{ color: 'var(--text-muted)' }}>Iyodo David.</span>
        </motion.h1>
      </section>

      <About />
      <Experience />
      <Contact />
    </>
  )
}
