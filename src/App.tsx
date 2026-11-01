import './index.css'
import { LanguageProvider } from './LanguageContext'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { EngineeringChallenge } from './components/EngineeringChallenge'
import { Workflow } from './components/Workflow'
import { Capabilities } from './components/Capabilities'
import { DemoGallery } from './components/DemoGallery'
import { EngineeringIntelligence } from './components/EngineeringIntelligence'
import { Industries } from './components/Industries'
import { BusinessValue } from './components/BusinessValue'
import { Architecture } from './components/Architecture'
import { DemoCTA } from './components/DemoCTA'
import { ProductMaturity } from './components/ProductMaturity'
import { Collaboration } from './components/Collaboration'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <EngineeringChallenge />
        <Workflow />
        <Capabilities />
        <DemoGallery />
        <EngineeringIntelligence />
        <Industries />
        <BusinessValue />
        <Architecture />
        <DemoCTA />
        <ProductMaturity />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
