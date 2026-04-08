import { useState, useEffect, useRef } from 'react'
import { Mail, Linkedin, Github, FileText, Eye } from 'lucide-react'
import './index.css'

// --- Reusable SocialLink Component ---
const SocialLink = ({ href, label, icon: Icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    aria-label={`Visit my ${label}`}
    style={{ '--icon-color': color }}
  >
    <Icon size={22} className="social-svg" />
  </a>
)

const Home = () => {
  const [currentRole, setCurrentRole] = useState('')
  const roles = useRef([
    'Front-end Developer',
    'Back-end Developer',
    'MERN Stack Developer',
    'UI/UX Enthusiast',
    'Java Developer'
  ]).current

  const roleIndex = useRef(0)
  const charIndex = useRef(0)
  const isDeleting = useRef(false)
  const timeoutId = useRef(null)

  useEffect(() => {
    const handleTyping = () => {
      const currentRoleText = roles[roleIndex.current]
      let typeSpeed = 100

      if (isDeleting.current) {
        // Deleting text
        setCurrentRole(currentRoleText.substring(0, charIndex.current - 1))
        charIndex.current--
        typeSpeed = 50
      } else {
        // Typing text
        setCurrentRole(currentRoleText.substring(0, charIndex.current + 1))
        charIndex.current++
      }

      // --- Logic for switching roles ---
      if (!isDeleting.current && charIndex.current === currentRoleText.length) {
        // Finished typing, pause then start deleting
        typeSpeed = 2000
        isDeleting.current = true
      } else if (isDeleting.current && charIndex.current === 0) {
        // Finished deleting, move to the next role
        isDeleting.current = false
        roleIndex.current = (roleIndex.current + 1) % roles.length
        typeSpeed = 500
      }

      timeoutId.current = setTimeout(handleTyping, typeSpeed)
    }

    timeoutId.current = setTimeout(handleTyping, 500)

    return () => clearTimeout(timeoutId.current)
  }, [roles])

  const onHireMe = () => {
    window.open(
      'https://www.linkedin.com/in/shaiksalman2',
      '_blank',
      'noreferrer',
    )
  }

  const onCheckResume = () => {
    window.open(
      'https://drive.google.com/file/d/13evcO39hYe_3R5AlAIY72x1pST9J-IZ-/view?usp=drive_link',
      '_blank',
      'noreferrer',
    )
  }

  return (
    <main id="home-hero" className="home-section">
      <div className="home-background-elements">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>

      <div className="featured-box">
        <div className="featured-text">
          <div className="featured-text-content">
            <span className="greeting-badge">Welcome to my portfolio</span>
            <div className="featured-text-card">
              <h1 className="heading-name">
                Hello, I'm <br />
                <span className="special-name gradient-text">Salman</span>
              </h1>
            </div>

            <div className="featured-role">
              <p className="role-text">
                <span className="typedText">
                  {currentRole}<span className="cursor"></span>
                </span>
              </p>
            </div>

            <div className="featured-text-info">
              <p>
                A passionate web developer crafting modern, responsive,
                and scalable digital experiences with clean code.
              </p>
            </div>

            <div className="featured-text-btn">
              <button className="btn primary-btn" type="button" onClick={onHireMe}>
                Hire Me <FileText size={18} className="btn-icon" />
              </button>
              <button
                className="btn secondary-btn"
                type="button"
                onClick={onCheckResume}
              >
                View Resume <Eye size={18} className="btn-icon" />
              </button>
            </div>

            <div className="social-icons">
              <SocialLink
                href="https://linkedin.com/in/salman-sa786472"
                label="LinkedIn"
                icon={Linkedin}
                color="#0077B5"
              />
              <SocialLink
                href="https://github.com/salman-repo-mern"
                label="GitHub"
                icon={Github}
                color="var(--github-color, #1f2937)"
              />
              <SocialLink
                href="https://mail.google.com/mail/?view=cm&to=mohammedsalman78786@gmail.com"
                label="Email"
                icon={Mail}
                color="#EA4335"
              />
            </div>
          </div>
        </div>

        <div className="main-image-container slide-in-right">
          <div className="relative-container">
            <div className="profile-backdrop"></div>
            <div className="floating-container">
              <div className="image-wrapper">
                <img
                  src="https://res.cloudinary.com/dusyxcqt9/image/upload/v1748608874/WhatsApp_Image_2025-05-30_at_6.10.29_PM_f6yppx.jpg"
                  alt="Salman's profile"
                  className="main-image"
                />
              </div>
            </div>
            {/* Floating badges */}
            <div className="floating-badge badge-1">
              <span>React</span>
            </div>
            <div className="floating-badge badge-2">
              <span>Node.js</span>
            </div>
            <div className="floating-badge badge-3">
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
