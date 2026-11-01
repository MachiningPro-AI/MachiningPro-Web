import { useLang } from '../LanguageContext'
import './DemoCTA.css'

export function DemoCTA() {
  const { t } = useLang()
  const { demoCta } = t

  return (
    <section className="demoCta-section" id="launch" aria-labelledby="democta-heading">
      <div className="demoCta__bg" aria-hidden="true">
        <div className="demoCta__glow"/>
      </div>
      <div className="container demoCta__inner">
        <span className="section-label">{demoCta.sectionLabel}</span>
        <h2 className="demoCta__title" id="democta-heading">{demoCta.title}</h2>
        <p className="demoCta__sub">{demoCta.subtitle}</p>
        <div className="demoCta__actions">
          <a
            href="https://machiningpro-ai.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent demoCta__btn"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <polygon points="7,4 14,9 7,14" fill="currentColor"/>
            </svg>
            {demoCta.ctaPrimary}
          </a>
          <a href="#dg-video" className="btn btn-outline demoCta__btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 3a1 1 0 0 1 1.5-.87l10 5.5a1 1 0 0 1 0 1.74l-10 5.5A1 1 0 0 1 2 14V3z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            {demoCta.ctaSecondary}
          </a>
        </div>
        <p className="demoCta__maturity">{demoCta.maturity}</p>
      </div>
    </section>
  )
}
