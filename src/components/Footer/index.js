import { Mail, Linkedin, Github } from 'lucide-react'
import { SiLeetcode } from 'react-icons/si'
import './index.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/education', label: 'Education' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

const SocialLink = ({ href, label, icon: Icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    aria-label={`Visit my ${label}`}
    style={{ '--icon-color': color }}
  >
    <Icon size={24} />
  </a>
)

const Footer = ({ onNavigate }) => (
  <footer className="footer-container">
    <div className="footer-content">
      <div className="footer-header">
        <h2 className="footer-title">Salman</h2>
        <p className="footer-subtitle">Full Stack Developer</p>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <ul className="footer-menu">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <a
                href={path}
                className="footer-menu-link"
                onClick={e => {
                  e.preventDefault()
                  if (onNavigate) {
                    onNavigate(path)
                  }
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className="footer-social-icons"
        role="list"
        aria-label="Social media links"
      >
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
        <SocialLink
          href="https://mail.google.com/mail/?view=cm&to=mohammedsalman78786@gmail.com"
          label="Email"
          icon={SiLeetcode}
          color="rgb(255, 179, 3)"
        />
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 Salman. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer
