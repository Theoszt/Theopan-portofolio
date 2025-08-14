import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import About from './components/AboutMeSection';
import Projects from './components/Projects';
import Skill from './components/Skills';
import Education from './components/EducationSection';
import Contact from './components/ContactSection';
function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const fadeElements = document.querySelectorAll('.fade-in')
    fadeElements.forEach((el) => observer.observe(el))

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target
          const width = bar.getAttribute('data-width')
          setTimeout(() => {
            bar.style.width = width
          }, 200)
        }
      })
    }, observerOptions)

    const skillBars = document.querySelectorAll('.skill-bar')
    skillBars.forEach((bar) => skillObserver.observe(bar))

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el))
      skillBars.forEach((bar) => skillObserver.unobserve(bar))
    }
  }, [])

  return (
    <div className="min-h-screen font-sans">
      
      <Navbar />
      <Hero />
      <Education />
      <Skill />
      <Projects />
      {/* <Volunteer /> */}
      {/* <Certifications /> */}
      <Contact />
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                THEOPAN GERARD NAINGGOLAN
              </h3>
              <p className="text-gray-400">
                Student of Surabaya State University
              </p>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                © 2025 Theopan Gerard Nainggolan. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
