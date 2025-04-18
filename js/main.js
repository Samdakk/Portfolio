document.addEventListener('DOMContentLoaded', function () {
// JavaScript code here

// Example: Adding event listeners for skill flip buttons
document.querySelectorAll('.skill-flip-btn').forEach(button => {
button.addEventListener('click', function () {
const skillCard = button.closest('.skill-card');
skillCard.classList.toggle('flipped');

// Update progress bars
const progressBars = skillCard.querySelectorAll('.progress-bar');
progressBars.forEach(bar => {
const fill = bar.querySelector('.progress-fill');
const percentage = fill.getAttribute('data-percentage');
fill.style.width = percentage;
bar.querySelector('.skill-percentage').textContent = percentage;
});
});
});

// Example: Custom cursor
const customCursor = document.querySelector('.custom-cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', function (e) {
customCursor.style.left = e.clientX + 'px';
customCursor.style.top = e.clientY + 'px';
cursorDot.style.left = e.clientX + 'px';
cursorDot.style.top = e.clientY + 'px';
});

// Example: Section animation on scroll
const sections = document.querySelectorAll('.section');
const options = {
root: null,
rootMargin: '0px',
threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
observer.unobserve(entry.target);
}
});
}, options);

sections.forEach(section => {
observer.observe(section);
});
});
