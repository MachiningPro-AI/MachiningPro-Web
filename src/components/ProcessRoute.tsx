import React from 'react'
import { useLang } from '../LanguageContext'
import './ProcessRoute.css'

const ICON_MAP: Record<string, React.ReactElement> = {
  raw: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="24" height="16" rx="3" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.5"/>
      <line x1="4" y1="14" x2="28" y2="14" stroke="#6a9fd8" strokeWidth="1" opacity="0.5"/>
      <line x1="4" y1="18" x2="28" y2="18" stroke="#6a9fd8" strokeWidth="1" opacity="0.5"/>
    </svg>
  ),
  saw: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="20" height="12" rx="2" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.5"/>
      <line x1="16" y1="2" x2="16" y2="30" stroke="#f97316" strokeWidth="2"/>
      {[2,5,8,11,14,17,20,23,26].map(y => (
        <path key={y} d={`M 16 ${y} L 18 ${y+1.5}`} stroke="#f97316" strokeWidth="1"/>
      ))}
    </svg>
  ),
  turn: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <ellipse cx="10" cy="16" rx="6" ry="6" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.5"/>
      <rect x="10" y="13" width="14" height="6" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1"/>
      <rect x="24" y="11" width="6" height="10" rx="1" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1"/>
      <polygon points="24,13 20,16 24,19" fill="#e8c060"/>
      <path d="M 7 8 A 10 10 0 0 1 13 8" stroke="#f97316" strokeWidth="1.5" fill="none"/>
      <polygon points="13,8 11,6 14,6" fill="#f97316"/>
    </svg>
  ),
  finish: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <ellipse cx="10" cy="16" rx="6" ry="5" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.5"/>
      <rect x="10" y="13" width="14" height="6" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1"/>
      <rect x="24" y="12" width="5" height="8" rx="1" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1"/>
      <polygon points="24,13 21,16 24,19" fill="#e8c060"/>
      {/* surface roughness lines */}
      {[11,13,15,17,19,21,23].map(x => (
        <line key={x} x1={x} y1="11" x2={x+1} y2="13" stroke="#94a3b8" strokeWidth="0.8" opacity="0.6"/>
      ))}
    </svg>
  ),
  groove: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="12" width="24" height="8" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.5"/>
      <rect x="12" y="12" width="8" height="8" fill="#0f1e33" stroke="#3b6ea5" strokeWidth="0.8"/>
      <rect x="24" y="10" width="5" height="12" rx="1" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1"/>
      <rect x="24" y="14" width="5" height="4" fill="#e8c060"/>
    </svg>
  ),
  drill: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="14" width="24" height="12" rx="2" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.5"/>
      <rect x="13" y="4" width="6" height="12" rx="1" fill="#2d4060" stroke="#4a6fa5" strokeWidth="1"/>
      <polygon points="13,16 19,16 16,20" fill="#e8c060"/>
      <rect x="13" y="14" width="6" height="12" fill="#0f1e33"/>
      <path d="M 13 7 A 6 6 0 0 1 19 7" stroke="#f97316" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  deburr: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="12" width="24" height="8" rx="2" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.5"/>
      <path d="M 4 12 L 7 8 M 16 12 L 16 8 M 28 12 L 25 8" stroke="#94a3b8" strokeWidth="1.2"/>
      <path d="M 8 20 L 6 24 M 20 20 L 18 24" stroke="#94a3b8" strokeWidth="1.2"/>
      <circle cx="7" cy="8" r="1.5" fill="#f97316"/>
      <circle cx="25" cy="8" r="1.5" fill="#f97316"/>
    </svg>
  ),
  inspect: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="14" width="20" height="10" rx="2" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1.5"/>
      <circle cx="23" cy="10" r="6" fill="none" stroke="#2277e6" strokeWidth="1.5"/>
      <line x1="27.5" y1="14.5" x2="31" y2="18" stroke="#2277e6" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="10" x2="26" y2="10" stroke="#2277e6" strokeWidth="1"/>
      <line x1="23" y1="7" x2="23" y2="13" stroke="#2277e6" strokeWidth="1"/>
      <line x1="8" y1="19" x2="14" y2="19" stroke="#6a9fd8" strokeWidth="1"/>
      <line x1="8" y1="22" x2="12" y2="22" stroke="#6a9fd8" strokeWidth="1" opacity="0.6"/>
    </svg>
  ),
  record: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="20" height="24" rx="2" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1.5"/>
      <line x1="10" y1="10" x2="22" y2="10" stroke="#2277e6" strokeWidth="1.2"/>
      <line x1="10" y1="14" x2="22" y2="14" stroke="#4a6fa5" strokeWidth="1"/>
      <line x1="10" y1="18" x2="18" y2="18" stroke="#4a6fa5" strokeWidth="1"/>
      <line x1="10" y1="22" x2="20" y2="22" stroke="#4a6fa5" strokeWidth="1"/>
      <circle cx="22" cy="22" r="5" fill="#22c55e" opacity="0.9"/>
      <path d="M 19.5 22 L 21.5 24 L 24.5 20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
}

/* Part state SVGs - simplified geometry progression */
function PartState({ stage }: { stage: number }) {
  const configs = [
    // Raw bar
    { w: 60, h: 24, rx: 2, fill: '#6a6a8a', stroke: '#888' },
    // After saw
    { w: 52, h: 24, rx: 2, fill: '#6a6a8a', stroke: '#888' },
    // After rough turn
    { w: 52, h: 20, rx: 2, fill: '#4a6fa5', stroke: '#6a9fd8' },
    // After finish turn (stepped)
    { w: 52, h: 18, rx: 2, fill: '#4a6fa5', stroke: '#6a9fd8' },
    // After groove
    { w: 52, h: 18, rx: 2, fill: '#4a6fa5', stroke: '#6a9fd8' },
    // After drill
    { w: 52, h: 18, rx: 2, fill: '#4a6fa5', stroke: '#6a9fd8' },
    // After deburr
    { w: 52, h: 18, rx: 2, fill: '#4a6fa5', stroke: '#6a9fd8' },
    // Inspected
    { w: 52, h: 18, rx: 2, fill: '#3a6f5a', stroke: '#22c55e' },
    // Recorded
    { w: 52, h: 18, rx: 2, fill: '#3a6f5a', stroke: '#22c55e' },
  ]
  const c = configs[Math.min(stage, configs.length - 1)]
  const cx = 36, cy = 20, hasGroove = stage >= 4, hasDrill = stage >= 5

  return (
    <svg viewBox="0 0 72 40" className="pr-part-svg" aria-hidden="true">
      {/* Main body */}
      <rect x={cx - c.w / 2} y={cy - c.h / 2} width={c.w} height={c.h} rx={c.rx}
        fill={c.fill} stroke={c.stroke} strokeWidth="1"/>
      {/* Stepped profile on finish turn */}
      {stage >= 3 && (
        <rect x={cx + 6} y={cy - 7} width={18} height={14} rx="1"
          fill={c.fill} stroke={c.stroke} strokeWidth="0.8"/>
      )}
      {/* Groove */}
      {hasGroove && (
        <rect x={cx - 4} y={cy - c.h / 2} width={6} height={c.h} rx="0"
          fill="#0f1e33" stroke="#3b6ea5" strokeWidth="0.6"/>
      )}
      {/* Drill hole */}
      {hasDrill && (
        <rect x={cx - c.w / 2 + 6} y={cy - 4} width={20} height={8} rx="0"
          fill="#0f1e33" stroke="#3b6ea5" strokeWidth="0.6"/>
      )}
      {/* Inspection checkmark overlay */}
      {stage >= 7 && (
        <circle cx={cx + 20} cy={cy - 12} r="7" fill="#22c55e" opacity="0.9"/>
      )}
      {stage >= 7 && (
        <path d={`M ${cx + 17} ${cy - 12} L ${cx + 19} ${cy - 10} L ${cx + 23} ${cy - 15}`}
          stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      )}
    </svg>
  )
}

export function ProcessRoute() {
  const { t } = useLang()
  const pr = t.processRoute

  return (
    <section className="section proute-section" id="process-route" aria-labelledby="proute-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{pr.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="proute-heading">{pr.title}</h2>
          <p className="section-subtitle">{pr.subtitle}</p>
        </div>

        <div className="proute-part-name">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="6" stroke="#94a3b8" strokeWidth="1.2"/>
            <line x1="7" y1="4" x2="7" y2="8" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="7" cy="10" r="0.8" fill="#94a3b8"/>
          </svg>
          {pr.partName}
        </div>

        <div className="proute-ops">
          {pr.operations.map((op, i) => (
            <div key={i} className="proute-op">
              <div className="proute-op__header">
                <span className="proute-op__num">Op {op.op}</span>
                <div className="proute-op__icon">
                  {ICON_MAP[op.icon]}
                </div>
                <div className="proute-op__info">
                  <span className="proute-op__name">{op.name}</span>
                  <span className="proute-op__detail">{op.detail}</span>
                </div>
                <div className="proute-op__part">
                  <PartState stage={i} />
                </div>
              </div>
              {i < pr.operations.length - 1 && (
                <div className="proute-op__connector" aria-hidden="true">
                  <svg width="12" height="22" viewBox="0 0 12 22">
                    <line x1="6" y1="0" x2="6" y2="16" stroke="var(--color-border)" strokeWidth="1.5"/>
                    <polygon points="6,22 3,14 9,14" fill="var(--color-border)"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="proute-synthetic">{pr.synthetic}</p>
      </div>
    </section>
  )
}
