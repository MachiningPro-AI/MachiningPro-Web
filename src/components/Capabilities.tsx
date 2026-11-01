import { useLang } from '../LanguageContext'
import './Capabilities.css'

const capIcons = [
  /* CAD */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h6M3 15h6M15 9l3 3-3 3"/></svg>,
  /* 3D Feature */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3L3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>,
  /* Drawing */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="14,3 14,9 20,9"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>,
  /* GD&T */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M9 12a3 3 0 0 0 6 0M12 9v6"/><rect x="3" y="10" width="18" height="4" rx="1" opacity="0.4"/></svg>,
  /* Machine */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4M2 11h20M12 15v2"/></svg>,
  /* Cutting Tool */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.5 2l-7.5 7.5 7.5 7.5L22 9.5z"/><path d="M2 22l7.5-7.5"/><circle cx="6" cy="18" r="2"/></svg>,
  /* Tool Holder */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 2h10v4H7zM5 6h14v3H5zM4 9h16v2H4zM12 11v11M9 22h6"/></svg>,
  /* Cutting Params */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>,
  /* Compatibility */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  /* Configuration */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>,
  /* Surface Roughness */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12l3-4 3 4 3-4 3 4 3-4 3 4"/><line x1="3" y1="17" x2="21" y2="17" strokeDasharray="2,2"/></svg>,
  /* Tool Life */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><polyline points="12,7 12,12 15,15"/></svg>,
  /* Process Route */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="12" cy="19" r="2"/><path d="M7 12h5M12 7v5M17 12h-5M12 17v-5"/></svg>,
  /* Cycle Time */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/><text x="13" y="17" fontSize="5" fill="currentColor" fontFamily="monospace">t</text></svg>,
  /* Process Capability */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 20h20M6 20V10l6-7 6 7v10"/><path d="M10 20v-5h4v5"/></svg>,
  /* Manufacturing Plan */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 7h6m-6 4h3"/></svg>,
  /* Inspection Plan */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></svg>,
  /* Control Plan */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="9" x2="9" y2="21"/><line x1="15" y1="9" x2="15" y2="21"/></svg>,
  /* NC Review */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="4,17 10,11 4,5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
  /* Traceability */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13.5 3H12H8C6.3 3 5 4.3 5 6v1"/><path d="M4 11h16M4 15h16M4 19h16"/><path d="M16 3l4 4-4 4"/></svg>,
]

export function Capabilities() {
  const { t } = useLang()
  const { capabilities } = t

  return (
    <section className="section cap-section" id="capabilities" aria-labelledby="capabilities-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{capabilities.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="capabilities-heading">{capabilities.title}</h2>
          <p className="section-subtitle">{capabilities.subtitle}</p>
        </div>

        <div className="cap-grid">
          {capabilities.items.map((item, i) => (
            <article key={i} className="cap-card card">
              <div className="cap-card__icon" aria-hidden="true">
                {capIcons[i % capIcons.length]}
              </div>
              <h3 className="cap-card__title">{item.title}</h3>
              <p className="cap-card__desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
