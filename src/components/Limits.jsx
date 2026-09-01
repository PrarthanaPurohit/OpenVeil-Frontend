const limits = [
  {
    title: 'px1 survives metadata stripping, not re-compression',
    desc:
      'The px1 hash covers the decoded raster rather than the file bytes, so it survives EXIF and ICC stripping and lossless container rewrapping, which is what makes a detached manifest findable after a platform strips metadata. It does not survive lossy re-encoding, resizing or cropping. Surviving platform re-compression needs a perceptual hash or a watermark, and px1 is neither.'
  },
  {
    title: 'The certificate is self-signed',
    desc:
      'C2PA validators will report the manifest as valid but not trusted. That is deliberate, and explained above, but if your workflow requires a trust-listed certificate then this is not yet that.'
  },
  {
    title: 'This is a proof of concept',
    desc:
      'The full pipeline from capture to signing to storage to publication to verification runs end to end against live public infrastructure. It has not been audited, hardened, or run in an adversarial deployment. Treat it as a working demonstration of an architecture, not as software to stake someone’s safety on today.'
  }
];

export default function Limits() {
  return (
    <section id="limits" className="section-divider">
      <div className="fade-in delay-2 narrow">
        <h2 className="section-title">What this proves, and what it does not</h2>
        <p className="section-subtitle">
          Conflating these is how provenance tools mislead people, so they are set out
          separately.
        </p>

        <div className="proof-split">
          <div className="proof-card proves">
            <h3>It proves</h3>
            <ul>
              <li>
                That a specific image is byte-identical to what a specific key signed at
                capture time.
              </li>
              <li>That it has not been altered since.</li>
            </ul>
          </div>
          <div className="proof-card not-proves">
            <h3>It does not prove</h3>
            <ul>
              <li>That the photographer was where they claim to have been.</li>
              <li>That any note attached to the image is true.</li>
              <li>
                Who the photographer is. In this proof of concept, the key identifies a
                device, not a person.
              </li>
            </ul>
          </div>
        </div>

        <div className="limits-list">
          {limits.map((limit) => (
            <div key={limit.title} className="limit-item">
              <h3>{limit.title}</h3>
              <p>{limit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
