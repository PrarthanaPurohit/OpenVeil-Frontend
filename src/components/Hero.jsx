import HeroProof from './HeroProof';

const APK_URL = 'https://github.com/PrarthanaPurohit/OpenVeilCam/releases/latest';
const DEMO_URL =
  'https://primal.net/e/nevent1qqsdm3308z95va65rsegm2dv4j5t6z2afwp3uanymfnlvxlsj3rqjhgjz4ahw';

export default function Hero() {
  return (
    <section className="hero two-column">
      <div className="hero-content fade-in delay-2">
        <h1 className="hero-title">
          Capture the Truth.<br/>
          <span style={{ color: 'var(--text-muted)' }}>Cryptographically Sealed.</span>
        </h1>
        <p className="hero-subtitle">
          OpenVeil signs a photograph with C2PA Content Credentials the moment it is taken,
          stores it content-addressed on Blossom, and announces it in a signed Nostr event
          that no single party can quietly withdraw.
        </p>
        <div className="hero-buttons">
          <a href={APK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }} aria-hidden="true">
              <path d="M12 3v12"></path>
              <polyline points="7 11 12 16 17 11"></polyline>
              <path d="M4 20h16"></path>
            </svg>
            Download the APK
          </a>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Watch demo
          </a>
          <a href="#chain" className="btn btn-secondary">How it works</a>
        </div>
      </div>
      <div className="hero-visual fade-in delay-3">
        <HeroProof />
      </div>
    </section>
  );
}
