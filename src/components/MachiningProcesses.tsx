import React from 'react'
import { useLang } from '../LanguageContext'
import './MachiningProcesses.css'

function TurningSVG() {
  return (
    <svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mp-process-svg">
      {/* Chuck body */}
      <rect x="4" y="28" width="22" height="44" rx="3" fill="#1e3a5f" stroke="#3b6ea5" strokeWidth="1.2"/>
      {/* Chuck jaws */}
      <rect x="6" y="26" width="16" height="6" rx="1.5" fill="#2d5a8e" stroke="#4a90d9" strokeWidth="0.8"/>
      <rect x="6" y="68" width="16" height="6" rx="1.5" fill="#2d5a8e" stroke="#4a90d9" strokeWidth="0.8"/>
      <rect x="2" y="44" width="6" height="12" rx="1.5" fill="#2d5a8e" stroke="#4a90d9" strokeWidth="0.8"/>
      {/* Workpiece — raw OD */}
      <rect x="26" y="34" width="96" height="10" rx="0" fill="#3a3a5c" stroke="#555580" strokeWidth="0.8" opacity="0.6"/>
      <rect x="26" y="56" width="96" height="10" rx="0" fill="#3a3a5c" stroke="#555580" strokeWidth="0.8" opacity="0.6"/>
      {/* Workpiece — main cylinder (machined portion) */}
      <rect x="26" y="38" width="72" height="24" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1"/>
      {/* Workpiece top/bottom face gradient */}
      <rect x="26" y="38" width="72" height="4" fill="#6a9fd8" opacity="0.4"/>
      <rect x="26" y="58" width="72" height="4" fill="#1a2f4a" opacity="0.4"/>
      {/* Rotation arrows */}
      <path d="M 50 30 A 20 20 0 0 1 80 30" stroke="#f97316" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <polygon points="80,30 76,25 83,26" fill="#f97316"/>
      <path d="M 50 70 A 20 20 0 0 0 80 70" stroke="#f97316" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <polygon points="50,70 54,75 47,74" fill="#f97316"/>
      {/* Cutting zone highlight */}
      <circle cx="98" cy="50" r="5" fill="#f97316" opacity="0.3"/>
      {/* Chip */}
      <path d="M 98 44 Q 106 38 110 34 Q 114 30 118 32" stroke="#f59e0b" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      {/* Tool holder */}
      <rect x="100" y="54" width="36" height="14" rx="2" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1"/>
      {/* Insert */}
      <polygon points="100,54 108,50 108,58" fill="#e8c060" stroke="#d4a820" strokeWidth="0.8"/>
      {/* Feed arrow */}
      <line x1="130" y1="50" x2="112" y2="50" stroke="#2277e6" strokeWidth="1.8" strokeLinecap="round"/>
      <polygon points="112,50 118,47 118,53" fill="#2277e6"/>
      {/* Labels */}
      <text x="62" y="88" fontSize="6.5" fill="#94a3b8" textAnchor="middle">Vc</text>
      <text x="122" y="48" fontSize="6.5" fill="#2277e6" textAnchor="middle">f</text>
      <text x="113" y="32" fontSize="6" fill="#f59e0b">Chip</text>
      <text x="130" y="34" fontSize="5.5" fill="#94a3b8">ap</text>
      <line x1="130" y1="38" x2="130" y2="50" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2"/>
      <line x1="130" y1="50" x2="130" y2="62" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2"/>
    </svg>
  )
}

function MillingSVG() {
  return (
    <svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mp-process-svg">
      {/* Workpiece */}
      <rect x="10" y="60" width="120" height="30" rx="2" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1"/>
      <rect x="10" y="60" width="120" height="5" fill="#6a9fd8" opacity="0.4"/>
      {/* Milled pocket */}
      <rect x="50" y="60" width="50" height="12" rx="1" fill="#2a3f5f" stroke="#3b6ea5" strokeWidth="0.8"/>
      {/* Cutter body */}
      <rect x="72" y="8" width="16" height="36" rx="2" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1"/>
      {/* Cutter flutes */}
      {[0,1,2,3].map(i => (
        <g key={i} transform={`rotate(${i*90} 80 44)`}>
          <ellipse cx="80" cy="38" rx="3" ry="8" fill="#e8c060" stroke="#d4a820" strokeWidth="0.6" opacity="0.9"/>
        </g>
      ))}
      {/* Cutter tip circle */}
      <circle cx="80" cy="44" r="8" fill="none" stroke="#e8c060" strokeWidth="1.2" strokeDasharray="3,2"/>
      <circle cx="80" cy="44" r="2" fill="#f97316"/>
      {/* Rotation arrow */}
      <path d="M 70 16 A 14 14 0 0 1 90 16" stroke="#f97316" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <polygon points="90,16 86,11 93,12" fill="#f97316"/>
      {/* Feed arrow */}
      <line x1="30" y1="50" x2="62" y2="50" stroke="#2277e6" strokeWidth="1.8" strokeLinecap="round"/>
      <polygon points="62,50 56,47 56,53" fill="#2277e6"/>
      {/* ae dimension */}
      <line x1="98" y1="60" x2="98" y2="72" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2"/>
      <line x1="100" y1="60" x2="100" y2="72" stroke="#94a3b8" strokeWidth="0.8"/>
      <text x="104" y="68" fontSize="6" fill="#94a3b8">ae</text>
      {/* ap dimension */}
      <line x1="50" y1="60" x2="42" y2="60" stroke="#94a3b8" strokeWidth="0.8"/>
      <line x1="50" y1="72" x2="42" y2="72" stroke="#94a3b8" strokeWidth="0.8"/>
      <line x1="44" y1="60" x2="44" y2="72" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2"/>
      <text x="36" y="68" fontSize="6" fill="#94a3b8">ap</text>
      {/* Labels */}
      <text x="42" y="48" fontSize="6.5" fill="#2277e6">Vf</text>
      <text x="76" y="4" fontSize="6.5" fill="#f97316">n</text>
      {/* Chips */}
      <path d="M 88 54 Q 92 50 96 52 Q 100 46 104 48" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

function DrillingSVG() {
  return (
    <svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mp-process-svg">
      {/* Workpiece */}
      <rect x="20" y="55" width="120" height="38" rx="2" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1"/>
      <rect x="20" y="55" width="120" height="4" fill="#6a9fd8" opacity="0.35"/>
      {/* Drilled hole */}
      <rect x="72" y="55" width="16" height="38" rx="0" fill="#0f1e33"/>
      <ellipse cx="80" cy="55" rx="8" ry="2.5" fill="#1a3a5c" stroke="#3b6ea5" strokeWidth="0.8"/>
      {/* Drill body */}
      <rect x="77" y="8" width="6" height="36" rx="1" fill="#2d4060" stroke="#4a6fa5" strokeWidth="0.8"/>
      {/* Drill flutes */}
      <path d="M 77 15 Q 80 20 83 25 Q 77 30 80 35 Q 83 38 80 42 Q 77 44 80 47" stroke="#e8c060" strokeWidth="1.5" fill="none"/>
      <path d="M 83 15 Q 80 20 77 25 Q 83 30 80 35 Q 77 38 80 42 Q 83 44 80 47" stroke="#e8c060" strokeWidth="1.5" fill="none"/>
      {/* Drill point */}
      <polygon points="77,47 83,47 80,55" fill="#e8c060" stroke="#d4a820" strokeWidth="0.8"/>
      {/* Rotation arrow */}
      <path d="M 68 20 A 14 14 0 0 1 92 20" stroke="#f97316" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <polygon points="92,20 88,15 95,16" fill="#f97316"/>
      {/* Feed arrow (axial) */}
      <line x1="80" y1="2" x2="80" y2="12" stroke="#2277e6" strokeWidth="1.8" strokeLinecap="round"/>
      <polygon points="80,12 77,7 83,7" fill="#2277e6"/>
      {/* Chips */}
      <path d="M 72 58 Q 66 54 62 52 Q 58 50 56 53" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
      <path d="M 88 58 Q 94 54 98 52 Q 102 50 104 53" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
      {/* Labels */}
      <text x="88" y="10" fontSize="6.5" fill="#2277e6">f</text>
      <text x="60" y="22" fontSize="6.5" fill="#f97316">n</text>
      <text x="112" y="72" fontSize="6" fill="#94a3b8">ap=D/2</text>
      <line x1="88" y1="55" x2="110" y2="70" stroke="#94a3b8" strokeWidth="0.7" strokeDasharray="2,2"/>
    </svg>
  )
}

function BoringSVG() {
  return (
    <svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mp-process-svg">
      {/* Workpiece ring */}
      <rect x="15" y="18" width="130" height="64" rx="4" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1"/>
      {/* Bore (hole) */}
      <rect x="30" y="18" width="100" height="64" rx="0" fill="#0f1e33"/>
      <rect x="30" y="18" width="100" height="64" rx="0" fill="#0f1e33"/>
      {/* Bore walls (inner cylinder surfaces) */}
      <rect x="30" y="18" width="6" height="64" rx="0" fill="#2a4060" stroke="#3b6ea5" strokeWidth="0.8"/>
      <rect x="124" y="18" width="6" height="64" rx="0" fill="#2a4060" stroke="#3b6ea5" strokeWidth="0.8"/>
      {/* Boring bar */}
      <rect x="36" y="46" width="70" height="8" rx="2" fill="#1e2d40" stroke="#4a6ea5" strokeWidth="1"/>
      {/* Insert at tip */}
      <polygon points="36,46 30,50 36,54" fill="#e8c060" stroke="#d4a820" strokeWidth="0.8"/>
      {/* Rotation arrow inside bore */}
      <path d="M 60 36 A 14 14 0 0 1 90 36" stroke="#f97316" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <polygon points="90,36 86,31 93,32" fill="#f97316"/>
      {/* Feed arrow */}
      <line x1="145" y1="50" x2="120" y2="50" stroke="#2277e6" strokeWidth="1.8" strokeLinecap="round"/>
      <polygon points="120,50 126,47 126,53" fill="#2277e6"/>
      {/* ap dimension */}
      <line x1="36" y1="50" x2="36" y2="56" stroke="#94a3b8" strokeWidth="0.8"/>
      <line x1="30" y1="50" x2="30" y2="56" stroke="#94a3b8" strokeWidth="0.8"/>
      <line x1="30" y1="54" x2="36" y2="54" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2"/>
      {/* Labels */}
      <text x="140" y="46" fontSize="6.5" fill="#2277e6">f</text>
      <text x="55" y="28" fontSize="6.5" fill="#f97316">n</text>
      <text x="28" y="62" fontSize="6" fill="#94a3b8">ap</text>
      <text x="75" y="95" fontSize="6" fill="#6a9fd8" textAnchor="middle">Boring Bar</text>
    </svg>
  )
}

function ThreadingSVG() {
  return (
    <svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mp-process-svg">
      {/* Workpiece cylinder */}
      <rect x="20" y="36" width="100" height="28" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1"/>
      <rect x="20" y="36" width="100" height="4" fill="#6a9fd8" opacity="0.35"/>
      <rect x="20" y="60" width="100" height="4" fill="#1a2f4a" opacity="0.35"/>
      {/* Thread profiles on top */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <path key={i}
          d={`M ${28+i*10} 36 L ${32+i*10} 28 L ${36+i*10} 36`}
          stroke="#6a9fd8" strokeWidth="1.2" fill="none"/>
      ))}
      {/* Thread profiles on bottom */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <path key={i}
          d={`M ${28+i*10} 64 L ${32+i*10} 72 L ${36+i*10} 64`}
          stroke="#6a9fd8" strokeWidth="1.2" fill="none"/>
      ))}
      {/* Thread depth lines */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <line key={i} x1={32+i*10} y1="36" x2={32+i*10} y2="28" stroke="#4a9fd8" strokeWidth="0.8" opacity="0.6"/>
      ))}
      {/* Threading tool */}
      <rect x="110" y="35" width="35" height="14" rx="2" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1"/>
      <polygon points="110,36 120,42 110,48" fill="#e8c060" stroke="#d4a820" strokeWidth="0.8"/>
      {/* Feed arrow */}
      <line x1="146" y1="42" x2="126" y2="42" stroke="#2277e6" strokeWidth="1.8" strokeLinecap="round"/>
      <polygon points="126,42 132,39 132,45" fill="#2277e6"/>
      {/* Pitch dimension */}
      <line x1="28" y1="22" x2="28" y2="26" stroke="#94a3b8" strokeWidth="0.8"/>
      <line x1="38" y1="22" x2="38" y2="26" stroke="#94a3b8" strokeWidth="0.8"/>
      <line x1="28" y1="24" x2="38" y2="24" stroke="#94a3b8" strokeWidth="0.8"/>
      <polygon points="28,24 32,22 32,26" fill="#94a3b8"/>
      <polygon points="38,24 34,22 34,26" fill="#94a3b8"/>
      <text x="28" y="20" fontSize="6" fill="#94a3b8">p</text>
      {/* Labels */}
      <text x="144" y="38" fontSize="6.5" fill="#2277e6">f=p</text>
      <text x="85" y="84" fontSize="6" fill="#94a3b8" textAnchor="middle">Thread Profile</text>
    </svg>
  )
}

function FinishingSVG() {
  return (
    <svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mp-process-svg">
      {/* Workpiece body */}
      <rect x="10" y="54" width="120" height="38" rx="2" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1"/>
      {/* Surface profile — exaggerated for visualization */}
      <path d="M 10 54 Q 14 48 18 54 Q 22 48 26 54 Q 30 50 34 54 Q 38 50 42 54 Q 46 50 50 54 Q 54 50 58 54 Q 62 50 66 54 Q 70 50 74 54 Q 78 50 82 54 Q 86 50 90 54 Q 94 49 98 54 Q 102 49 106 54 Q 110 49 114 54 Q 118 49 122 54 Q 126 49 130 54"
        stroke="#6a9fd8" strokeWidth="1.5" fill="#3a5f8a" opacity="0.85"/>
      {/* Ra dimension line */}
      <line x1="140" y1="49" x2="140" y2="54" stroke="#f97316" strokeWidth="1"/>
      <line x1="136" y1="49" x2="144" y2="49" stroke="#f97316" strokeWidth="1"/>
      <line x1="136" y1="54" x2="144" y2="54" stroke="#f97316" strokeWidth="1"/>
      <text x="146" y="53" fontSize="6.5" fill="#f97316">Ra</text>
      {/* Rz — peak to valley */}
      <line x1="8" y1="48" x2="8" y2="58" stroke="#2277e6" strokeWidth="1"/>
      <text x="2" y="46" fontSize="5.5" fill="#2277e6">Rz</text>
      {/* Tool insert (very fine pass) */}
      <rect x="106" y="34" width="34" height="12" rx="2" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1"/>
      <ellipse cx="106" cy="49" rx="5" ry="5" fill="#e8c060" stroke="#d4a820" strokeWidth="0.8"/>
      {/* Nose radius annotation */}
      <path d="M 106 44 A 5 5 0 0 1 111 49" stroke="#94a3b8" strokeWidth="0.8" fill="none" strokeDasharray="2,1"/>
      <text x="108" y="42" fontSize="5.5" fill="#94a3b8">rε</text>
      {/* Feed arrow */}
      <line x1="145" y1="43" x2="122" y2="43" stroke="#2277e6" strokeWidth="1.8" strokeLinecap="round"/>
      <polygon points="122,43 128,40 128,46" fill="#2277e6"/>
      <text x="134" y="40" fontSize="6" fill="#2277e6">f</text>
      {/* Feed mark interval */}
      <line x1="90" y1="57" x2="90" y2="66" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,1"/>
      <line x1="98" y1="57" x2="98" y2="66" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,1"/>
      <line x1="90" y1="63" x2="98" y2="63" stroke="#94a3b8" strokeWidth="0.8"/>
      <text x="91" y="72" fontSize="5.5" fill="#94a3b8">f</text>
    </svg>
  )
}

const SVG_MAP: Record<string, () => React.ReactElement> = {
  turning: TurningSVG,
  milling: MillingSVG,
  drilling: DrillingSVG,
  boring: BoringSVG,
  threading: ThreadingSVG,
  finishing: FinishingSVG,
}

export function MachiningProcesses() {
  const { t } = useLang()
  const mp = t.machiningProcesses

  return (
    <section className="section mp-section" id="machining-processes" aria-labelledby="mp-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{mp.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="mp-heading">{mp.title}</h2>
          <p className="section-subtitle">{mp.subtitle}</p>
        </div>

        <div className="mp-grid">
          {mp.processes.map(proc => {
            const SVGComp = SVG_MAP[proc.id]
            return (
              <article key={proc.id} className="mp-card">
                <div className="mp-card__visual" aria-hidden="true">
                  {SVGComp && <SVGComp />}
                </div>
                <div className="mp-card__body">
                  <h3 className="mp-card__title">{proc.title}</h3>
                  <p className="mp-card__desc">{proc.desc}</p>
                  <ul className="mp-card__params">
                    {proc.params.map(p => (
                      <li key={p} className="mp-card__param">{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
