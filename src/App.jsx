import './App.css'
import Hero from './components/Hero'
import Proposal from './components/Proposal'
import Chain from './components/Chain'
import Editions from './components/Editions'
import AppWalkthrough from './components/AppWalkthrough'
import Verify from './components/Verify'
import TrustModel from './components/TrustModel'
import TechnicalFeatures from './components/TechnicalFeatures'
import Limits from './components/Limits'
import Roadmap from './components/Roadmap'
import ThemeToggle from './components/ThemeToggle'
import OpenVeilMark from './components/OpenVeilMark'

const REPO = 'https://github.com/PrarthanaPurohit/OpenVeilCam'
const NPUB_HEX = 'b263476e276c5294d9dab7a1d0460fc931962f0f5beff43f90e178b44f0a9bf1'

function App() {
  return (
    <div className="app-container fade-in">
      <header>
        <div className="logo fade-in delay-1">
          <OpenVeilMark size={30} />
          OpenVeil
        </div>
        <nav className="nav-links fade-in delay-1">
          {/* Ordered to match the page, so the nav doubles as a table of contents.
              The last two are shortened: their section headings are too long to
              sit in a nav bar. */}
          <a href="#about" className="nav-link">About</a>
          <a href="#chain" className="nav-link">Chain</a>
          <a href="#walkthrough" className="nav-link">See it in action</a>
          <a href="#verify" className="nav-link">Verify</a>
          <a href="#tech" className="nav-link">Features</a>
          <a href="#limits" className="nav-link">Limits</a>
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
          <ThemeToggle />
        </nav>
      </header>
      <main>
        <Hero />
        <Proposal />
        <Chain />
        <AppWalkthrough />
        <Editions />
        <Verify />
        <TrustModel />
        <TechnicalFeatures />
        <Limits />
        <Roadmap />
      </main>
      <footer>
        <div className="footer-inner">
          <div className="footer-col">
            <h4>OpenVeil</h4>
            <ul>
              <li><a href="#about">About the project</a></li>
              <li><a href="#chain">The chain</a></li>
              <li><a href="#walkthrough">See it in action</a></li>
              <li><a href="#limits">What it does not prove</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Documentation</h4>
            <ul>
              <li><a href={`${REPO}/blob/main/app/docs/ARCHITECTURE.md`} target="_blank" rel="noopener noreferrer">Architecture</a></li>
              <li><a href={`${REPO}/blob/main/app/docs/SECURITY.md`} target="_blank" rel="noopener noreferrer">Security</a></li>
              <li><a href={`${REPO}/blob/main/app/docs/VERIFICATION.md`} target="_blank" rel="noopener noreferrer">Verification</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Source</h4>
            <ul>
              <li><a href={REPO} target="_blank" rel="noopener noreferrer">Repository</a></li>
              <li><a href={`${REPO}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer">MIT License</a></li>
              <li><a href="https://c2pa.org" target="_blank" rel="noopener noreferrer">C2PA specification</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Identity</h4>
            <ul>
              <li>prarthana@openveil.world</li>
              <li className="footer-key">{NPUB_HEX}</li>
            </ul>
          </div>
        </div>
        <p className="footer-note">
          &copy; {new Date().getFullYear()} OpenVeil. No analytics, no trackers, no
          third-party requests. This page loads nothing from anyone but its own origin.
        </p>
      </footer>
    </div>
  )
}

export default App
