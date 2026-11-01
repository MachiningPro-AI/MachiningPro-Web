import './index.css'
import { LanguageProvider } from './LanguageContext'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { MachiningProcesses } from './components/MachiningProcesses'
import { EngineeringChallenge } from './components/EngineeringChallenge'
import { Workflow } from './components/Workflow'
import { MaterialRemoval } from './components/MaterialRemoval'
import { CuttingParamFlow } from './components/CuttingParamFlow'
import { MachineTool } from './components/MachineTool'
import { CuttingToolEngineering } from './components/CuttingToolEngineering'
import { EngineeringCharts } from './components/EngineeringCharts'
import { SurfaceRoughness } from './components/SurfaceRoughness'
import { Capabilities } from './components/Capabilities'
import { DemoGallery } from './components/DemoGallery'
import { EngineeringIntelligence } from './components/EngineeringIntelligence'
import { Industries } from './components/Industries'
import { BusinessValue } from './components/BusinessValue'
import { ProcessRoute } from './components/ProcessRoute'
import { Architecture } from './components/Architecture'
import { ShopFloor } from './components/ShopFloor'
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
        <MachiningProcesses />
        <EngineeringChallenge />
        <Workflow />
        <MaterialRemoval />
        <CuttingParamFlow />
        <MachineTool />
        <CuttingToolEngineering />
        <EngineeringCharts />
        <SurfaceRoughness />
        <Capabilities />
        <DemoGallery />
        <EngineeringIntelligence />
        <Industries />
        <BusinessValue />
        <ProcessRoute />
        <Architecture />
        <ShopFloor />
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
