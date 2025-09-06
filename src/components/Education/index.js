import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {IoSchool} from 'react-icons/io5'
import {FaLaptopCode, FaUniversity, FaBookOpen} from 'react-icons/fa'
import './index.css'
import '../index.css'

const Education = ({isDarkMode}) => {
  const darkStyle = {
    background: '#1a1a1a',
    color: '#f0f0f0',
    border: '1px solid #00FFFF',
    boxShadow: '0 4px 12px rgba(0, 255, 255, 0.2)',
    borderRadius: '20px',
  }

  const lightStyle = {
    background: '#ffffff',
    color: '#808080',
    border: '1px solid #0288d1',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    borderRadius: '20px',
  }

  return (
    <section
      id="education-container"
      className={isDarkMode ? 'dark-mode' : 'light-mode'}
    >
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={isDarkMode ? darkStyle : lightStyle}
          contentArrowStyle={{
            borderRight: `7px solid ${isDarkMode ? '#00FFFF' : '#2e7d32'}`,
          }}
          date="May 2024 - April 2025"
          iconStyle={{
            background: isDarkMode ? '#00FFFF' : 'rgb(16, 204, 82)',
            color: '#000',
          }}
          icon={<FaLaptopCode />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{color: isDarkMode ? 'yellow' : ''}}
          >
            Full Stack Developer Program (MERN Stack)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            NxtWave CCBP Academy
          </h4>
          <p>
            Specialized in MongoDB, Express.js, React.js, and Node.js. Built
            several real-world projects and gained experience with REST APIs,
            JWT Authentication, Git, and deployment.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={isDarkMode ? darkStyle : lightStyle}
          contentArrowStyle={{
            borderRight: `7px solid ${isDarkMode ? '#00FFFF' : '#0277bd'}`,
          }}
          date="Dec 2020 - Sep 2023"
          iconStyle={{
            background: isDarkMode ? '#00FFFF' : '#0288d1',
            color: '#000',
          }}
          icon={<FaUniversity />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{color: isDarkMode ? 'yellow' : ''}}
          >
            Bachelor of Computer Applications (BCA)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vijayam Science and Arts Degree College
          </h4>
          <p>
            Focused on foundational computing concepts, programming, data
            structures, database management, and web technologies.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={isDarkMode ? darkStyle : lightStyle}
          contentArrowStyle={{
            borderRight: `7px solid ${isDarkMode ? '#00FFFF' : '#1565c0'}`,
          }}
          date="2018 - 2020"
          iconStyle={{
            background: isDarkMode ? '#00FFFF' : '#1976d2',
            color: '#000',
          }}
          icon={<FaBookOpen />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{color: isDarkMode ? 'yellow' : ''}}
          >
            Intermediate (MPC)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            RK Junior College, Chittoor
          </h4>
          <p>
            Specialization in Mathematics, Physics, and Chemistry. Built a
            foundation in analytical and problem-solving skills.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={isDarkMode ? darkStyle : lightStyle}
          contentArrowStyle={{
            borderRight: `7px solid ${isDarkMode ? '#00FFFF' : '#c2185b'}`,
          }}
          date="2017 - 2018"
          iconStyle={{
            background: isDarkMode ? '#00FFFF' : '#e91e63',
            color: '#000',
          }}
          icon={<IoSchool />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{color: isDarkMode ? 'yellow' : ''}}
          >
            Secondary School Certificate (SSC)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Camford English High School
          </h4>
          <p>
            Completed 10th grade with a focus on foundational subjects including
            Math, Science, and English.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  )
}

export default Education