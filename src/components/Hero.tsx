import { useLang } from '../LanguageContext'
import './Hero.css'

const BASE = import.meta.env.BASE_URL

export function Hero() {
  const { t } = useLang()

  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid"/>
        <div className="hero__glow hero__glow--blue"/>
        <div className="hero__glow hero__glow--orange"/>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__logo-wrap">
            <img
              src={`${BASE}branding/machiningpro-ai-logo-vertical.png`}
              alt="MachiningPro AI — Engineering Intelligence for Machining &amp; Manufacturing Planning"
              className="hero__logo-img"
              width="220"
            />
          </div>
          <div className="hero__badge">{t.hero.badge}</div>
          <h1 className="hero__title" id="hero-heading">{t.hero.headline}</h1>
          <p className="hero__sub">{t.hero.subheadline}</p>
          <div className="hero__actions">
            <a
              href="https://machiningpro-ai.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent hero__btn"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <polygon points="6,3 13,8 6,13" fill="currentColor"/>
              </svg>
              {t.hero.ctaPrimary}
            </a>
            <a href="#capabilities" className="btn btn-outline hero__btn">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <HeroSchematic />
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line"/>
      </div>
    </section>
  )
}

function HeroSchematic() {
  return (
    <svg
      className="hero__svg"
      viewBox="0 0 520 380"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wp-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a9fd8" stopOpacity="0.9"/>
          <stop offset="40%" stopColor="#4a6fa5" stopOpacity="1"/>
          <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.9"/>
        </linearGradient>
        <linearGradient id="raw-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a6a8a" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#3a3a5c" stopOpacity="0.7"/>
        </linearGradient>
        <filter id="chip-glow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* === CNC TURNING SCENE === */}

      {/* Chuck body */}
      <rect x="22" y="80" width="54" height="130" rx="6" fill="#1a2d44" stroke="#3b6ea5" strokeWidth="2"/>
      <rect x="22" y="88" width="54" height="8" rx="0" fill="#243354" opacity="0.6"/>

      {/* Chuck face (front view circle) */}
      <ellipse cx="49" cy="145" rx="22" ry="22" fill="#1e3a5f" stroke="#4a7fd8" strokeWidth="1.5"/>
      <ellipse cx="49" cy="145" rx="12" ry="12" fill="#152a3f" stroke="#3b6ea5" strokeWidth="1"/>
      <ellipse cx="49" cy="145" rx="5" ry="5" fill="#0f1e33" stroke="#2277e6" strokeWidth="0.8"/>

      {/* 3-jaw chuck jaws */}
      {[270, 30, 150].map((a, i) => {
        const r = a * Math.PI / 180
        const jx = 49 + 17 * Math.cos(r), jy = 145 + 17 * Math.sin(r)
        return (
          <rect key={i} x={jx - 5} y={jy - 4} width={10} height={8} rx="1.5"
            fill="#2d5a8e" stroke="#4a90d9" strokeWidth="1"
            transform={`rotate(${a} ${jx} ${jy})`}/>
        )
      })}

      {/* === WORKPIECE — STEPPED SHAFT === */}
      {/* Raw (unmachined) OD — slightly larger */}
      <rect x="76" y="98" width="286" height="22" rx="0" fill="url(#raw-grad)" stroke="#555580" strokeWidth="0.8"/>
      <rect x="76" y="170" width="286" height="22" rx="0" fill="url(#raw-grad)" stroke="#555580" strokeWidth="0.8"/>

      {/* Machined OD */}
      <rect x="76" y="108" width="240" height="74" rx="2" fill="url(#wp-grad)" stroke="#6a9fd8" strokeWidth="1.5"/>

      {/* Step shoulder — already machined step */}
      <rect x="316" y="116" width="46" height="58" rx="1" fill="#3a5f8a" stroke="#5580b0" strokeWidth="1"/>

      {/* Surface highlight */}
      <rect x="76" y="108" width="240" height="8" fill="#8ab8e8" opacity="0.25"/>
      <rect x="76" y="174" width="240" height="8" fill="#0a1a2a" opacity="0.3"/>

      {/* Axis centre line */}
      <line x1="22" y1="145" x2="380" y2="145" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="6,4" opacity="0.5"/>

      {/* === SPINDLE ROTATION ARROWS === */}
      <path d="M 130 90 A 56 56 0 0 1 220 90" stroke="#f97316" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <polygon points="220,90 212,82 220,78" fill="#f97316"/>
      <path d="M 130 200 A 56 56 0 0 0 220 200" stroke="#f97316" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <polygon points="130,200 138,208 130,212" fill="#f97316"/>

      {/* Vc label */}
      <text x="176" y="80" fill="#f97316" fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="700" textAnchor="middle">Vc</text>
      <text x="176" y="214" fill="#f97316" fontSize="11" fontFamily="JetBrains Mono, monospace" opacity="0.7" textAnchor="middle">↻</text>

      {/* === CUTTING ZONE === */}
      <circle cx="316" cy="145" r="10" fill="#f97316" opacity="0.18"/>
      <circle cx="316" cy="145" r="5" fill="#f97316" opacity="0.3"/>

      {/* === CHIP === */}
      <path d="M 316 116 Q 326 100 338 92 Q 348 84 358 88 Q 366 92 362 100 Q 358 106 364 112"
        stroke="#f59e0b" strokeWidth="2.8" fill="none" strokeLinecap="round" filter="url(#chip-glow)"/>

      {/* === TOOL HOLDER === */}
      <rect x="316" y="182" width="148" height="36" rx="4" fill="#1a2434" stroke="#3b6ea5" strokeWidth="1.8"/>
      <rect x="316" y="182" width="148" height="6" fill="#243354" opacity="0.6"/>

      {/* Insert (CNMG shape) */}
      <polygon points="316,116 332,112 332,134 316,130" fill="#e8c060" stroke="#d4a820" strokeWidth="1.2"/>
      <ellipse cx="326" cy="123" rx="3" ry="3" fill="#c4a010" opacity="0.6"/>

      {/* Clamp screw */}
      <circle cx="342" cy="200" r="5" fill="#4a5568" stroke="#64748b" strokeWidth="1"/>

      {/* === FEED ARROW === */}
      <line x1="490" y1="200" x2="380" y2="200" stroke="#2277e6" strokeWidth="2.8" strokeLinecap="round"/>
      <polygon points="380,200 392,194 392,206" fill="#2277e6"/>
      <text x="492" y="196" fill="#2277e6" fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="700">f</text>
      <text x="492" y="212" fill="#2277e6" fontSize="9" fontFamily="JetBrains Mono, monospace" opacity="0.7">mm/rev</text>

      {/* === DIMENSION LINES === */}
      {/* ap — depth of cut */}
      <line x1="316" y1="108" x2="304" y2="108" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="316" y1="116" x2="304" y2="116" stroke="#94a3b8" strokeWidth="1"/>
      <line x1="306" y1="108" x2="306" y2="116" stroke="#94a3b8" strokeWidth="1"/>
      <polygon points="306,108 303,113 309,113" fill="#94a3b8"/>
      <polygon points="306,116 303,111 309,111" fill="#94a3b8"/>
      <text x="294" y="114" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono, monospace" textAnchor="middle">ap</text>

      {/* Workpiece diameter */}
      <line x1="76" y1="240" x2="316" y2="240" stroke="#2277e6" strokeWidth="0.9" opacity="0.6"/>
      <line x1="76" y1="235" x2="76" y2="245" stroke="#2277e6" strokeWidth="0.9" opacity="0.6"/>
      <line x1="316" y1="235" x2="316" y2="245" stroke="#2277e6" strokeWidth="0.9" opacity="0.6"/>
      <text x="196" y="236" fill="#4d9aff" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle" opacity="0.8">⌀ 50.00 f8</text>

      {/* === ENGINEERING DATA CARDS === */}
      {[
        { x: 22,  label: 'Vc', val: '180 m/min', color: '#f97316' },
        { x: 142, label: 'n', val: '1146 rpm', color: '#2277e6' },
        { x: 262, label: 'f', val: '0.25 mm/rev', color: '#22c55e' },
        { x: 382, label: 'ap', val: '2.0 mm', color: '#a78bfa' },
      ].map(c => (
        <g key={c.x}>
          <rect x={c.x} y={268} width={110} height={44} rx="5"
            fill="#0d1117" stroke={c.color} strokeWidth="1.2" opacity="0.95"/>
          <text x={c.x + 10} y={284} fill={c.color} fontSize="9"
            fontFamily="JetBrains Mono, monospace" fontWeight="600">{c.label}</text>
          <text x={c.x + 10} y={302} fill="#e2e8f0" fontSize="11"
            fontFamily="JetBrains Mono, monospace" fontWeight="700">{c.val}</text>
        </g>
      ))}

      {/* === STATUS BAR === */}
      <rect x="22" y="326" width="476" height="26" rx="5" fill="#0d1117" stroke="#1e2d3d" strokeWidth="1"/>
      <circle cx="40" cy="339" r="5" fill="#22c55e" opacity="0.9"/>
      <text x="54" y="343" fill="#64748b" fontSize="8" fontFamily="JetBrains Mono, monospace">CNC TURNING</text>
      <text x="180" y="343" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono, monospace">C45 Steel · CNMG 120408 · Ra ≤ 1.6 µm</text>
      <text x="428" y="343" fill="#2277e6" fontSize="8" fontFamily="JetBrains Mono, monospace">ENGINEERING</text>

      {/* Label tags */}
      <text x="326" y="106" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono, monospace">Insert</text>
      <text x="328" y="196" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono, monospace">Tool Holder</text>
      <text x="346" y="88" fill="#f59e0b" fontSize="9" fontFamily="JetBrains Mono, monospace">Chip ✦</text>
      <text x="22" y="76" fill="#6a9fd8" fontSize="9" fontFamily="JetBrains Mono, monospace">Chuck</text>
      <text x="140" y="104" fill="#6a9fd8" fontSize="9" fontFamily="JetBrains Mono, monospace">Workpiece</text>
    </svg>
  )
}
