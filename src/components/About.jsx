import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '5+', label: 'Years of experience' },
  { value: '10+', label: 'Products shipped' },
  { value: '₦2B+', label: 'Monthly volume influenced' },
  { value: '3', label: 'Continents worked across' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="section-pad"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="about-grid"
      >
        {/* Left */}
        <div>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-geist"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.75rem)',
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              marginBottom: '3rem',
            }}
          >
            Design is
            <br />
            <span style={{ color: 'var(--text-muted)' }}>problem-solving</span>
            <br />
            with intent.
          </motion.h2>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              border: '1px solid var(--border)',
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                style={{
                  padding: '1.5rem',
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                  backgroundColor: 'var(--bg-secondary)',
                }}
              >
                <p
                  className="font-geist"
                  style={{
                    fontSize: '1.875rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.175rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.85,
              fontWeight: 300,
              marginBottom: '2rem',
            }}
          >
            I'm Iyodo David — a Senior Design Engineer who has spent over five years building
            digital products that actually ship. My work spans fintech, medtech, web3, hospitality, and traveltech,
            with a particular focus on early-stage startups where design decisions carry real weight.
          </p>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.175rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.85,
              fontWeight: 300,
              marginBottom: '2rem',
            }}
          >
            I don't just design — I build. That means shipping React components, writing HTML and CSS,
            and prototyping in Framer and Webflow. I'm as comfortable in a design sprint as I am
            in a codebase, which means fewer handoff gaps and faster time to launch.
          </p>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.175rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            When I'm not designing products, I'm teaching design on{' '}
            <a
              href="https://www.youtube.com/@DesignwithIyodo"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              YouTube
            </a>{' '}
            — because the best way to stay sharp is to teach.
          </p>

          {/* Skills */}
          <div
            style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'Design', skills: ['Figma', 'Framer', 'Webflow', 'Adobe XD', 'Illustrator', 'After Effects', 'User Research', 'Design Systems', 'UI Design', 'Design Thinking'] },
                { label: 'Development', skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Framer Motion'] },
              ].map(({ label, skills }) => (
                <div key={label}>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-dim)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {label}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          border: '1px solid var(--border)',
                          padding: '0.3rem 0.65rem',
                          borderRadius: '2px',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
