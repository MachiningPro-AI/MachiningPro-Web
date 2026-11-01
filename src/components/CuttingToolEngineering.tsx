import React from 'react'
import { useLang } from '../LanguageContext'
import './CuttingToolEngineering.css'

const TOOL_SVGS: React.ReactElement[] = [
  /* 0 - Turning Insert */
  <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
    {/* CNMG insert shape */}
    <polygon points="60,8 85,28 85,52 60,72 35,52 35,28" fill="#e8c060" stroke="#d4a820" strokeWidth="1.5"/>
    <circle cx="60" cy="40" r="6" fill="#c4a010" stroke="#d4a820" strokeWidth="1"/>
    {/* Nose radius annotations */}
    <path d="M 85 52 A 8 8 0 0 1 85 28" stroke="#f97316" strokeWidth="1.5" fill="none" strokeDasharray="3,2"/>
    <text x="92" y="41" fontSize="8" fill="#f97316">rε</text>
    {/* Chip breaker groove */}
    <path d="M 46 30 Q 60 38 74 30" stroke="#c4a010" strokeWidth="1.5" fill="none"/>
    <path d="M 46 50 Q 60 42 74 50" stroke="#c4a010" strokeWidth="1.5" fill="none"/>
    {/* Coating layer */}
    <polygon points="60,8 85,28 85,52 60,72 35,52 35,28" fill="none" stroke="#4a9fd8" strokeWidth="0.5" opacity="0.4"/>
    <text x="60" y="84" fontSize="7" fill="#6a9fd8" textAnchor="middle">CNMG 120408</text>
  </svg>,

  /* 1 - Tool Holder */
  <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
    {/* Shank */}
    <rect x="10" y="30" width="80" height="20" rx="2" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.5"/>
    {/* Head */}
    <rect x="8" y="24" width="26" height="32" rx="2" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1.2"/>
    {/* Insert pocket */}
    <polygon points="8,28 20,24 20,40" fill="#e8c060" stroke="#d4a820" strokeWidth="1"/>
    {/* Clamp screw */}
    <circle cx="17" cy="34" r="3.5" fill="#94a3b8" stroke="#64748b" strokeWidth="1"/>
    <line x1="15" y1="34" x2="19" y2="34" stroke="#475569" strokeWidth="1"/>
    <line x1="17" y1="32" x2="17" y2="36" stroke="#475569" strokeWidth="1"/>
    {/* Shank cross lines */}
    <line x1="36" y1="30" x2="36" y2="50" stroke="#3b6ea5" strokeWidth="0.8" strokeDasharray="3,2"/>
    <line x1="50" y1="30" x2="50" y2="50" stroke="#3b6ea5" strokeWidth="0.8" strokeDasharray="3,2"/>
    {/* h dimension */}
    <line x1="92" y1="30" x2="100" y2="30" stroke="#94a3b8" strokeWidth="0.8"/>
    <line x1="92" y1="50" x2="100" y2="50" stroke="#94a3b8" strokeWidth="0.8"/>
    <line x1="96" y1="30" x2="96" y2="50" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2"/>
    <text x="104" y="41" fontSize="7.5" fill="#94a3b8">h</text>
    {/* Approach angle */}
    <path d="M 8 28 A 18 18 0 0 1 8 40" stroke="#f97316" strokeWidth="1" fill="none" strokeDasharray="3,2"/>
    <text x="2" y="38" fontSize="7" fill="#f97316">κ</text>
    <text x="60" y="76" fontSize="7" fill="#6a9fd8" textAnchor="middle">PCLNR 2525M12</text>
  </svg>,

  /* 2 - Indexable Milling Cutter */
  <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
    {/* Cutter body */}
    <circle cx="60" cy="40" r="28" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1.5"/>
    <circle cx="60" cy="40" r="10" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1"/>
    {/* Inserts on periphery */}
    {[0,60,120,180,240,300].map(a => {
      const rad = a * Math.PI / 180
      const ix = 60 + 24 * Math.sin(rad), iy = 40 - 24 * Math.cos(rad)
      return (
        <g key={a} transform={`rotate(${a} ${ix} ${iy})`}>
          <rect x={ix - 5} y={iy - 3} width="10" height="6" rx="1.5" fill="#e8c060" stroke="#d4a820" strokeWidth="0.8"/>
        </g>
      )
    })}
    {/* Spindle bore */}
    <circle cx="60" cy="40" r="6" fill="#0f1e33" stroke="#2277e6" strokeWidth="1"/>
    {/* D dimension */}
    <line x1="60" y1="12" x2="60" y2="6" stroke="#94a3b8" strokeWidth="0.8"/>
    <line x1="88" y1="40" x2="95" y2="40" stroke="#94a3b8" strokeWidth="0.8"/>
    <line x1="60" y1="8" x2="92" y2="8" stroke="#94a3b8" strokeWidth="0.8"/>
    <text x="76" y="6" fontSize="7" fill="#94a3b8">D</text>
    {/* z label */}
    <text x="56" y="42" fontSize="7" fill="#94a3b8" textAnchor="middle">z=6</text>
    <text x="60" y="78" fontSize="7" fill="#6a9fd8" textAnchor="middle">Ø100 Face Mill</text>
  </svg>,

  /* 3 - Solid Carbide End Mill */
  <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
    {/* Shank */}
    <rect x="46" y="6" width="16" height="30" rx="3" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1.5"/>
    {/* Fluted section */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <path d={`M ${46+i*5} 36 Q ${54} ${42+i*4} ${46+i*5} 56`}
          stroke="#4a9fd8" strokeWidth="1.4" fill="none" opacity="0.8"/>
      </g>
    ))}
    <rect x="46" y="36" width="16" height="28" rx="1" fill="#1e3a5f" stroke="#3b6ea5" strokeWidth="1.2"/>
    {/* Cutting edges */}
    {[48,52,56,60].map(x => (
      <path key={x} d={`M ${x} 36 Q ${x+1} 48 ${x-1} 64`} stroke="#e8c060" strokeWidth="1.2" fill="none"/>
    ))}
    {/* End cutting */}
    <ellipse cx="54" cy="64" rx="8" ry="3" fill="#e8c060" stroke="#d4a820" strokeWidth="0.8"/>
    {/* Corner radius */}
    <path d="M 46 60 A 4 4 0 0 1 50 64" stroke="#f97316" strokeWidth="1" fill="none" strokeDasharray="2,1"/>
    <text x="36" y="66" fontSize="7" fill="#f97316">rε</text>
    {/* D dimension */}
    <line x1="46" y1="50" x2="38" y2="50" stroke="#94a3b8" strokeWidth="0.8"/>
    <line x1="62" y1="50" x2="70" y2="50" stroke="#94a3b8" strokeWidth="0.8"/>
    <line x1="38" y1="50" x2="70" y2="50" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,1"/>
    <text x="54" y="46" fontSize="7" fill="#94a3b8" textAnchor="middle">D</text>
    <text x="60" y="78" fontSize="7" fill="#6a9fd8" textAnchor="middle">SC End Mill z=4</text>
  </svg>,

  /* 4 - Twist Drill */
  <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
    {/* Shank */}
    <rect x="48" y="4" width="12" height="22" rx="2" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1.5"/>
    {/* Body with helix flutes */}
    <rect x="48" y="26" width="12" height="36" rx="1" fill="#1e3a5f" stroke="#3b6ea5" strokeWidth="1"/>
    <path d="M 48 26 Q 54 32 60 38 Q 48 44 54 50 Q 60 56 48 62" stroke="#e8c060" strokeWidth="1.5" fill="none"/>
    <path d="M 60 26 Q 54 32 48 38 Q 60 44 54 50 Q 48 56 60 62" stroke="#e8c060" strokeWidth="1.5" fill="none"/>
    {/* Point */}
    <polygon points="48,62 60,62 54,72" fill="#e8c060" stroke="#d4a820" strokeWidth="1"/>
    {/* Point angle */}
    <path d="M 48 66 A 10 10 0 0 1 60 66" stroke="#f97316" strokeWidth="1" fill="none" strokeDasharray="3,2"/>
    <text x="50" y="78" fontSize="7" fill="#f97316" textAnchor="middle">118°</text>
    {/* D label */}
    <line x1="46" y1="35" x2="38" y2="35" stroke="#94a3b8" strokeWidth="0.8"/>
    <line x1="62" y1="35" x2="70" y2="35" stroke="#94a3b8" strokeWidth="0.8"/>
    <text x="54" y="32" fontSize="7" fill="#94a3b8" textAnchor="middle">D</text>
    <text x="60" y="78" fontSize="7" fill="#6a9fd8" textAnchor="end">HSS / Carbide</text>
  </svg>,

  /* 5 - Boring Bar */
  <svg viewBox="0 0 120 80" fill="none" aria-hidden="true">
    {/* Bar body */}
    <rect x="10" y="34" width="82" height="12" rx="3" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.5"/>
    {/* Shank circle (fits into spindle) */}
    <rect x="8" y="30" width="20" height="20" rx="3" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1.2"/>
    {/* Anti-vibration pocket */}
    <rect x="30" y="36" width="30" height="8" rx="2" fill="#243354" stroke="#3b6ea5" strokeWidth="0.8" strokeDasharray="3,2"/>
    {/* Boring head */}
    <circle cx="92" cy="40" r="12" fill="#2d4060" stroke="#4a6ea5" strokeWidth="1.2"/>
    {/* Insert */}
    <polygon points="92,34 100,40 92,46" fill="#e8c060" stroke="#d4a820" strokeWidth="0.8"/>
    {/* Adjustment screw */}
    <line x1="80" y1="40" x2="92" y2="40" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2"/>
    <circle cx="82" cy="40" r="2" fill="#94a3b8"/>
    {/* Min bore D dimension */}
    <line x1="92" y1="28" x2="92" y2="20" stroke="#94a3b8" strokeWidth="0.8"/>
    <line x1="104" y1="40" x2="110" y2="40" stroke="#94a3b8" strokeWidth="0.8"/>
    <path d="M 92 20 A 20 20 0 0 1 110 40" stroke="#94a3b8" strokeWidth="0.8" fill="none" strokeDasharray="3,2"/>
    <text x="102" y="22" fontSize="7" fill="#94a3b8">Ø min</text>
    <text x="60" y="76" fontSize="7" fill="#6a9fd8" textAnchor="middle">Boring Bar — IT6</text>
  </svg>,
]

export function CuttingToolEngineering() {
  const { t } = useLang()
  const ct = t.cuttingTool

  return (
    <section className="section cte-section" id="cutting-tools" aria-labelledby="cte-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{ct.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="cte-heading">{ct.title}</h2>
          <p className="section-subtitle">{ct.subtitle}</p>
        </div>

        <div className="cte-grid">
          {ct.categories.map((cat, i) => (
            <article key={i} className="cte-card">
              <div className="cte-card__visual">
                {TOOL_SVGS[i]}
              </div>
              <div className="cte-card__body">
                <h3 className="cte-card__title">{cat.title}</h3>
                <p className="cte-card__desc">{cat.desc}</p>
                <ul className="cte-card__attrs">
                  {cat.attrs.map(a => (
                    <li key={a} className="cte-card__attr">{a}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
