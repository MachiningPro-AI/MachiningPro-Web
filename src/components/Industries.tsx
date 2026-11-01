import { useLang } from '../LanguageContext'
import './Industries.css'

const industryIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12h2m14 0h2M5 8l1.5 1.5M17.5 8 16 9.5M12 4v2M7 17H5v3h14v-3h-2M12 17v3M8 13a4 4 0 0 1 8 0H8z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 6l1 2h5l-4 4 1.5 5L12 14l-5.5 3L8 12 4 8h5z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7v10l10 5 10-5V7z"/><path d="M12 7v10M2 7l10 5 10-5"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 17h18M5 17V7l7-4 7 4v10M10 17v-5h4v5"/><circle cx="12" cy="8" r="1"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 4 0v2m4 0V5a2 2 0 0 0-4 0v2"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h12M8 9h8M8 15h8"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="3"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="14,3 14,9 20,9"/><path d="M12 12h.01M8 16h8"/></svg>,
]

export function Industries() {
  const { t } = useLang()
  const { industries } = t

  return (
    <section className="section ind-section" id="industries" aria-labelledby="industries-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{industries.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="industries-heading">{industries.title}</h2>
          <p className="section-subtitle">{industries.subtitle}</p>
        </div>

        <div className="ind-grid">
          {industries.items.map((item, i) => (
            <article key={i} className="ind-card card">
              <div className="ind-card__icon" aria-hidden="true">
                {industryIcons[i % industryIcons.length]}
              </div>
              <h3 className="ind-card__title">{item.title}</h3>
              <p className="ind-card__desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
