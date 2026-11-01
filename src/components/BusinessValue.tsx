import { useLang } from '../LanguageContext'
import './BusinessValue.css'

const valueIcons = [
  '⚡', '≡', '☑', '♻', '⊖', '⟶', '◎', '⊕',
]

export function BusinessValue() {
  const { t } = useLang()
  const { value } = t

  return (
    <section className="section bv-section" id="value" aria-labelledby="value-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{value.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="value-heading">{value.title}</h2>
          <p className="section-subtitle">{value.subtitle}</p>
        </div>

        <div className="bv-grid">
          {value.items.map((item, i) => (
            <article key={i} className="bv-item">
              <div className="bv-item__icon" aria-hidden="true">{valueIcons[i % valueIcons.length]}</div>
              <div className="bv-item__body">
                <h3 className="bv-item__title">{item.title}</h3>
                <p className="bv-item__desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
