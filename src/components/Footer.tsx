import { useLang } from '../LanguageContext'
import './Footer.css'

const BASE = import.meta.env.BASE_URL

export function Footer() {
  const { t, lang, toggle } = useLang()
  const { footer } = t

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo-pill">
              <img
                src={`${BASE}branding/machiningpro-ai-logo.png`}
                alt="MachiningPro AI"
                className="footer__logo-img"
                width="160"
                height="auto"
              />
            </div>
            <p className="footer__tagline">{footer.tagline}</p>
          </div>

          <nav className="footer__links" aria-label="Footer navigation">
            <a href="https://machiningpro-ai.onrender.com/" target="_blank" rel="noopener noreferrer" className="footer__link">
              {footer.links.liveDemo}
            </a>
            <a href="https://github.com/MachiningPro-AI" target="_blank" rel="noopener noreferrer" className="footer__link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              {footer.links.github}
            </a>
            <a href="#maturity" className="footer__link">{footer.links.disclaimer}</a>
            <button className="footer__lang-btn" onClick={toggle} aria-label={`Switch language to ${lang === 'en' ? 'Turkish' : 'English'}`}>
              {lang === 'en' ? 'TR' : 'EN'}
            </button>
          </nav>
        </div>

        <div className="footer__disclaimer">
          <p>{footer.disclaimer}</p>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">{footer.copyright}</span>
          <span className="footer__version">v0.5.0-demo · Engineering Preview</span>
        </div>
      </div>
    </footer>
  )
}
