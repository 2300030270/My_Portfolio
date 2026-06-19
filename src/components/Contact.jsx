import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:jvvamsi12@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-layout">
          <div className="contact-channels">
            <a href="mailto:jvvamsi12@gmail.com" className="contact-channel">
              <span className="contact-channel-label">Email</span>
              <span className="contact-channel-val">jvvamsi12@gmail.com</span>
            </a>
            <a href="tel:+917416741589" className="contact-channel">
              <span className="contact-channel-label">Phone</span>
              <span className="contact-channel-val">+91 7416741589</span>
            </a>
            <a
              href="https://linkedin.com/in/jannu-vishnu-vamsi-a6a5a127b"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <span className="contact-channel-label">LinkedIn</span>
              <span className="contact-channel-val">jannu-vishnu-vamsi ↗</span>
            </a>
            <a
              href="https://github.com/2300030270"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <span className="contact-channel-label">GitHub</span>
              <span className="contact-channel-val">@2300030270 ↗</span>
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-field">
              <span>Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
            </label>
            <label className="contact-field">
              <span>Message</span>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="What would you like to talk about?" rows={5} required />
            </label>
            <button type="submit" className="btn btn-primary contact-submit">Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
