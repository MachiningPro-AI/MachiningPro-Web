import { useLang } from '../LanguageContext'
import './MaterialRemoval.css'

function TurningMechanicsSVG({ labels }: { labels: Record<string, string> }) {
  return (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mr-diagram-svg">
      {/* Workpiece cross-section */}
      <ellipse cx="60" cy="80" rx="50" ry="50" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.5"/>
      <ellipse cx="60" cy="80" rx="35" ry="35" fill="#3a5f8a" stroke="#5580b0" strokeWidth="1"/>
      <ellipse cx="60" cy="80" rx="8" ry="8" fill="#1e3a5f" stroke="#3b6ea5" strokeWidth="1"/>
      {/* Axis line */}
      <line x1="10" y1="80" x2="110" y2="80" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="4,3"/>
      {/* Rotation arrows around workpiece */}
      <path d="M 20 45 A 42 42 0 0 1 100 45" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <polygon points="100,45 95,38 102,41" fill="#f97316"/>
      {/* Vc arrow (tangential) */}
      <line x1="110" y1="42" x2="130" y2="42" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
      <polygon points="130,42 124,38 124,46" fill="#f97316"/>
      <text x="132" y="46" fontSize="9" fill="#f97316" fontWeight="600">Vc</text>
      {/* Tool insert */}
      <polygon points="110,72 120,78 110,84" fill="#e8c060" stroke="#d4a820" strokeWidth="1"/>
      {/* Tool holder */}
      <rect x="120" y="70" width="50" height="20" rx="3" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.2"/>
      {/* Feed arrow */}
      <line x1="175" y1="80" x2="140" y2="80" stroke="#2277e6" strokeWidth="2.2" strokeLinecap="round"/>
      <polygon points="140,80 148,76 148,84" fill="#2277e6"/>
      <text x="176" y="85" fontSize="9" fill="#2277e6" fontWeight="600">f</text>
      {/* ap depth indicator */}
      <line x1="110" y1="72" x2="102" y2="72" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="110" y1="84" x2="102" y2="84" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="104" y1="72" x2="104" y2="84" stroke="#94a3b8" strokeWidth="1"/>
      <polygon points="104,72 102,76 106,76" fill="#94a3b8"/>
      <polygon points="104,84 102,80 106,80" fill="#94a3b8"/>
      <text x="92" y="79" fontSize="7.5" fill="#94a3b8">ap</text>
      {/* Chip */}
      <path d="M 110 72 Q 118 62 124 56 Q 128 50 135 52 Q 140 54 138 58" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Labels */}
      <text x="60" y="136" fontSize="8" fill="#6a9fd8" textAnchor="middle">{labels.workpiece}</text>
      <text x="148" y="100" fontSize="7.5" fill="#94a3b8" textAnchor="middle">{labels.tool}</text>
      <text x="128" y="54" fontSize="7.5" fill="#f59e0b">{labels.chip}</text>
      <text x="56" y="88" fontSize="7.5" fill="#94a3b8" textAnchor="middle">D</text>
      {/* D dimension */}
      <line x1="25" y1="80" x2="95" y2="80" stroke="#94a3b8" strokeWidth="0.6" strokeDasharray="2,2"/>
      {/* Cutting force arrow */}
      <line x1="110" y1="78" x2="110" y2="64" stroke="#e53e3e" strokeWidth="1.5"/>
      <polygon points="110,64 107,70 113,70" fill="#e53e3e"/>
      <text x="112" y="62" fontSize="7.5" fill="#e53e3e">Fc</text>
    </svg>
  )
}

function MillingMechanicsSVG({ labels }: { labels: Record<string, string> }) {
  return (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mr-diagram-svg">
      {/* Workpiece */}
      <rect x="20" y="100" width="200" height="50" rx="3" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.5"/>
      <rect x="20" y="100" width="200" height="5" fill="#6a9fd8" opacity="0.3"/>
      {/* Milled surface */}
      <rect x="60" y="100" width="100" height="14" rx="1" fill="#2a3f5f" stroke="#3b6ea5" strokeWidth="0.8"/>
      {/* Milling cutter */}
      <rect x="94" y="28" width="22" height="44" rx="3" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.2"/>
      {/* Cutter flutes at tip */}
      {[0,1,2,3].map(i => (
        <g key={i} transform={`rotate(${i*90} 105 72)`}>
          <rect x="100" y="66" width="10" height="6" rx="2" fill="#e8c060" stroke="#d4a820" strokeWidth="0.8"/>
        </g>
      ))}
      <circle cx="105" cy="72" r="10" fill="none" stroke="#e8c060" strokeWidth="1" strokeDasharray="3,2" opacity="0.8"/>
      {/* Rotation arrow */}
      <path d="M 88 36 A 20 20 0 0 1 122 36" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <polygon points="122,36 117,30 124,31" fill="#f97316"/>
      {/* Feed arrow (horizontal) */}
      <line x1="30" y1="88" x2="68" y2="88" stroke="#2277e6" strokeWidth="2.2" strokeLinecap="round"/>
      <polygon points="68,88 61,84 61,92" fill="#2277e6"/>
      {/* ae dimension */}
      <line x1="160" y1="100" x2="160" y2="114" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2"/>
      <line x1="162" y1="100" x2="162" y2="114" stroke="#94a3b8" strokeWidth="1"/>
      <line x1="160" y1="107" x2="172" y2="107" stroke="#94a3b8" strokeWidth="0.8"/>
      <text x="174" y="110" fontSize="8" fill="#94a3b8">ae</text>
      {/* ap dimension */}
      <line x1="56" y1="100" x2="48" y2="100" stroke="#94a3b8" strokeWidth="1"/>
      <line x1="56" y1="114" x2="48" y2="114" stroke="#94a3b8" strokeWidth="1"/>
      <line x1="50" y1="100" x2="50" y2="114" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2"/>
      <text x="38" y="110" fontSize="8" fill="#94a3b8">ap</text>
      {/* Labels */}
      <text x="44" y="86" fontSize="8.5" fill="#2277e6">Vf</text>
      <text x="99" y="22" fontSize="8.5" fill="#f97316">n</text>
      <text x="105" y="148" fontSize="8" fill="#6a9fd8" textAnchor="middle">{labels.workpiece}</text>
      {/* fz label per tooth */}
      <text x="116" y="80" fontSize="7" fill="#94a3b8">fz/tooth</text>
      {/* z label */}
      <text x="126" y="60" fontSize="7.5" fill="#94a3b8">z={4}</text>
    </svg>
  )
}

export function MaterialRemoval() {
  const { t } = useLang()
  const mr = t.materialRemoval

  return (
    <section className="section mr-section" id="material-removal" aria-labelledby="mr-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{mr.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="mr-heading">{mr.title}</h2>
          <p className="section-subtitle">{mr.subtitle}</p>
        </div>

        <div className="mr-content">
          {/* Diagrams */}
          <div className="mr-diagrams">
            <div className="mr-diagram-block">
              <h3 className="mr-diagram-title">{mr.turningTitle}</h3>
              <TurningMechanicsSVG labels={mr.labels} />
            </div>
            <div className="mr-diagram-block">
              <h3 className="mr-diagram-title">{mr.millingTitle}</h3>
              <MillingMechanicsSVG labels={mr.labels} />
            </div>
          </div>

          {/* Formulas */}
          <div className="mr-formulas">
            <h3 className="mr-formulas-title">Engineering Equations</h3>
            <div className="mr-formula-grid">
              {mr.formulas.map((f, i) => (
                <div key={i} className="mr-formula-card">
                  <div className="mr-formula-label">{f.label}</div>
                  <div className="mr-formula-eq">{f.eq}</div>
                  <div className="mr-formula-unit">[{f.unit}]</div>
                  <div className="mr-formula-vars">{f.vars}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Parameter labels */}
          <div className="mr-param-legend">
            {Object.entries(mr.labels).map(([key, val]) => (
              <span key={key} className="mr-param-tag">
                <span className="mr-param-key">{key.toUpperCase()}</span>
                <span className="mr-param-val">{val}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
