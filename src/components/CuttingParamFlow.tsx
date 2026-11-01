import { useLang } from '../LanguageContext'
import './CuttingParamFlow.css'

export function CuttingParamFlow() {
  const { t } = useLang()
  const cpf = t.cuttingParamFlow

  return (
    <section className="section cpf-section" id="cutting-parameters" aria-labelledby="cpf-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{cpf.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="cpf-heading">{cpf.title}</h2>
          <p className="section-subtitle">{cpf.subtitle}</p>
        </div>

        <div className="cpf-layout">
          {/* Flow visual */}
          <div className="cpf-flow">
            {cpf.steps.map((step, i) => (
              <div key={i} className="cpf-flow__item">
                <div className="cpf-flow__node">
                  <span className="cpf-flow__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="cpf-flow__content">
                    <span className="cpf-flow__label">{step.label}</span>
                    <span className="cpf-flow__detail">{step.detail}</span>
                  </div>
                </div>
                {i < cpf.steps.length - 1 && (
                  <div className="cpf-flow__arrow" aria-hidden="true">
                    <svg width="14" height="18" viewBox="0 0 14 18">
                      <line x1="7" y1="0" x2="7" y2="12" stroke="var(--color-primary)" strokeWidth="1.5"/>
                      <polygon points="7,18 3,10 11,10" fill="var(--color-primary)"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Formula reference panel */}
          <div className="cpf-formulas">
            <h3 className="cpf-formulas-title">Key Equations</h3>
            <div className="cpf-formula-list">
              <div className="cpf-formula-item">
                <code className="cpf-formula-eq">n = 1000 × Vc / (π × D)</code>
                <span className="cpf-formula-desc">Spindle speed from Vc and D</span>
              </div>
              <div className="cpf-formula-item">
                <code className="cpf-formula-eq">Vf = f × n</code>
                <span className="cpf-formula-desc">Turning feed rate</span>
              </div>
              <div className="cpf-formula-item">
                <code className="cpf-formula-eq">Vf = fz × z × n</code>
                <span className="cpf-formula-desc">Milling feed rate</span>
              </div>
              <div className="cpf-formula-item">
                <code className="cpf-formula-eq">Ra ≈ f² / (8 × rε)</code>
                <span className="cpf-formula-desc">Theoretical surface roughness</span>
              </div>
              <div className="cpf-formula-item">
                <code className="cpf-formula-eq">T = C / Vcⁿ</code>
                <span className="cpf-formula-desc">Taylor tool life equation</span>
              </div>
            </div>

            {/* Mini turning param SVG */}
            <div className="cpf-mini-diagram" aria-hidden="true">
              <svg viewBox="0 0 200 100" className="cpf-mini-svg">
                {/* Workpiece */}
                <rect x="10" y="32" width="120" height="36" fill="#4a6fa5" stroke="#6a9fd8" strokeWidth="1"/>
                {/* Tool */}
                <polygon points="130,40 145,50 130,60" fill="#e8c060" stroke="#d4a820" strokeWidth="0.8"/>
                <rect x="145" y="42" width="40" height="16" rx="2" fill="#1e2d40" stroke="#3b6ea5" strokeWidth="1"/>
                {/* Vc arrow */}
                <path d="M 35 24 A 12 12 0 0 1 65 24" stroke="#f97316" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                <polygon points="65,24 61,19 68,20" fill="#f97316"/>
                <text x="46" y="20" fontSize="7.5" fill="#f97316">Vc</text>
                {/* ap */}
                <line x1="130" y1="32" x2="122" y2="32" stroke="#94a3b8" strokeWidth="0.8"/>
                <line x1="130" y1="40" x2="122" y2="40" stroke="#94a3b8" strokeWidth="0.8"/>
                <line x1="124" y1="32" x2="124" y2="40" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2,2"/>
                <text x="112" y="37" fontSize="7" fill="#94a3b8">ap</text>
                {/* f arrow */}
                <line x1="188" y1="50" x2="168" y2="50" stroke="#2277e6" strokeWidth="1.8" strokeLinecap="round"/>
                <polygon points="168,50 174,47 174,53" fill="#2277e6"/>
                <text x="190" y="54" fontSize="7.5" fill="#2277e6">f</text>
                {/* chip */}
                <path d="M 130 40 Q 138 32 144 28 Q 148 24 152 26" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
                {/* D label */}
                <line x1="4" y1="32" x2="4" y2="68" stroke="#94a3b8" strokeWidth="0.8"/>
                <text x="8" y="54" fontSize="7" fill="#94a3b8">D</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
