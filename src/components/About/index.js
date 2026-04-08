import './index.css'
import { FaLaptopCode, FaTrophy, FaCheckCircle } from 'react-icons/fa'

const skills = [
  {
    skills: [
      {
        name: 'HTML',
        image: '/html.png',
      },
      {
        name: 'CSS',
        image: '/css.png',
      },
      {
        name: 'JavaScript',
        image: '/javascript.png',
      },
      {
        name: 'Bootstrap',
        image: '/bootstrap.png',
      },
      {
        name: 'React Js',
        image: '/reactjs.png',
      },
      {
        name: 'Node Js',
        image: '/nodejs.png',
      },
      {
        name: 'Express Js',
        image: '/expressjs.png',
      },
      {
        name: 'Python',
        image: '/python.png',
      },
      {
        name: 'SQL',
        image: '/sql.png',
      },
      {
        name: 'MongoDB',
        image: '/mongo.png',
      },
      {
        name: 'Git',
        image: '/git.png',
      },
      {
        name: 'GitHub',
        image: '/github.png',
      },
      {
        name: 'VS Code',
        image: '/vscode.png',
      },
      {
        name: 'Vercel',
        image: '/vercel.png',
      },
      {
        name: 'Netlify',
        image: '/netlify.png',
      },
      {
        name: 'Render',
        image: 'render.png',
      },
      {
        name: 'AI Foundation Course',
        image: 'jio.jpg',
      },
    ],
  },
]

export default function About() {
  const allSkills = skills.flatMap(section => section.skills)

  return (
    <div className="mainContainer" id="about-container-main">
      <div className="about-header">
        <h1 className="section-title">
          About <span className="highlight-text">Me</span>
        </h1>
        <p className="section-subtitle">
          My journey, skills, and achievements
        </p>
      </div>

      <div className="about-top">
        <div className="about-card about-left">
          <h3>
            <FaLaptopCode style={{ color: '#0288d1' }} /> My Journey
          </h3>
          <p>
            I started my coding journey with a strong curiosity towards building
            real-world applications. Over time, I transitioned into MERN stack
            development, learning how to design scalable systems, clean UI, and
            efficient backend logic. I enjoy building things that make an
            impact and continually pushing boundaries to craft dynamic digital
            experiences.
          </p>
        </div>

        <div className="about-card about-right">
          <h3>
            <FaTrophy style={{ color: '#ffb300' }} /> Competitive Coding
          </h3>
          <ul className="about-achievements">
            <li>
              <FaCheckCircle style={{ color: '#00e676', minWidth: '20px' }} />
              Solved 100+ coding problems
            </li>
            <li>
              <FaCheckCircle style={{ color: '#00e676', minWidth: '20px' }} />
              Strong fundamentals in Data Structures & Algorithms
            </li>
          </ul>
        </div>
      </div>

      <div className="skillsSlider">
        <h2>Technologies I Work With</h2>
        <div className="sliderTrack">
          {allSkills.concat(allSkills).map((item, index) => (
            <div className="slide" key={index}>
              <img
                src={item.image.startsWith('/') ? item.image : `/${item.image}`}
                alt={item.name}
                className="slideImage"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
