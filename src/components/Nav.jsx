import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="section-pad"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: scrolled ? 'rgba(13,13,13,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/iyodo-logo.svg" alt="iyodo.design" style={{ height: '24px', width: 'auto' }} />
        </a>

        {/* Desktop nav */}
        <nav className="nav-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:davidoiyodo@gmail.com"
            style={{
              fontSize: '0.8125rem',
              color: 'var(--bg-primary)',
              backgroundColor: 'var(--text-primary)',
              padding: '0.4rem 1rem',
              borderRadius: '2px',
              textDecoration: 'none',
              fontWeight: 500,
              letterSpacing: '0.02em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.target.style.opacity = '1')}
          >
            Hire me
          </a>
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              backgroundColor: 'var(--bg-primary)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: '3rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
