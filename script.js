// Dev Academy Website - JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initNavigation();
    initScrollToTop();
    initCounterAnimation();
    initContactForm();
    initSmoothScroll();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const navbarToggler = document.querySelector('.navbar-toggler');
                navbarToggler.click();
            }
        });
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll to top button functionality
function initScrollToTop() {
    // Create scroll to top button if it doesn't exist
    let scrollButton = document.querySelector('.scroll-to-top');
    
    if (!scrollButton) {
        scrollButton = document.createElement('button');
        scrollButton.className = 'scroll-to-top';
        scrollButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
        document.body.appendChild(scrollButton);
    }
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });
    
    // Scroll to top when button is clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Counter animation for stats section
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Animation speed
    let hasAnimated = false;
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / speed;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                // Special formatting for large numbers
                if (target >= 10000) {
                    const thousands = Math.floor(target / 1000);
                    counter.textContent = thousands + 'k+';
                } else {
                    counter.textContent = target;
                }
            }
        };
        
        updateCounter();
    };
    
    // Observe when stats section comes into view
    const statsSection = document.querySelector('.counter')?.closest('section');
    
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    counters.forEach(counter => animateCounter(counter));
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (!validateForm(formData)) {
            showMessage('Please fill in all fields correctly.', 'error');
            return;
        }
        
        // Sanitize form data to prevent email injection
        const sanitizedData = {
            name: formData.name.replace(/[\r\n]/g, ' '),
            email: formData.email.replace(/[\r\n]/g, ' '),
            subject: formData.subject.replace(/[\r\n]/g, ' '),
            message: formData.message.replace(/[\r\n]/g, ' ')
        };
        
        // Create mailto link
        const mailto = `mailto:Me@ShaunRoselt.com?subject=${encodeURIComponent(sanitizedData.subject)}&body=${encodeURIComponent(
            `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\n\nMessage:\n${sanitizedData.message}`
        )}`;
        
        // Open mailto link
        window.location.href = mailto;
        
        // Show success message
        showMessage('Opening your email client...', 'success');
        
        // Reset form after a short delay
        setTimeout(() => {
            form.reset();
        }, 1000);
    });
}

// Validate form data
function validateForm(data) {
    // Check if all fields are filled
    if (!data.name || !data.email || !data.subject || !data.message) {
        return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    return true;
}

// Show message to user
function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    
    formMessage.innerHTML = `
        <div class="alert ${alertClass} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        const alert = formMessage.querySelector('.alert');
        if (alert) {
            alert.classList.remove('show');
            setTimeout(() => {
                formMessage.innerHTML = '';
            }, 150);
        }
    }, 5000);
}

// Add animation to elements when they come into view
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize scroll animations
initScrollAnimations();

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Press 'Home' key to scroll to top
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Press 'End' key to scroll to bottom
    if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Recalculate any position-dependent elements
        updateActiveNavLink();
    }, 250);
});

// Log when all scripts are loaded
console.log('Dev Academy Website initialized successfully!');
