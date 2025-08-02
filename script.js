window.addEventListener("DOMContentLoaded", () => {
  // Load Header
  fetch('partials/header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  // Load Navigation
  fetch('partials/nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('nav').innerHTML = data;

      // Aktifkan toggle menu setelah nav dimuat
      const toggle = document.querySelector('.menu-toggle');
      if (toggle) {
        toggle.addEventListener('click', () => {
          const navLinks = document.getElementById('navLinks');
          navLinks.classList.toggle('active');
        });
      }
    });

  // Load Footer
  fetch('partials/footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});
