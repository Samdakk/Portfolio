// skills.js - Handles the skills section functionality and chart visualization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Skills section initialized');
    
    // Initialize skill card flip effects
    initializeSkillCardFlip();
    
    // Initialize skill progress bars
    initializeSkillBars();
    
    // Initialize skill chart
    initializeSkillChart();
});

// Initialize the flip effect for skill cards
function initializeSkillCardFlip() {
    const flipButtons = document.querySelectorAll('.skill-flip-btn');
    
    flipButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent skill card
            const skillCard = this.closest('.skill-card');
            
            // Toggle flipped class
            skillCard.classList.toggle('flipped');
        });
    });
}

// Initialize and animate skill progress bars
function initializeSkillBars() {
    // Setup intersection observer to trigger progress bar animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get all progress bars within this card
                const progressBars = entry.target.querySelectorAll('.progress-fill');
                const percentageElements = entry.target.querySelectorAll('.skill-percentage');
                
                // Animate each progress bar
                progressBars.forEach((bar, index) => {
                    const percentage = bar.getAttribute('data-percentage');
                    
                    // Animate the width
                    setTimeout(() => {
                        bar.style.width = `${percentage}%`;
                        
                        // Update the percentage text if available
                        if (percentageElements[index]) {
                            animatePercentage(percentageElements[index], percentage);
                        }
                    }, 100 * index); // Stagger the animations
                });
                
                // Stop observing once triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    // Observe all skill card backs
    document.querySelectorAll('.skill-card-back').forEach(card => {
        observer.observe(card);
    });
}

// Function to animate percentage counter
function animatePercentage(element, targetPercentage) {
    const duration = 1500; // Animation duration in ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const startValue = 0;
    const endValue = parseInt(targetPercentage);
    
    // Calculate increment per frame
    const increment = (endValue - startValue) / totalFrames;
    
    // Start the animation loop
    const counter = setInterval(() => {
        frame++;
        
        // Calculate current value
        const currentValue = Math.round(startValue + (increment * frame));
        
        // Update the element
        element.textContent = `${currentValue}%`;
        
        // Check if we've reached the target
        if (frame >= totalFrames) {
            clearInterval(counter);
            element.textContent = `${endValue}%`;
        }
    }, frameDuration);
}

// Initialize the skills chart using ECharts
function initializeSkillChart() {
    const chartContainer = document.getElementById('skill-chart');
    if (!chartContainer) return;
    
    // Initialize ECharts instance
    if(!window.echarts) window.echarts = echarts;
    window.skillsChart = echarts.init(chartContainer);

    
    // Skill data
    const skillCategories = [
        'JavaScript', 'React', 'Node.js', 'CSS/SCSS', 
        'Vue.js', 'TypeScript', 'MongoDB', 'PostgreSQL',
        'Docker', 'AWS'
    ];
    
    const skillValues = [95, 90, 85, 92, 85, 80, 78, 75, 72, 70];
    
    // Chart configuration
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                const data = params[0];
                return `${data.name}: <strong>${data.value}%</strong>`;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            max: 100,
            axisLabel: {
                formatter: '{value}%'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#e2e8f0'
                }
            }
        },
        yAxis: {
            type: 'category',
            data: skillCategories,
            axisLabel: {
                color: '#4b5563',
                fontWeight: 500
            }
        },
        series: [
            {
                name: 'Skill Level',
                type: 'bar',
                data: skillValues,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: '#6366f1' },
                        { offset: 1, color: '#8b5cf6' }
                    ])
                },
                barWidth: '60%',
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{c}%',
                    color: '#4b5563'
                }
            }
        ],
        animationDuration: 2000,
        animationEasing: 'elasticOut'
    };
    
    // Set chart options and render
    window.skillsChart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        window.skillsChart.resize();
    });

    // Ensure the chart animates when it comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    window.skillsChart.resize();
                }, 100);
                
                // Stop observing once triggered
                observer.unobserve(entry.target);
            }
        }); // Closing for entries.forEach
    }, {
        threshold: 0.1
    });
    
    observer.observe(chartContainer)
}

