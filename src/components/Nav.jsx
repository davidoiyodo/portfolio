import { useEffect, useRef, useState } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Side quests', href: '#side-projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menu = useRef(null)
  const trigger = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onResize = () => { if (window.innerWidth > 960) menu.current.close() }
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const closeMenu = () => menu.current.close()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header section-pad ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#home" className="brand" aria-label="Iyodo David — home"><img src="/iyodo-logo.svg" alt="" width="95" height="35" /></a>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a href="#contact" className="nav-contact">Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
        <button ref={trigger} className="nav-toggle" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => { menu.current.showModal(); setMenuOpen(true) }}>Menu</button>
      </header>
      <dialog id="mobile-menu" ref={menu} className="mobile-menu" aria-labelledby="mobile-menu-title" onClose={() => { setMenuOpen(false); trigger.current?.focus() }}>
        <div className="mobile-menu-top"><p id="mobile-menu-title" className="eyebrow">Take a look around</p><button className="button button-secondary" onClick={closeMenu}>Close</button></div>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => <a key={link.href} href={link.href} onClick={closeMenu}><span className="eyebrow">0{index + 1}</span>{link.label}</a>)}
          <a href="#contact" onClick={closeMenu}><span className="eyebrow">05</span>Let’s talk</a>
        </nav>
        <p className="mobile-menu-note">Designing, building, and seeing where curiosity leads.</p>
      </dialog>
    </>
  )
}
