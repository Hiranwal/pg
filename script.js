document.addEventListener('DOMContentLoaded', () => {

    /* ================= MOBILE NAVIGATION ================= */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to show the menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
            // Change icon
            const icon = navToggle.querySelector('i');
            if(icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Function to close the menu when a link is clicked
    const linkAction = () => {
        navMenu.classList.remove('show-menu');
         // Reset icon
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
    navLinks.forEach(link => link.addEventListener('click', linkAction));
    
    
    /* ================= SMOOTH SCROLL (REMAINS SAME) ================= */
    const allScrollLinks = document.querySelectorAll('a[href^="#"]');
    allScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ================= CONTACT FORM (REMAINS SAME) ================= */
    const form = document.getElementById('enquiry-form');
    const successMessage = document.getElementById('form-success-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        form.style.display = 'none';
        successMessage.classList.remove('hidden');
        successMessage.style.display = 'block';

        setTimeout(() => {
            form.reset();
            form.style.display = 'flex';
            successMessage.classList.add('hidden');
            successMessage.style.display = 'none';
        }, 5000);
    });

});