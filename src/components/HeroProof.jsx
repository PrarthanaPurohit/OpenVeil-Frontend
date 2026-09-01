import captureImg from '../assets/app-2-camera.jpeg';

/**
 * The hero visual: not a screenshot of the app, but the thing the app produces.
 *
 * A capture and the receipt it carries. Every value below is real, taken from the
 * published capture shown in the walkthrough, so the panel is itself checkable
 * rather than decorative. Truncated for width; the full digests are in the app and
 * in the Nostr event.
 */
const rows = [
  { label: 'SHA-256', value: '15afbd1e…222792b0', state: 'ok', note: 'file' },
  { label: 'C2PA', value: 'Valid', state: 'ok', note: 'self-signed' },
  { label: 'Blossom', value: 'Stored', state: 'ok', note: 'content-addressed' },
  { label: 'Nostr', value: '4 relays', state: 'ok', note: 'kind:1063' }
];

export default function HeroProof() {
  return (
    <div className="proof-panel">
      <div className="proof-plate">
        <img src={captureImg} alt="A photograph captured and signed with OpenVeil" />
        <span className="proof-stamp">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Signed at capture
        </span>
      </div>

      <dl className="proof-rows">
        {rows.map((row) => (
          <div key={row.label} className="proof-row">
            <dt>{row.label}</dt>
            <dd>
              <span className="proof-value">{row.value}</span>
              <span className="proof-note">{row.note}</span>
            </dd>
          </div>
        ))}
      </dl>

      <p className="proof-foot">
        <span>npub1m3k6027…yqqalzwl</span>
        <span>2026-08-31 15:34 UTC</span>
      </p>
    </div>
  );
}
