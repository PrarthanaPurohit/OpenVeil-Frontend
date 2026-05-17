import React from 'react';

export default function TechnicalFeatures() {
  const steps = [
    { title: "Rust-based Secure Camera Runtime", desc: "A fast, memory-safe, and stable environment capturing unadulterated frames directly from the sensor." },
    { title: "Device-bound Cryptographic Signing", desc: "Deterministic keypairs derived from hardware entropy (CPU serial, MAC) mathematically prove the media's origin device." },
    { title: "Deterministic Media Verification", desc: "Consistent workflows ensure that the exact captured image pixels strongly map to their attestations, preventing deepfake swaps." },
    { title: "Decentralized Publishing via Nostr", desc: "NIP-94 file-metadata events distribute the verification data across thousands of independent relays, negating central censorship." },
    { title: "Distributed Storage Integration", desc: "Integration with Blossom and IPFS-compatible services keeps the underlying large media files decentralized and available." },
    { title: "ZKP Compatibility", desc: "Architecture designed to support Zero-Knowledge Proofs for preserving reporter anonymity while proving authenticity." },
    { title: "Secure Hardware Enclave Support", desc: "Protects cryptographic keys inside isolated hardware to ensure the physical device cannot be logically spoofed." }
  ];

  return (
    <section id="tech" style={{ paddingTop: '80px', paddingBottom: '80px', borderTop: '1px solid var(--border)' }}>
      <div className="fade-in delay-3">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Core Technical Features</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>
          A robust, mathematically verifiable workflow designed for trustless environments.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {steps.map((step, index) => (
            <div key={index} className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ 
                minWidth: '32px', height: '32px', borderRadius: '8px', background: 'var(--text-main)', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px'
              }}>
                {index + 1}
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
