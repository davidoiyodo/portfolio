import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
