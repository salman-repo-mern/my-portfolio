import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { IoSchool } from 'react-icons/io5'
import { FaLaptopCode, FaUniversity, FaBookOpen } from 'react-icons/fa'
import './index.css'
import '../index.css'

const Education = ({ isDarkMode }) => {
  const educationData = [
    {
      title: 'Full Stack Developer Program (MERN Stack)',
      subtitle: 'NxtWave CCBP Academy',
      date: 'May 2024 - April 2025',
      description:
        'Specialized in MongoDB, Express.js, React.js, and Node.js. Built several real-world projects and gained experience with REST APIs, JWT Authentication, Git, and deployment.',
      icon: <FaLaptopCode />,
      darkIconBg: 'linear-gradient(135deg, #00FFFF 0%, #0099FF 100%)',
      lightIconBg: 'linear-gradient(135deg, #0288d1 0%, #26c6da 100%)',
      iconColor: '#fff',
      arrowColorDark: '#00FFFF',
      arrowColorLight: '#0288d1',
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      subtitle: 'Vijayam Science and Arts Degree College',
      date: 'Dec 2020 - Sep 2023',
      description:
        'Focused on foundational computing concepts, programming, data structures, database management, and web technologies.',
      icon: <FaUniversity />,
      darkIconBg: 'linear-gradient(135deg, #9D50BB 0%, #6E48AA 100%)',
      lightIconBg: 'linear-gradient(135deg, #7b1fa2 0%, #ba68c8 100%)',
      iconColor: '#fff',
      arrowColorDark: '#9D50BB',
      arrowColorLight: '#7b1fa2',
    },
    {
      title: 'Intermediate (MPC)',
      subtitle: 'RK Junior College, Chittoor',
      date: '2018 - 2020',
      description:
        'Specialization in Mathematics, Physics, and Chemistry. Built a foundation in analytical and problem-solving skills.',
      icon: <FaBookOpen />,
      darkIconBg: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
      lightIconBg: 'linear-gradient(135deg, #f57c00 0%, #ffb74d 100%)',
      iconColor: '#fff',
      arrowColorDark: '#f12711',
      arrowColorLight: '#f57c00',
    },
    {
      title: 'Secondary School Certificate (SSC)',
      subtitle: 'Camford English High School',
      date: '2017 - 2018',
      description:
        'Completed 10th grade with a focus on foundational subjects including Math, Science, and English.',
      icon: <IoSchool />,
      darkIconBg: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      lightIconBg: 'linear-gradient(135deg, #388e3c 0%, #81c784 100%)',
      iconColor: '#fff',
      arrowColorDark: '#38ef7d',
      arrowColorLight: '#388e3c',
    },
  ]

  return (
    <section
      id="education-container"
      className={isDarkMode ? 'dark-mode' : 'light-mode'}
    >
      <div className="education-header">
        <h1 className="section-title">
          My <span className="highlight-text">Education</span>
        </h1>
        <p className="section-subtitle">
          My academic journey and qualifications
        </p>
      </div>

      <VerticalTimeline
        lineColor={isDarkMode ? 'rgba(0, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}
      >
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentArrowStyle={{
              borderRight: `7px solid ${isDarkMode ? item.arrowColorDark : item.arrowColorLight
                }`,
            }}
            date={item.date}
            iconStyle={{
              background: isDarkMode ? item.darkIconBg : item.lightIconBg,
              color: item.iconColor,
            }}
            icon={item.icon}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.subtitle}
            </h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Education