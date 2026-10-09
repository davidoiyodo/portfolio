import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import DesignEngineeringPage from './pages/DesignEngineeringPage'
import FintechPage from './pages/FintechPage'

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/design-engineering" element={<DesignEngineeringPage />} />
          <Route path="/fintech" element={<FintechPage />} />
        </Routes>
      </main>
    </div>
  )
}
