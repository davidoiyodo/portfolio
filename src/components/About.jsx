export default function About() {
  return (
    <section id="about" className="section-pad section-block" aria-labelledby="about-title">
      <div className="about-intro"><p className="eyebrow">03 / The person behind the pixels</p><h2 id="about-title" className="font-geist">A little about me<span className="accent">.</span></h2></div>
      <div className="about-layout">
        <img className="about-portrait" src="/iyodo-david.jpg" alt="Iyodo David wearing glasses and headphones." width="1368" height="1824" loading="lazy" />
        <div className="about-story">
          <p className="about-lead">I’m a design engineer who likes being part of the whole process.</p>
          <p>For over five years, I’ve worked with teams across fintech, medtech, web3, hospitality, and traveltech. I design in Figma, build in Framer, and write front-end code, often with the help of AI.</p>
          <p>Outside client work, I make tools for my own practice and teach design on <a href="https://www.youtube.com/@DesignwithIyodo" target="_blank" rel="noopener noreferrer">YouTube</a>. Making things and explaining them keeps me learning.</p>
          <div className="about-tools"><p className="eyebrow">Usually working with</p><p>Figma / Framer / React / Webflow</p></div>
        </div>
      </div>
      <div className="about-numbers">
        <div><strong className="font-geist">5+</strong><span>Years in practice</span></div>
        <div><strong className="font-geist">10+</strong><span>Products shipped</span></div>
        <div><strong className="font-geist">3</strong><span>Continents worked across</span></div>
      </div>
    </section>
  )
}
