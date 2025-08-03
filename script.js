window.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      const headerEl = document.getElementById('header');
      if (headerEl) headerEl.innerHTML = data;
    });

  // Load nav dan aktifkan klik menu
  fetch('nav.html')
    .then(res => res.text())
    .then(data => {
      const navEl = document.getElementById('nav');
      if (navEl) {
        navEl.innerHTML = data;

        // Aktifkan toggle
        const toggle = document.querySelector('.menu-toggle');
        if (toggle) {
          toggle.addEventListener('click', () => {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) navLinks.classList.toggle('active');
          });
        }

        // Tambahkan event listener ke semua link
        const links = navEl.querySelectorAll("a[data-page]");
        links.forEach(link => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = link.getAttribute("data-page");
            loadPage(page);
          });
        });
      }
    });

  // Load footer
  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      const footerEl = document.getElementById('footer');
      if (footerEl) footerEl.innerHTML = data;
    });

  // Fungsi load halaman konten
  function loadPage(page) {
    fetch(`pages/${page}`)
      .then(res => res.text())
      .then(data => {
        const contentEl = document.getElementById('content');
        if (contentEl) contentEl.innerHTML = data;
      });
  }
});
