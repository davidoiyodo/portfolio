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

const focusAreas = [
  {
    title: 'Reducing cognitive load on high-stakes actions',
    body: 'Transfers, loan applications, payment confirmations — these actions carry real consequence. Clear information hierarchy, deliberate motion, and unambiguous feedback states keep users in control.',
  },
  {
    title: 'Designing for trust',
    body: 'Trust in a financial product is earned through consistency, clarity, and zero tolerance for ambiguity. Every state — loading, success, error, empty — is a trust signal.',
  },
  {
    title: 'Scalable design systems across mobile and web',
    body: 'Fintech products span mobile apps, web dashboards, and internal tools. Design systems built once, extended everywhere — no one-off screens.',
  },
  {
    title: 'Compliance-aware UI that still feels human',
    body: 'Regulatory requirements and good UX are not opposites. Compliance constraints become design constraints — the work is making them invisible to the user.',
  },
]

const projects = [
  {
    name: 'Bankvole',
    type: 'Consumer fintech app',
    description: 'Mobile banking application for iOS and Android. Full product design from IA and user flows through to a shipped design system and production-ready UI.',
  },
  {
    name: 'Dedukt',
    type: 'B2B loan management platform',
    description: 'Web and mobile platform for business loan management. Designed for clarity under data density — complex financial information made navigable.',
    link: 'https://app.dedukt.co/home',
  },
  {
    name: 'Checkoff Finance',
    type: 'Design Lead — 3+ years',
    description: 'Internal product design leadership. Owning the full design function — research, wireframes, design systems, and front-end implementation across the product suite.',
  },
]

export default function FintechPage() {
  return (
    <>
      <Seo
        title="Fintech Product Design — Iyodo David | UI Designer for Financial Products"
        description="5+ years designing fintech products — Bankvole, Dedukt, Checkoff Finance. Iyodo David specialises in financial UI: payments, loan management, mobile banking, and design systems for regulated products."
        path="/fintech"
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
          Specialisation
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
          Fintech Product<br />
          <span style={{ color: 'var(--text-muted)' }}>Design.</span>
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
          Financial products have one design constraint above all others: people have to trust them with
          their money. That changes everything — information hierarchy, feedback states, error handling, the
          weight of a destructive action. In fintech, good design is product reliability made visible.
        </motion.p>
      </section>

      {/* Experience in fintech */}
      <section
        className="section-pad"
        style={{ paddingTop: '5rem', paddingBottom: '5rem', borderBottom: '1px solid var(--border)' }}
      >
        <motion.p
          {...fadeUp(0.05)}
          style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}
        >
          Background
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
          As Design Lead at Checkoff Finance for 3+ years, I've owned the full product design function —
          from early research and wireframes through to shipped design systems and front-end implementation.
          That experience runs alongside two other fintech product builds: Bankvole (consumer mobile
          banking) and Dedukt (B2B loan management).
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
          Each product taught a different dimension of fintech design: consumer trust at the individual
          transaction level, institutional complexity in B2B loan workflows, and the operational demands of
          a live, regulated product over years — not sprints.
        </motion.p>
      </section>

      {/* What I focus on */}
      <section
        className="section-pad"
        style={{ paddingTop: '5rem', paddingBottom: '5rem', borderBottom: '1px solid var(--border)' }}
      >
        <div className="specialty-grid">
          <motion.div {...fadeUp(0.1)}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Focus areas
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
              Design that earns<br />trust at every state.
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.18)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {focusAreas.map((item) => (
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

      {/* Projects */}
      <section
        className="section-pad"
        style={{ paddingTop: '5rem', paddingBottom: '5rem', borderBottom: '1px solid var(--border)' }}
      >
        <motion.p
          {...fadeUp(0.05)}
          style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem' }}
        >
          Fintech Projects
        </motion.p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              {...fadeUp(0.08 + i * 0.06)}
              className="fintech-project-row"
            >
              <div>
                <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {project.name}
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', letterSpacing: '0.04em' }}>
                  {project.type}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', textDecoration: 'none', marginTop: '0.75rem', display: 'inline-block', letterSpacing: '0.02em' }}
                  >
                    View live ↗
                  </a>
                )}
              </div>
            </motion.div>
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
          View the full project work
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
