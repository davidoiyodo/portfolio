const profiles = [
  { label: 'Behance', href: 'https://behance.net/designsbyiyodo' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/david-iyodo' },
  { label: 'YouTube', href: 'https://www.youtube.com/@DesignwithIyodo' },
]

export default function Contact() {
  return (
    <footer id="contact" className="section-pad contact-section" aria-labelledby="contact-title">
      <div className="contact-layout">
        <div><p className="eyebrow">05 / Say hello</p><h2 id="contact-title" className="font-geist">Have something<br />in mind<span className="accent">?</span></h2><p className="contact-intro">A product to build, a design to untangle,<br className="desktop-break" /> or just a good conversation. My inbox is open.</p><div className="contact-actions"><a className="button button-primary" href="mailto:davidoiyodo@gmail.com">Send me an email <span aria-hidden="true">↗</span></a><a className="text-link" href="https://calendly.com/davidoiyodo/discovery-call" target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span></a></div></div>
        <div className="contact-details"><div><p className="eyebrow">Find me elsewhere</p>{profiles.map(profile => <a key={profile.label} href={profile.href} target="_blank" rel="noopener noreferrer">{profile.label} <span aria-hidden="true">↗</span></a>)}</div><div><p className="eyebrow">Or give me a ring</p><a href="tel:+250793575400">+250 793 575 400</a><a href="tel:+2348161756715">+234 816 175 6715</a></div></div>
      </div>
      <div className="footer-note"><p>© {new Date().getFullYear()} Iyodo David</p><p>Designed, built, and still tinkering.</p><a href="#home">Back to top <span aria-hidden="true">↑</span></a></div>
    </footer>
  )
}
