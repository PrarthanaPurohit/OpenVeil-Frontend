import React from 'react';
import heroImg from '../assets/hero.png';

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
          <a href="https://primal.net/e/nevent1qqsyyf8qyqqyadhklsxkuvdcsw7lfddha008e6v5p0ln20veun98p4q7r0xqa" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }}>
              <polygon points="6 23 21 12 6 1 6 23"></polygon>
            </svg>
            Watch Demo Video
          </a>
          <a href="#about" className="btn btn-secondary">About Project</a>
          <a href="#tech" className="btn btn-secondary">Technical Architecture</a>
        </div>
      </div>
      <div className="hero-visual glass-panel fade-in delay-3 hero-visual-panel">
        <div style={{ textAlign: 'center' }}>
          <img src={heroImg} alt="OpenVeil camera and hardware" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block', margin: '0 auto' }} />
        </div>
      </div>
    </section>
  );
}
