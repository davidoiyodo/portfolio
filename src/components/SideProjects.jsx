import { useEffect, useRef, useState } from 'react'

export default function SideProjects() {
  const preview = useRef(null)
  const [previewOpen, setPreviewOpen] = useState(false)

  useEffect(() => {
    if (!previewOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [previewOpen])

  return (
    <section id="side-projects" className="section-pad section-block side-projects" aria-labelledby="side-projects-title">
      <div className="section-heading">
        <div><p className="eyebrow">02 / Following my curiosity</p><h2 id="side-projects-title" className="font-geist">Side quests<span className="accent">.</span></h2></div>
        <p>A few things I’m making.{' '}<br />Mostly because I wanted them to exist.</p>
      </div>
      <article className="side-project">
        <div className="side-project-details">
          <p className="eyebrow">A tool for my own practice</p>
          <h3 className="font-geist">Design Eye</h3>
          <p className="side-project-platform">Mac &amp; Windows <span aria-hidden="true">·</span> Beta</p>
          <p className="side-project-story">I built Design Eye because I wanted to keep more than a folder of screenshots. I wanted to remember what caught my eye and why, and give the AI agents I work with a clearer sense of my taste. It’s where I collect references and put that thinking into words.</p>
          <a className="text-link" href="https://design-eye-beta.vercel.app/" target="_blank" rel="noopener noreferrer">Try it out <span aria-hidden="true">↗</span></a>
        </div>
        <button className="side-project-preview" onClick={() => { preview.current.showModal(); setPreviewOpen(true) }} aria-label="Take a closer look at Design Eye">
          <img src="/design-eye.png" alt="Design Eye app showing a library of design references, collections, and Figma sync." loading="lazy" width="1840" height="1322" />
          <span className="side-project-zoom">Take a closer look <span aria-hidden="true">↗</span></span>
        </button>
      </article>
      <dialog ref={preview} className="side-project-dialog" aria-label="Design Eye screenshot" onClose={() => setPreviewOpen(false)} onClick={event => { if (event.target === event.currentTarget) preview.current.close() }}>
        <div className="preview-toolbar"><span>Design Eye / Reference library</span><div><a className="text-link" href="/design-eye.png" target="_blank" rel="noopener noreferrer">Open full image</a><button className="button button-secondary" onClick={() => preview.current.close()}>Close</button></div></div>
        <img src="/design-eye.png" alt="Full-size Design Eye reference library screenshot." />
      </dialog>
    </section>
  )
}
