import React from 'react'
import { useLang } from '../LanguageContext'
import './MachineTool.css'

const MACHINE_ICONS: Record<string, React.ReactElement> = {
  0: ( // CNC Lathe
    <svg viewBox="0 0 80 60" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="72" height="40" rx="4" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.5"/>
      {/* Headstock */}
      <rect x="6" y="12" width="22" height="36" rx="3" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1"/>
      {/* Chuck */}
      <circle cx="17" cy="30" r="8" fill="#3a5f8a" stroke="#6a9fd8" strokeWidth="1.2"/>
      <circle cx="17" cy="30" r="4" fill="#1e3a5f" stroke="#4a7fd8" strokeWidth="1"/>
      {[0,120,240].map(a => (
        <rect key={a} x="13" y="18" width="8" height="5" rx="1" fill="#4a7fd8" stroke="#6a9fd8" strokeWidth="0.7"
          transform={`rotate(${a} 17 30)`}/>
      ))}
      {/* Bed */}
      <rect x="28" y="34" width="48" height="12" rx="2" fill="#2a3f5f" stroke="#3b6ea5" strokeWidth="1"/>
      {/* Carriage / turret */}
      <rect x="52" y="22" width="18" height="16" rx="2" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1"/>
      <circle cx="61" cy="30" r="6" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1"/>
      {/* Insert */}
      <polygon points="55,27 61,30 55,33" fill="#e8c060"/>
      {/* Rotation arrow */}
      <path d="M 10 22 A 10 10 0 0 1 24 22" stroke="#f97316" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <polygon points="24,22 21,18 26,19" fill="#f97316"/>
    </svg>
  ),
  1: ( // 3-axis VMC
    <svg viewBox="0 0 80 60" fill="none" aria-hidden="true">
      <rect x="4" y="30" width="72" height="24" rx="3" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.5"/>
      {/* Column */}
      <rect x="4" y="8" width="12" height="52" rx="2" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1"/>
      {/* Spindle head */}
      <rect x="16" y="14" width="40" height="20" rx="3" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1"/>
      {/* Spindle */}
      <circle cx="36" cy="24" r="6" fill="#3a5f8a" stroke="#6a9fd8" strokeWidth="1"/>
      <circle cx="36" cy="24" r="3" fill="#1e3a5f"/>
      <rect x="34" y="30" width="4" height="12" rx="1" fill="#4a6fa5"/>
      {/* End mill */}
      <rect x="34.5" y="42" width="3" height="10" rx="0.5" fill="#e8c060" stroke="#d4a820" strokeWidth="0.5"/>
      {/* Table */}
      <rect x="16" y="38" width="56" height="14" rx="2" fill="#243354" stroke="#3b6ea5" strokeWidth="1"/>
      {/* Slots */}
      {[22, 30, 38, 46, 54, 62].map(x => (
        <rect key={x} x={x} y="38" width="4" height="14" rx="0.5" fill="#1e2d40" opacity="0.7"/>
      ))}
      {/* X-axis arrow */}
      <line x1="20" y1="56" x2="68" y2="56" stroke="#2277e6" strokeWidth="1.2" strokeLinecap="round"/>
      <polygon points="68,56 63,54 63,58" fill="#2277e6"/>
      <text x="66" y="54" fontSize="6" fill="#2277e6">X</text>
      {/* Rotation arrow */}
      <path d="M 30 18 A 8 8 0 0 1 42 18" stroke="#f97316" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <polygon points="42,18 39,14 44,15" fill="#f97316"/>
    </svg>
  ),
  2: ( // 5-axis
    <svg viewBox="0 0 80 60" fill="none" aria-hidden="true">
      <rect x="4" y="32" width="72" height="22" rx="3" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.5"/>
      <rect x="4" y="8" width="12" height="50" rx="2" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1"/>
      {/* Tilted spindle head */}
      <g transform="rotate(-20 36 24)">
        <rect x="24" y="14" width="24" height="16" rx="3" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1"/>
        <circle cx="36" cy="22" r="5" fill="#3a5f8a" stroke="#6a9fd8" strokeWidth="1"/>
        <rect x="34.5" y="27" width="3" height="10" rx="0.5" fill="#4a6fa5"/>
        <rect x="35" y="37" width="2" height="8" rx="0.5" fill="#e8c060"/>
      </g>
      {/* B-axis arc */}
      <path d="M 24 28 A 14 14 0 0 1 48 28" stroke="#f97316" strokeWidth="1.5" fill="none" strokeDasharray="3,2"/>
      <text x="34" y="46" fontSize="6" fill="#f97316" textAnchor="middle">B</text>
      {/* Table */}
      <circle cx="40" cy="44" r="12" fill="#243354" stroke="#3b6ea5" strokeWidth="1"/>
      <ellipse cx="40" cy="44" rx="10" ry="10" fill="none" stroke="#4a6ea5" strokeWidth="0.7" strokeDasharray="3,2"/>
      {/* C-axis arrow */}
      <path d="M 30 52 A 10 10 0 0 1 50 52" stroke="#2277e6" strokeWidth="1.2" fill="none"/>
      <text x="40" y="60" fontSize="6" fill="#2277e6" textAnchor="middle">C</text>
    </svg>
  ),
  3: ( // HMC
    <svg viewBox="0 0 80 60" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="72" height="44" rx="4" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.5"/>
      {/* Pallet */}
      <rect x="20" y="22" width="24" height="24" rx="2" fill="#243354" stroke="#3b6ea5" strokeWidth="1"/>
      {[26,30,34,38].map(x => (
        <rect key={x} x={x} y="22" width="2" height="24" fill="#1e2d40" opacity="0.5"/>
      ))}
      {/* Horizontal spindle */}
      <rect x="44" y="26" width="28" height="14" rx="3" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1"/>
      <circle cx="44" cy="33" r="5" fill="#3a5f8a" stroke="#6a9fd8" strokeWidth="1"/>
      <circle cx="44" cy="33" r="2" fill="#1e3a5f"/>
      {/* Tool */}
      <rect x="36" y="31" width="8" height="4" rx="0.5" fill="#e8c060" stroke="#d4a820" strokeWidth="0.5"/>
      {/* B-axis */}
      <path d="M 24 20 A 8 8 0 0 1 40 20" stroke="#f97316" strokeWidth="1.4" fill="none" strokeDasharray="3,2"/>
      <polygon points="40,20 37,17 42,17" fill="#f97316"/>
      <text x="32" y="18" fontSize="6" fill="#f97316">B</text>
      {/* Rotation */}
      <path d="M 39 30 A 6 6 0 0 1 49 30" stroke="#f97316" strokeWidth="1.4" fill="none"/>
      <polygon points="49,30 46,27 51,27" fill="#f97316"/>
    </svg>
  ),
  4: ( // Turn-Mill
    <svg viewBox="0 0 80 60" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="72" height="40" rx="4" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.5"/>
      {/* Main spindle */}
      <rect x="6" y="12" width="20" height="36" rx="3" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1"/>
      <circle cx="16" cy="30" r="7" fill="#3a5f8a" stroke="#6a9fd8" strokeWidth="1.2"/>
      <circle cx="16" cy="30" r="3" fill="#1e3a5f"/>
      {/* Sub spindle */}
      <rect x="54" y="14" width="20" height="32" rx="3" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1" opacity="0.7"/>
      <circle cx="64" cy="30" r="6" fill="#3a5f8a" stroke="#6a9fd8" strokeWidth="1" opacity="0.7"/>
      {/* Workpiece bar */}
      <rect x="26" y="27" width="28" height="6" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1"/>
      {/* Live tool (milling) */}
      <rect x="30" y="14" width="12" height="12" rx="2" fill="#2d4060" stroke="#3b6ea5" strokeWidth="1"/>
      <circle cx="36" cy="20" r="4" fill="#3a5f8a" stroke="#6a9fd8" strokeWidth="0.8"/>
      <rect x="35" y="24" width="2" height="6" fill="#4a6fa5"/>
      {/* Rotation arrows */}
      <path d="M 10 22 A 8 8 0 0 1 22 22" stroke="#f97316" strokeWidth="1.5" fill="none"/>
      <polygon points="22,22 19,18 24,19" fill="#f97316"/>
      <path d="M 32 14 A 6 6 0 0 1 40 14" stroke="#2277e6" strokeWidth="1.3" fill="none"/>
      <polygon points="40,14 37,11 42,11" fill="#2277e6"/>
      {/* Y-axis arrow */}
      <line x1="36" y1="12" x2="36" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round"/>
      <polygon points="36,6 34,10 38,10" fill="#94a3b8"/>
      <text x="38" y="6" fontSize="5.5" fill="#94a3b8">Y</text>
    </svg>
  ),
}

export function MachineTool() {
  const { t } = useLang()
  const mt = t.machineTool

  return (
    <section className="section mt-section" id="machine-tool" aria-labelledby="mt-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{mt.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="mt-heading">{mt.title}</h2>
          <p className="section-subtitle">{mt.subtitle}</p>
        </div>

        <div className="mt-grid">
          {mt.machines.map((machine, i) => (
            <article key={i} className="mt-card">
              <div className="mt-card__visual">
                {MACHINE_ICONS[i] && (
                  <div className="mt-card__icon">{MACHINE_ICONS[i]}</div>
                )}
              </div>
              <div className="mt-card__body">
                <h3 className="mt-card__title">{machine.title}</h3>
                <span className="mt-card__config">{machine.config}</span>
                <ul className="mt-card__specs">
                  {machine.specs.map(s => (
                    <li key={s} className="mt-card__spec">{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-disclaimer">{t.lang === 'tr' ? mt.disclaimerTr : mt.disclaimer}</p>
      </div>
    </section>
  )
}
