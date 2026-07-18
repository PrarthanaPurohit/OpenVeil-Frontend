import React, { useEffect, useState } from 'react';
import cliInitImg from '../assets/cli-1-init.png';
import cliCaptureImg from '../assets/cli-2-capture.png';
import cliPublishImg from '../assets/cli-3-publish.png';

export default function CliWalkthrough() {
  const [activeTab, setActiveTab] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const steps = [
    {
      tabLabel: "1. Device Identity",
      cmd: "OpenVeilCam --init",
      title: "Hardware-Linked Cryptographic Identity",
      image: cliInitImg,
      badge: "Identity",
      desc: "Each device generates a deterministic secp256k1 identity derived from hardware characteristics and a securely persisted salt. The resulting keypair remains stable across reboots, allowing the device to establish a verifiable cryptographic identity compatible with Nostr.",
      details: [
        { label: "Deterministic device identity", value: "" },
        { label: "Hardware-linked key generation", value: "" },
        { label: "Nostr compatible", value: "" },
        { label: "Secure salt persistence", value: "" }
      ]
    },
    {
      tabLabel: "2. Capture Frame",
      cmd: "OpenVeilCam capture",
      title: "Capture Authentic Media",
      image: cliCaptureImg,
      badge: "Capture",
      desc: "A high-quality JPEG is captured and treated as the canonical source for integrity verification. The media remains unchanged before cryptographic attestation, preserving a verifiable chain of trust.",
      details: [
        { label: "Image pipeline initialization", value: "" },
        { label: "High-resolution JPEG capture", value: "" },
        { label: "Canonical image used for signing", value: "" },
        { label: "No metadata manipulation before attestation", value: "" }
      ]
    },
    {
      tabLabel: "3. Sign & Publish",
      cmd: "OpenVeilCam publish",
      title: "Cryptographically Verify and Publish",
      image: cliPublishImg,
      badge: "Publish",
      desc: "The captured image is signed using the device's private key, creating a cryptographic attestation of its contents. The image is then uploaded to Blossom while provenance information including the image hash, signature, and metadata is published to Nostr, enabling anyone to independently verify its authenticity.",
      details: [
        { label: "ECDSA image attestation", value: "" },
        { label: "Blossom media storage", value: "" },
        { label: "NIP-94 metadata publication", value: "" },
        { label: "Public verification via Nostr relays", value: "" }
      ]
    }
  ];

  return (
    <section id="cli-demo" className="cli-section">
      <div className="fade-in delay-2">
        <h2 className="section-title text-center">See it in Action</h2>
        <p className="section-subtitle text-center">
          Watch how `OpenVeilCam` securely captures, signs, and distributes media straight from the hardware sensor.
        </p>

        <div className="cli-container glass-panel">
          {/* Terminal Window Header */}
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="terminal-title">prarthana@rpi: ~/OpenVeilCam</div>
            <div className="terminal-spacer"></div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="terminal-tabs">
            {steps.map((step, idx) => (
              <button
                key={idx}
                className={`terminal-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="tab-indicator">&gt;_</span> {step.tabLabel}
              </button>
            ))}
          </div>

          {/* Terminal Content Area */}
          <div className="terminal-body-grid">
            {/* Visual Panel */}
            <div className="terminal-visual-area">
              <div className="cli-image-wrapper">
                <img
                  src={steps[activeTab].image}
                  alt={steps[activeTab].title}
                  className="cli-screenshot"
                  onClick={() => setIsLightboxOpen(true)}
                />
                <div className="cli-overlay-hint">
                  <span>Terminal Output Screenshot — click to expand</span>
                </div>
              </div>
            </div>

            {isLightboxOpen && (
              <div className="cli-lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
                <div className="cli-lightbox-content" onClick={(event) => event.stopPropagation()}>
                  <button
                    className="cli-lightbox-close"
                    onClick={() => setIsLightboxOpen(false)}
                    aria-label="Close screenshot preview"
                  >
                    ×
                  </button>
                  <img
                    src={steps[activeTab].image}
                    alt={steps[activeTab].title}
                    className="cli-lightbox-image"
                  />
                </div>
              </div>
            )}

            {/* Info Panel */}
            <div className="terminal-info-area">
              <div className="badge-row">
                <span className="cli-badge">{steps[activeTab].badge}</span>
                <code className="cli-cmd-display">{steps[activeTab].cmd}</code>
              </div>

              <h3 className="cli-step-title">{steps[activeTab].title}</h3>
              <p className="cli-step-desc">{steps[activeTab].desc}</p>

              <div className="cli-details-card">
                <h4 className="details-header">Highlights</h4>
                <ul className="details-list">
                  {steps[activeTab].details.map((detail, dIdx) => (
                    <li key={dIdx} className="details-item">{detail.label}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
