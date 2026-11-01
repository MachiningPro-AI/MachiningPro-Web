import { useLang } from '../LanguageContext'
import './EngineeringCharts.css'

/* Chart A: n vs D at Vc = 100 m/min — n = 1000*100/(π*D) */
function ChartSpindleVsDiam() {
  const W = 300, H = 180, PL = 50, PR = 16, PT = 16, PB = 40
  const cw = W - PL - PR, ch = H - PT - PB
  const dMin = 5, dMax = 100, vcRef = 100
  const nScale = 6400

  const pts: string[] = []
  for (let d = dMin; d <= dMax; d += 1) {
    const n = 1000 * vcRef / (Math.PI * d)
    const px = PL + (d - dMin) / (dMax - dMin) * cw
    const py = PT + ch - (n / nScale) * ch
    pts.push(`${px.toFixed(1)},${py.toFixed(1)}`)
  }

  // Grid lines (y)
  const yTicks = [0, 1600, 3200, 4800, 6400]
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="ec-svg" aria-hidden="true">
      {yTicks.map(n => {
        const py = PT + ch - (n / nScale) * ch
        return (
          <g key={n}>
            <line x1={PL} y1={py} x2={W - PR} y2={py} stroke="rgba(148,163,184,0.15)" strokeWidth="1"/>
            <text x={PL - 4} y={py + 3} fontSize="7" fill="#64748b" textAnchor="end">{n > 0 ? n : ''}</text>
          </g>
        )
      })}
      {[5, 25, 50, 75, 100].map(d => {
        const px = PL + (d - dMin) / (dMax - dMin) * cw
        return (
          <g key={d}>
            <line x1={px} y1={PT} x2={px} y2={PT + ch} stroke="rgba(148,163,184,0.15)" strokeWidth="1"/>
            <text x={px} y={H - PB + 12} fontSize="7" fill="#64748b" textAnchor="middle">{d}</text>
          </g>
        )
      })}
      <polyline points={pts.join(' ')} fill="none" stroke="#2277e6" strokeWidth="2"/>
      {/* Axes */}
      <line x1={PL} y1={PT} x2={PL} y2={PT + ch} stroke="#475569" strokeWidth="1"/>
      <line x1={PL} y1={PT + ch} x2={W - PR} y2={PT + ch} stroke="#475569" strokeWidth="1"/>
      {/* Axis labels */}
      <text x={PL + cw / 2} y={H - 2} fontSize="8" fill="#94a3b8" textAnchor="middle">D (mm)</text>
      <text x={8} y={PT + ch / 2} fontSize="8" fill="#94a3b8" textAnchor="middle"
        transform={`rotate(-90 8 ${PT + ch / 2})`}>n (rpm)</text>
      {/* Reference annotation */}
      <text x={PL + 8} y={PT + 10} fontSize="7" fill="#f97316">Vc = 100 m/min</text>
    </svg>
  )
}

/* Chart B: Vf vs n, Vf = f * n, f = 0.15 and 0.25 mm/rev */
function ChartFeedRate() {
  const W = 300, H = 180, PL = 52, PR = 16, PT = 16, PB = 40
  const cw = W - PL - PR, ch = H - PT - PB
  const nMax = 3000, vfMax = 750

  const line = (f: number, color: string, label: string) => {
    const pts = [0, 1000, 2000, 3000].map(n => {
      const vf = f * n
      const px = PL + (n / nMax) * cw
      const py = PT + ch - (vf / vfMax) * ch
      return `${px.toFixed(1)},${py.toFixed(1)}`
    })
    const lx = PL + cw - 10, ly = PT + ch - (f * nMax / vfMax) * ch - 6
    return (
      <g key={f}>
        <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth="2"/>
        <text x={lx} y={ly} fontSize="7" fill={color} textAnchor="end">{label}</text>
      </g>
    )
  }

  const yTicks = [0, 150, 300, 450, 600, 750]
  const xTicks = [0, 500, 1000, 1500, 2000, 2500, 3000]
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="ec-svg" aria-hidden="true">
      {yTicks.map(v => {
        const py = PT + ch - (v / vfMax) * ch
        return (
          <g key={v}>
            <line x1={PL} y1={py} x2={W - PR} y2={py} stroke="rgba(148,163,184,0.15)" strokeWidth="1"/>
            <text x={PL - 4} y={py + 3} fontSize="7" fill="#64748b" textAnchor="end">{v > 0 ? v : ''}</text>
          </g>
        )
      })}
      {xTicks.map(n => {
        const px = PL + (n / nMax) * cw
        return (
          <g key={n}>
            <line x1={px} y1={PT} x2={px} y2={PT + ch} stroke="rgba(148,163,184,0.15)" strokeWidth="1"/>
            <text x={px} y={H - PB + 12} fontSize="7" fill="#64748b" textAnchor="middle">{n > 0 ? n : ''}</text>
          </g>
        )
      })}
      {line(0.15, '#2277e6', 'f = 0.15 mm/rev')}
      {line(0.25, '#f97316', 'f = 0.25 mm/rev')}
      <line x1={PL} y1={PT} x2={PL} y2={PT + ch} stroke="#475569" strokeWidth="1"/>
      <line x1={PL} y1={PT + ch} x2={W - PR} y2={PT + ch} stroke="#475569" strokeWidth="1"/>
      <text x={PL + cw / 2} y={H - 2} fontSize="8" fill="#94a3b8" textAnchor="middle">n (rpm)</text>
      <text x={8} y={PT + ch / 2} fontSize="8" fill="#94a3b8" textAnchor="middle"
        transform={`rotate(-90 8 ${PT + ch / 2})`}>Vf (mm/min)</text>
    </svg>
  )
}

/* Chart C: Milling Vf vs n for z = 2, 4, 6, fz = 0.05 mm/tooth */
function ChartMillingFeed() {
  const W = 300, H = 180, PL = 52, PR = 16, PT = 16, PB = 40
  const cw = W - PL - PR, ch = H - PT - PB
  const nMax = 6000, vfMax = 1800, fz = 0.05

  const line = (z: number, color: string) => {
    const pts = [0, 2000, 4000, 6000].map(n => {
      const vf = fz * z * n
      const px = PL + (n / nMax) * cw
      const py = PT + ch - Math.min(vf / vfMax, 1) * ch
      return `${px.toFixed(1)},${py.toFixed(1)}`
    })
    const lx = PL + cw + 2
    const vfEnd = Math.min(fz * z * nMax, vfMax)
    const ly = PT + ch - (vfEnd / vfMax) * ch
    return (
      <g key={z}>
        <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth="2"/>
        <text x={lx} y={ly + 4} fontSize="7" fill={color}>z={z}</text>
      </g>
    )
  }

  const yTicks = [0, 300, 600, 900, 1200, 1500, 1800]
  const xTicks = [0, 1000, 2000, 3000, 4000, 5000, 6000]
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="ec-svg" aria-hidden="true">
      {yTicks.map(v => {
        const py = PT + ch - (v / vfMax) * ch
        return (
          <g key={v}>
            <line x1={PL} y1={py} x2={W - PR} y2={py} stroke="rgba(148,163,184,0.15)" strokeWidth="1"/>
            <text x={PL - 4} y={py + 3} fontSize="7" fill="#64748b" textAnchor="end">{v > 0 ? v : ''}</text>
          </g>
        )
      })}
      {xTicks.map(n => {
        const px = PL + (n / nMax) * cw
        return (
          <g key={n}>
            <line x1={px} y1={PT} x2={px} y2={PT + ch} stroke="rgba(148,163,184,0.15)" strokeWidth="1"/>
            <text x={px} y={H - PB + 12} fontSize="7" fill="#64748b" textAnchor="middle">{n > 0 ? n : ''}</text>
          </g>
        )
      })}
      {line(2, '#2277e6')}
      {line(4, '#22c55e')}
      {line(6, '#f97316')}
      <line x1={PL} y1={PT} x2={PL} y2={PT + ch} stroke="#475569" strokeWidth="1"/>
      <line x1={PL} y1={PT + ch} x2={W - PR} y2={PT + ch} stroke="#475569" strokeWidth="1"/>
      <text x={PL + cw / 2} y={H - 2} fontSize="8" fill="#94a3b8" textAnchor="middle">n (rpm)</text>
      <text x={8} y={PT + ch / 2} fontSize="8" fill="#94a3b8" textAnchor="middle"
        transform={`rotate(-90 8 ${PT + ch / 2})`}>Vf (mm/min)</text>
      <text x={PL + 6} y={PT + 10} fontSize="7" fill="#64748b">fz = 0.05 mm/tooth</text>
    </svg>
  )
}

/* Chart D: Conceptual tool wear — S-curve VB vs time */
function ChartToolWear() {
  const W = 300, H = 180, PL = 52, PR = 16, PT = 16, PB = 40
  const cw = W - PL - PR, ch = H - PT - PB
  const tMax = 100, vbMax = 0.5

  // Conceptual S-curve: break-in + steady + accelerating
  const wearPts: string[] = []
  for (let t = 0; t <= tMax; t += 1) {
    let vb: number
    if (t < 15) {
      vb = 0.05 * (1 - Math.exp(-t / 4))
    } else if (t < 70) {
      vb = 0.048 + (t - 15) * 0.0022
    } else {
      vb = 0.17 + 0.33 * Math.pow((t - 70) / 30, 1.8)
    }
    const px = PL + (t / tMax) * cw
    const py = PT + ch - (Math.min(vb, vbMax) / vbMax) * ch
    wearPts.push(`${px.toFixed(1)},${py.toFixed(1)}`)
  }

  // Tool life limit line
  const vbLimit = 0.3
  const pyLimit = PT + ch - (vbLimit / vbMax) * ch

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="ec-svg" aria-hidden="true">
      {/* Zones */}
      <rect x={PL} y={PT} width={cw * 0.15} height={ch} fill="rgba(34, 119, 230, 0.05)"/>
      <rect x={PL + cw * 0.15} y={PT} width={cw * 0.55} height={ch} fill="rgba(34, 230, 100, 0.04)"/>
      <rect x={PL + cw * 0.70} y={PT} width={cw * 0.30} height={ch} fill="rgba(249, 115, 22, 0.07)"/>
      {/* Zone labels */}
      <text x={PL + cw * 0.075} y={PT + 12} fontSize="6.5" fill="#2277e6" textAnchor="middle">I</text>
      <text x={PL + cw * 0.425} y={PT + 12} fontSize="6.5" fill="#22c55e" textAnchor="middle">II Steady</text>
      <text x={PL + cw * 0.85} y={PT + 12} fontSize="6.5" fill="#f97316" textAnchor="middle">III</text>
      {/* VB limit line */}
      <line x1={PL} y1={pyLimit} x2={W - PR} y2={pyLimit} stroke="#e53e3e" strokeWidth="1.2" strokeDasharray="4,3"/>
      <text x={W - PR - 2} y={pyLimit - 4} fontSize="7" fill="#e53e3e" textAnchor="end">VB_max</text>
      {/* Grid */}
      {[0, 0.1, 0.2, 0.3, 0.4, 0.5].map(v => {
        const py = PT + ch - (v / vbMax) * ch
        return (
          <g key={v}>
            <line x1={PL} y1={py} x2={W - PR} y2={py} stroke="rgba(148,163,184,0.1)" strokeWidth="1"/>
            <text x={PL - 4} y={py + 3} fontSize="7" fill="#64748b" textAnchor="end">{v.toFixed(1)}</text>
          </g>
        )
      })}
      <polyline points={wearPts.join(' ')} fill="none" stroke="#f97316" strokeWidth="2.2"/>
      <line x1={PL} y1={PT} x2={PL} y2={PT + ch} stroke="#475569" strokeWidth="1"/>
      <line x1={PL} y1={PT + ch} x2={W - PR} y2={PT + ch} stroke="#475569" strokeWidth="1"/>
      <text x={PL + cw / 2} y={H - 2} fontSize="8" fill="#94a3b8" textAnchor="middle">Machining Time →</text>
      <text x={8} y={PT + ch / 2} fontSize="8" fill="#94a3b8" textAnchor="middle"
        transform={`rotate(-90 8 ${PT + ch / 2})`}>VB (mm)</text>
    </svg>
  )
}

const CHARTS = [ChartSpindleVsDiam, ChartFeedRate, ChartMillingFeed, ChartToolWear]

export function EngineeringCharts() {
  const { t } = useLang()
  const ec = t.engineeringCharts

  return (
    <section className="section ec-section" id="engineering-charts" aria-labelledby="ec-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{ec.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="ec-heading">{ec.title}</h2>
          <p className="section-subtitle">{ec.subtitle}</p>
        </div>

        <div className="ec-grid">
          {ec.charts.map((chart, i) => {
            const ChartComp = CHARTS[i]
            return (
              <article key={i} className="ec-card">
                <div className="ec-card__head">
                  <h3 className="ec-card__title">{chart.title}</h3>
                  <span className="ec-note-badge">{t.lang === 'tr' ? ec.illustrativeNoteTr : ec.illustrativeNote}</span>
                </div>
                <div className="ec-chart-wrap">
                  <ChartComp />
                </div>
                <p className="ec-card__desc">{chart.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
