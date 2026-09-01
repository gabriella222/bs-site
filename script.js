// ==================== WHATSAPP INTEGRATION ====================
const WHATSAPP_PHONE = '5519989203474';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar uma revisão na Auto Mecânica BS.';

function openWhatsApp() {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappURL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// ==================== SMOOTH SCROLL FOR NAVIGATION ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== WHATSAPP BUTTON EVENTS ====================
document.addEventListener('DOMContentLoaded', function() {
    // Get all WhatsApp buttons
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsApp();
        });
    });

    // Add keyboard support
    whatsappButtons.forEach(button => {
        button.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openWhatsApp();
            }
        });
    });

    // Initialize Intersection Observer for scroll animations
    initScrollAnimations();

    // Initialize mobile menu select
    initMobileMenuSelect();
});

// ==================== MOBILE MENU SELECT ====================
function initMobileMenuSelect() {
    const navSelect = document.getElementById('nav-menu');
    
    if (navSelect) {
        navSelect.addEventListener('change', function() {
            const href = this.value;
            
            if (href) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            
            // Reset select to default
            this.value = '';
        });
    }
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    // Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all major sections
    const sections = document.querySelectorAll(
        '.hero-section, .services-section, .differentials-section, .testimonials-section, .cta-final-section'
    );

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ==================== MOBILE MENU (IF NEEDED) ====================
function initMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    
    // Create hamburger if on mobile
    if (window.innerWidth <= 768) {
        // Mobile-specific behavior
    }
}

// ==================== NAVIGATION STICKY EFFECT ====================
document.addEventListener('scroll', function() {
    const navigation = document.querySelector('.navigation');
    
    if (window.scrollY > 50) {
        navigation.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navigation.style.boxShadow = 'none';
    }
});

// ==================== PARALLAX EFFECT FOR HERO ====================
document.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroSection && heroBackground) {
        const scrollPosition = window.scrollY;
        const heroTop = heroSection.offsetTop;
        
        if (scrollPosition < heroTop + heroSection.offsetHeight) {
            const parallaxOffset = (scrollPosition - heroTop) * 0.5;
            heroBackground.style.transform = `translateY(${parallaxOffset}px)`;
        }
    }
});

// ==================== ACTIVE NAVIGATION LINK ====================
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--color-text-secondary)';
        
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--color-cyan)';
        }
    });
});

// ==================== PHONE LINK ====================
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumbers = document.querySelectorAll('.phone-number');
    
    phoneNumbers.forEach(phone => {
        phone.style.cursor = 'pointer';
        phone.addEventListener('click', function(e) {
            // On mobile, allow dialing
            if (window.innerWidth <= 768) {
                window.location.href = 'tel:+5519989203474';
            } else {
                // Copy to clipboard or show WhatsApp
                openWhatsApp();
            }
        });
    });
});

// ==================== CONTACT LINK HANDLING ====================
document.addEventListener('DOMContentLoaded', function() {
    // Make contact items clickable/copyable
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const contactValue = this.querySelector('.contact-value');
            const label = this.querySelector('.contact-label');
            
            if (label.textContent.includes('Endereço')) {
                // Open in maps
                const address = 'R. Antônio Bacchi, 939 - Paulicéia, Piracicaba - SP, 13424-070';
                const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
                window.open(mapsUrl, '_blank');
            } else if (label.textContent.includes('Telefone')) {
                // Open WhatsApp
                openWhatsApp();
            }
        });
    });
});

// ==================== HOVER EFFECTS ====================
document.addEventListener('DOMContentLoaded', function() {
    // Service cards hover
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--color-cyan)';
            this.style.transform = 'translateY(-8px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'var(--color-border)';
            this.style.transform = 'translateY(0)';
        });
    });

    // Testimonial cards hover
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--color-cyan)';
            this.style.transform = 'translateY(-8px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'var(--color-border)';
            this.style.transform = 'translateY(0)';
        });
    });

    // Brand badge hover
    const brandBadges = document.querySelectorAll('.brand-badge');
    brandBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--color-blue)';
            this.style.color = 'var(--color-text-primary)';
            this.style.transition = 'all 0.3s ease';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--color-bg-dark)';
            this.style.color = 'var(--color-text-primary)';
        });
    });
});

// ==================== RESPONSIVE HANDLER ====================
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        // Mobile-specific adjustments
    } else {
        // Desktop-specific adjustments
    }
});

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', function() {
    // Fade in entire page
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.6s ease';
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ==================== CONSOLE MESSAGE ====================
console.log(
    '%c🔧 Auto Mecânica BS - Landing Page',
    'font-size: 16px; font-weight: bold; color: #00e1ff;'
);
console.log(
    '%cFale conosco: (19) 98920-3474',
    'font-size: 14px; color: #25d366;'
);
