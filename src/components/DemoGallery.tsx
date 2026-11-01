import { useState } from 'react'
import { useLang } from '../LanguageContext'
import './DemoGallery.css'

const BASE = import.meta.env.BASE_URL

export function DemoGallery() {
  const { t } = useLang()
  const { demo } = t
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <section className="section dg-section" id="demo" aria-labelledby="demo-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{demo.sectionLabel}</span>
          <div className="divider-line"/>
          <h2 className="section-title" id="demo-heading">{demo.title}</h2>
          <p className="section-subtitle">{demo.subtitle}</p>
        </div>

        {/* Primary CTAs */}
        <div className="dg-cta-row">
          <a
            href="https://machiningpro-ai.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent dg-btn"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <polygon points="6,3 13,8 6,13" fill="currentColor"/>
            </svg>
            {demo.ctaLaunch}
          </a>
          <a href="#dg-video" className="btn btn-outline dg-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 3a1 1 0 0 1 1.5-.87l10 5.5a1 1 0 0 1 0 1.74l-10 5.5A1 1 0 0 1 2 14V3z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            {demo.videoTitle}
          </a>
        </div>

        {/* Video section */}
        <div className="dg-video-block" id="dg-video">
          <h3 className="dg-video-title">{demo.videoTitle}</h3>
          <p className="dg-video-desc">{demo.videoDesc}</p>
          <div className="dg-video-wrap">
            <video
              className="dg-video"
              controls
              playsInline
              preload="metadata"
              poster={`${BASE}screenshots/machiningpro-3d-feature-view.png`}
              aria-label={demo.videoTitle}
            >
              <source src={`${BASE}media/machiningpro-ai-demo-en-narrated.mp4`} type="video/mp4"/>
              <track
                kind="subtitles"
                srcLang="tr"
                label="Türkçe"
                src={`${BASE}media/machiningpro-ai-demo-tr.vtt`}
                default
              />
              {t.lang === 'tr'
                ? 'Tarayıcınız video oynatmayı desteklemiyor.'
                : 'Your browser does not support video playback.'}
            </video>
          </div>
          <p className="dg-narration-note">{demo.narrationNote}</p>
        </div>

        {/* Real screenshot gallery */}
        <div className="dg-gallery">
          <button
            className="dg-screenshot-card"
            onClick={() => setLightboxOpen(true)}
            aria-label={demo.screenshotLabel}
          >
            <div className="dg-screenshot-img-wrap">
              <img
                src={`${BASE}screenshots/machiningpro-3d-feature-view.png`}
                alt={demo.screenshotAlt}
                className="dg-screenshot-img"
                loading="lazy"
              />
              <div className="dg-screenshot-overlay" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="15" fill="rgba(0,0,0,0.5)"/>
                  <path d="M11 11h10M21 11v10M11 21l10-10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="dg-screenshot-info">
              <span className="dg-screenshot-label">{demo.screenshotLabel}</span>
              <span className="dg-screenshot-desc">{demo.screenshotDesc}</span>
            </div>
          </button>
        </div>

        <p className="dg-more-note">{demo.moreScreensNote}</p>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="dg-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={demo.screenshotLabel}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="dg-lightbox__close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <img
            src={`${BASE}screenshots/machiningpro-3d-feature-view.png`}
            alt={demo.screenshotAlt}
            className="dg-lightbox__img"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
