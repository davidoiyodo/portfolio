import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const roles = [
  {
    company: 'Checkoff Finance Limited',
    role: 'Design Lead',
    period: 'Mar 2022 — Present',
    location: 'Lagos, Nigeria',
    logo: '/checkoff-logo.png',
    logoWidth: '32px',
    description:
      'Leading brand identity and digital presence. Spearheaded the redesign of the company website and drove the development of Bankvole — a live savings and investment product. Leads product improvement sprints and new feature builds.',
  },
  {
    company: 'Lybertine',
    role: 'Product Designer',
    period: 'Aug 2024 — Nov 2025',
    location: 'London, UK · Contract',
    logo: '/lybertine-logo.png',
    description:
      'Designed the v3 of a socially innovative event management and ticketing platform. Elevated the experience of event attendees from onboarding through ticket purchase and management, ensuring the product met requirements up to launch.',
  },
  {
    company: 'PBR Life Sciences',
    role: 'Brand Designer',
    period: 'Dec 2022 — Feb 2023',
    location: 'London, UK · Contract',
    logo: '/pbr-logo.png',
    logoWidth: '32px',
    description:
      'Led a strategic redesign of the brand identity for a healthcare data analysis company. The rebrand contributed to PBR Life Sciences being admitted into Techstars 2023 and expanding into 5 new countries.',
  },
  {
    company: 'Equal Digital Limited',
    role: 'Brand & Product Designer',
    period: 'Nov 2021 — May 2023',
    location: 'Lagos, Nigeria',
    logo: '/ednl-logo.svg',
    description:
      'Orchestrated a comprehensive redesign of the company website, led the redesign of Dedukt (flagship product), and crafted brand materials. The Dedukt redesign resulted in onboarding 150,000+ government employees and ₦2B+ monthly loan processing.',
  },
]

export default function Experience() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section
      id="experience"
      className="section-pad"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '0',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <motion.h2
            ref={titleRef}
            initial={{ y: 30, opacity: 0 }}
            animate={titleInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-geist"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
            }}
          >
            Experience
          </motion.h2>
          <span
            style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}
          >
            {roles.length} Roles
          </span>
        </div>

        {/* Roles */}
        <div>
          {roles.map((role, i) => (
            <RoleRow key={role.company} role={role} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function RoleRow({ role, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="experience-role-grid"
    >
      {/* Left */}
      <div>
        {/* Logo */}
        <div
          style={{
            width: '48px',
            height: '48px',
            marginBottom: '1.25rem',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-secondary)',
          }}
        >
          {role.logo ? (
            <img
              src={role.logo}
              alt={role.company}
              style={{ height: role.logoWidth ? 'auto' : '32px', width: role.logoWidth || 'auto', objectFit: 'contain' }}
            />
          ) : (
            <span
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-dim)',
                fontFamily: 'monospace',
              }}
            >
              {role.company.charAt(0)}
            </span>
          )}
        </div>
        <p
          className="font-geist"
          style={{
            fontSize: '1.125rem',
            fontWeight: 500,
            color: 'var(--text-primary)',
            marginBottom: '0.4rem',
            letterSpacing: '-0.01em',
          }}
        >
          {role.company}
        </p>
        <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
          {role.role}
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.04em' }}>
          {role.period}
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>
          {role.location}
        </p>
      </div>

      {/* Right */}
      <p
        style={{
          fontSize: '0.9375rem',
          color: 'var(--text-muted)',
          lineHeight: 1.75,
          fontWeight: 300,
          paddingTop: 'calc(48px + 1.25rem)',
        }}
      >
        {role.description}
      </p>
    </motion.div>
  )
}
