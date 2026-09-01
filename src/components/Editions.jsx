const editions = [
  {
    name: 'app/',
    title: 'The camera in your pocket',
    tag: { label: 'Android today', className: 'tag-ok' },
    desc:
      'A Kotlin Multiplatform client that signs at the shutter, uploads the signed original to Blossom, publishes the NIP-94 event, and can re-verify a capture against its stored bytes on the device itself. The domain layer is platform-neutral, so iOS, desktop and web are additive rather than rewrites.',
    points: [
      'Home, camera, review, publishing, details',
      'On-device re-verification',
      'iOS, desktop and web planned'
    ]
  },
  {
    name: 'c2pa-bridge',
    title: 'Cameras we did not build',
    tag: { label: 'Command line tool', className: 'tag-info' },
    desc:
      'Leica, Nikon, Canon, Fujifilm and Panasonic already ship C2PA. What C2PA lacks is somewhere decentralized to put a manifest. An embedded one dies on a platform re-encode, and the official remedy points at a single HTTP endpoint. The bridge stores the asset and a detached copy of its manifest on Blossom, then publishes a Nostr event binding them together. None of our keys are involved.',
    points: [
      'inspect, publish, verify',
      'No new event kinds, no new NIP',
      'Re-validates locally, ignores what the event claims'
    ]
  }
];

export default function Editions() {
  return (
    <section id="editions" className="section-divider">
      <div className="fade-in delay-2">
        <h2 className="section-title text-center">Two ways in</h2>
        <p className="section-subtitle text-center">
          Both publish to the same relays, the same Blossom servers and the same event
          kinds, so a capture from either is discoverable and verifiable identically.
        </p>

        <div className="editions-grid">
          {editions.map((edition) => (
            <div key={edition.name} className="edition-card glass-panel">
              <span className={`tag ${edition.tag.className}`}>{edition.tag.label}</span>
              <div>
                <h3>{edition.title}</h3>
                <span className="edition-name">{edition.name}</span>
              </div>
              <p>{edition.desc}</p>
              <ul>
                {edition.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
