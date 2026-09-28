/* ==========================================================================
   HomeFur All — script.js
   --------------------------------------------------------------------------
   1. Mobile menu: hamburger toggle, close on link click, close on Escape.
   2. Forms: fake-submit handling (no backend — shows a thank-you message).
   ========================================================================== */


/* ---- 1. Mobile menu ---- */
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

/* ---- 2. Forms ---- */
document.querySelectorAll('form[data-form]').forEach(form => {
    const status = form.querySelector('.form-status');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Checkbox groups marked data-require-one need at least one box ticked
        let valid = true;
        form.querySelectorAll('[data-require-one]').forEach(group => {
            const anyChecked = group.querySelector('input:checked') !== null;
            group.querySelector('.form-error').hidden = anyChecked;

            // Send the cursor to the first group that failed
            if (!anyChecked && valid) {
                group.querySelector('input').focus();
                valid = false;
            }
        });
        if (!valid) return;

        form.reset();
        status.hidden = false;
        status.textContent = form.dataset.success;
    });
});