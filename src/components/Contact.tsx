import { useState, type FormEvent } from 'react'
import { useLang } from '../LanguageContext'
import './Contact.css'

export function Contact() {
  const { t } = useLang()
  const { contact } = t
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-inner">
        <div className="contact-left">
          <span className="section-label">{contact.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="contact-heading">{contact.title}</h2>
          <p className="section-subtitle">{contact.subtitle}</p>
          <p className="contact-disclaimer">{contact.disclaimer}</p>
        </div>

        <div className="contact-right">
          {submitted ? (
            <div className="contact-success" role="alert">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="22" stroke="#22c55e" strokeWidth="2"/>
                <path d="M14 24l8 8 12-16" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>{t.lang === 'en' ? 'Thank you. We will be in touch.' : 'Teşekkürler. En kısa sürede dönüş yapacağız.'}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="cf-name">{contact.form.name}</label>
                  <input id="cf-name" type="text" name="name" required autoComplete="name"/>
                </div>
                <div className="contact-form__field">
                  <label htmlFor="cf-org">{contact.form.org}</label>
                  <input id="cf-org" type="text" name="organisation" autoComplete="organization"/>
                </div>
              </div>
              <div className="contact-form__field">
                <label htmlFor="cf-email">{contact.form.email}</label>
                <input id="cf-email" type="email" name="email" required autoComplete="email"/>
              </div>
              <div className="contact-form__field">
                <label htmlFor="cf-subject">{contact.form.subject}</label>
                <select id="cf-subject" name="subject" required>
                  <option value="">—</option>
                  {contact.form.subjects.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="contact-form__field">
                <label htmlFor="cf-message">{contact.form.message}</label>
                <textarea id="cf-message" name="message" rows={5} required/>
              </div>
              <button type="submit" className="btn btn-primary contact-form__submit">
                {contact.form.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
