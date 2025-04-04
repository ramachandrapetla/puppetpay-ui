import HeroSection from './components/Landing/HeroSection'
import { NavBar } from './components/NavBar/NavBar'
import { BlobBackground } from './components/BlobBackground'
import { Section } from './layouts/Section'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BlobBackground />
      <NavBar />
      <HeroSection />
    </div>
  )
}

export default App
