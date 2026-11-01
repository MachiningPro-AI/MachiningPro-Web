import React from 'react'
import { useLang } from '../LanguageContext'
import './ShopFloor.css'

const STEP_ICONS: React.ReactElement[] = [
  /* 0 - Engineering Drawing */
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="32" height="32" rx="3" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.5"/>
    <line x1="10" y1="12" x2="30" y2="12" stroke="#4a9fd8" strokeWidth="1.2"/>
    <line x1="10" y1="16" x2="24" y2="16" stroke="#4a9fd8" strokeWidth="0.8"/>
    <line x1="10" y1="20" x2="30" y2="20" stroke="#4a9fd8" strokeWidth="0.8"/>
    <line x1="10" y1="24" x2="26" y2="24" stroke="#4a9fd8" strokeWidth="0.8"/>
    <rect x="10" y="27" width="10" height="5" rx="1" fill="none" stroke="#f97316" strokeWidth="0.8"/>
    <text x="15" y="31.5" fontSize="4" fill="#f97316" textAnchor="middle">⊥ 0.05</text>
  </svg>,
  /* 1 - CAD Model */
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="8" y="14" width="24" height="20" rx="2" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.2"/>
    <path d="M 8 14 L 16 8 L 32 8 L 32 28" stroke="#6a9fd8" strokeWidth="1"/>
    <line x1="16" y1="8" x2="16" y2="14" stroke="#6a9fd8" strokeWidth="1"/>
    <line x1="8" y1="14" x2="8" y2="34" stroke="#4a9fd8" strokeWidth="0.8" opacity="0.5"/>
    <line x1="8" y1="34" x2="32" y2="34" stroke="#4a9fd8" strokeWidth="0.8" opacity="0.5"/>
    <text x="20" y="26" fontSize="6" fill="#6a9fd8" textAnchor="middle">IGES</text>
  </svg>,
  /* 2 - Machine Selection */
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="4" y="14" width="32" height="20" rx="3" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.2"/>
    <rect x="4" y="10" width="8" height="24" rx="2" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1"/>
    <circle cx="8" cy="22" r="4" fill="#3a5f8a" stroke="#6a9fd8" strokeWidth="0.8"/>
    <rect x="14" y="16" width="18" height="14" rx="1" fill="#243354" stroke="#3b6ea5" strokeWidth="0.8"/>
    <rect x="16" y="24" width="14" height="4" rx="0.5" fill="#1e3a5f"/>
    <circle cx="22" cy="20" r="3" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="0.6"/>
  </svg>,
  /* 3 - Cutting Tool */
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="8" y="16" width="24" height="8" rx="2" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.2"/>
    <polygon points="8,18 14,20 8,22" fill="#e8c060" stroke="#d4a820" strokeWidth="0.8"/>
    <rect x="24" y="8" width="8" height="24" rx="2" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1"/>
    <circle cx="28" cy="20" r="4" fill="#3a5f8a" stroke="#6a9fd8" strokeWidth="0.8"/>
  </svg>,
  /* 4 - Process Plan */
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="6" y="4" width="28" height="32" rx="2" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.2"/>
    {[0,1,2,3,4].map(i => (
      <g key={i}>
        <circle cx="12" cy={10+i*5} r="1.5" fill="#2277e6"/>
        <line x1="16" y1={10+i*5} x2="28" y2={10+i*5} stroke="#4a6fa5" strokeWidth="0.8"/>
      </g>
    ))}
  </svg>,
  /* 5 - NC Review */
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="4" y="6" width="32" height="28" rx="3" fill="#0f1e33" stroke="#2277e6" strokeWidth="1.2"/>
    <text x="7" y="15" fontSize="4.5" fill="#22c55e">G0 X0 Z2</text>
    <text x="7" y="21" fontSize="4.5" fill="#22c55e">G96 S200</text>
    <text x="7" y="27" fontSize="4.5" fill="#22c55e">G1 X46 F0.2</text>
    <path d="M 4 30 L 36 30" stroke="#2277e6" strokeWidth="0.8" opacity="0.5"/>
    <circle cx="32" cy="10" r="4" fill="none" stroke="#f97316" strokeWidth="1.2"/>
    <path d="M 30 10 L 32 12 L 35 8" stroke="#f97316" strokeWidth="1" strokeLinecap="round"/>
  </svg>,
  /* 6 - Machining */
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="14" cy="20" r="7" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.2"/>
    <circle cx="14" cy="20" r="3" fill="#1e3a5f"/>
    <rect x="14" y="17" width="16" height="6" fill="#3a5f8a" stroke="#5580b0" strokeWidth="1"/>
    <rect x="30" y="14" width="5" height="12" rx="1" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1"/>
    <polygon points="30,16 26,20 30,24" fill="#e8c060"/>
    <path d="M 8 12 A 10 10 0 0 1 20 12" stroke="#f97316" strokeWidth="1.5" fill="none"/>
    <polygon points="20,12 17,9 22,9" fill="#f97316"/>
  </svg>,
  /* 7 - Inspection */
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="6" y="18" width="20" height="12" rx="2" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.2"/>
    <circle cx="29" cy="16" r="8" fill="none" stroke="#2277e6" strokeWidth="1.5"/>
    <line x1="35" y1="22" x2="39" y2="26" stroke="#2277e6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="25" y1="16" x2="33" y2="16" stroke="#2277e6" strokeWidth="1"/>
    <line x1="29" y1="12" x2="29" y2="20" stroke="#2277e6" strokeWidth="1"/>
  </svg>,
  /* 8 - Traceability */
  <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="6" y="4" width="22" height="28" rx="2" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.2"/>
    {[0,1,2,3].map(i => (
      <line key={i} x1="10" y1={10+i*6} x2="24" y2={10+i*6} stroke="#4a6fa5" strokeWidth="0.8"/>
    ))}
    <circle cx="30" cy="30" r="9" fill="#22c55e" opacity="0.9"/>
    <path d="M 25.5 30 L 28.5 33 L 34 26" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
  </svg>,
]

export function ShopFloor() {
  const { t } = useLang()
  const sf = t.shopFloor

  return (
    <section className="section sf-section" id="shop-floor" aria-labelledby="sf-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{sf.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="sf-heading">{sf.title}</h2>
          <p className="section-subtitle">{sf.subtitle}</p>
        </div>

        <div className="sf-chain">
          {sf.steps.map((step, i) => (
            <div key={i} className="sf-chain__item">
              <div className="sf-chain__step">
                <div className="sf-chain__icon">
                  {STEP_ICONS[i]}
                </div>
                <div className="sf-chain__text">
                  <span className="sf-chain__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="sf-chain__label">{step.label}</span>
                  <span className="sf-chain__desc">{step.desc}</span>
                </div>
              </div>
              {i < sf.steps.length - 1 && (
                <div className="sf-chain__arrow" aria-hidden="true">
                  <svg width="20" height="12" viewBox="0 0 20 12">
                    <line x1="0" y1="6" x2="14" y2="6" stroke="var(--color-primary)" strokeWidth="1.5"/>
                    <polygon points="20,6 13,2 13,10" fill="var(--color-primary)"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
