export default function Proposal() {
  return (
    <section id="about" className="section-divider">
      <div className="fade-in delay-2 narrow">
        <h2 className="section-title">About the Project</h2>
        <p className="section-subtitle">
          A decentralized media provenance and verification system.
        </p>

        <div className="glass-panel proposal-panel">
          <h3>The Problem</h3>
          <p>
            Photographic evidence is losing its evidentiary value. Generative models can
            produce convincing images of events that never happened, and their existence
            does something worse: it gives anyone caught on camera a ready denial. A
            journalist or human rights investigator who publishes a genuine photograph now
            has to argue for its authenticity, with no better tool for that argument than
            their own credibility.
          </p>
          <p>
            The usual answer is a trusted platform that vouches for uploads. That fails
            exactly where it matters most. A platform can be pressured, can be blocked in
            the jurisdiction that needs it, can lose interest, and can quietly delete.
            Anyone whose safety depends on a photograph remaining verifiable cannot afford
            a verifier with a business model.
          </p>

          <h3>The Approach</h3>
          <p>
            OpenVeil replaces institutional trust with a chain anyone can check
            independently. Every capture leaves the phone carrying a{' '}
            <a href="https://c2pa.org" target="_blank" rel="noopener noreferrer">C2PA</a>{' '}
            manifest bound to its exact bytes, is stored content-addressed on Blossom, and
            is announced in a signed NIP-94 event replicated across Nostr relays that no
            single party owns.
          </p>
          <p>
            Each link is verifiable on its own, and nothing in the chain asks you to trust
            OpenVeil or its author. The verification procedure below uses public
            infrastructure and standard tools. None of it runs on a server this project
            controls.
          </p>
        </div>
      </div>
    </section>
  );
}
