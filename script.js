document.addEventListener("DOMContentLoaded", function () {
  const load = (id, file) => {
    fetch(file)
      .then(res => res.text())
      .then(data => document.getElementById(id).innerHTML = data);
  };

  load("header", "partials/header.html");
  load("nav", "partials/nav.html");
  load("footer", "partials/footer.html");
});
