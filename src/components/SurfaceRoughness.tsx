import { useLang } from '../LanguageContext'
import './SurfaceRoughness.css'

function SurfaceProfileSVG({ labels }: { labels: Record<string, string> }) {
  // Build a surface profile path with sinusoidal feed marks
  const W = 400, H = 120
  const baseline = 80
  const feedSpacing = 36
  const amplitude = 16
  const pts: string[] = []
  for (let x = 20; x <= W - 20; x += 2) {
    const phase = (x / feedSpacing) * Math.PI * 2
    const y = baseline - amplitude * Math.sin(phase) * Math.abs(Math.sin(phase))
    pts.push(`${x},${y.toFixed(1)}`)
  }
  const profilePath = 'M ' + pts.join(' L ')

  const peaks: number[] = []
  const valleys: number[] = []
  for (let x = 20; x <= W - 20; x += feedSpacing) {
    peaks.push(x + feedSpacing / 2)
    valleys.push(x)
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="sr-svg" aria-hidden="true">
      {/* Mean line */}
      <line x1="20" y1={baseline} x2={W - 20} y2={baseline} stroke="rgba(148,163,184,0.3)" strokeWidth="1" strokeDasharray="4,3"/>
      {/* Profile */}
      <path d={profilePath} fill="none" stroke="#4a9fd8" strokeWidth="2"/>
      {/* Fill under */}
      <path d={profilePath + ` L ${W - 20},${baseline + 30} L 20,${baseline + 30} Z`}
        fill="url(#surfGrad)" opacity="0.3"/>
      <defs>
        <linearGradient id="surfGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a6fa5" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.3"/>
        </linearGradient>
      </defs>
      {/* Ra lines */}
      <line x1="20" y1={baseline - amplitude * 0.6} x2={W - 20} y2={baseline - amplitude * 0.6}
        stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" opacity="0.7"/>
      <line x1="20" y1={baseline + amplitude * 0.6} x2={W - 20} y2={baseline + amplitude * 0.6}
        stroke="#f97316" strokeWidth="1" strokeDasharray="3,2" opacity="0.7"/>
      <text x={W - 18} y={baseline - amplitude * 0.6 - 3} fontSize="9" fill="#f97316" textAnchor="end">Ra</text>
      {/* Rz arrow (peak to valley) */}
      <line x1="18" y1={baseline - amplitude} x2="18" y2={baseline + amplitude}
        stroke="#2277e6" strokeWidth="1.2"/>
      <polygon points="18,64 15,70 21,70" fill="#2277e6"/>
      <polygon points="18,96 15,90 21,90" fill="#2277e6"/>
      <text x="8" y={baseline} fontSize="8" fill="#2277e6" textAnchor="middle">Rz</text>
      {/* Feed marks dimension */}
      <line x1="20" y1={baseline + 35} x2={20 + feedSpacing} y2={baseline + 35}
        stroke="#94a3b8" strokeWidth="1"/>
      <polygon points="20,115 24,112 24,118" fill="#94a3b8"/>
      <polygon points={`${20 + feedSpacing},115 ${16 + feedSpacing},112 ${16 + feedSpacing},118`} fill="#94a3b8"/>
      <text x={20 + feedSpacing / 2} y={baseline + 44} fontSize="8" fill="#94a3b8" textAnchor="middle">f</text>
      {/* Nose radius annotation */}
      <path d={`M ${360} ${baseline - amplitude} A 20 20 0 0 1 ${380} ${baseline}`}
        fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2"/>
      <text x="368" y={baseline - amplitude - 4} fontSize="8" fill="#94a3b8">rε</text>
      {/* Labels */}
      <text x="200" y="12" fontSize="8.5" fill="#6a9fd8" textAnchor="middle">{labels.feedMarks} ←→</text>
    </svg>
  )
}

export function SurfaceRoughness() {
  const { t } = useLang()
  const sr = t.surfaceRoughness

  return (
    <section className="section sr-section" id="surface-roughness" aria-labelledby="sr-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{sr.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="sr-heading">{sr.title}</h2>
          <p className="section-subtitle">{sr.subtitle}</p>
        </div>

        <div className="sr-layout">
          {/* Profile diagram */}
          <div className="sr-profile-block">
            <div className="sr-formula-hero">
              <span className="sr-formula-badge">{sr.formula}</span>
              <p className="sr-formula-note">{sr.formulaDesc}</p>
            </div>
            <div className="sr-profile-wrap">
              <SurfaceProfileSVG labels={sr.labels} />
            </div>
            <div className="sr-labels-row">
              {Object.entries(sr.labels).map(([k, v]) => (
                <span key={k} className="sr-label-chip">
                  <b>{k.toUpperCase()}</b> {v}
                </span>
              ))}
            </div>
          </div>

          {/* Factors */}
          <div className="sr-factors">
            <h3 className="sr-factors-title">
              {t.lang === 'tr' ? 'Etkileyen Faktörler' : 'Influencing Factors'}
            </h3>
            <ul className="sr-factors-list">
              {sr.factors.map((f, i) => (
                <li key={i} className="sr-factor-item">
                  <span className="sr-factor-title">{f.title}</span>
                  <span className="sr-factor-desc">{f.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
