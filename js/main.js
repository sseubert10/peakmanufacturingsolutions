// Load shared header (GitHub Pages-safe)
fetch("/peakmanufacturingsolutions/partials/header.html")
  .then(response => response.text())
  .then(data => {
    const header = document.getElementById("site-header");
    if (header) {
      header.innerHTML = data;
    }
  })
  .catch(err => console.error("Header load error:", err));

// Mobile menu toggle
function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}
