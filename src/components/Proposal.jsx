import React from 'react';

export default function Proposal() {
  return (
    <section id="about" style={{ paddingTop: '80px', borderTop: '1px solid var(--border)' }}>
      <div className="fade-in delay-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="section-title">About the Project</h2>
        <p className="section-subtitle">
          A decentralized media provenance and verification system.
        </p>

        <div className="glass-panel proposal-panel">
          <h3>The Problem</h3>
          <p>
            The project addresses the growing problem of censorship, synthetic media, and declining trust in digital evidence. Journalists, activists, and human rights defenders increasingly face situations where authentic media is dismissed as fake or AI-generated, while centralized platforms censor or remove sensitive evidence. Existing systems lack reliable ways to prove that media came from a trusted device and remained untampered.
          </p>
          <h3>The Solution: Decentralized Verifiability</h3>
          <p>
            A decentralized media provenance and verification system using Raspberry Pi-based trusted camera hardware, cryptographic signing, deterministic and ZKP-compatible media processing, decentralized communication, and distributed storage. Images are cryptographically signed at capture, processed through deterministic workflows, and published using decentralized protocols such as Nostr and IPFS-compatible systems. This enables independent verification even if metadata is stripped or files are recompressed.
          </p>
        </div>
      </div>
    </section>
  );
}
