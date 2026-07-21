/* animation.js - Visual effects and scroll animations for Kishore Tech Solutions */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Statistics Counter Animation
    const counterElements = document.querySelectorAll('.counter-val');
    
    const animateCounters = (element) => {
        const target = +element.getAttribute('data-target');
        const duration = 2000; // ms
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const value = Math.floor(progress * target);
            
            element.innerText = value + (element.getAttribute('data-suffix') || '');

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.innerText = target + (element.getAttribute('data-suffix') || '');
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));

    // 3. Ripple/Hover effects for Buttons
    document.querySelectorAll('.btn-ripple').forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 4. Micro-interactions for service cards
    document.querySelectorAll('.custom-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.material-symbols-outlined');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        });
    });
});
