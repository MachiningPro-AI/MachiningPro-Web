import { useLang } from '../LanguageContext'
import './ProductMaturity.css'

export function ProductMaturity() {
  const { t } = useLang()
  const { maturity } = t

  return (
    <section className="section pm-section" id="maturity" aria-labelledby="maturity-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{maturity.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="maturity-heading">{maturity.title}</h2>
        </div>

        <div className="pm-grid">
          <div className="pm-status-col">
            <div className="pm-status-badge">
              <span className="pm-status-dot" aria-hidden="true"/>
              <span className="pm-status-text">{maturity.status}</span>
            </div>
            <div className="pm-version">{maturity.version}</div>
            <p className="pm-description">{maturity.description}</p>

            <div className="pm-labels" aria-label="Status labels">
              {maturity.labels.map((label, i) => (
                <span key={i} className="pm-label pm-label--ok">
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                    <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M3.5 6l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="pm-notready-col">
            <h3 className="pm-notready-title">Not Validated For:</h3>
            <div className="pm-labels" aria-label="Not validated for">
              {maturity.notReady.map((item, i) => (
                <span key={i} className="pm-label pm-label--no">
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                    <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M4 4l4 4M8 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
