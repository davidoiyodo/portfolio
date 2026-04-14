import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    index: '01',
    title: 'Travulens',
    category: 'Travel · Web App',
    description:
      'A modern travel platform built to make trip planning intuitive and visually compelling. Designed the full product experience from discovery to booking.',
    impact: 'Live product',
    tags: ['Web App', 'Brand Identity', 'UI Design'],
    image: '/travulens.png',
    link: 'https://travulens.com',
    caseStudy: null,
    hideCaseStudy: true,
  },
  {
    index: '02',
    title: 'Bankvole',
    category: 'Fintech · Mobile App',
    description:
      'A savings and investment product designed to simplify financial growth. Gathered insights from prospective users and stakeholders before designing the full mobile experience.',
    impact: 'Hundreds of millions of ₦ in investments processed',
    tags: ['Mobile App', 'User Research', 'UI Design'],
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=900&q=80',
    link: null,
    caseStudy: null,
    appStore: 'https://apps.apple.com/ng/app/bankvole/id6478485232',
    playStore: 'https://play.google.com/store/apps/details?id=com.bankvole.app',
  },
  {
    index: '03',
    title: 'Dedukt',
    category: 'Fintech · Web App · Mobile',
    description:
      'Connecting traditional banks and fintech lenders to employers — simplifying loan repayment directly from employee income. Redesigned the web app for lenders, employers, and admin, plus the mobile app for employees.',
    impact: '₦2B+ monthly in loans processed · 150,000 staff onboarded',
    tags: ['Web App', 'Mobile', 'UI Design', 'User Research'],
    image: '/Dedukt.png',
    link: 'https://app.dedukt.co/home',
    caseStudy: 'https://www.behance.net/gallery/177247593/Dedukt-Product-Redesign',
  },
  {
    index: '04',
    title: 'Lønna v1',
    category: 'AI · Job Platform · Web App',
    description:
      'An AI-driven job hunting platform for the Norwegian market with real salary data. Designed the brand identity and the full web app — for both job seekers and employers.',
    impact: 'Full brand identity + product design',
    tags: ['Brand Identity', 'Web App', 'AI Product'],
    image: '/Lonna-V1.png',
    link: 'https://www.lonna.no/en',
    caseStudy: null,
    hideCaseStudy: true,
  },
]

function ProjectCard({ project, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="project-card-grid"
      style={{
        gap: '0',
      }}
    >
      {/* Image side */}
      <div
        className={`project-img-side ${i % 2 === 0 ? 'img-order-second' : 'img-order-first'}`}
        style={{
          overflow: 'hidden',
          position: 'relative',
          padding: '4rem 0',
        }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            filter: 'grayscale(20%) brightness(0.85)',
          }}
        />
      </div>

      {/* Content side */}
      <div
        className={`${i % 2 === 0 ? 'project-content-left content-order-first' : 'project-content-right content-order-second'}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '2.5rem',
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
                fontFamily: 'monospace',
              }}
            >
              {project.index}
            </span>
            <span
              style={{
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {project.category}
            </span>
          </div>

          <h3
            className="font-geist"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              fontWeight: 600,
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              marginBottom: '1.75rem',
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontSize: '0.9375rem',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              fontWeight: 300,
              maxWidth: '380px',
            }}
          >
            {project.description}
          </p>
        </div>

        <div>
          {/* Impact */}
          <div
            style={{
              borderTop: '1px solid var(--border)',
              paddingTop: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.8125rem',
                color: 'var(--text-primary)',
                letterSpacing: '0.02em',
              }}
            >
              {project.impact}
            </p>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '2px',
                  letterSpacing: '0.04em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {project.appStore || project.playStore ? (
              <>
                <a
                  href={project.appStore || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    padding: '0.55rem 1.1rem',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    backgroundColor: 'var(--text-primary)',
                    color: 'var(--bg-primary)',
                    opacity: project.appStore ? 1 : 0.35,
                    pointerEvents: project.appStore ? 'auto' : 'none',
                    transition: 'opacity 0.2s',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.029 1.52-.065 2.09-.987 3.925-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                  </svg>
                  App Store
                </a>
                <a
                  href={project.playStore || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    padding: '0.55rem 1.1rem',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    opacity: project.playStore ? 1 : 0.35,
                    pointerEvents: project.playStore ? 'auto' : 'none',
                    transition: 'opacity 0.2s',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.492 1.492 0 0 0-.742-.204L13.544 10.989zm0 2.067L2.699 24.111c.244-.067.47-.187.666-.349l13.142-7.48-2.963-2.926z"/>
                  </svg>
                  Google Play
                </a>
              </>
            ) : (
              <>
                <a
                  href={project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    padding: '0.55rem 1.1rem',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    backgroundColor: 'var(--text-primary)',
                    color: 'var(--bg-primary)',
                    opacity: project.link ? 1 : 0.35,
                    pointerEvents: project.link ? 'auto' : 'none',
                    transition: 'opacity 0.2s',
                  }}
                >
                  View Live Project ↗
                </a>
                {!project.hideCaseStudy && <a
                  href={project.caseStudy || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    padding: '0.55rem 1.1rem',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    opacity: project.caseStudy ? 1 : 0.35,
                    pointerEvents: project.caseStudy ? 'auto' : 'none',
                    transition: 'opacity 0.2s',
                  }}
                >
                  View Case Study →
                </a>}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Work() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section id="work" style={{ borderBottom: '1px solid var(--border)' }}>
      {/* Section header */}
      <div
        className="work-header-pad"
        style={{
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
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
          Selected Work
        </motion.h2>
        <span
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.05em',
          }}
        >
          {projects.length} Projects
        </span>
      </div>

      {/* Projects */}
      <div className="work-projects-pad" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} i={i} />
        ))}
      </div>
    </section>
  )
}
