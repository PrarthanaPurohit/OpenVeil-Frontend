import React from 'react';

export default function Proposal() {
  return (
    <section id="about" style={{ paddingTop: '80px', borderTop: '1px solid var(--border)' }}>
      <div className="fade-in delay-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>About the Project</h2>
        <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '40px' }}>
          A decentralized media provenance and verification system.
        </p>

        <div className="glass-panel" style={{ padding: '40px', marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '24px' }}>The Problem</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '16px' }}>
            The project addresses the growing problem of censorship, synthetic media, and declining trust in digital evidence. Journalists, activists, and human rights defenders increasingly face situations where authentic media is dismissed as fake or AI-generated, while centralized platforms censor or remove sensitive evidence. Existing systems lack reliable ways to prove that media came from a trusted device and remained untampered.
          </p>
          <h3 style={{ marginBottom: '16px', fontSize: '24px' }}>The Solution: Decentralized Verifiability</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '16px' }}>
            A decentralized media provenance and verification system using Raspberry Pi-based trusted camera hardware, cryptographic signing, deterministic and ZKP-compatible media processing, decentralized communication, and distributed storage. Images are cryptographically signed at capture, processed through deterministic workflows, and published using decentralized protocols such as Nostr and IPFS-compatible systems. This enables independent verification even if metadata is stripped or files are recompressed.
          </p>
        </div>
      </div>
    </section>
  );
}
