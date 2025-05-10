// cursor.js - Handles custom cursor effects for an interactive experience
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cursor effects initialized');
    
    // Initialize custom cursor effects
    initializeCustomCursor();
});

// Initialize and manage the custom cursor effects
function initializeCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    if (!cursor || !cursorDot) return;
    
    // Check if device has touch capability - disable custom cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
        return;
    }
    
    // Variables for storing mouse coordinates
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let cursorDotX = 0;
    let cursorDotY = 0;
    
    // Mouse move event to track cursor position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Handles cursor over interactive elements
    const handleLinkHoverInteraction = () => {
        // Find all interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .tilt-card, .project-card, .skill-flip-btn');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '50px';
                cursor.style.height = '50px';
                cursor.style.backgroundColor = 'rgba(99, 102, 241, 0.2)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '30px';
                cursor.style.height = '30px';
                cursor.style.backgroundColor = 'rgba(99, 102, 241, 0.3)';
            });
        });
    };
    
    // Animation loop for smooth cursor movement
    const animate = () => {
        // Calculate smooth movement for main cursor (slower)
        const easeAmount = 0.2;
        cursorX += (mouseX - cursorX) * easeAmount;
        cursorY += (mouseY - cursorY) * easeAmount;
        
        // Calculate smooth movement for cursor dot (faster)
        const dotEaseAmount = 0.5;
        cursorDotX += (mouseX - cursorDotX) * dotEaseAmount;
        cursorDotY += (mouseY - cursorDotY) * dotEaseAmount;
        
        // Apply transformations
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        cursorDot.style.transform = `translate(${cursorDotX}px, ${cursorDotY}px)`;
        
        requestAnimationFrame(animate);
    };
    
    // Add class when cursor reaches edge of the screen
    const handleEdgeDetection = () => {
        document.addEventListener('mousemove', (e) => {
            const edgeThreshold = 50;
            
            // Check if cursor is near the edge
            const nearLeftEdge = e.clientX < edgeThreshold;
            const nearRightEdge = e.clientX > window.innerWidth - edgeThreshold;
            const nearTopEdge = e.clientY < edgeThreshold;
            const nearBottomEdge = e.clientY > window.innerHeight - edgeThreshold;
            
            if (nearLeftEdge || nearRightEdge || nearTopEdge || nearBottomEdge) {
                cursor.classList.add('near-edge');
            } else {
                cursor.classList.remove('near-edge');
            }
        });
    };
    
    // Hide cursor when it leaves the window
    document.addEventListener('mouseout', (e) => {
        if (e.relatedTarget === null) {
            cursor.style.opacity = '0';
            cursorDot.style.opacity = '0';
        }
    });
    
    document.addEventListener('mouseover', () => {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
    });
    
    // Initialize cursor effects
    handleLinkHoverInteraction();
    handleEdgeDetection();
    animate();
    
    // Add cursor click animation
    document.addEventListener('mousedown', () => {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(0.8)`;
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1)`;
    });
}