document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.main-navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

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

            // Close the mega menu once a service link is tapped on mobile
            container.querySelectorAll('a.dropdown-item').forEach(item => {
                item.addEventListener('click', () => {
                    if (window.innerWidth < 992) {
                        container.classList.remove('show');
                    }
                });
            });
        }
    });
});