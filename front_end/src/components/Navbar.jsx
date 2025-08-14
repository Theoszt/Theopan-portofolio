import { useState } from 'react'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold text-primary cursor-pointer text-decoration-line: none">
            THEOPAN GERARD NAINGGOLAN
          </span>

          <div className="hidden md:flex space-x-4 text-sm font-medium text-gray-600">
              <a href="#about"     className="px-3 py-2 rounded-md transition-all duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">About</a> 
              <a href="#education" className="px-3 py-2 rounded-md transition-all duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Education</a> 
              <a href="#skills"    className="px-3 py-2 rounded-md transition-all duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Skills</a> 
              <a href="#projects"  className="px-3 py-2 rounded-md transition-all duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Projects</a> 
              <a href="#contact"   className="px-3 py-2 rounded-md transition-all duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Contact</a>
          </div>

          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <RiCloseLine className="text-gray-600 text-xl" />
            ) : (
              <RiMenuLine className="text-gray-600 text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu tetap pakai scrollToSection biar auto close */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="py-4 space-y-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 hover:shadow-xl">About</button>
              <button onClick={() => scrollToSection('education')} className="block w-full text-left px-4 py-2 hover:shadow-xl">Education</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-4 py-2 hover:shadow-xl">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 hover:shadow-xl">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:shadow-xl">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
