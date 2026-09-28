/* A&H Techworld — tiny vanilla JS: mobile menu, footer year, testimonials flag, contact form. */
(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var links = document.getElementById('nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      links.classList.toggle('open', !open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        links.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.focus();
      }
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------------------------------------------------------------
     TESTIMONIALS — REAL QUOTES ONLY.
     Add entries only with the client's written permission. While this
     array is empty, the testimonials section stays hidden.
     Example (do not publish until real):
     { quote: "…", name: "Full name", role: "Role, Company", url: "https://…" }
  ---------------------------------------------------------------- */
  var TESTIMONIALS = [];

  var tSection = document.getElementById('testimonials');
  if (tSection && TESTIMONIALS.length) {
    var list = tSection.querySelector('.grid');
    TESTIMONIALS.forEach(function (t) {
      var fig = document.createElement('figure');
      fig.className = 'card quote';
      var bq = document.createElement('blockquote'); bq.textContent = '“' + t.quote + '”';
      var cap = document.createElement('figcaption');
      cap.textContent = t.name + (t.role ? ' — ' + t.role : '');
      fig.appendChild(bq); fig.appendChild(cap); list.appendChild(fig);
    });
    tSection.hidden = false;
  }

  // Contact form (Formspree-compatible, progressive enhancement)
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.className = 'form-status'; status.textContent = '';
      if (form.querySelector('[name="_gotcha"]').value) { return; } // honeypot tripped: silently drop
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (form.action.indexOf('REPLACE') !== -1) {
        status.className = 'form-status err';
        status.textContent = 'The form isn’t connected yet. Please email hello@ahtech.world for now.';
        return;
      }
      var submit = form.querySelector('button[type="submit"]');
      submit.disabled = true; submit.textContent = 'Sending…';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('bad');
          form.reset();
          status.className = 'form-status ok';
          status.textContent = 'Thanks — your brief is in. A founder will reply within 1 business day.';
        })
        .catch(function () {
          status.className = 'form-status err';
          status.textContent = 'Something went wrong sending the form. Please email hello@ahtech.world instead.';
        })
        .finally(function () { submit.disabled = false; submit.textContent = 'Send brief'; status.focus(); });
    });
  }
})();
