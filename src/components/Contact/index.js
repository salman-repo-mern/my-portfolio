import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { LuSend } from 'react-icons/lu'
import './index.css'

const Popup = ({ message, type, onDismiss }) => (
  <div
    role="button"
    tabIndex={0}
    className={`popup popup--${type}`}
    onClick={onDismiss}
    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onDismiss()}
    title="Click to dismiss"
    aria-label="Close notification"
  >
    {message}
  </div>
)

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [popup, setPopup] = useState({
    show: false,
    message: '',
    type: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const triggerPopup = (message, type) => {
    setPopup({ show: true, message, type })
    setTimeout(() => setPopup(prev => ({ ...prev, show: false })), 3000)
  }

  const sendMail = e => {
    e.preventDefault()

    if (Object.values(formData).some(value => value.trim() === '')) {
      triggerPopup('❌ Please fill all fields before sending.', 'error')
      return
    }

    emailjs
      .sendForm(
        'service_fzv2k6k',
        'template_njz0h7f',
        form.current,
        'jy-WhRgVzEH6j_6Hr',
      )
      .then(
        () => {
          triggerPopup('✅ Message sent successfully!', 'success')
          setFormData({ name: '', email: '', subject: '', message: '' })
        },
        error => {
          console.error('FAILED...', error)
          triggerPopup('❌ Failed to send message. Please try again.', 'error')
        },
      )
  }

  return (
    <section className="section education-container mb-5" id="contact-section">
      <div className="top-header">
        <h1 id="main-heading-name">Let’s Work Together</h1>
        <span>Got an idea or project in mind? I’d love to hear about it!</span>
      </div>

      <div className="row" id="containerStyle">
        <div className="col" style={{ marginBottom: '40px' }}>
          {/* Use a proper <form> element with onSubmit */}
          <form
            ref={form}
            onSubmit={sendMail}
            className="form-control box animated-border-box"
          >
            <div className="form-inputs">
              <input
                type="text"
                className="input-field"
                placeholder="Full Name"
                name="name" // Add name attribute
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                className="input-field"
                placeholder="Enter your Email"
                name="email" // Add name attribute
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              className="input-field input-subject"
              placeholder="Brief topic of your message"
              name="subject" // Add name attribute
              required
              autoComplete="off"
              value={formData.subject}
              onChange={handleChange}
            />
            <div className="text-area">
              <textarea
                placeholder="Type your message here....."
                name="message" // Add name attribute
                required
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="form-button">
              {/* Change button type to "submit" */}
              <button className="btn" type="submit">
                Send <LuSend style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {popup.show && (
        <Popup
          message={popup.message}
          type={popup.type}
          onDismiss={() => setPopup(prev => ({ ...prev, show: false }))}
        />
      )}
    </section>
  )
}

export default Contact
