export default function Hero() {
  return (
    <section id="home" className="hero section-pad" aria-labelledby="hero-title">
      <div className="hero-intro">
        <p className="eyebrow">Hi, I’m Iyodo David.</p>
        <p className="availability"><span aria-hidden="true" /> Available for new projects</p>
      </div>
      <div className="hero-layout">
        <h1 id="hero-title" className="font-geist">I design products.<br />And make things<br /><span>I wish existed.</span></h1>
        <div className="hero-note">
          <p className="eyebrow">Designer. Builder. Teacher.</p>
          <p>I turn ideas into digital products, from the first sketch to the front end. And when something catches my curiosity, I usually end up making it.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="mailto:davidoiyodo@gmail.com">Say hello <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div className="hero-footnote">
        <p>5+ years across fintech, medtech, web3 &amp; traveltech.</p>
        <a href="#side-projects"><span className="hero-current-label">Currently making</span><span>Design Eye</span><span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
