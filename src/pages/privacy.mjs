import { business, site } from '../../site.config.mjs';
import { pageHero } from '../lib/components.mjs';

const trail = [
  { name: 'Home', path: '/' },
  { name: 'Privacy Policy', path: '/privacy-policy/' },
];

const updated = 'October 10, 2026';

export default {
  path: '/privacy-policy/',
  title: 'Privacy Policy | DK Quality Construction',
  description: 'How DK Quality Construction collects, uses and protects information submitted through this website.',
  breadcrumbs: trail,
  body: `
${pageHero({ eyebrow: 'Legal', title: 'Privacy policy', lede: `Last updated ${updated}.`, trail, actions: false })}
<section class="section">
  <div class="container prose prose--narrow">
    <p>This policy explains what information ${business.legalName} (“we”, “us”) collects through this website and how we use it.</p>

    <h2>Information you give us</h2>
    <p>When you send an estimate request, we collect what you enter: your name, phone number, email address, the city or ZIP code of the project, the type of project, any details you write, your preferred contact method, and an optional photo. We use this information only to respond to your request, prepare an estimate, and communicate with you about your project.</p>

    <h2>How submissions are handled</h2>
    <p>This website is hosted by Netlify, Inc. Form submissions are processed and stored by Netlify’s form service and delivered to us. Netlify may use automated spam filtering on submissions. See <a href="https://www.netlify.com/privacy/" rel="noopener">Netlify’s privacy policy</a>.</p>

    <h2>Analytics</h2>
    <p>${
      site.analytics.ga4Id
        ? 'We use Google Analytics to understand how visitors use the site — for example, which pages are viewed and whether the estimate form or phone links are used. Google Analytics uses cookies and collects information such as your browser, device and approximate location. It does not receive the contents of your estimate request. You can opt out with the <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">Google Analytics opt-out browser add-on</a>.'
        : 'This site does not currently use analytics or advertising cookies. If that changes, this policy will be updated.'
    }</p>

    <h2>Sharing</h2>
    <p>We do not sell or rent your personal information. We share it only with service providers needed to operate this website (such as our hosting provider) or when required by law.</p>

    <h2>Retention</h2>
    <p>We keep estimate requests only as long as needed to respond and to maintain reasonable business records.</p>

    <h2>Your choices</h2>
    <p>To ask what information we have about you, or to request that we correct or delete it, call us at <a href="tel:${business.phoneE164}">${business.phoneDisplay}</a>${business.email ? ` or email <a href="mailto:${business.email}">${business.email}</a>` : ''}.</p>

    <h2>Children</h2>
    <p>This website is intended for adults and is not directed to children under 13.</p>

    <h2>Changes</h2>
    <p>We may update this policy. The date at the top shows when it last changed.</p>
  </div>
</section>
`,
};
