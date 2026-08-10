/**
 * A&H TECHWORLD LTD — Multi-Page Application Script
 * Vanilla JavaScript (Zero Dependencies)
 */

(function () {
  'use strict';

  // ── Scroll Reveal System ──
  let observer = null;

  function initReveal() {
    const revealEls = document.querySelectorAll('[data-reveal]');
    if (!revealEls.length) return;

    if ('IntersectionObserver' in window) {
      if (observer) observer.disconnect();
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

      revealEls.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el);
        }
      });
    } else {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }
  }

  // ── Active Navigation Link Highlighting ──
  function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;

      const filename = href.split('/').pop();
      let isActive = false;

      if ((currentPath.endsWith('/') || currentPath.endsWith('index.html')) && filename === 'index.html') {
        isActive = true;
      } else if (filename !== 'index.html' && currentPath.includes(filename)) {
        isActive = true;
      } else if (currentPath.includes('/cases/') && filename === 'work.html') {
        isActive = true;
      }

      if (isActive) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  // ── Contact Form Handler ──
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    const successCard = document.getElementById('contact-success');
    const resetBtn = document.getElementById('reset-form-btn');

    if (form && successCard) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.style.display = 'none';
        successCard.style.display = 'grid';
        if ('IntersectionObserver' in window) initReveal();
      });

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          form.reset();
          successCard.style.display = 'none';
          form.style.display = 'grid';
        });
      }
    }
  }

  // ── Initialization ──
  document.addEventListener('DOMContentLoaded', () => {
    highlightActiveNav();
    initReveal();
    setupContactForm();
  });

})();
