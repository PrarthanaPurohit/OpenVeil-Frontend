export default function TrustModel() {
  return (
    <section id="trust" className="section-divider">
      <div className="fade-in delay-2">
        <h2 className="section-title text-center">Where trust actually comes from</h2>
        <p className="section-subtitle text-center">
          Cryptographic validity comes from C2PA. Trust comes from the Nostr identity.
          Keeping those two separate is the whole argument.
        </p>

        <div className="trust-grid">
          <div className="trust-card glass-panel">
            <h3>Two keys, one device</h3>
            <p>
              The Nostr identity is secp256k1. C2PA does not permit that curve, since the
              spec allows only the NIST P-curves, RSA-PSS and Ed25519, so the credential is
              signed by a separate P-256 key derived via HKDF from the same device entropy.
            </p>
            <div className="key-row">
              <span className="key-name">secp256k1</span>
              <span className="key-use">Nostr identity: signs the events, and is the npub people follow.</span>
            </div>
            <div className="key-row">
              <span className="key-name">P-256</span>
              <span className="key-use">C2PA credential: signs the manifest, and carries the npub as its certificate subject.</span>
            </div>
            <p style={{ marginTop: '16px' }}>
              The secret is never exported as an nsec. That is deliberate, so there is
              nothing to leak, and it is why the app shows you an npub rather than offering
              to hand over a key.
            </p>
          </div>

          <div className="trust-card glass-panel">
            <h3>Why validators read <em>Valid</em>, not <em>Trusted</em></h3>
            <div className="state-row">
              <span className="tag tag-ok">Valid</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
                The signature is cryptographically sound.
              </span>
            </div>
            <div className="state-row">
              <span className="tag tag-planned">Not trusted</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
                The certificate does not chain to the C2PA trust list.
              </span>
            </div>
            <p>
              The certificate is self-signed, so C2PA tools report it as valid but not
              trusted. Reaching <em>Trusted</em> would mean chaining to the C2PA trust list
              via their Conformance Program, a centralized PKI, and precisely the kind of
              single authority this project exists to route around.
            </p>
            <p>
              This is the intended posture, not a gap. OpenVeil treats cryptographic
              validity as C2PA’s job and resolves identity against Nostr keys instead, so
              provenance does not depend on a corporate CA. The app says the same thing on
              screen: the image is intact, but the certificate does not establish who
              created it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
