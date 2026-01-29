// Load shared header
fetch("partials/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("site-header").innerHTML = data;
  });

// Mobile menu toggle
function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

