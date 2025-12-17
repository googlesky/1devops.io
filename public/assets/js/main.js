/* 1DevOps Website - Enhanced Main JavaScript */

// Utility Functions
const DevOpsUtils = {
    // Debounce function for performance optimization
    debounce: function(func, wait, immediate = false) {
        let timeout;
        return function executedFunction(...args) {
            const context = this;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    
    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Check if element is in viewport
    isInViewport: function(element, threshold = 0) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        return (
            rect.top <= windowHeight - threshold &&
            rect.bottom >= threshold &&
            rect.left <= windowWidth - threshold &&
            rect.right >= threshold
        );
    },
    
    // Format date with locale support
    formatDate: function(date, locale = 'en-US', options = {}) {
        const defaultOptions = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date(date).toLocaleDateString(locale, { ...defaultOptions, ...options });
    },
    
    // Validate email address
    isValidEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    },
    
    // Generate unique ID
    generateId: function(prefix = 'id') {
        return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    },
    
    // Local storage with error handling
    storage: {
        set: function(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            } catch (e) {
                console.warn('LocalStorage is not available:', e);
                return false;
            }
        },
        get: function(key, defaultValue = null) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (e) {
                console.warn('LocalStorage error:', e);
                return defaultValue;
            }
        },
        remove: function(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (e) {
                console.warn('LocalStorage error:', e);
                return false;
            }
        }
    }
};

// Main App Class
class DevOpsApp {
    constructor() {
        this.mobileMenuOpen = false;
        this.scrollPosition = 0;
        this.init();
    }
    
    init() {
        this.setupMobileMenu();
        this.setupNewsletter();
        this.setupNavigation();
        this.setupSmoothScroll();
        this.setupScrollToTop();
        this.setupFormValidation();
        this.setupAccessibility();
        this.setupAnimations();
        this.setupFilters();
        this.setupTheme();
        this.setupHeaderScroll();
        this.initFAQToggle();
        
        // Initialize performance monitoring
        this.initPerformanceMonitoring();
        
        console.log('DevOps Website initialized successfully');
    }
    
    // Enhanced Header Scroll Effect
    setupHeaderScroll() {
        const header = document.querySelector('.site-header');
        if (!header) return;
        
        const handleScroll = DevOpsUtils.throttle(() => {
            const scrolled = window.scrollY > 50;
            header.classList.toggle('scrolled', scrolled);
        }, 16);
        
        window.addEventListener('scroll', handleScroll);
        
        // Initial check
        handleScroll();
    }
    
    // Mobile Menu with improved accessibility
    setupMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');
        
        if (!mobileMenuToggle || !mobileNav) return;
        
        // Add ARIA attributes
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-controls', 'mobile-navigation');
        mobileNav.setAttribute('id', 'mobile-navigation');
        
        mobileMenuToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mobileMenuOpen) {
                this.closeMobileMenu();
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.mobileMenuOpen && !mobileNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
        
        // Close menu on navigation link click
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link:not(.mobile-dropdown-toggle)');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
        
        // Setup mobile dropdown toggles
        this.setupMobileDropdowns();
    }
    
    toggleMobileMenu() {
        const mobileNav = document.querySelector('.mobile-nav');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        
        this.mobileMenuOpen = !this.mobileMenuOpen;
        
        mobileNav.classList.toggle('active', this.mobileMenuOpen);
        mobileMenuToggle.classList.toggle('active', this.mobileMenuOpen);
        mobileMenuToggle.setAttribute('aria-expanded', this.mobileMenuOpen.toString());
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
    }
    
    closeMobileMenu() {
        if (!this.mobileMenuOpen) return;
        
        const mobileNav = document.querySelector('.mobile-nav');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        
        this.mobileMenuOpen = false;
        mobileNav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    
    // Mobile Dropdown functionality
    setupMobileDropdowns() {
        const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
        
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMobileDropdown(toggle);
            });
        });
    }
    
    toggleMobileDropdown(toggle) {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        const dropdownMenu = toggle.nextElementSibling;
        
        // Close all other dropdowns
        const allToggles = document.querySelectorAll('.mobile-dropdown-toggle');
        allToggles.forEach(otherToggle => {
            if (otherToggle !== toggle) {
                otherToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Toggle current dropdown
        toggle.setAttribute('aria-expanded', (!isExpanded).toString());
        
        // Add click listeners to dropdown links to close menu
        if (!isExpanded && dropdownMenu) {
            const dropdownLinks = dropdownMenu.querySelectorAll('.mobile-dropdown-link');
            dropdownLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                }, { once: true });
            });
        }
    }
    
    // Enhanced Newsletter with better validation
    setupNewsletter() {
        const forms = document.querySelectorAll('.newsletter-form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSubmission(form);
            });
        });
    }
    
    async handleNewsletterSubmission(form) {
        const emailInput = form.querySelector('input[type="email"]');
        const button = form.querySelector('button[type="submit"]');
        const email = emailInput.value.trim();
        
        if (!DevOpsUtils.isValidEmail(email)) {
            this.showFormError(emailInput, 'Please enter a valid email address');
            return;
        }
        
        // Show loading state
        const originalText = button.textContent;
        const originalDisabled = button.disabled;
        
        button.textContent = 'Subscribing...';
        button.disabled = true;
        
        try {
            // Simulate API call (replace with actual endpoint)
            await this.simulateAPICall(email);
            
            // Success state
            button.textContent = 'Subscribed!';
            button.style.backgroundColor = 'var(--success)';
            emailInput.value = '';
            
            // Save to localStorage for user preference
            DevOpsUtils.storage.set('newsletter_subscribed', {
                email,
                timestamp: Date.now()
            });
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
                button.disabled = originalDisabled;
            }, 3000);
            
        } catch (error) {
            console.error('Newsletter subscription failed:', error);
            this.showFormError(emailInput, 'Subscription failed. Please try again.');
            
            button.textContent = originalText;
            button.disabled = originalDisabled;
        }
    }
    
    simulateAPICall(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve({ success: true, email });
                } else {
                    reject(new Error('Network error'));
                }
            }, 1500);
        });
    }
    
    showFormError(input, message) {
        // Remove existing error
        const existingError = input.parentNode.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add new error
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        errorDiv.setAttribute('role', 'alert');
        
        input.parentNode.appendChild(errorDiv);
        input.classList.add('error');
        input.setAttribute('aria-invalid', 'true');
        
        // Remove error after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
            input.classList.remove('error');
            input.removeAttribute('aria-invalid');
        }, 5000);
    }
    
    // Enhanced Navigation with active state management
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        const currentPath = window.location.pathname;
        
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            
            if (this.isActivePath(currentPath, linkPath)) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }
    
    isActivePath(currentPath, linkPath) {
        // Exact match for home page
        if (currentPath === '/' && linkPath === '/') {
            return true;
        }
        
        // For other pages, check if current path starts with link path
        if (linkPath !== '/' && currentPath.startsWith(linkPath)) {
            return true;
        }
        
        return false;
    }
    
    // Smooth scroll with proper focus management
    setupSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    // Calculate header offset
                    const header = document.querySelector('.site-header');
                    const headerHeight = header ? header.offsetHeight + 20 : 80;
                    
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Set focus to target for accessibility
                    setTimeout(() => {
                        target.focus();
                    }, 500);
                }
            });
        });
    }
    
    // Scroll to top with smooth animation
    setupScrollToTop() {
        const scrollButton = document.createElement('button');
        scrollButton.innerHTML = '↑';
        scrollButton.className = 'scroll-to-top';
        scrollButton.title = 'Scroll to top';
        scrollButton.setAttribute('aria-label', 'Scroll to top of page');
        
        // Styling with CSS variables
        scrollButton.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: var(--primary);
            color: var(--white);
            border: none;
            font-size: 1.25rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all var(--transition-normal);
            z-index: 1000;
            box-shadow: var(--shadow-lg);
        `;
        
        document.body.appendChild(scrollButton);
        
        // Show/hide based on scroll position
        const toggleScrollButton = DevOpsUtils.throttle(() => {
            const scrolled = window.pageYOffset > 300;
            scrollButton.style.opacity = scrolled ? '1' : '0';
            scrollButton.style.visibility = scrolled ? 'visible' : 'hidden';
        }, 100);
        
        window.addEventListener('scroll', toggleScrollButton);
        
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Enhanced form validation
    setupFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });
                
                input.addEventListener('input', DevOpsUtils.debounce(() => {
                    if (input.classList.contains('error')) {
                        this.validateField(input);
                    }
                }, 300));
            });
        });
    }
    
    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (field.type === 'email' && value && !DevOpsUtils.isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
        
        // URL validation
        if (field.type === 'url' && value) {
            try {
                new URL(value);
            } catch {
                isValid = false;
                errorMessage = 'Please enter a valid URL';
            }
        }
        
        // Custom validation based on data attributes
        if (field.hasAttribute('data-min-length')) {
            const minLength = parseInt(field.getAttribute('data-min-length'));
            if (value.length < minLength) {
                isValid = false;
                errorMessage = `Minimum ${minLength} characters required`;
            }
        }
        
        if (isValid) {
            this.clearFieldError(field);
        } else {
            this.showFormError(field, errorMessage);
        }
        
        return isValid;
    }
    
    clearFieldError(field) {
        const errorDiv = field.parentNode.querySelector('.form-error');
        if (errorDiv) {
            errorDiv.remove();
        }
        field.classList.remove('error');
        field.removeAttribute('aria-invalid');
    }
    
    // Accessibility improvements
    setupAccessibility() {
        // Add skip navigation link
        this.addSkipNavigation();
        
        // Enhance focus visibility
        this.enhanceFocusVisibility();
        
        // Add landmark roles where missing
        this.addLandmarkRoles();
    }
    
    addSkipNavigation() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-nav sr-only';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary);
            color: var(--white);
            padding: 8px;
            text-decoration: none;
            z-index: 10000;
            border-radius: 4px;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    enhanceFocusVisibility() {
        // Add visible focus indicators for better accessibility
        const style = document.createElement('style');
        style.textContent = `
            .focus-visible {
                outline: 2px solid var(--primary) !important;
                outline-offset: 2px !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    addLandmarkRoles() {
        // Add main role to main content
        const mainContent = document.querySelector('.main-content');
        if (mainContent && !mainContent.hasAttribute('role')) {
            mainContent.setAttribute('role', 'main');
            mainContent.setAttribute('id', 'main-content');
        }
        
        // Add navigation role to nav elements
        const navElements = document.querySelectorAll('nav');
        navElements.forEach(nav => {
            if (!nav.hasAttribute('role')) {
                nav.setAttribute('role', 'navigation');
            }
        });
    }
    
    // Scroll animations with Intersection Observer
    setupAnimations() {
        if (!('IntersectionObserver' in window)) return;

        const animationElements = document.querySelectorAll('.fade-in, .card, .feature-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animationElements.forEach(el => {
            observer.observe(el);
        });

        // Add CSS for animations
        const style = document.createElement('style');
        style.textContent = `
            .animate-in {
                animation: fadeInUp 0.6s ease-out forwards;
            }

            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);

        // Initialize AOS (Animate On Scroll)
        this.initAOS();

        // Initialize counter animations
        this.initCounterAnimations();
    }

    // AOS (Animate On Scroll) Implementation
    initAOS() {
        const aosElements = document.querySelectorAll('[data-aos]');
        if (aosElements.length === 0) return;

        // Check if element is in viewport
        const isInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom > 0
            );
        };

        // Animate element with optional delay
        const animateElement = (el) => {
            const delay = el.getAttribute('data-aos-delay') || 0;
            setTimeout(() => {
                el.classList.add('aos-animate');
            }, parseInt(delay));
        };

        // Handle elements already in viewport on page load
        aosElements.forEach(el => {
            if (isInViewport(el)) {
                animateElement(el);
            }
        });

        // Set up observer for elements not yet in viewport
        const aosObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('aos-animate')) {
                    animateElement(entry.target);
                    aosObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px 0px 0px'
        });

        aosElements.forEach(el => {
            if (!el.classList.contains('aos-animate')) {
                aosObserver.observe(el);
            }
        });
    }

    // Counter Animation for Stats
    // Note: Hero stats counter is handled by inline script in HTML
    // This only handles elements with data-count that have a .counter child
    initCounterAnimations() {
        // Skip - counter animation is handled inline in index.html
        // to preserve the styled HTML structure
        return;
    }

    animateCounter(element) {
        // Disabled - was destroying styled HTML by replacing textContent
        return;
    }
    
    // Filter functionality for lists and tables
    setupFilters() {
        const filterSelects = document.querySelectorAll('.filter-select');
        
        filterSelects.forEach(select => {
            select.addEventListener('change', (e) => {
                this.applyFilter(e.target);
            });
        });
    }
    
    applyFilter(selectElement) {
        const filterValue = selectElement.value;
        const targetAttribute = selectElement.getAttribute('data-filter-target');
        const targetElements = document.querySelectorAll(`[${targetAttribute}]`);
        
        targetElements.forEach(element => {
            const elementValue = element.getAttribute(targetAttribute);
            
            if (!filterValue || filterValue === 'all' || elementValue === filterValue) {
                element.style.display = '';
                element.classList.remove('filtered-out');
            } else {
                element.style.display = 'none';
                element.classList.add('filtered-out');
            }
        });
        
        // Update visible count if needed
        this.updateFilteredCount(targetElements);
    }
    
    updateFilteredCount(elements) {
        const visibleCount = Array.from(elements).filter(el => 
            el.style.display !== 'none'
        ).length;
        
        const countElement = document.querySelector('.filtered-count');
        if (countElement) {
            countElement.textContent = `Showing ${visibleCount} of ${elements.length} items`;
        }
    }
    
    // Theme management
    setupTheme() {
        const savedTheme = DevOpsUtils.storage.get('theme', 'light');
        this.applyTheme(savedTheme);
        
        // Add theme toggle if needed
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                this.applyTheme(newTheme);
                DevOpsUtils.storage.set('theme', newTheme);
            });
        }
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }
    
    // Performance monitoring
    initPerformanceMonitoring() {
        // Monitor Core Web Vitals
        if ('web-vital' in window) {
            // This would require the web-vitals library
            // For now, just log basic timing info
            window.addEventListener('load', () => {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log(`Page load time: ${loadTime}ms`);
            });
        }
        
        // Monitor memory usage (if supported)
        if ('memory' in performance) {
            setInterval(() => {
                const memInfo = performance.memory;
                if (memInfo.usedJSHeapSize > memInfo.jsHeapSizeLimit * 0.9) {
                    console.warn('High memory usage detected');
                }
            }, 30000);
        }
    }
    
    // FAQ functionality
    initFAQToggle() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => {
                    // Close other open FAQ items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            }
        });
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.devOpsApp = new DevOpsApp();
});

// Export utilities for global use
window.DevOpsUtils = DevOpsUtils;

// Service Worker registration (if available)
if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered successfully');
            })
            .catch(error => {
                console.log('ServiceWorker registration failed');
            });
    });
} 