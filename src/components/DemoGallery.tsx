import { useLang } from '../LanguageContext'
import './DemoGallery.css'

const screenPreviews = [
  { icon: '⊞', color: '#2277e6' },
  { icon: '⬡', color: '#f97316' },
  { icon: '◈', color: '#22c55e' },
  { icon: '⋮⋮', color: '#a78bfa' },
  { icon: '±', color: '#f97316' },
  { icon: '⇄', color: '#2277e6' },
  { icon: '⌛', color: '#22c55e' },
  { icon: '≡', color: '#2277e6' },
  { icon: '✓', color: '#a78bfa' },
  { icon: '☷', color: '#f97316' },
  { icon: '⟶', color: '#64748b' },
]

export function DemoGallery() {
  const { t } = useLang()
  const { demo } = t

  return (
    <section className="section dg-section" id="demo" aria-labelledby="demo-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{demo.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="demo-heading">{demo.title}</h2>
          <p className="section-subtitle">{demo.subtitle}</p>
        </div>

        <div className="dg-cta-row">
          <a
            href="https://machiningpro-ai.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent dg-launch-btn"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <polygon points="7,4 14,9 7,14" fill="currentColor"/>
            </svg>
            {demo.ctaLaunch}
          </a>
        </div>

        <div className="dg-screens" role="list" aria-label="Platform screens">
          {demo.screens.map((screen, i) => (
            <div key={i} className="dg-screen card" role="listitem">
              <div className="dg-screen__placeholder" style={{ '--accent': screenPreviews[i % screenPreviews.length].color } as React.CSSProperties}>
                <span className="dg-screen__icon" aria-hidden="true">{screenPreviews[i % screenPreviews.length].icon}</span>
              </div>
              <span className="dg-screen__label">{screen}</span>
            </div>
          ))}
        </div>

        <p className="dg-note">{demo.note}</p>
      </div>
    </section>
  )
}
