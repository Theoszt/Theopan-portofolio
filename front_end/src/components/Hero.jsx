import { useState, useEffect } from 'react'
import { RiLinkedinFill, RiGithubFill, RiInstagramLine, RiMailFill } from 'react-icons/ri'
import ProfileImage from '../assets/profile-placeholder.jpg'
function Hero() {
  const texts = [
    'Data Science Student',
    'Data Analyst',
    'Machine Learning Enthusiast',
  ]

  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const currentText = texts[textIndex]

    let typeSpeed = isDeleting ? 80 : 150 
    const handleTyping = () => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000) 
        return
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    const timer = setTimeout(handleTyping, typeSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex])

  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20minimalist%20office%20workspace%20with%20clean%20white%20desk%2C%20natural%20lighting%2C%20professional%20atmosphere%2C%20soft%20shadows%2C%20contemporary%20design%2C%20neutral%20colors%2C%20elegant%20simplicity%2C%20architectural%20photography%20style&width=1920&height=1080&seq=hero001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
       <div className="w-full bg-white/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Hello, I'm<br />
                <span className="text-primary">Theopan Gerard</span>
              </h1>
              <div className="text-xl text-gray-600">
                <span className="typing-animation">{displayText}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
                A 5th-semester Data Science student at Universitas Negeri Surabaya, 19 years old, with a strong interest in data analysis, programming, and applying statistical science to solve real-world problems. Meticulous, logical, and enthusiastic about developing data-driven solutions through modern technology and analytical methods.
              </p>
               <div className="flex flex-wrap gap-4">
                  <a
                    href="https://drive.google.com/file/d/1Hp-zIcBHVwHFE-p9lUbACZe6HZ8vt8Lr/view?usp=sharing"
                    download
                    className="bg-primary text-white px-8 py-3 rounded-button hover:bg-white-700 transition-colors whitespace-nowrap"
                  >
                    Download Resume
                  </a>
                  <a
                    href="#projects"
                    className="border-2 border-primary text-primary px-8 py-3 rounded-button hover:bg-primary hover:text-primary transition-colors whitespace-nowrap"
                  >
                    View Projects
                  </a>
                </div>
              <div className="flex space-x-4 pt-4">
                <a href="https://www.linkedin.com/in/theopan-gerard" className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-primary hover:text-white transition-colors rounded-full hover:bg-blue-700">
                  <RiLinkedinFill />
                </a>
                <a href="https://github.com/Theoszt" className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-primary hover:text-white transition-colors rounded-full hover:bg-blue-700">
                  <RiGithubFill />
                </a>
                <a href="https://www.instagram.com/the_opan_n" className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-primary hover:text-white transition-colors rounded-full hover:bg-blue-700">
                  <RiInstagramLine />
                </a>
                <a href="mailto:gerardnainggolan906@gmail.com" className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-primary hover:text-white transition-colors rounded-full hover:bg-blue-700">
                  <RiMailFill />
                </a>
              </div>
            </div>
            <div className="flex justify-center fade-in">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={ProfileImage}
                  alt="Theopan Gerard Nainggolan"
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero