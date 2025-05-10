// animations.js - Handles all animation effects for the portfolio
document.addEventListener('DOMContentLoaded', function() {
    console.log('Animations initialized');
    
    // Initialize GSAP animations
    initializeGsapAnimations();
    
    // Initialize tilt effect on cards
    initializeTiltEffect();
    
    // Initialize project card animations
    initializeProjectCards();
});

// Initialize GSAP animations for various elements
function initializeGsapAnimations() {
    // Hero section animations
    gsap.from('#hero h1', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2
    });
    
    gsap.from('#hero p', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.5
    });
    
    gsap.from('#hero .flex', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8
    });
    
    gsap.from('.cube-container', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        delay: 1.0,
        ease: "back.out(1.7)"
    });

    // Animate sections on scroll
    gsap.registerPlugin(ScrollTrigger);
    
    // About section cards animation
    gsap.utils.toArray('.tilt-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.2
        });
    });
    
    // Skills section animation
    gsap.from('#skills .skill-card', {
        scrollTrigger: {
            trigger: '#skills',
            start: "top bottom-=100"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2
    });
    
    // Projects section animation
    gsap.from('#projects .project-card', {
        scrollTrigger: {
            trigger: '#projects',
            start: "top bottom-=100"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2
    });
    
    // Contact section animation
    gsap.from('#contact form', {
        scrollTrigger: {
            trigger: '#contact',
            start: "top bottom-=100"
        },
        opacity: 0,
        x: -30,
        duration: 0.8
    });
    
    gsap.from('#contact .bg-white:last-child', {
        scrollTrigger: {
            trigger: '#contact',
            start: "top bottom-=100"
        },
        opacity: 0,
        x: 30,
        duration: 0.8
    });
}

// Initialize tilt effect on cards for subtle interactivity
function initializeTiltEffect() {
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            // Get position of mouse cursor over card
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Calculate rotation angles
            const multiplier = 10;
            const rotateX = y / -multiplier;
            const rotateY = x / multiplier;
            
            // Apply transformation
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset transformation
            this.style.transform = 'translateY(-5px)';
            
            // Smooth transition back
            this.style.transition = 'transform 0.5s ease';
            setTimeout(() => {
                this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            }, 500);
        });
    });
}

// Enhance project cards with hover effects and animations
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.project-img').style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.project-img').style.transform = 'scale(1.0)';
            this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        });
    });
}