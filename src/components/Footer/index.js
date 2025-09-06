import './index.css'

// --- Single Source of Truth for Navigation ---
const navLinks = [
  {path: '/', label: 'Home'},
  {path: '/education', label: 'Education'},
  {path: '/about', label: 'About'},
  {path: '/projects', label: 'Projects'},
  {path: '/contact', label: 'Contact'},
]

const Footer = ({onNavigate}) => (
  <footer className="footer-container">
    <div className="footer-content">
      <div className="footer-header">
        <h2 className="footer-title">Salman</h2>
        <p className="footer-subtitle">Full Stack Developer</p>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <ul className="footer-menu">
          {navLinks.map(({path, label}) => (
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
        <a
          href="https://www.linkedin.com/in/salman-sa786472"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="icon-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.11 3.11 0 012.6-1.4c2.5 0 4.5 2.2 4.5 5.1z" />
          </svg>
        </a>

        <a
          href="https://github.com/salman-repo-mern"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="icon-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 01.1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.72c0 .27.18.58.69.48A10 10 0 0022 12 10 10 0 0012 2z" />
          </svg>
        </a>

        <a
          href="mailto:mohammedsalman78786@gmail.com"
          aria-label="Email"
          className="icon-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
          </svg>
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 Salman. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer