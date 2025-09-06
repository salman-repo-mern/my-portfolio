import {useState, useEffect, useRef} from 'react'
import {FaFileAlt, FaEye} from 'react-icons/fa'
import {Mail, Linkedin, Github} from 'lucide-react'
import './index.css' // Your existing CSS file

// --- Reusable SocialLink Component ---
const SocialLink = ({href, label, icon: Icon, color}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    aria-label={`Visit my ${label}`}
    style={{'--icon-color': color}}
  >
    <Icon size={24} />
  </a>
)

const Home = () => {
  const [currentRole, setCurrentRole] = useState('')
  const roles = useRef([
    'Front-end Developer',
    'Back-end Developer',
    'MERN Stack Developer',
  ]).current

  const roleIndex = useRef(0)
  const charIndex = useRef(0)
  const isDeleting = useRef(false)
  const timeoutId = useRef(null)

  useEffect(() => {
    const handleTyping = () => {
      const currentRoleText = roles[roleIndex.current]
      let typeSpeed = 200

      if (isDeleting.current) {
        // Deleting text
        setCurrentRole(currentRoleText.substring(0, charIndex.current - 1))
        charIndex.current--
        typeSpeed = 100
      } else {
        // Typing text
        setCurrentRole(currentRoleText.substring(0, charIndex.current + 1))
        charIndex.current++
      }

      // --- Logic for switching roles ---
      if (!isDeleting.current && charIndex.current === currentRoleText.length) {
        // Finished typing, pause then start deleting
        typeSpeed = 1500
        isDeleting.current = true
      } else if (isDeleting.current && charIndex.current === 0) {
        // Finished deleting, move to the next role
        isDeleting.current = false
        roleIndex.current = (roleIndex.current + 1) % roles.length
        typeSpeed = 1000
      }

      timeoutId.current = setTimeout(handleTyping, typeSpeed)
    }

    // Start the effect
    timeoutId.current = setTimeout(handleTyping, 500)

    // Cleanup function to prevent memory leaks
    return () => clearTimeout(timeoutId.current)
  }, [roles]) // Dependency array ensures this runs only once

  const onHireMe = () => {
    window.open(
      'https://www.linkedin.com/in/salman-sa786472',
      '_blank',
      'noreferrer',
    )
  }

  const onCheckResume = () => {
    window.open(
      'https://drive.google.com/file/d/1w5tfBf4NuIUPdpHDSyD6FO_vMePmcBlx/view?usp=sharing',
      '_blank',
      'noreferrer',
    )
  }

  return (
    <main id="home-hero" className="home-section">
      <div className="featured-box">
        <div className="featured-text">
          <div className="featured-text-card">
            <h1 className="heading-name" style={{fontWeight: 600}}>
              Hello, this is{' '}
              <span
                className="special-name"
                style={{
                  fontFamily: 'Bruno Ace SC',
                  fontWeight: 700,
                  fontStyle: 'normal',
                }}
              >
                Salman
              </span>
            </h1>
          </div>
          <div className="featured-name">
            <p className="heading-name">
              {`I'm a `}
              <span className="typedText">
                {currentRole}
                <span className="cursor">|</span>
              </span>
            </p>
          </div>
          <div className="featured-text-info">
            <p>
              A full-stack web developer with experience in JavaScript, Node.js,
              React, and MongoDB.
            </p>
          </div>
          <div className="featured-text-btn">
            <button className="btn blue-btn" type="button" onClick={onHireMe}>
              Hire Me <FaFileAlt className="file" />
            </button>
            <button
              className="btn gradient-btn"
              type="button"
              onClick={onCheckResume}
            >
              Check Resume <FaEye className="file" />
            </button>
          </div>
          <div className="social-icons">
            <SocialLink
              href="https://linkedin.com/in/salman-sa786472"
              label="LinkedIn"
              icon={Linkedin}
              color="#2563eb"
            />
            <SocialLink
              href="https://github.com/salman-repo-mern"
              label="GitHub"
              icon={Github}
              color="#1f2937"
            />
            <SocialLink
              href="https://mail.google.com/mail/?view=cm&to=mohammedsalman78786@gmail.com"
              label="Email"
              icon={Mail}
              color="#ef4444"
            />
          </div>
        </div>
        <div className="main-image-container slide-in-right">
          <div className="relative-container">
            <div className="floating-container">
              <div className="image-container">
                <img
                  src="https://res.cloudinary.com/dusyxcqt9/image/upload/v1748608874/WhatsApp_Image_2025-05-30_at_6.10.29_PM_f6yppx.jpg"
                  alt="Salman's profile"
                  className="main-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home