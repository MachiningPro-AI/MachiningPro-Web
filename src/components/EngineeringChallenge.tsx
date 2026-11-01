import { useLang } from '../LanguageContext'
import './EngineeringChallenge.css'

const icons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h16M4 10h16M4 14h10M4 18h6"/><rect x="14" y="12" width="8" height="8" rx="1.5"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h18v18H3z" rx="2"/><path d="M9 9h6M9 12h6M9 15h3"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 3"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4 4 4 4-4M4 14l4 2 4-2 4 2 4-2"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="4" height="10" rx="1"/><rect x="10" y="7" width="4" height="14" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13.5 3H12H8C6.3 3 5 4.3 5 6v1M20 14v5c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V9c0-1.7 1.3-3 3-3h5M20 14l-8-8M20 14h-5v-5"/></svg>,
]

export function EngineeringChallenge() {
  const { t } = useLang()
  const { challenge } = t

  return (
    <section className="section ec-section" id="challenge" aria-labelledby="challenge-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{challenge.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="challenge-heading">{challenge.title}</h2>
          <p className="section-subtitle">{challenge.subtitle}</p>
        </div>

        <div className="ec-grid">
          {challenge.items.map((item, i) => (
            <article key={i} className="ec-card card">
              <div className="ec-card__icon" aria-hidden="true">
                {icons[i % icons.length]}
              </div>
              <h3 className="ec-card__title">{item.title}</h3>
              <p className="ec-card__desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
