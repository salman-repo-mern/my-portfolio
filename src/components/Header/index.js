import { useState, useEffect } from 'react'
import { Menu, X, Eye, Sun, Moon } from 'lucide-react'
import './index.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/education', label: 'Education' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

const onDownloadResume = () => {
  window.open(
    'https://drive.google.com/file/d/1ujIgN06pdL8U0nolSdfj9njQqBQJI7Wl/view?usp=sharing',
    '_blank',
    'noreferrer',
  )
}

const Header = ({ isDarkMode, onToggleTheme, onNavigate }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // --- Effect for Sticky Header ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // --- NEW: Effect for Active Link Highlighting ---
  useEffect(() => {
    const sections = navLinks.map(({ path }) =>
      document.getElementById(path === '/' ? 'home-hero' : path.substring(1)), // Fix targeted ID for home
    )

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(
              `/${entry.target.id === 'home-hero' ? '' : entry.target.id}`,
            )
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the screen
        threshold: 0,
      },
    )

    sections.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const handleNavClick = path => {
    onNavigate(path)
    closeMobileMenu()
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="header__nav container">
        <a
          href="#home"
          className="header__logo"
          onClick={e => {
            e.preventDefault()
            handleNavClick('/')
          }}
        >
          &lt; <span className="logo-name">Salman</span> /&gt;
        </a>

        <div className={`header__menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="header__list">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <a
                  href={`#${path === '/' ? 'home' : path.substring(1)}`}
                  className={`header__link ${activeSection === path ? 'active' : ''
                    }`}
                  onClick={e => {
                    e.preventDefault()
                    handleNavClick(path)
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="header__buttons_mobile">
            <button
              className="btn header-resume-btn"
              onClick={onDownloadResume}
              type="button"
            >
              Resume <Eye size={18} className="btn-icon" />
            </button>
            <button
              onClick={onToggleTheme}
              className="theme-toggle-btn"
              type="button"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        <div className="header__buttons_desktop">
          <button
            className="btn header-resume-btn"
            onClick={onDownloadResume}
            type="button"
          >
            Resume <Eye size={18} className="btn-icon" />
          </button>
          <button
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            type="button"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <button
          className="header__toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
          type="button"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  )
}

export default Header