// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(45, 95, 63, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(45, 95, 63, 0.1)';
    }
});

// Form submission handler
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show success message (in a real app, this would send to a server)
        alert('Thank you for your message! We\'ll get back to you soon. 🌿');
        this.reset();
    });
}

// Intersection Observer for animation triggers
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product-card, .feature, .info-card, .contact-item');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});

// Add loading state for better UX
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add hover effects for product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click to call functionality for phone numbers
document.querySelectorAll('.contact-item').forEach(item => {
    const text = item.textContent;
    if (text.includes('+91')) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const phone = text.match(/\+91 [\d\s]+/)[0].replace(/\s/g, '');
            window.location.href = `tel:${phone}`;
        });
    }
});

// Add seasonal greeting based on time
function addSeasonalGreeting() {
    const hero = document.querySelector('.hero-subtitle');
    const hour = new Date().getHours();
    
    let greeting = '';
    if (hour < 11) {
        greeting = 'Good morning! ';
    } else if (hour < 17) {
        greeting = 'Good afternoon! ';
    } else {
        greeting = 'Good evening! ';
    }
    
    if (hero && !hero.textContent.includes('Good')) {
        hero.textContent = greeting + hero.textContent;
    }
}

// Initialize seasonal greeting
document.addEventListener('DOMContentLoaded', addSeasonalGreeting);

// Add scroll-to-top functionality
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '🌱';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #2D5F3F 0%, #7FB069 100%);
        color: white;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(45, 95, 63, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top
document.addEventListener('DOMContentLoaded', addScrollToTop);