import Seo from '../components/Seo'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Contact from '../components/Contact'

const fadeUp = (delay = 0) => ({
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const howIWork = [
  {
    title: 'Figma to production fidelity',
    body: 'Components, variants, auto-layout, and prototypes built at the same resolution as the final product. Not approximations — exact.',
  },
  {
    title: 'Framer for marketing & landing pages',
    body: 'From design to live in days, not weeks. Framer sites that move, respond, and actually look like the Figma.',
  },
  {
    title: 'React for product front-ends',
    body: 'Custom front-end logic when the product demands it. AI-assisted where it accelerates, hand-coded where precision matters.',
  },
  {
    title: 'No handoff',
    body: 'The same person who designed it ships it. Fewer misinterpretations, fewer revision cycles, faster time to working product.',
  },
]

const tools = ['Figma', 'Framer', 'React', 'TypeScript', 'Tailwind CSS', 'Webflow', 'Next.js']

export default function DesignEngineeringPage() {
  return (
    <>
      <Seo
        title="Design Engineering — Iyodo David | Figma, Framer & React"
        description="Design engineering: designing and shipping products in the same hands. Iyodo David bridges Figma design and React front-end — no handoff, no drift, faster shipping."
        path="/design-engineering"
      />

      {/* Page hero */}
      <section
        className="section-pad"
        style={{ paddingTop: '120px', paddingBottom: '5rem', borderBottom: '1px solid var(--border)' }}
      >
        <motion.p
          {...fadeUp(0.05)}
          style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}
        >
          Discipline
        </motion.p>
        <motion.h1
          {...fadeUp(0.12)}
          className="font-geist"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 600,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            maxWidth: '800px',
            marginBottom: '2.5rem',
          }}
        >
          Design Engineering
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            color: 'var(--text-muted)',
            maxWidth: '680px',
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          Design engineering is the discipline of owning both design and code — not handing off from one to
          the other, but doing both in the same hands. Every handoff introduces drift. Design engineering
          removes that variable.
        </motion.p>
      </section>

      {/* How I work */}
      <section
        className="section-pad"
        style={{ paddingTop: '5rem', paddingBottom: '5rem', borderBottom: '1px solid var(--border)' }}
      >
        <div className="specialty-grid">
          <motion.div {...fadeUp(0.1)}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              How I work
            </p>
            <h2
              className="font-geist"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Design to code,<br />no translation loss.
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.18)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {howIWork.map((item) => (
              <div key={item.title} style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                  {item.title}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why it matters */}
      <section
        className="section-pad"
        style={{ paddingTop: '5rem', paddingBottom: '5rem', borderBottom: '1px solid var(--border)' }}
      >
        <motion.p
          {...fadeUp(0.05)}
          style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}
        >
          Why it matters
        </motion.p>
        <motion.p
          {...fadeUp(0.12)}
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            color: 'var(--text-muted)',
            maxWidth: '680px',
            lineHeight: 1.75,
            fontWeight: 300,
            marginBottom: '1.5rem',
          }}
        >
          Most product teams ship a design, hand it off, and watch it drift in implementation. Developers
          interpret intent. Designers can't review every edge case. The result is a product that sort of
          looks like the design — and requires rounds of revision to close the gap.
        </motion.p>
        <motion.p
          {...fadeUp(0.18)}
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            color: 'var(--text-muted)',
            maxWidth: '680px',
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          I close that loop by being the single point of contact for design and front-end. The code I ship
          looks like the design because I wrote both. No interpretation layer — what you see in Figma is
          what ships.
        </motion.p>
      </section>

      {/* Tools */}
      <section
        className="section-pad"
        style={{ paddingTop: '5rem', paddingBottom: '5rem', borderBottom: '1px solid var(--border)' }}
      >
        <motion.p
          {...fadeUp(0.05)}
          style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem' }}
        >
          Tools
        </motion.p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              {...fadeUp(0.05 + i * 0.04)}
              style={{
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                border: '1px solid var(--border)',
                padding: '0.4rem 1rem',
                borderRadius: '2px',
                letterSpacing: '0.03em',
              }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-pad"
        style={{ paddingTop: '5rem', paddingBottom: '5rem', borderBottom: '1px solid var(--border)' }}
      >
        <motion.p
          {...fadeUp(0.05)}
          style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}
        >
          See design engineering in practice
        </motion.p>
        <motion.div {...fadeUp(0.12)} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link
            to="/projects"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--bg-primary)',
              backgroundColor: 'var(--text-primary)',
              padding: '0.75rem 1.5rem',
              borderRadius: '2px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            View Projects
          </Link>
          <a
            href="https://calendly.com/davidoiyodo/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
              padding: '0.75rem 1.5rem',
              borderRadius: '2px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Book a call ↗
          </a>
        </motion.div>
      </section>

      <Contact />
    </>
  )
}
