import {useState} from 'react'
import './index.css'

const skills = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React Js',
        image:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
      },
      {
        name: 'HTML',
        image: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',
      },
      {
        name: 'CSS',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
      },
      {
        name: 'JavaScript',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
      },
      {
        name: 'Bootstrap',
        image:
          'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node Js',
        image: 'https://nodejs.org/static/images/logo.svg',
      },
      {
        name: 'Express Js',
        image:
          'https://cdn.groovetechnology.com/wp-content/uploads/2023/08/expressjs.png',
      },
      {
        name: 'Python',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      },
      {
        name: 'MySQL',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      },
      {
        name: 'MongoDB',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      },
    ],
  },
  {
    title: 'Others',
    skills: [
      {
        name: 'Git',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg',
      },
      {
        name: 'GitHub',
        image:
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      {
        name: 'VS Code',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519',
      },
      {
        name: 'Vercel',
        image:
          'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754915464/vl_mxxjwe.png',
      },
      {
        name: 'Netlify',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/97/Netlify_logo_%282%29.svg',
      },
      {
        name: 'Render',
        image:
          'https://res.cloudinary.com/dusyxcqt9/image/upload/v1754915647/render_sqdr3p.png',
      },
    ],
  },
]

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend')

  const selectedSkills = skills.find(skill => skill.title === selectedCategory)

  return (
    <div className="mainContainer" id="about-container-main">
      <div className="about-info">
        <h3>My introduction</h3>
        <p>
          I'm a passionate Full Stack Web Developer with a strong foundation in
          both front-end and back-end technologies. I love building responsive,
          scalable, and user-friendly web applications.
        </p>
      </div>

      <div className="tabContainer">
        {skills.map(skill => (
          <button
            key={skill.title}
            type="button"
            className={`tabButton ${
              selectedCategory === skill.title ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(skill.title)}
          >
            {skill.title}
          </button>
        ))}
      </div>

      <div className="skillsContainer">
        <div className="skillList">
          {selectedSkills.skills.map(item => (
            <div className="skillItem" key={item.id}>
              <img src={item.image} className="skillImage" alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About