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
  return (
    <section id="experience" className="section-pad section-block" aria-labelledby="experience-title">
      <div className="section-heading"><div><p className="eyebrow">04 / Teams &amp; collaborations</p><h2 id="experience-title" className="font-geist">Along the way<span className="accent">.</span></h2></div><p>The teams I’ve joined and the work we’ve made together.</p></div>
      <div className="experience-list">
        {roles.map(role => (
          <details className="experience-item" key={role.company}>
            <summary>
              <div className="company-mark"><img src={role.logo} alt="" loading="lazy" /></div>
              <div className="experience-company"><h3>{role.company}</h3><p>{role.role}</p></div>
              <div className="experience-period"><p>{role.period}</p><p>{role.location}</p></div>
              <span className="experience-disclosure" aria-hidden="true">+</span>
            </summary>
            <p className="experience-description">{role.description}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
