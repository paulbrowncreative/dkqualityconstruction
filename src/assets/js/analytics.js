/* GA4 loader. Only included in pages when GA4_MEASUREMENT_ID is set at build time.
   Kept as an external file so the Content-Security-Policy needs no 'unsafe-inline'. */
(() => {
  const id = document.currentScript && document.currentScript.dataset.ga4Id;
  if (!id || !/^G-[A-Z0-9]+$/.test(id)) return;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id, { anonymize_ip: true });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
})();
