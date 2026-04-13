import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="section-pad"
      style={{
        paddingTop: '7rem',
        paddingBottom: '5rem',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="contact-grid"
      >
        {/* Left — CTA */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Let's work together
          </motion.p>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-geist"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)',
              fontWeight: 600,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: '2.5rem',
            }}
          >
            Have a
            <br />
            project in
            <br />
            <span style={{ color: 'var(--text-muted)' }}>mind?</span>
          </motion.h2>

          <motion.a
            href="mailto:davidoiyodo@gmail.com"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ backgroundColor: 'var(--text-muted)' }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              padding: '0.9rem 1.75rem',
              fontSize: '0.9rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'background-color 0.2s',
            }}
          >
            Send me a message
            <span style={{ fontSize: '1rem' }}>→</span>
          </motion.a>
        </div>

        {/* Right — Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            paddingLeft: '3rem',
            borderLeft: '1px solid var(--border)',
          }}
        >
          <div style={{ marginBottom: '2.5rem' }}>
            <p
              style={{
                fontSize: '0.7rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              Email
            </p>
            <a
              href="mailto:davidoiyodo@gmail.com"
              style={{
                fontSize: '1rem',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text-muted)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
            >
              davidoiyodo@gmail.com
            </a>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <p
              style={{
                fontSize: '0.7rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Profiles
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'Behance', href: 'https://behance.net/designsbyiyodo' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/david-iyodo' },
                { label: 'YouTube', href: 'https://www.youtube.com/@DesignwithIyodo' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: '0.7rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              Phone
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a
                href="tel:+250793575400"
                style={{ fontSize: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}
              >
                +250 793 575 400
              </a>
              <a
                href="tel:+2348161756715"
                style={{ fontSize: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}
              >
                +234 816 175 6715
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          marginTop: '5rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          className="font-geist"
          style={{ fontSize: '0.8125rem', color: 'var(--text-dim)', letterSpacing: '0.04em' }}
        >
          © 2025 Iyodo David
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
          Senior Design Engineer
        </span>
      </div>
    </section>
  )
}
