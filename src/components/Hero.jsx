import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Background grid lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.25,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '40%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(240,239,233,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '1400px', width: '100%' }}>
        {/* Status tag */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: '3rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#4ade80',
                display: 'inline-block',
                boxShadow: '0 0 8px #4ade80',
              }}
            />
            Available for new projects
          </span>
        </motion.div>

        {/* Big headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-geist"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 9.5rem)',
            fontWeight: 600,
            lineHeight: 0.92,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '7.5rem',
            maxWidth: '1000px',
          }}
        >
          Design
          <br />
          <span style={{ color: 'var(--text-muted)' }}>Engineer.</span>
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          {...fadeUp(0.35)}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
              color: 'var(--text-muted)',
              maxWidth: '420px',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            5+ years designing and building products that ship — across fintech, medtech,
            web3, hospitality, and traveltech. I design in Figma and build in React.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {[
              { label: 'Behance', href: 'https://behance.net/designsbyiyodo' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/david-iyodo' },
              { label: 'YouTube', href: 'https://www.youtube.com/@DesignwithIyodo' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '7.5rem',
          right: '7.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontSize: '0.6875rem',
            color: 'var(--text-dim)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '40px',
            backgroundColor: 'var(--text-dim)',
          }}
        />
      </motion.div>
    </section>
  )
}
