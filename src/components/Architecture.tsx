import { useLang } from '../LanguageContext'
import './Architecture.css'

const layerColors = ['#2277e6', '#4d9aff', '#f97316', '#a78bfa', '#22c55e', '#64748b']

export function Architecture() {
  const { t } = useLang()
  const { architecture } = t

  return (
    <section className="section arch-section" id="architecture" aria-labelledby="arch-heading">
      <div className="container">
        <div className="arch-split">
          <div className="arch-left">
            <span className="section-label">{architecture.sectionLabel}</span>
            <div className="divider-line"/>
            <h2 className="section-title" id="arch-heading">{architecture.title}</h2>
            <p className="section-subtitle">{architecture.subtitle}</p>
          </div>

          <div className="arch-right" aria-label="Platform architecture diagram">
            <div className="arch-layers" role="list">
              {architecture.layers.map((layer, i) => (
                <div key={i} className="arch-layer" role="listitem">
                  <div className="arch-layer__box" style={{ borderColor: layerColors[i] }}>
                    <div className="arch-layer__dot" style={{ background: layerColors[i] }}/>
                    <div className="arch-layer__text">
                      <span className="arch-layer__label" style={{ color: layerColors[i] }}>{layer.label}</span>
                      <span className="arch-layer__desc">{layer.desc}</span>
                    </div>
                  </div>
                  {i < architecture.layers.length - 1 && (
                    <div className="arch-layer__connector" aria-hidden="true">
                      <svg width="16" height="24" viewBox="0 0 16 24">
                        <line x1="8" y1="0" x2="8" y2="20" stroke={layerColors[i]} strokeWidth="1.5" strokeOpacity="0.4"/>
                        <polygon points="4,16 8,24 12,16" fill={layerColors[i+1]} fillOpacity="0.6"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
