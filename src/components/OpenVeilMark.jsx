/**
 * The OpenVeil aperture mark, inlined so `currentColor` actually resolves.
 *
 * Loading the same artwork through <img src="/openveil-mark.svg"> will NOT pick up
 * the surrounding text colour: an <img> renders the SVG as an isolated document, so
 * currentColor falls back to black and the mark disappears on a dark background.
 * Use this component anywhere the mark has to follow the theme; use the static
 * /openveil-icon.svg file where it needs its own ground (favicon, share cards).
 */
export default function OpenVeilMark({ size = 34, className, title = 'OpenVeil' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role="img"
      aria-label={title}
    >
      <g stroke="currentColor" strokeWidth="3.6" strokeLinecap="round">
        <circle cx="24" cy="24" r="19" />
        <path d="M24 5 L24 24 L40.1 33.5" />
      </g>
      <rect x="21.8" y="21.8" width="4.4" height="4.4" fill="currentColor" />
    </svg>
  );
}
