/* DK Quality Construction — site behaviour. No dependencies. */
(() => {
  'use strict';

  /* ---------- Analytics helper ----------
     Queues gtag-style calls on window.dataLayer. If GA4 is configured
     (assets/js/analytics.js), gtag.js processes them; otherwise they are inert. */
  function track(name, params) {
    window.dataLayer = window.dataLayer || [];
    // gtag.js expects the Arguments object, not an array.
    (function () { window.dataLayer.push(arguments); })('event', name, params || {});
  }

  // Phone / email link clicks.
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-track]');
    if (!a) return;
    track(a.dataset.track, { link_url: a.href, page_location: location.pathname });
  });

  /* ---------- Desktop services dropdown (disclosure pattern) ---------- */
  document.querySelectorAll('[data-sub]').forEach((item) => {
    const btn = item.querySelector('button');
    const set = (open) => {
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    };
    btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && item.classList.contains('is-open')) {
        set(false);
        btn.focus();
      }
    });
    item.addEventListener('focusout', (e) => {
      if (!item.contains(e.relatedTarget)) set(false);
    });
    document.addEventListener('click', (e) => {
      if (!item.contains(e.target)) set(false);
    });
  });

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  const mobileCta = document.querySelector('[data-mobile-cta]');
  if (menuBtn && menu) {
    const setMenu = (open) => {
      menuBtn.setAttribute('aria-expanded', String(open));
      menu.hidden = !open;
      document.documentElement.style.overflow = open ? 'hidden' : '';
      if (mobileCta) mobileCta.classList.toggle('is-hidden', open);
    };
    menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.hidden) {
        setMenu(false);
        menuBtn.focus();
      }
    });
    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) setMenu(false);
    });
    window.matchMedia('(min-width: 64em)').addEventListener('change', (mq) => {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- Hide mobile sticky CTA while a form is on screen ---------- */
  const forms = document.querySelectorAll('[data-estimate-form]');
  if (mobileCta && forms.length && 'IntersectionObserver' in window) {
    const visible = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => (en.isIntersecting ? visible.add(en.target) : visible.delete(en.target)));
      mobileCta.classList.toggle('is-hidden', visible.size > 0);
    });
    forms.forEach((f) => io.observe(f));
  }

  /* ---------- Estimate form ---------- */
  const MAX_FILE = 8 * 1024 * 1024;
  const rules = {
    name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your name.'),
    phone: (v) => (v.replace(/\D/g, '').length >= 10 ? '' : 'Please enter a phone number with area code.'),
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email, like name@example.com.',
    project_location: (v) => (v.trim().length >= 2 ? '' : 'Please enter the city or ZIP code of the project.'),
    service: (v) => (v ? '' : 'Please choose a project type.'),
  };

  function showError(field, msg) {
    const err = document.getElementById(`${field.id}-err`);
    if (msg) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
    if (err) {
      err.textContent = msg;
      err.hidden = !msg;
    }
  }

  function validateField(field) {
    let msg = '';
    if (rules[field.name]) msg = rules[field.name](field.value);
    if (field.type === 'file' && field.files && field.files[0]) {
      const f = field.files[0];
      if (f.size > MAX_FILE) msg = 'That photo is larger than 8 MB. Please choose a smaller image.';
      else if (f.type && !/^image\//.test(f.type)) msg = 'Please choose an image file (JPG, PNG, HEIC or WebP).';
    }
    showError(field, msg);
    return !msg;
  }

  forms.forEach((form) => {
    const status = form.querySelector('.form-status');
    const button = form.querySelector('button[type="submit"]');
    const label = button.querySelector('.btn__label');
    const fields = [...form.querySelectorAll('input[name], select[name], textarea[name]')].filter(
      (f) => rules[f.name] || f.type === 'file',
    );
    let started = false;

    fields.forEach((f) => {
      f.addEventListener('blur', () => f.value && validateField(f));
      f.addEventListener('input', () => f.getAttribute('aria-invalid') && validateField(f));
      f.addEventListener('change', () => (f.type === 'file' || f.tagName === 'SELECT') && validateField(f));
    });
    form.addEventListener('focusin', () => {
      if (!started) {
        started = true;
        track('form_start', { form_name: 'estimate', page_location: location.pathname });
      }
    });

    const setStatus = (msg, kind) => {
      status.textContent = msg;
      status.hidden = !msg;
      status.className = `form-status${kind === 'info' ? ' form-status--info' : ''}`;
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      setStatus('', '');
      const invalid = fields.filter((f) => !validateField(f));
      if (invalid.length) {
        setStatus(
          invalid.length === 1
            ? 'Please fix the highlighted field and try again.'
            : `Please fix the ${invalid.length} highlighted fields and try again.`,
        );
        invalid[0].focus();
        return;
      }

      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      const original = label.textContent;
      label.textContent = 'Sending…';

      try {
        // Netlify Forms accepts multipart POSTs to any site path; the hidden
        // form-name field routes it. Do not set Content-Type (browser adds the boundary).
        const res = await fetch('/', { method: 'POST', body: new FormData(form) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        try {
          sessionStorage.setItem('dk_lead', form.querySelector('[name="service"]').value || 'unknown');
        } catch (_) { /* storage unavailable: conversion simply isn't recorded */ }
        window.location.assign('/thank-you/');
      } catch (err) {
        setStatus(
          'Sorry — your request didn’t go through. Please try again, or call (734) 497-6773.',
        );
        button.disabled = false;
        button.removeAttribute('aria-busy');
        label.textContent = original;
      }
    });
  });

  /* ---------- Conversion on the thank-you page (once per submission) ---------- */
  if (location.pathname === '/thank-you/') {
    let service = null;
    try {
      service = sessionStorage.getItem('dk_lead');
      sessionStorage.removeItem('dk_lead');
    } catch (_) { /* ignore */ }
    if (service) {
      // Wait for analytics.js (if present) to configure gtag before sending.
      window.addEventListener('load', () => track('generate_lead', { form_name: 'estimate', service }));
    }
  }
})();
