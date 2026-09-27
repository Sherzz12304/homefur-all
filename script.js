/* ==========================================================================
   HomeFur All — script.js
   --------------------------------------------------------------------------
   Mobile menu: hamburger toggle, close on link click, close on Escape.
   ========================================================================== */


// Grab the hamburger button and the nav menu it controls
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

// Toggle the menu open/closed, animate the icon, and lock page scroll
navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active');
    document.body.classList.toggle('nav-open');
});

// Close the menu automatically when a link inside it is tapped
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        document.body.classList.remove('nav-open');
    });
});

// Close the menu when the Escape key is pressed (keyboard accessibility)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mainNav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        document.body.classList.remove('nav-open');
    }
});