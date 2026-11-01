import { useState, useEffect } from 'react'
import { useLang } from '../LanguageContext'
import './Navigation.css'

export function Navigation() {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { href: '#capabilities', label: t.nav.capabilities },
    { href: '#workflow', label: t.nav.workflow },
    { href: '#industries', label: t.nav.industries },
    { href: '#demo', label: t.nav.demo },
    { href: '#collaborate', label: t.nav.collaborate },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="banner">
      <div className="nav__inner container">
        <a href="#top" className="nav__logo" aria-label="MachiningPro AI — Home">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <rect width="32" height="32" rx="6" fill="#0a0f1e"/>
            <text x="3" y="24" fontFamily="Inter,Arial,sans-serif" fontWeight="800" fontSize="22" fill="#2277e6">M</text>
            <circle cx="25" cy="8" r="4.5" fill="none" stroke="#f97316" strokeWidth="1.5"/>
            <circle cx="25" cy="8" r="1.5" fill="#f97316"/>
          </svg>
          <span className="nav__brand">MachiningPro <span className="nav__brand-ai">AI</span></span>
        </a>

        <nav className={`nav__links${menuOpen ? ' nav__links--open' : ''}`} aria-label="Main navigation">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav__link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__lang"
            onClick={toggle}
            aria-label={`Switch to ${lang === 'en' ? 'Turkish' : 'English'}`}
          >
            {lang === 'en' ? 'TR' : 'EN'}
          </button>
          <a
            href="https://machiningpro-ai.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav__cta"
          >
            {t.nav.launchDemo}
          </a>
          <button
            className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span/><span/><span/>
          </button>
        </div>
      </div>
    </header>
  )
}
