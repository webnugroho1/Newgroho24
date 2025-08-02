window.addEventListener("DOMContentLoaded", () => {
  fetch('partials/header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  fetch('partials/nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('nav').innerHTML = data;

      // Setelah navigasi dimuat, aktifkan toggle menu
      const toggle = document.querySelector('.menu-toggle');
      if (toggle) {
        toggle.addEventListener('click', () => {
          const navLinks = document.getElementById('navLinks');
          navLinks.classList.toggle('active');
        });
      }
    });
});
