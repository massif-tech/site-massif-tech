// Set dynamic copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const nav    = document.getElementById('primary-nav');

if (toggle && nav) {
  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    this.setAttribute('aria-expanded', String(isOpen));
  });

  // Close nav when a link inside is clicked
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}
