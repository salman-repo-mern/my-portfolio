import {RiExternalLinkFill} from 'react-icons/ri'
import './index.css'

const projectsData = [
  {
    id: 1,
    title: 'Nxt Trendz ',
    description:
      'Developed a modern e-commerce platform inspired by Amazon and Flipkart with user authentication, protected routes, and dynamic pages for login, products, and product details using React Router and components.',
    technologies: [
      'React.js',
      'CSS',
      'Bootstrap',
      'Routing',
      'Rest APIs',
      'Local Storage',
      'State Management',
      'Authentication',
      'Authorization',
    ],
    liveLink: 'https://latesttrendz.ccbp.tech/',
    githubLink: 'https://github.com/yourusername/portfolio',
    imageUrl:
      'https://res.cloudinary.com/dusyxcqt9/image/upload/v1747634553/latest_trends_tahaqs.png',
  },
  {
    id: 2,
    title: 'Covid Dashboard',
    description:
      'Built a responsive COVID-19 Dashboard for India with state-wise data, search functionality, and interactive graphs using Recharts. Integrated COVID APIs from covid19india.org and implemented a pixel-perfect UI based on Figma designs.',
    technologies: [
      'HTML',
      'CSS',
      'Javascript',
      'React.js',
      'Recharts',
      'Figma',
    ],
    liveLink: 'https://cowin19.ccbp.tech/',
    githubLink: 'https://github.com/yourusername/ecommerce',
    imageUrl:
      'https://res.cloudinary.com/dusyxcqt9/image/upload/v1747754328/coviddashboard_xy5tqr.png',
  },
  {
    id: 3,
    title: 'Nxt Watch',
    description:
      'Developed Nxt Watch, a YouTube-like platform with category-based videos, search, and theme customization. Used React Router for navigation, Context API for state management, and consumed a mock REST API for dynamic content.',
    technologies: [
      'React.js',
      'JavaScript',
      'CSS',
      'Bootstrap',
      'Routing',
      'REST API Calls',
      'Local Storage',
      'JWT Token',
      'Authorization',
    ],
    liveLink: 'https://ytb.ccbp.tech/',
    githubLink: 'https://github.com/yourusername/blog-platform',
    imageUrl:
      'https://res.cloudinary.com/dusyxcqt9/image/upload/v1747754596/youtube_y2yxz2.png',
  },
  {
    id: 4,
    title: 'Bismi Fresh Foods ',
    description:
      'Bismi Fresh Foods: A healthy meal delivery platform offering freshly prepared meals, smoothies, and snacks, delivered directly to customers’ doorsteps.',
    technologies: [
      'React.js',
      'Responsive Design',
      'Context API (State Management)',
      'Local Storage',
      'WhatsApp API',
      'CSS',
    ],
    liveLink: 'https://bismifreshfoods.com',
    githubLink: 'https://github.com/salman-repo-mern/website.git',
    imageUrl:
      'https://res.cloudinary.com/dusyxcqt9/image/upload/v1756021814/Screenshot_2025-08-24_131733_ppwmg9.png',
  },
]

export default function Projects() {
  return (
    <section className="projects-page" id="projects-container-main">
      <h1 className="page-heading">My Projects</h1>

      <div className="projects-container">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <div className="card-inner">
              {/* Front of the card */}
              <div className="card-front">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-info">
                  <h2>{project.title}</h2>
                </div>
              </div>

              {/* Back of the card */}
              <div className="card-back">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="technologies-container">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link"
                  >
                    Live Demo <RiExternalLinkFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}