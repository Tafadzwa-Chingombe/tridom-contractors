// Tridom Contractors — shared site behaviour

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Project filter pills (Projects page)
  document.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // Footer year
  document.querySelectorAll('.current-year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Contact form (static hosting — no backend, so just confirm client-side)
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.querySelector('.form-success');
      if (success) {
        success.classList.add('visible');
      }
      contactForm.reset();
    });
  }

  // "Request Access" CTAs route to contact page with context
  document.querySelectorAll('.js-request-access').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.location.href = 'contact.html?subject=portfolio-access';
    });
  });
});
