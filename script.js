window.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch('partials/header.html')
    .then(res => res.text())
    .then(data => {
      const headerEl = document.getElementById('header');
      if (headerEl) headerEl.innerHTML = data;
    });

  // Load navigation
  fetch('partials/nav.html')
    .then(res => res.text())
    .then(data => {
      const navEl = document.getElementById('nav');
      if (navEl) {
        navEl.innerHTML = data;

        // Aktifkan toggle menu setelah nav dimuat
        const toggle = document.querySelector('.menu-toggle');
        if (toggle) {
          toggle.addEventListener('click', () => {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
              navLinks.classList.toggle('active');
            }
          });
        }
      }
    });

  // Load footer
  fetch('partials/footer.html')
    .then(res => res.text())
    .then(data => {
      const footerEl = document.getElementById('footer');
      if (footerEl) footerEl.innerHTML = data;
    });
});
