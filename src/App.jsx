import './App.css'
import Hero from './components/Hero'
import Proposal from './components/Proposal'
import TechnicalFeatures from './components/TechnicalFeatures'

function App() {
  return (
    <div className="app-container fade-in">
      <header>
        <div className="logo fade-in delay-1">
          <span className="logo-dot"></span>
          OpenVeil
        </div>
        <nav className="fade-in delay-1">
          <a href="#about" className="btn btn-secondary" style={{ marginRight: '12px' }}>About Project</a>
          <a href="https://github.com/PrarthanaPurohit/OpenVeilCam" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
        </nav>
      </header>
      <main>
        <Hero />
        <Proposal />
        <TechnicalFeatures />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} OpenVeilCam Project. Dedicated to securing truth.</p>
      </footer>
    </div>
  )
}

export default App
