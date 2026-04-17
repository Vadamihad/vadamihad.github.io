/* ═══════════════════════════════════════════════════
   VADAMIHAD PORTFOLIO — script.js
   Features: loader, scroll progress, sticky nav,
   active links, hamburger, dark mode, reveal anims,
   skill bars, back-to-top, footer year
═══════════════════════════════════════════════════ */

'use strict';

/* ── FOOTER YEAR ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── LOADING SCREEN ── */
const loader = document.getElementById('loader');

window.addEventListener('load', () => {
  setTimeout(() => {
    loader?.classList.add('hidden');
    document.body.style.overflow = '';
  }, 1500);
});

// Prevent scroll during load
document.body.style.overflow = 'hidden';

/* ── SCROLL PROGRESS BAR ── */
const progressBar = document.getElementById('scroll-progress');

function updateScrollProgress() {
  const scrollTop  = window.scrollY;
  const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
  const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
}

/* ── STICKY NAV + SHADOW ── */
const navbar = document.getElementById('navbar');

function updateNav() {
  if (!navbar) return;
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

/* ── ACTIVE NAV LINKS ON SCROLL ── */
const sections   = document.querySelectorAll('section[id], .hero[id]');
const navLinks   = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

/* ── BACK TO TOP ── */
const backToTop = document.getElementById('back-to-top');

function updateBackToTop() {
  if (!backToTop) return;
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── COMBINED SCROLL HANDLER ── */
window.addEventListener('scroll', () => {
  updateScrollProgress();
  updateNav();
  updateActiveLink();
  updateBackToTop();
}, { passive: true });

// Run once on load
updateScrollProgress();
updateNav();
updateActiveLink();
updateBackToTop();

/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('nav-links');

function toggleNav() {
  const isOpen = navLinksEl?.classList.toggle('open');
  hamburger?.classList.toggle('open', isOpen);
  hamburger?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

hamburger?.addEventListener('click', toggleNav);

// Close mobile menu on link click
navLinksEl?.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    hamburger?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
  });
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (
    navLinksEl?.classList.contains('open') &&
    !navbar?.contains(e.target)
  ) {
    navLinksEl.classList.remove('open');
    hamburger?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
  }
});

/* ── DARK MODE TOGGLE ── */
const themeToggle = document.getElementById('theme-toggle');
const html        = document.documentElement;

// Persist preference
const savedTheme = localStorage.getItem('vm-theme');
if (savedTheme) html.setAttribute('data-theme', savedTheme);

themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('vm-theme', next);
});

/* ── SCROLL REVEAL ANIMATION ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stagger children if any
        entry.target.querySelectorAll('.exp-row, .cert-card, .project-card, .skill-item, .soft-pill').forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.04}s`;
        });
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── ANIMATED SKILL BARS ── */
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill    = entry.target;
        const target  = fill.getAttribute('data-width') || '0';
        // Small delay for stagger effect
        const index   = [...skillFills].indexOf(fill);
        setTimeout(() => {
          fill.style.width = `${target}%`;
        }, index * 80);
        skillObserver.unobserve(fill);
      }
    });
  },
  { threshold: 0.3 }
);

skillFills.forEach(fill => skillObserver.observe(fill));

/* ── SMOOTH SCROLL FOR ANCHOR LINKS ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navHeight = navbar?.offsetHeight || 70;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
