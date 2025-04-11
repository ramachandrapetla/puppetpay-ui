import HeroSection from './components/Landing/HeroSection'
import { NavBar } from './components/NavBar/NavBar'
import { Features } from './components/Features/Features'
import { BackgroundWave } from './components/HeroBackground/BackgroundWave'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundWave />
      <NavBar />
      <HeroSection />
      <Features />
    </div>
  )
}

export default App
