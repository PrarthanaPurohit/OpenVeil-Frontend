export default function TechnicalFeatures() {
  const steps = [
    {
      title: "Content Credentials at the shutter",
      desc: "Every frame leaves the device carrying a real C2PA manifest asserting c2pa.created with a digitalCapture source type: these pixels came off a sensor, not out of a generator. Any C2PA tool reads it without knowing Nostr exists."
    },
    {
      title: "Signed before the photo leaves the phone",
      desc: "The manifest is attached on the review screen, before upload and before any note is added. Nothing re-encodes the file between the sensor and the signature, so the bytes that get signed are the bytes that were captured."
    },
    {
      title: "Device-bound cryptographic signing",
      desc: "Deterministic keypairs derived from device entropy and a persisted salt. The secret exists only in memory during signing, is never written to disk, and is never exported as an nsec."
    },
    {
      title: "Content-addressed storage",
      desc: "Blossom stores the signed bytes under their own hash, so the URL is the fingerprint. A substituted file cannot be served in place of the original without the mismatch showing."
    },
    {
      title: "Decentralized publishing via Nostr",
      desc: "NIP-94 kind:1063 file-metadata events distribute url, hash and dimensions across independent relays, so no single operator can withdraw the record."
    },
    {
      title: "No new event kinds, no new NIP",
      desc: "The C2PA fields ride as namespaced tags on a standard NIP-94 event. Clients that do not understand them ignore them, so this ships without asking anyone to ratify a new standard."
    },
    {
      title: "Re-verification on the device",
      desc: "The app re-checks a capture against its stored bytes, re-validates the manifest, and reports the trust-list status separately instead of folding it into a single green tick."
    }
  ];

  return (
    <section id="tech" className="section-divider" style={{ paddingBottom: '80px' }}>
      <div className="fade-in delay-3">
        <h2 className="section-title text-center">Core Technical Features</h2>
        <p className="section-subtitle text-center">
          What runs today. Anything still on the drawing board is listed under{' '}
          <a href="#roadmap">Not built yet</a>.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {steps.map((step, index) => (
            <div key={step.title} className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                minWidth: '32px', height: '32px', borderRadius: '8px',
                background: 'var(--accent)', color: 'var(--accent-foreground)',
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
