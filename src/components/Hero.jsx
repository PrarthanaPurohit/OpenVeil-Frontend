import React from 'react';

export default function Hero() {
  return (
    <section className="hero two-column">
      <div className="hero-content fade-in delay-2">
        <h1 className="hero-title">
          Capture the Truth.<br/>
          <span style={{ color: 'var(--text-muted)' }}>Cryptographically Sealed.</span>
        </h1>
        <p className="hero-subtitle">
          OpenVeilCam provides hardware-linked, censorship-resistant image capture built on the Nostr protocol. Because human rights start with undeniable facts.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn btn-primary">About Project</a>
          <a href="#tech" className="btn btn-secondary">Technical Architecture</a>
        </div>
      </div>
      <div className="hero-visual glass-panel fade-in delay-3 hero-visual-panel">
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            background: 'var(--text-main)', 
            borderRadius: '24px', 
            margin: '0 auto 24px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: 'white' 
          }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </div>
          <h3 style={{ fontSize: '22px' }}>Verified via Hardware</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', maxWidth: '200px', margin: '8px auto 0' }}>
            Cryptographic proof of origin, sealed at the sensor level.
          </p>
        </div>
      </div>
    </section>
  );
}
