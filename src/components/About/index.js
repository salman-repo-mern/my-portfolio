import './index.css'

const skills = [
  {
    skills: [
      {
        name: 'React Js',
        image:
          '/reactjs.png',
      },
      {
        name: 'HTML',
        image: '/html.png',
      },
      {
        name: 'CSS',
        image:
          '/css.png',
      },
      {
        name: 'JavaScript',
        image:
          '/javascript.png',
      },
      {
        name: 'Bootstrap',
        image:
          '/bootstrap.png',
      },
      {
        name: 'Node Js',
        image: '/nodejs.png',
      },
      {
        name: 'Express Js',
        image:
          '/expressjs.png',
      },
      {
        name: 'Python',
        image:
          '/python.png',
      },
      {
        name: 'SQL',
        image:
          '/sql.png',
      },
      {
        name: 'MongoDB',
        image:
          '/mongo.png',
      },
      {
        name: 'Git',
        image:
          '/git.png',
      },
      {
        name: 'GitHub',
        image:
          '/github.png',
      },
      {
        name: 'VS Code',
        image:
          '/vscode.png',
      },
      {
        name: 'Vercel',
        image:
          '/vercel.png',
      },
      {
        name: 'Netlify',
        image:
          '/netlify.png',
      },
      {
        name: 'Render',
        image:
          'render.png',
      },
    ]
  }
]

export default function About() {
  const allSkills = skills.flatMap(section => section.skills)

  return (
    <div className="mainContainer" id="about-container-main">
      <div className="about-top">
        <div className="about-left">
          <h3>My Journey</h3>
          <p>
            I started my coding journey with a strong curiosity towards building
            real-world applications. Over time, I transitioned into MERN stack
            development, learning how to design scalable systems, clean UI, and
            efficient backend logic. I enjoy building things that make an impact.
          </p>
        </div>
        <div className="about-right">
          <h3>My Competitive Coding</h3>
          <ul className="about-achievements">
            <li>✔️ Solved 100+ coding problems</li>
            <li>✔️ Strong fundamentals in DSA</li>
            <li>✔️ Practicing Algorithms daily</li>
          </ul>
        </div>
      </div>
      <div className="skillsSlider">
        <h2>I am Familiar with the below technologies</h2>
        <div className="sliderTrack">
          {allSkills.concat(allSkills).map((item, index) => (
            <div className="slide" key={index}>
              <img src={item.image} alt={item.name} className="slideImage" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}