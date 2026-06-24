import React, { useState } from 'react';
import cliInitImg from '../assets/cli-1-init.png';
import cliCaptureImg from '../assets/cli-2-capture.png';
import cliPublishImg from '../assets/cli-3-publish.png';

export default function CliWalkthrough() {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      tabLabel: "1. Device Identity",
      cmd: "OpenVeilCam --init",
      title: "Cryptographic Identity Initialization",
      image: cliInitImg,
      badge: "Security",
      desc: "Upon booting, the CLI runtime loads hardware entropy (CPU serial, MAC address) to derive a secure device-bound keypair. This establishes a unique cryptographic identity for the camera module.",
      details: [
        { label: "Hardware Binding", value: "Raspberry Pi camera sensor & SoC" },
        { label: "Identity Derivation", value: "Deterministic DeviceIdentity" },
        { label: "Nostr Key (npub)", value: "npub14ydv5h7a6ljufragw2wd095t..." },
        { label: "Ethereum Address", value: "0x24cbfa681810be77a107cd9b0..." }
      ]
    },
    {
      tabLabel: "2. Capture Frame",
      cmd: "OpenVeilCam capture",
      title: "Direct Sensor Frame Capture",
      image: cliCaptureImg,
      badge: "Hardware",
      desc: "When the capture command is executed, the runtime interfaces directly with the IMX708 sensor. It configures dual RAW and YUV streams to capture raw, unadulterated pixels without any software filters.",
      details: [
        { label: "Sensor Model", value: "IMX708 10-bit RGGB (4608x2592)" },
        { label: "Image Format", value: "1920x1080 YUV420 / RAW" },
        { label: "Processing", value: "No temporal denoise (pixel integrity)" },
        { label: "Local Output", value: "/tmp/nostreye_capture.jpg" }
      ]
    },
    {
      tabLabel: "3. Sign & Publish",
      cmd: "OpenVeilCam publish",
      title: "ECDSA Signature & Nostr Broadcast",
      image: cliPublishImg,
      badge: "Decentralized",
      desc: "The captured frame is hashed and signed with the device's hardware-derived private key. It is uploaded to decentralized Blossom servers and broadcast to Nostr relays as cryptographically signed events.",
      details: [
        { label: "Integrity Proof", value: "ECDSA SHA-256 digital signature" },
        { label: "Relay Outbox", value: "nos.lol, primal.net, snort.social" },
        { label: "Nostr Event", value: "Kind 1063 (File Metadata) & Kind 1" },
        { label: "Blossom Server", value: "https://blossom.band" }
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
                />
                <div className="cli-overlay-hint">
                  <span>Terminal Output Screenshot</span>
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className="terminal-info-area">
              <div className="badge-row">
                <span className="cli-badge">{steps[activeTab].badge}</span>
                <code className="cli-cmd-display">{steps[activeTab].cmd}</code>
              </div>

              <h3 className="cli-step-title">{steps[activeTab].title}</h3>
              <p className="cli-step-desc">{steps[activeTab].desc}</p>

              <div className="cli-details-card">
                <h4 className="details-header">Key Attestations</h4>
                <div className="details-grid">
                  {steps[activeTab].details.map((detail, dIdx) => (
                    <div key={dIdx} className="details-row">
                      <span className="details-label">{detail.label}:</span>
                      <span className="details-value">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
