/* Flowlance — Cookie consent banner + conditional GA4 loader
 * LGPD requires explicit opt-in for non-essential cookies (Google Analytics).
 * Key: flowlance_cookie_consent  Values: "accepted" | "declined"
 */
(function () {
  var GA_ID = 'G-C5LH1KQ2PC';
  var KEY   = 'flowlance_cookie_consent';

  function loadGA() {
    if (window._gaLoaded) return;
    window._gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  function hideBanner() {
    var b = document.getElementById('fl-cookie-banner');
    if (b) b.style.display = 'none';
  }

  function accept() {
    try { localStorage.setItem(KEY, 'accepted'); } catch(e) {}
    hideBanner();
    loadGA();
  }

  function decline() {
    try { localStorage.setItem(KEY, 'declined'); } catch(e) {}
    hideBanner();
  }

  function init() {
    var consent;
    try { consent = localStorage.getItem(KEY); } catch(e) {}

    if (consent === 'accepted') { loadGA(); return; }
    if (consent === 'declined') { return; }

    // No stored consent — show banner
    var banner = document.getElementById('fl-cookie-banner');
    if (banner) {
      banner.style.display = 'flex';
      var btnA = document.getElementById('fl-cookie-aceitar');
      var btnR = document.getElementById('fl-cookie-recusar');
      if (btnA) btnA.addEventListener('click', accept);
      if (btnR) btnR.addEventListener('click', decline);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
