import { useLang } from '../LanguageContext'
import './Hero.css'

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
        <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2277e6" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#1a55b0" stopOpacity="0.4"/>
        </linearGradient>
        <linearGradient id="hg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#c2500a" stopOpacity="0.4"/>
        </linearGradient>
        <filter id="hglow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Main part outline */}
      <g transform="translate(30,30)">
        <rect x="60" y="40" width="200" height="120" rx="4"
          fill="none" stroke="#2277e6" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.7"/>
        <rect x="80" y="55" width="80" height="50" rx="2"
          fill="none" stroke="#4d9aff" strokeWidth="1" opacity="0.5"/>
        <circle cx="200" cy="80" r="22" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.7"/>
        <circle cx="200" cy="80" r="8" fill="none" stroke="#f97316" strokeWidth="1"/>
        <line x1="200" y1="58" x2="200" y2="50" stroke="#f97316" strokeWidth="1" opacity="0.6"/>
        <line x1="200" y1="102" x2="200" y2="110" stroke="#f97316" strokeWidth="1" opacity="0.6"/>
        <line x1="178" y1="80" x2="170" y2="80" stroke="#f97316" strokeWidth="1" opacity="0.6"/>
        <line x1="222" y1="80" x2="230" y2="80" stroke="#f97316" strokeWidth="1" opacity="0.6"/>

        {/* Dimension lines */}
        <line x1="60" y1="175" x2="260" y2="175" stroke="#2277e6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="60" y1="171" x2="60" y2="179" stroke="#2277e6" strokeWidth="0.8" opacity="0.5"/>
        <line x1="260" y1="171" x2="260" y2="179" stroke="#2277e6" strokeWidth="0.8" opacity="0.5"/>
        <text x="160" y="172" fill="#4d9aff" fontSize="9" textAnchor="middle" opacity="0.8" fontFamily="JetBrains Mono, monospace">200.00</text>

        {/* GD&T symbols */}
        <rect x="290" y="42" width="80" height="16" rx="2" fill="none" stroke="#2277e6" strokeWidth="0.8" opacity="0.6"/>
        <line x1="290" y1="50" x2="370" y2="50" stroke="#2277e6" strokeWidth="0.8" opacity="0.4"/>
        <line x1="320" y1="42" x2="320" y2="58" stroke="#2277e6" strokeWidth="0.8" opacity="0.4"/>
        <line x1="345" y1="42" x2="345" y2="58" stroke="#2277e6" strokeWidth="0.8" opacity="0.4"/>
        <text x="297" y="53" fill="#94a3b8" fontSize="7.5" fontFamily="JetBrains Mono, monospace" opacity="0.8">⌀</text>
        <text x="327" y="53" fill="#94a3b8" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.8">0.02</text>
        <text x="350" y="53" fill="#f97316" fontSize="7.5" fontFamily="JetBrains Mono, monospace" opacity="0.8">A</text>

        <rect x="290" y="64" width="80" height="16" rx="2" fill="none" stroke="#2277e6" strokeWidth="0.8" opacity="0.6"/>
        <line x1="290" y1="72" x2="370" y2="72" stroke="#2277e6" strokeWidth="0.8" opacity="0.4"/>
        <line x1="320" y1="64" x2="320" y2="80" stroke="#2277e6" strokeWidth="0.8" opacity="0.4"/>
        <line x1="345" y1="64" x2="345" y2="80" stroke="#2277e6" strokeWidth="0.8" opacity="0.4"/>
        <text x="297" y="75" fill="#94a3b8" fontSize="7.5" fontFamily="JetBrains Mono, monospace" opacity="0.8">▱</text>
        <text x="327" y="75" fill="#94a3b8" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.8">0.05</text>
        <text x="350" y="75" fill="#f97316" fontSize="7.5" fontFamily="JetBrains Mono, monospace" opacity="0.8">B</text>
      </g>

      {/* Process cards */}
      <g transform="translate(30,220)">
        {[
          { x: 0,   label: 'Feature', val: '14 found', color: '#2277e6' },
          { x: 110, label: 'Tool Life', val: '87.3 min', color: '#f97316' },
          { x: 220, label: 'Cp/Cpk', val: '1.45/1.38', color: '#22c55e' },
          { x: 330, label: 'Cycle', val: '4.2 min', color: '#a78bfa' },
        ].map(c => (
          <g key={c.x}>
            <rect x={c.x} y={0} width={96} height={48} rx="6"
              fill="#0d1117" stroke={c.color} strokeWidth="1" opacity="0.9"/>
            <text x={c.x + 8} y={16} fill={c.color} fontSize="8.5"
              fontFamily="JetBrains Mono, monospace" fontWeight="600" opacity="0.9">{c.label}</text>
            <text x={c.x + 8} y={34} fill="#e2e8f0" fontSize="13"
              fontFamily="JetBrains Mono, monospace" fontWeight="700">{c.val}</text>
          </g>
        ))}
      </g>

      {/* Connector lines */}
      <g opacity="0.4">
        <line x1="78" y1="220" x2="78" y2="202" stroke="#2277e6" strokeWidth="1" strokeDasharray="3,2"/>
        <line x1="188" y1="220" x2="188" y2="202" stroke="#f97316" strokeWidth="1" strokeDasharray="3,2"/>
        <line x1="298" y1="220" x2="298" y2="202" stroke="#22c55e" strokeWidth="1" strokeDasharray="3,2"/>
        <line x1="408" y1="220" x2="408" y2="202" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3,2"/>
      </g>

      {/* Bottom status bar */}
      <rect x="30" y="288" width="460" height="28" rx="6" fill="#0d1117" stroke="#1e2d3d" strokeWidth="1"/>
      <circle cx="50" cy="302" r="5" fill="#22c55e" opacity="0.9"/>
      <text x="63" y="306" fill="#64748b" fontSize="8.5" fontFamily="JetBrains Mono, monospace">MachiningPro AI</text>
      <text x="200" y="306" fill="#94a3b8" fontSize="8.5" fontFamily="JetBrains Mono, monospace">Engineering Preview · v0.5.0-demo</text>
      <text x="420" y="306" fill="#2277e6" fontSize="8.5" fontFamily="JetBrains Mono, monospace">READY</text>
    </svg>
  )
}
