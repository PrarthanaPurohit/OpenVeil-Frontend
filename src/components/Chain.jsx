const stages = [
  {
    title: 'Sensor',
    tech: 'JPEG, unmodified',
    desc: 'The exact bytes the encoder produced. Never re-encoded, never round-tripped through an editor.'
  },
  {
    title: 'Sign',
    tech: 'C2PA manifest',
    desc: 'A real Content Credentials manifest, hard-bound to those bytes. Any later edit breaks the binding, and validators report it.'
  },
  {
    title: 'Hash',
    tech: 'SHA-256',
    desc: 'Taken over the signed bytes. This is the fingerprint everything downstream refers to.'
  },
  {
    title: 'Store',
    tech: 'Blossom',
    desc: 'Content-addressed storage: the URL is the hash, so a substituted file cannot go unnoticed.'
  },
  {
    title: 'Publish',
    tech: 'Nostr NIP-94',
    desc: 'A kind:1063 event carries url, hash and dimensions, signed with the device key and replicated across relays no one party owns.'
  }
];

export default function Chain() {
  return (
    <section id="chain" className="section-divider">
      <div className="fade-in delay-2">
        <h2 className="section-title text-center">The Chain</h2>
        <p className="section-subtitle text-center">
          Five steps from sensor to relay. Each one is checkable on its own.
        </p>

        <div className="chain-grid">
          {stages.map((stage, index) => (
            <div key={stage.title} className="chain-stage glass-panel">
              <span className="chain-stage-index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{stage.title}</h3>
              <span className="chain-tech">{stage.tech}</span>
              <p>{stage.desc}</p>
            </div>
          ))}
        </div>

        <div className="binding-callout">
          <h3>The chain closes in both directions</h3>
          <p>
            The C2PA manifest names the Nostr public key that published it, and the Nostr
            event names the hash of the file that manifest is bound to. Neither half can be
            swapped for another without the mismatch showing.
          </p>
          <div className="binding-pair">
            <div className="binding-leg">
              <strong>manifest &rarr; event</strong>
              A <code>world.openveil.nostr</code> assertion carries the device npub, its hex
              pubkey and the <code>px1</code> hash.
            </div>
            <div className="binding-leg">
              <strong>event &rarr; manifest</strong>
              The NIP-94 tags carry the SHA-256 of the signed file the manifest is bound to.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
