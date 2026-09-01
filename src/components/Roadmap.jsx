const items = [
  {
    title: 'Zero-knowledge proofs',
    desc:
      'The architecture is meant to accommodate a layer that proves a capture is authentic without revealing which device produced it. Nothing of it is built yet.'
  },
  {
    title: 'iOS, desktop and web clients',
    desc:
      'The app’s domain layer is already platform-neutral, so these are additive. Android is the only one that runs today.'
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-divider">
      <div className="fade-in delay-2">
        <h2 className="section-title text-center">Not built yet</h2>
        <p className="section-subtitle text-center">
          Intended directions, listed here rather than among the features, because neither
          of them ships today.
        </p>

        <div className="roadmap-grid">
          {items.map((item) => (
            <div key={item.title} className="roadmap-card">
              <span className="tag tag-planned">Planned</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
