// Load shared header
fetch('partials/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // Mobile menu toggle
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');

    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });
