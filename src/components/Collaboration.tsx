import { useLang } from '../LanguageContext'
import './Collaboration.css'

const collabIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
]

export function Collaboration() {
  const { t } = useLang()
  const { collaborate } = t

  return (
    <section className="section collab-section" id="collaborate" aria-labelledby="collaborate-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{collaborate.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="collaborate-heading">{collaborate.title}</h2>
          <p className="section-subtitle">{collaborate.subtitle}</p>
        </div>

        <div className="collab-grid">
          {collaborate.items.map((item, i) => (
            <article key={i} className="collab-card card">
              <div className="collab-card__icon" aria-hidden="true">
                {collabIcons[i % collabIcons.length]}
              </div>
              <h3 className="collab-card__title">{item.title}</h3>
              <p className="collab-card__desc">{item.desc}</p>
              <a href="#contact" className="collab-card__link">
                {collaborate.sectionLabel === 'Collaborate' ? 'Get in touch →' : 'İletişime geçin →'}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
