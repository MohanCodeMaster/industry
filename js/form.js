/* form.js - Form validation for Kishore Tech Solutions */

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.needs-validation');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
                form.classList.add('was-validated');
            } else {
                e.preventDefault(); // Prevent actual submission since it's a static demo
                
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                // Show loading spinner
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
                submitBtn.disabled = true;

                // Simulate form submission delay
                setTimeout(() => {
                    // Show success state
                    submitBtn.className = 'btn btn-success w-100 py-3 font-bold rounded-lg';
                    submitBtn.innerHTML = '<span class="material-symbols-outlined align-middle">check_circle</span> Sent Successfully!';
                    
                    // Reset form fields
                    form.reset();
                    form.classList.remove('was-validated');

                    // Reset button back to normal after 3 seconds
                    setTimeout(() => {
                        submitBtn.className = 'btn btn-secondary-gradient w-100 py-3 font-bold rounded-lg btn-ripple';
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                }, 1500);
            }
        }, false);
    });
});
