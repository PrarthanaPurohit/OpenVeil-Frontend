import technicalImg from '../assets/app-8-technical.jpeg';

const REPO = 'https://github.com/PrarthanaPurohit/OpenVeilCam';
const VERIFICATION_DOC = `${REPO}/blob/main/app/docs/VERIFICATION.md`;

// The device key from the capture shown in the screenshot beside these steps.
const PUBKEY = 'dc6da7abd2be14233bb32aed444de60e3b725a36389f64f6bf9a32cb35c35e08';

const steps = [
  {
    title: 'Fetch the event from a relay',
    desc:
      'Pull the file-metadata events for a device key. Ask several relays, because they are independent, and agreement between them is part of the point.',
    code: `nak req -k 1063 -a ${PUBKEY} \\
  wss://relay.damus.io wss://nos.lol wss://relay.primal.net`
  },
  {
    title: 'Download the blob',
    desc:
      'The url tag points at a Blossom server. Because Blossom is content-addressed, the filename in that URL is itself the hash being claimed.',
    code: 'curl -sSLO "$(jq -r \'.tags[] | select(.[0]=="url") | .[1]\' event.json)"'
  },
  {
    title: 'Re-hash it yourself',
    desc:
      'Compare your digest against the x tag in the event. If they differ, the file you were served is not the file that was announced, and no further analysis is needed.',
    code: `sha256sum photo.jpg
jq -r '.tags[] | select(.[0]=="x") | .[1]' event.json`
  },
  {
    title: 'Read the Content Credentials',
    desc:
      'The manifest is embedded in the asset, so any C2PA tool reads it without knowing Nostr exists: c2patool, the browser extensions, or Adobe’s verifier.',
    code: `c2pa-bridge inspect photo.jpg
# or drop the file into contentcredentials.org/verify`
  },
  {
    title: 'Re-derive every binding',
    desc:
      'This trusts nothing in the event. It re-validates the manifest locally, recomputes the hashes, and checks that the manifest and the event still name each other.',
    code: 'c2pa-bridge verify photo.jpg event.json'
  }
];

export default function Verify() {
  return (
    <section id="verify" className="section-divider">
      <div className="fade-in delay-2">
        <div className="verify-head narrow">
          <p className="eyebrow">Do not trust us</p>
          <h2 className="section-title">Verify it yourself</h2>
          <p className="section-subtitle">
            Every claim on this page is checkable without running our software and without
            trusting this project. Given a published capture, fetch the event from a relay,
            download the blob, re-hash it, and confirm it matches what was signed.
          </p>
        </div>

        <div className="verify-layout">
          <div className="verify-steps">
            {steps.map((step, index) => (
              <div key={step.title} className="verify-step glass-panel">
                <div className="verify-step-num">{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <pre className="code-block"><code>{step.code}</code></pre>
                </div>
              </div>
            ))}
          </div>

          <aside className="verify-aside">
            <div className="phone-frame">
              <img
                src={technicalImg}
                alt="Technical details screen listing hashes, manifest ID, Nostr event ID and Blossom URL"
                className="phone-screen"
              />
            </div>
            <h3>Everything you need is in the app</h3>
            <p>
              The technical details screen hands over both SHA-256 digests, the C2PA
              manifest ID, the Nostr event ID, the nevent and nprofile links, the device
              public key and the Blossom URL. Each field is copyable, so nothing has to be
              transcribed by hand to check a capture.
            </p>
          </aside>
        </div>

        <p className="verify-footnote narrow">
          The complete procedure, including how to read the certificate’s trust status
          honestly, is in{' '}
          <a href={VERIFICATION_DOC} target="_blank" rel="noopener noreferrer">
            <strong>docs/VERIFICATION.md</strong>
          </a>.
        </p>
      </div>
    </section>
  );
}
