/**
 * IT Anthony Website Scripts
 * Minimal JavaScript for mobile menu functionality
 * FAQ accordion uses native <details>/<summary> elements (no JS needed)
 */

(function() {
    'use strict';

    // DOM Elements
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Toggle mobile menu
    function toggleMenu() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mobileNav.setAttribute('aria-hidden', isExpanded);
    }

    // Close mobile menu
    function closeMenu() {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
    }

    // Event Listeners
    if (menuToggle && mobileNav) {
        // Toggle menu on button click
        menuToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking a navigation link
        mobileNavLinks.forEach(function(link) {
            link.addEventListener('click', closeMenu);
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
                closeMenu();
                menuToggle.focus();
            }
        });
    }

    // Add header shadow on scroll (subtle enhancement)
    const header = document.getElementById('header');
    let lastScrollY = 0;

    function handleScroll() {
        const scrollY = window.scrollY;

        if (scrollY > 10) {
            header.style.boxShadow = '0 2px 8px rgba(45, 55, 72, 0.12)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(45, 55, 72, 0.1)';
        }

        lastScrollY = scrollY;
    }

    if (header) {
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
})();
