import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Navbar from './section/navbar'
import Hero from './section/hero'
import About from './section/about'
import Skills from './section/skills'
import Projects from './section/project'
import Contact from './section/contact'
import Footer from './section/footer'
import FullProjects from './section/full-projects' // Import halaman full projects

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename="/portfolio-ilyas">
      <Navbar />
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </>
        } />
        
        {/* Halaman Full Projects */}
        <Route path="/full-projects" element={
          <>
            <FullProjects />
            <Footer />
          </>
        } />

      </Routes>
    </Router>
  </StrictMode>,
)