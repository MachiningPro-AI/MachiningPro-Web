import { createContext, useContext, useState, type ReactNode } from 'react'
import { en, tr, type Translations } from './i18n'

interface LangContextValue {
  t: Translations
  lang: 'en' | 'tr'
  toggle: () => void
}

const LangContext = createContext<LangContextValue>({
  t: en,
  lang: 'en',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<'en' | 'tr'>('en')
  const t = lang === 'en' ? en : tr
  const toggle = () => setLang(l => (l === 'en' ? 'tr' : 'en'))
  return <LangContext.Provider value={{ t, lang, toggle }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
