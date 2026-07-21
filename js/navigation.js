/* navigation.js - Navigation interactions for Kishore Tech Solutions */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.main-navbar');
    
    // 1. Sticky Navigation class toggle on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Active Page highlighting in navigation
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === 'index.html' && href === '#') || (currentPath === '' && href === '#')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 3. Mobile Navigation drawer behavior & Mega menu toggle on mobile
    const megaMenuDropdowns = document.querySelectorAll('.mega-menu-dropdown');
    megaMenuDropdowns.forEach(dropdown => {
        const toggleBtn = dropdown.querySelector('.dropdown-toggle') || dropdown.querySelector('.nav-link');
        const container = dropdown.querySelector('.mega-menu-container');
        
        if (toggleBtn && container) {
            toggleBtn.addEventListener('click', (e) => {
                if (window.innerWidth < 992) {
                    e.preventDefault();
                    e.stopPropagation();
                    container.classList.toggle('show');
                }
            });
        }
    });
});
