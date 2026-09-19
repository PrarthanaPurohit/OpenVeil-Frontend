import { useEffect, useState } from 'react';
import cameraImg from '../assets/app-2-camera.jpeg';
import reviewImg from '../assets/app-3-review.jpeg';
import publishingImg from '../assets/app-4-publishing.jpeg';
import publishedImg from '../assets/app-5-published.jpeg';
import detailsImg from '../assets/app-6-details.jpeg';
import linkImg from '../assets/app-9-link-account.webp';
import linkedImg from '../assets/app-10-account-linked.webp';
import publishAsImg from '../assets/app-11-publish-as.webp';

const steps = [
  {
    tabLabel: 'Identity',
    badge: 'Home',
    title: 'Three checks before you shoot',
    image: linkedImg,
    desc:
      'The app will not claim to be ready until it is. The Nostr key, the Content Credentials signer and the Blossom connection each report their own state, and the device npub is on screen so you can hand it to anyone who wants to follow what this device publishes. Below it, your own Nostr account, if you have linked one.',
    highlights: [
      'Nostr key verified',
      'Content Credentials signer verified',
      'Blossom storage reachable',
      'Device npub, copyable',
      'Your linked account, with Unlink one tap away'
    ]
  },
  {
    tabLabel: 'Link',
    badge: 'Your account',
    title: 'Your key never enters the app',
    image: linkImg,
    desc:
      'Optionally, link the Nostr account you already have. There is deliberately no field to paste an nsec: OpenVeil asks a signer to sign each publication instead. Amber on the same phone, a bunker:// link pasted or scanned, or a QR code that a signer on another device scans. Every path grants the right to ask for signatures, revocably, and nothing more.',
    highlights: [
      'Amber (NIP-55) when it is installed',
      'bunker:// link, pasted or scanned (NIP-46)',
      'nostrconnect:// QR for a signer on another device',
      'No nsec, ever'
    ]
  },
  {
    tabLabel: 'Capture',
    badge: 'Camera',
    title: 'An ordinary viewfinder',
    image: cameraImg,
    desc:
      'Nothing about the capture is unusual, and that is deliberate. The photo is taken at full sensor resolution and handed straight to the signer, with no re-encoding step in between that could break the binding before it exists.',
    highlights: [
      'Full resolution capture',
      'No re-encoding before signing',
      'The file that gets signed is the file you shot'
    ]
  },
  {
    tabLabel: 'Review',
    badge: 'Review',
    title: 'Signed before anything is published',
    image: reviewImg,
    desc:
      'The Content Credentials are attached at this point, before the photo leaves the device. You can add a note, and the screen says plainly what that note is worth: it is published alongside the photo, it cannot be edited or deleted afterwards, and the signature does not vouch for it.',
    highlights: [
      'Signed badge before upload',
      'Publishing checklist you can read',
      'Notes are permanent and unsigned, and the app says so',
      'Capture data: resolution, format, device, size'
    ]
  },
  {
    tabLabel: 'Publish as',
    badge: 'Review',
    title: 'Whose name goes on it, chosen per photo',
    image: publishAsImg,
    desc:
      'The Content Credential is always signed by the device key; that is the attestation, and it is not a choice. What you choose is the attribution: publish the Nostr event under this device, which links nothing to you, or under your own account, which puts the photo in your followers’ feeds and ties it to you publicly. The device is the default on every photo, the consequence is spelled out next to the option, and there is no "always publish as me" setting.',
    highlights: [
      'This device: nothing links the photo to you',
      'Your account: signed by Amber or your bunker',
      'Resets to the device on every capture',
      'The event still names the device key that attested'
    ]
  },
  {
    tabLabel: 'Publish',
    badge: 'Publishing',
    title: 'Three stages, named as they happen',
    image: publishingImg,
    desc:
      'Creating the credentials, uploading the signed original to Blossom, then announcing the photo and its fingerprint to relays. Each stage is shown as it runs, so a failure is visible rather than silent.',
    highlights: [
      'Content Credentials created',
      'Signed original stored on Blossom',
      'Fingerprint announced to relays'
    ]
  },
  {
    tabLabel: 'Published',
    badge: 'Success',
    title: 'Anyone can now check it',
    image: publishedImg,
    desc:
      'The confirmation reports what actually happened rather than a generic success: credentials verified, the file stored, and how many relays accepted the event. Sharing the photo shares something checkable, not a claim.',
    highlights: [
      'Content Credentials verified',
      'Stored on Blossom',
      'Accepted by four relays',
      'Hashes, links and verification one tap away'
    ]
  },
  {
    tabLabel: 'Verify',
    badge: 'Details',
    title: 'The verdict, stated honestly',
    image: detailsImg,
    desc:
      'The app re-checks the photo against its stored bytes and reports the result without inflating it. The signature matches, so the photo has not been altered since capture. The signing certificate is not on a recognised trust list, so this confirms the image is intact, not who created it.',
    highlights: [
      'Verified: signature matches the file',
      'Trust list status reported separately',
      'Blossom and Nostr publication state',
      'Links that open in any Nostr client or a browser'
    ]
  }
];

export default function AppWalkthrough() {
  const [activeTab, setActiveTab] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const step = steps[activeTab];

  return (
    <section id="walkthrough" className="section-divider">
      <div className="fade-in delay-2">
        <h2 className="section-title text-center">See it in action</h2>
        <p className="section-subtitle text-center">
          The whole pipeline, running on an ordinary Android phone.
        </p>

        <div className="walkthrough-tabs" role="tablist">
          {steps.map((item, index) => (
            <button
              key={item.tabLabel}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              className={`walkthrough-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="walkthrough-tab-num">{index + 1}</span>
              {item.tabLabel}
            </button>
          ))}
        </div>

        <div className="walkthrough-body glass-panel">
          <div className="phone-frame">
            <img
              src={step.image}
              alt={step.title}
              className="phone-screen"
              onClick={() => setIsLightboxOpen(true)}
            />
          </div>

          <div className="walkthrough-info">
            <span className="tag tag-info">{step.badge}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            <div className="walkthrough-highlights">
              <h4>On this screen</h4>
              <ul>
                {step.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              className="walkthrough-expand"
              onClick={() => setIsLightboxOpen(true)}
            >
              Expand screenshot
            </button>
          </div>
        </div>

        {isLightboxOpen && (
          <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
            <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close screenshot preview"
              >
                &times;
              </button>
              <img src={step.image} alt={step.title} className="lightbox-image" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
