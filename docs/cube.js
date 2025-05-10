// cube.js - Handles the 3D cube interactions in the hero section
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cube effects initialized');
    
    // Initialize the cube animation and interaction
    initializeCube();
});

// Initialize and manage the 3D cube animation and interaction
function initializeCube() {
    const cube = document.querySelector('.cube');
    if (!cube) return;
    
    // Variables for tracking mouse movement
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    const sensitivity = 0.05; // Adjust sensitivity of rotation
    
    // Store the original animation
    const originalAnimationName = cube.style.animation;
    let isAutoRotating = true;
    
    // Add mouse move event to rotate cube based on cursor position
    document.addEventListener('mousemove', function(e) {
        // Calculate mouse position relative to center of screen
        mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        
        // Convert mouse position to rotation angles
        targetRotationY = mouseX * 20; // Limit rotation to 20 degrees
        targetRotationX = -mouseY * 20;
    });
    
    // Function to toggle between auto-rotation and interactive mode
    function toggleCubeMode() {
        isAutoRotating = !isAutoRotating;
        
        if (isAutoRotating) {
            // Resume auto-rotation
            cube.style.animation = originalAnimationName;
            cube.style.transform = '';
        } else {
            // Stop auto-rotation and enable interactive mode
            cube.style.animation = 'none';
        }
    }
    
    // Add click event to toggle between auto-rotation and interactive mode
    cube.addEventListener('click', toggleCubeMode);
    
    // Add hover event to pause auto-rotation
    cube.addEventListener('mouseenter', function() {
        if (isAutoRotating) {
            cube.style.animationPlayState = 'paused';
        }
    });
    
    // Resume auto-rotation when mouse leaves
    cube.addEventListener('mouseleave', function() {
        if (isAutoRotating) {
            cube.style.animationPlayState = 'running';
        }
    });
    
    // Animation loop for smooth interactive rotation
    function animateCube() {
        // Only apply interactive rotation when not in auto-rotate mode
        if (!isAutoRotating) {
            // Apply easing for smooth rotation
            const easing = 0.1;
            currentRotationX += (targetRotationX - currentRotationX) * easing;
            currentRotationY += (targetRotationY - currentRotationY) * easing;
            
            // Apply the rotation
            cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
        }
        
        requestAnimationFrame(animateCube);
    }
    
    // Start the animation loop
    animateCube();
    
    // Add 3D depth effect to cube faces on hover
    const cubeFaces = document.querySelectorAll('.cube-face');
    cubeFaces.forEach(face => {
        face.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform.replace('translateZ', 'translateZ(85px) scale(1.05)');
            this.style.boxShadow = '0 0 15px rgba(99, 102, 241, 0.5)';
            this.style.transition = 'all 0.3s ease';
        });
        
        face.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace('translateZ(85px) scale(1.05)', 'translateZ(75px)');
            this.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Add touch support for mobile devices
    let touchStartX, touchStartY;
    cube.addEventListener('touchstart', function(e) {
        if (isAutoRotating) {
            toggleCubeMode(); // Switch to interactive mode on first touch
        }
        
        // Store initial touch position
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        e.preventDefault();
    });
    
    cube.addEventListener('touchmove', function(e) {
        if (!touchStartX || !touchStartY) return;
        
        // Calculate touch movement
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const deltaX = touchX - touchStartX;
        const deltaY = touchY - touchStartY;
        
        // Update rotation based on touch movement
        targetRotationY += deltaX * sensitivity;
        targetRotationX -= deltaY * sensitivity;
        
        // Update touch start position
        touchStartX = touchX;
        touchStartY = touchY;
        e.preventDefault();
    });
    
    // Reset touch tracking when touch ends
    cube.addEventListener('touchend', function() {
        touchStartX = null;
        touchStartY = null;
    });
}