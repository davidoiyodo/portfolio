const projects = [
  {
    index: '01',
    title: 'Travulens',
    category: 'Travel · Web App',
    role: 'Design + AI Front-end Engineering',
    description:
      'A place for travellers to share the world through their own experiences. I took it from an idea to a brand, a product design, and a working front end. A backend developer handled the API and database.',
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
    role: 'Brand + Product Design',
    description:
      'Savings, investments, loans, and bills in one app. I designed the brand and the full product experience; the development team brought it to life on iOS and Android.',
    impact: 'Hundreds of millions of ₦ in investments processed',
    tags: ['Mobile App', 'User Research', 'UI Design'],
    image: '/Bankvole.png',
    link: null,
    caseStudy: null,
    appStore: 'https://apps.apple.com/ng/app/bankvole/id6478485232',
    playStore: 'https://play.google.com/store/apps/details?id=com.bankvole.app',
  },
  {
    index: '03',
    title: 'Dedukt',
    category: 'Fintech · Web App · Mobile',
    role: 'Brand + Product Design',
    description:
      'Making loan repayments easier through employee income. I redesigned the web experience for lenders, employers, and admins, alongside the mobile app for employees.',
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
    role: 'Brand + Product Design',
    description:
      'Helping people in Norway find jobs with real salary information. I created the brand identity and designed the web app for both job seekers and employers.',
    impact: 'Full brand identity + product design',
    tags: ['Brand Identity', 'Web App', 'AI Product'],
    image: '/Lonna-V1.png',
    link: 'https://www.lonna.no/en',
    caseStudy: null,
    hideCaseStudy: true,
  },
]

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-image project-image-${project.index}`}>
        <img src={project.image} alt={`${project.title} product design`} loading="lazy" />
      </div>
      <div className="project-meta"><span>{project.index} / {project.category}</span><span>{project.role}</span></div>
      <h3 className="font-geist">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <p className="project-impact">{project.impact}</p>
      <div className="project-actions">
        {project.appStore && <a className="text-link" href={project.appStore} target="_blank" rel="noopener noreferrer">App Store <span aria-hidden="true">↗</span></a>}
        {project.playStore && <a className="text-link" href={project.playStore} target="_blank" rel="noopener noreferrer">Google Play <span aria-hidden="true">↗</span></a>}
        {project.link && <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">Visit {project.title} <span aria-hidden="true">↗</span></a>}
        {project.caseStudy && <a className="text-link" href={project.caseStudy} target="_blank" rel="noopener noreferrer">Read the case study <span aria-hidden="true">↗</span></a>}
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section id="work" className="section-pad section-block" aria-labelledby="work-title">
      <div className="section-heading">
        <div><p className="eyebrow">01 / Ideas out in the world</p><h2 id="work-title" className="font-geist">Selected work<span className="accent">.</span></h2></div>
        <p>Different challenges.{' '}<br />The same care for the details.</p>
      </div>
      <div className="projects-grid">{projects.map(project => <ProjectCard key={project.title} project={project} />)}</div>
    </section>
  )
}
