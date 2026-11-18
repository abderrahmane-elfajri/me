/**
 * Abderrahman El Fajri - Portfolio Core JavaScript
 * Handles responsive mobile navigation, dynamic typing, scroll effects, and form handling
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Mobile Menu Toggle ---
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('nav');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-xmark');
        });

        // Close menu when clicking any nav link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-xmark');
            });
        });

        // Close menu when clicking outside header
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && !menuIcon.contains(e.target) && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-xmark');
            }
        });

        // Close menu on scroll
        window.addEventListener('scroll', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-xmark');
            }
        });
    }

    // --- 2. Header Background on Scroll ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // --- 3. Dynamic Typewriter Effect for Home Page ---
    const typingSpan = document.querySelector('.typing-role');
    if (typingSpan) {
        const roles = [
            'Full-Stack Developer',
            'Digital Growth Specialist',
            'Laravel & React Engineer',
            'SMM & Meta Ads Strategist'
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingDelay = 100;
        const erasingDelay = 60;
        const newRoleDelay = 1800;

        function type() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                typingSpan.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingSpan.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let delta = isDeleting ? erasingDelay : typingDelay;

            if (!isDeleting && charIndex === currentRole.length) {
                delta = newRoleDelay;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                delta = 500;
            }

            setTimeout(type, delta);
        }

        setTimeout(type, 600);
    }

    // --- 4. Interactive Contact Form Handler ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Check if form is using third-party action or default
            const action = contactForm.getAttribute('action');
            if (!action || action === '#' || action.trim() === '') {
                e.preventDefault();
                const nameInput = contactForm.querySelector('input[name="name"]');
                const emailInput = contactForm.querySelector('input[name="email"]');
                const messageInput = contactForm.querySelector('textarea[name="message"]');

                const name = nameInput ? nameInput.value.trim() : 'Guest';
                const email = emailInput ? emailInput.value.trim() : '';
                const message = messageInput ? messageInput.value.trim() : '';

                if (!name || !email || !message) {
                    alert('Please fill in all fields.');
                    return;
                }

                // Google Apps Script Web App Endpoint
                const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyN15O4w1pE8Q7R6s5t4u3v2w1x0y_placeholder/exec';

                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending via Google Sheets...';

                const formParams = new URLSearchParams();
                formParams.append('name', name);
                formParams.append('email', email);
                formParams.append('message', message);
                formParams.append('timestamp', new Date().toISOString());

                fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
                    body: formParams.toString()
                }).then(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Delivered!';
                    submitBtn.style.backgroundColor = '#25D366';
                    submitBtn.style.color = '#ffffff';
                    submitBtn.style.borderColor = '#25D366';

                    let alertBox = document.querySelector('#form-alert-box') || document.querySelector('.form-alert');
                    if (alertBox) {
                        alertBox.style.display = 'flex';
                        alertBox.className = 'form-alert success';
                        alertBox.innerHTML = `<i class="fa-solid fa-circle-check"></i><div><strong>Message Sent Successfully!</strong><p>Thank you ${name}! Your inquiry has been saved to Google Sheets and a direct notification has been sent to my inbox.</p></div>`;
                    }

                    contactForm.reset();

                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.backgroundColor = '';
                        submitBtn.style.color = '';
                        submitBtn.style.borderColor = '';
                    }, 5000);
                }).catch(err => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    let alertBox = document.querySelector('#form-alert-box') || document.querySelector('.form-alert');
                    if (alertBox) {
                        alertBox.style.display = 'flex';
                        alertBox.className = 'form-alert error';
                        alertBox.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i><div><strong>Temporary Connection Error</strong><p>Could not send automatically. Please reach out directly via WhatsApp: <a href="https://wa.me/212605555137" target="_blank" style="color: #25D366; text-decoration: underline;">+212 605 555 137</a></p></div>`;
                    }
                });
            }
        });
    }
});
