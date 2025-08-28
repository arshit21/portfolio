// ============================================================================
// UPDATED APP.JS - MODIFIED FOR DYNAMIC PROJECT MANAGEMENT
// ============================================================================
// This is your original app.js with the project management parts removed
// All project-related functionality is now handled by the new dynamic system

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initLoadingScreen();
    initCustomCursor();
    initParticles();
    initTypingAnimation();
    initNavigation();
    initScrollAnimations();
    initThemeToggle();
    initContactForm();
    initMobileMenu();
    initProjectsView();
    // Note: initProjectCards is now handled by projects-renderer.js
});

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    });
}

function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');

    // Only initialize cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice && window.innerWidth > 768) {
        // Add class to hide default cursor
        document.body.classList.add('custom-cursor-enabled');
        
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';

            cursor.classList.add('active');
            cursorDot.classList.add('active');
        });

        // Smooth cursor following
        function animateCursor() {
            const distX = mouseX - cursorX;
            const distY = mouseY - cursorY;

            cursorX += distX * 0.1;
            cursorY += distY * 0.1;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });

        // Click effect
        document.addEventListener('mousedown', () => {
            cursor.classList.add('click');
        });
        document.addEventListener('mouseup', () => {
            cursor.classList.remove('click');
        });
    }
}

// Particles Background
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#32a0b8"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#32a0b8",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
}

// Typing Animation - Only animates the name "Arshit Chaudhary"
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const name = 'Arshit Chaudhary';
    let index = 0;

    function typeWriter() {
        if (index < name.length) {
            typingElement.textContent = name.slice(0, index + 1);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing animation after a short delay
    setTimeout(typeWriter, 1000);
}

// Navigation - Fixed
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Smooth scrolling - Fixed
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navbarHeight = 70;
                const offsetTop = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                if (navMenu && hamburger) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Active section highlighting
    function updateActiveSection() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(19, 52, 59, 0.95)';
        } else {
            navbar.style.background = 'rgba(19, 52, 59, 0.9)';
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');

                // Animate skill bars
                if (entry.target.classList.contains('skill-category')) {
                    const skillFills = entry.target.querySelectorAll('.skill-fill');
                    skillFills.forEach((fill, index) => {
                        setTimeout(() => {
                            const width = fill.style.width;
                            fill.style.width = '0%';
                            setTimeout(() => {
                                fill.style.width = width;
                            }, 100);
                        }, index * 200);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about-card, .experience-item, .project-card, .skill-category, .contact-item, .contact-form');
    animateElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Theme Toggle - Fixed Implementation
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');

    // Get saved theme or default to dark
    let currentTheme = localStorage.getItem('theme') || 'dark';

    // Apply initial theme
    html.setAttribute('data-color-scheme', currentTheme);
    updateThemeIcon(currentTheme);

    // Theme toggle click handler
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-color-scheme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(currentTheme);

        // Add visual feedback
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });

    function updateThemeIcon(theme) {
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// Contact Form - Enhanced with better UX
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    const nameInput = contactForm.querySelector('input[placeholder="Your Name"]');
    const emailInput = contactForm.querySelector('input[placeholder="Your Email"]');
    const subjectInput = contactForm.querySelector('input[placeholder="Subject"]');
    const messageInput = contactForm.querySelector('textarea');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Clear previous errors
        clearErrors();

        let isValid = true;

        // Validate name
        if (!nameInput.value.trim()) {
            showFieldError(nameInput, 'Name is required');
            isValid = false;
        }

        // Validate email
        if (!emailInput.value.trim()) {
            showFieldError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showFieldError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate subject
        if (!subjectInput.value.trim()) {
            showFieldError(subjectInput, 'Subject is required');
            isValid = false;
        }

        // Validate message
        if (!messageInput.value.trim()) {
            showFieldError(messageInput, 'Message is required');
            isValid = false;
        }

        if (!isValid) {
            showNotification('Please fix the errors below', 'error');
            return;
        }

        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });

    function showFieldError(field, message) {
        field.style.borderColor = 'var(--color-error)';

        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }

        // Add new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: var(--color-error);
            font-size: var(--font-size-sm);
            margin-top: var(--space-4);
        `;
        field.parentNode.appendChild(errorDiv);
    }

    function clearErrors() {
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.style.borderColor = '';
            const errorMsg = input.parentNode.querySelector('.field-error');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showNotification(message, type) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(n => n.remove());

        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--color-success)' : 'var(--color-error)'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            z-index: 10000;
            box-shadow: var(--shadow-lg);
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
            font-size: var(--font-size-sm);
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
}

// Projects View - Fixed Implementation (works with dynamic system)
function initProjectsView() {
    const viewAllBtn = document.getElementById('view-all-projects');
    const backToFeaturedBtn = document.getElementById('back-to-featured');
    const featuredSection = document.getElementById('featured-projects');
    const allProjectsSection = document.getElementById('all-projects-section');
    const viewAllCta = document.getElementById('view-all-cta');

    // Show all projects - Fixed
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            featuredSection.style.display = 'none';
            viewAllCta.style.display = 'none';
            allProjectsSection.style.display = 'block';

            // Scroll to projects section
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const navbarHeight = 70;
                const offsetTop = projectsSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Back to featured projects - Fixed
    if (backToFeaturedBtn) {
        backToFeaturedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            allProjectsSection.style.display = 'none';
            featuredSection.style.display = 'grid';
            viewAllCta.style.display = 'block';

            // Scroll to projects section
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const navbarHeight = 70;
                const offsetTop = projectsSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Note: Project filtering is now handled by projects-renderer.js
}

// Mobile Menu - Enhanced
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Utility function for smooth scrolling
function smoothScrollTo(target, duration = 1000) {
    const targetPosition = target.offsetTop - 70;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}