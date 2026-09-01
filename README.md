# OpenVeil-Frontend

The website for **OpenVeil**, at [openveil.world](https://openveil.world).

## The Project

OpenVeil addresses the growing problem of censorship, synthetic media, and declining trust in digital evidence. Journalists, activists, and human rights defenders increasingly face situations where authentic media is dismissed as fake or AI-generated, while centralized platforms censor or remove sensitive evidence. Existing systems lack reliable ways to prove that media came from a trusted device and remained untampered.

## The Solution: Decentralized Verifiability

A photograph is signed with C2PA Content Credentials the moment it is taken, stored content-addressed on Blossom, and announced in a signed NIP-94 event replicated across Nostr relays that no single party owns. The manifest names the Nostr key that published it, and the event names the hash of the file the manifest is bound to, so neither half can be swapped for the other without the mismatch showing.

Android runs the full pipeline today. `c2pa-bridge` publishes credentials minted by other C2PA-capable cameras.

## Site Conventions

- **No third-party requests.** No analytics, no trackers, no externally hosted fonts. Visitors to this site may be at risk, and a request to another origin is a logged visit. Everything is self-hosted.
- **Only claim what ships.** Anything not implemented belongs in the "Not built yet" section, labelled as such.
- **Dark by default, OS preference respected.** Themes are driven by CSS custom properties in `src/index.css`, resolved in this order: an explicit choice from the header toggle (`data-theme` on `<html>`, remembered in `localStorage`), then an explicit OS `prefers-color-scheme`, then dark. An inline script in `index.html` applies a stored choice before first paint. Note that browsers no longer report "no preference" for `prefers-color-scheme`, so an untouched OS resolves to light in practice; the dark fallback only catches browsers that do not support the query.

## Development Setup

This project uses [Vite](https://vitejs.dev/) and React.

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.
