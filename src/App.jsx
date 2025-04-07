import HeroSection from './components/Landing/HeroSection'
import { NavBar } from './components/NavBar/NavBar'
import { BlobBackground } from './components/BlobBackground'
import { Section } from './layouts/Section'
import { Features } from './components/Features/Features'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BlobBackground />
      <NavBar />
      <HeroSection />
      <Features />
    </div>
  )
}

export default App
