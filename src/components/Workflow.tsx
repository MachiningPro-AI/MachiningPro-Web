import { useLang } from '../LanguageContext'
import './Workflow.css'

const stepColors = [
  '#2277e6','#3a8ff0','#4d9aff','#f97316','#fb923c',
  '#2277e6','#22c55e','#a78bfa','#f97316','#2277e6','#64748b',
]

export function Workflow() {
  const { t } = useLang()
  const { workflow } = t

  return (
    <section className="section wf-section" id="workflow" aria-labelledby="workflow-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{workflow.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="workflow-heading">{workflow.title}</h2>
          <p className="section-subtitle">{workflow.subtitle}</p>
        </div>

        <div className="wf-flow" role="list">
          {workflow.steps.map((step, i) => (
            <div key={i} className="wf-step" role="listitem">
              <div className="wf-step__node" style={{ borderColor: stepColors[i], boxShadow: `0 0 16px ${stepColors[i]}40` }}>
                <span className="wf-step__num" style={{ color: stepColors[i] }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="wf-step__content">
                <span className="wf-step__label" style={{ color: stepColors[i] }}>{step.label}</span>
                <span className="wf-step__desc">{step.desc}</span>
              </div>
              {i < workflow.steps.length - 1 && (
                <div className="wf-step__arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="#2277e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
