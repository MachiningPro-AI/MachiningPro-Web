import { useLang } from '../LanguageContext'
import './EngineeringIntelligence.css'

const principleIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M9 11l3 3L22 4" opacity="0.6"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h4"/><path d="M15 17l-2-2-2 2"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/><path d="M8 12h8" opacity="0.4"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
]

export function EngineeringIntelligence() {
  const { t } = useLang()
  const { intelligence } = t

  return (
    <section className="section ei-section" id="intelligence" aria-labelledby="intelligence-heading">
      <div className="container">
        <div className="ei-split">
          <div className="ei-left">
            <span className="section-label">{intelligence.sectionLabel}</span>
            <div className="divider-line"/>
            <h2 className="section-title" id="intelligence-heading">{intelligence.title}</h2>
            <p className="section-subtitle" style={{ maxWidth: '480px' }}>{intelligence.subtitle}</p>
            <p className="ei-description">{intelligence.description}</p>
          </div>

          <div className="ei-right">
            <div className="ei-visual" aria-hidden="true">
              <AIArchDiagram />
            </div>
          </div>
        </div>

        <div className="ei-principles grid-2" role="list">
          {intelligence.principles.map((p, i) => (
            <article key={i} className="ei-principle card" role="listitem">
              <div className="ei-principle__icon" style={{ color: i === 3 ? 'var(--color-accent)' : 'var(--color-primary)' }} aria-hidden="true">
                {principleIcons[i]}
              </div>
              <div>
                <h3 className="ei-principle__title">{p.title}</h3>
                <p className="ei-principle__desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AIArchDiagram() {
  const layers = [
    { label: 'Deterministic Engineering', color: '#2277e6', w: 280 },
    { label: 'AI Decision Support', color: '#a78bfa', w: 220 },
    { label: 'Engineer Review & Approval', color: '#f97316', w: 260 },
  ]

  return (
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="ei-svg">
      {layers.map((layer, i) => (
        <g key={i} transform={`translate(${(320 - layer.w) / 2}, ${20 + i * 66})`}>
          <rect width={layer.w} height={48} rx="8"
            fill={layer.color} fillOpacity="0.1"
            stroke={layer.color} strokeWidth="1.5" strokeOpacity="0.6"/>
          <text x={layer.w / 2} y="28" fill={layer.color} fontSize="11"
            textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="700" opacity="0.9">
            {layer.label}
          </text>
          {i < layers.length - 1 && (
            <path
              d={`M${layer.w / 2} 50 L${layer.w / 2} 58`}
              stroke={layer.color} strokeWidth="1.5" strokeOpacity="0.4"
            />
          )}
        </g>
      ))}
      <text x="160" y="215" fill="#64748b" fontSize="9"
        textAnchor="middle" fontFamily="JetBrains Mono,monospace">
        Engineer retains all approval authority
      </text>
    </svg>
  )
}
