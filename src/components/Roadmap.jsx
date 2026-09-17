const items = [
  {
    title: 'Zero-knowledge proofs',
    desc:
      'A layer that proves a capture is authentic without revealing which device produced it. The chain was designed with room for it: the proof would sit on the same hash the manifest and the event already share.'
  },
  {
    title: 'iOS, desktop and web clients',
    desc:
      'The app’s domain layer is already platform-neutral, so each of these is an additional front end on the same pipeline rather than a rewrite. Android runs today and sets the pattern.'
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-divider">
      <div className="fade-in delay-2">
        <h2 className="section-title text-center">What comes next</h2>
        <p className="section-subtitle text-center">
          Two directions the architecture was built to grow into.
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
