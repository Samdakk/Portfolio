// portfolio-data.js - Contains portfolio information and configuration data
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio data initialized');
    
    // Load portfolio data into the site
    updatePortfolioInformation();
});

// Portfolio configuration data
const portfolioData = {
    // Personal information
    personal: {
        name: "John Doe",
        title: "Full Stack Developer",
        tagline: "Creating innovative web experiences with modern technologies",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        bio: [
            "I am a passionate Full Stack Developer with 5+ years of experience building web and mobile applications. My journey in tech started when I built my first website at 15, and I've been hooked ever since.",
            "With a background in Computer Science and continuous self-learning, I've developed expertise in both frontend and backend technologies, allowing me to create complete, production-ready applications.",
            "I enjoy working on challenging projects that push me to learn new skills and technologies. When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new frameworks."
        ]
    },

    // Social media links
    social: {
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        dribbble: "https://dribbble.com/johndoe"
    },

    // Skills information
    skills: {
        frontend: [
            { name: "React", percentage: 90 },
            { name: "Vue.js", percentage: 85 },
            { name: "CSS/SCSS", percentage: 95 },
            { name: "Tailwind CSS", percentage: 90 }
        ],
        backend: [
            { name: "Node.js", percentage: 85 },
            { name: "Express", percentage: 90 },
            { name: "MongoDB", percentage: 80 },
            { name: "PostgreSQL", percentage: 75 }
        ],
        devops: [
            { name: "Docker", percentage: 80 },
            { name: "AWS", percentage: 75 },
            { name: "CI/CD", percentage: 70 },
            { name: "Git", percentage: 95 }
        ],
        // Chart data
        chart: {
            categories: [
                'JavaScript', 'React', 'Node.js', 'CSS/SCSS', 
                'Vue.js', 'TypeScript', 'MongoDB', 'PostgreSQL',
                'Docker', 'AWS'
            ],
            values: [95, 90, 85, 92, 85, 80, 78, 75, 72, 70]
        }
    },

    // Projects information
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with product catalog, user accounts, and payment processing.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            icon: "ri-shopping-cart-2-line",
            github: "https://github.com/johndoe/ecommerce-platform",
            demo: "https://ecommerce-platform-demo.example.com",
            featured: true
        },
        {
            title: "Chat Application",
            description: "Real-time messaging platform with user authentication and message persistence.",
            technologies: ["Vue.js", "Firebase", "WebSockets"],
            icon: "ri-message-3-line",
            github: "https://github.com/johndoe/chat-app",
            demo: "https://chat-app-demo.example.com",
            featured: true
        },
        {
            title: "Analytics Dashboard",
            description: "Interactive data visualization platform for monitoring business metrics.",
            technologies: ["React", "D3.js", "Express", "PostgreSQL"],
            icon: "ri-dashboard-3-line",
            github: "https://github.com/johndoe/analytics-dashboard",
            demo: "https://analytics-dashboard-demo.example.com",
            featured: true
        },
        {
            title: "Task Management App",
            description: "Collaborative task management tool with kanban board and team features.",
            technologies: ["React", "Redux", "Node.js", "MongoDB"],
            icon: "ri-task-line",
            github: "https://github.com/johndoe/task-manager",
            demo: "https://task-manager-demo.example.com",
            featured: false
        },
        {
            title: "Weather Application",
            description: "Real-time weather forecasting app with location-based services.",
            technologies: ["JavaScript", "WeatherAPI", "HTML/CSS"],
            icon: "ri-sun-line",
            github: "https://github.com/johndoe/weather-app",
            demo: "https://weather-app-demo.example.com",
            featured: false
        },
        {
            title: "Portfolio Website",
            description: "Interactive 3D developer portfolio showcasing projects and skills.",
            technologies: ["HTML", "Tailwind CSS", "JavaScript", "Three.js"],
            icon: "ri-layout-4-line",
            github: "https://github.com/johndoe/portfolio",
            demo: "https://johndoe-portfolio.example.com",
            featured: false
        }
    ],

    // Services/expertise information
    services: [
        {
            title: "Web Development",
            description: "Crafting responsive, performant websites and web applications using modern frameworks and technologies.",
            icon: "ri-code-box-line"
        },
        {
            title: "Mobile Development",
            description: "Building cross-platform mobile applications that deliver seamless user experiences across devices.",
            icon: "ri-smartphone-line"
        },
        {
            title: "Backend Development",
            description: "Designing robust server-side architectures and APIs that power modern web applications.",
            icon: "ri-database-2-line"
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive user interfaces and experiences that delight users and meet business goals.",
            icon: "ri-paint-brush-line"
        },
        {
            title: "DevOps & Deployment",
            description: "Setting up CI/CD pipelines, containerization, and cloud infrastructure for seamless deployment.",
            icon: "ri-cloud-line"
        },
        {
            title: "Consultation",
            description: "Providing expert guidance on technology choices, architecture decisions, and development best practices.",
            icon: "ri-question-answer-line"
        }
    ]
};

// Function to populate the website with the portfolio data
function updatePortfolioInformation() {
    console.log('updatePortfolioInformation');
    // Update personal information
    updatePersonalInfo();
    
    // Update social media links
    updateSocialLinks();
    
    // Update projects (only featured ones are shown by default)
    updateProjects();
    
    // Update skills chart data
    updateSkillsData();
}

// Function to update personal information across the site
function updatePersonalInfo() {
    const { name, title, tagline, email, phone, location, bio } = portfolioData.personal;
    
    // Update hero section
    const heroName = document.querySelector('#hero h1 span');
    const heroTitle = document.querySelector('#hero p.text-xl, #hero p.text-2xl');
    const heroTagline = document.querySelector('#hero p.text-gray-600');
    
    if (heroName) heroName.textContent = name;
    if (heroTitle) heroTitle.textContent = title;
    if (heroTagline) heroTagline.textContent = tagline;
    
    // Update about section bio
    const bioContainer = document.querySelector('#about .md\\:w-2\\/3');
    if (bioContainer) {
        const bioParagraphs = bioContainer.querySelectorAll('p.text-gray-700');
        bio.forEach((paragraph, index) => {
            if (bioParagraphs[index]) {
                bioParagraphs[index].textContent = paragraph;
            }
        });
    }
    
    // Update contact information
    const emailElement = document.querySelector('#contact .text-gray-600:nth-of-type(2)');
    const phoneElement = document.querySelector('#contact .text-gray-600:nth-of-type(3)');
    const locationElement = document.querySelector('#contact .text-gray-600:nth-of-type(1)');
    
    if (emailElement) emailElement.textContent = email;
    if (phoneElement) phoneElement.textContent = phone;
    if (locationElement) locationElement.textContent = location;
    
    // Update footer
    const footerName = document.querySelector('footer h2');
    const footerTitle = document.querySelector('footer p.text-gray-300');
    
    if (footerName) footerName.textContent = name;
    if (footerTitle) footerTitle.textContent = title;
}

// Function to update social media links
function updateSocialLinks() {
    const { github, linkedin, twitter, dribbble } = portfolioData.social;
    
    const socialLinks = document.querySelectorAll('.social-icon');
    if (socialLinks.length >= 4) {
        if (socialLinks[0]) socialLinks[0].href = linkedin;
        if (socialLinks[1]) socialLinks[1].href = github;
        if (socialLinks[2]) socialLinks[2].href = twitter;
        if (socialLinks[3]) socialLinks[3].href = dribbble;
    }
}

// Function to update projects section
function updateProjects() {
    const projectsContainer = document.querySelector('#projects .grid');
    if (!projectsContainer) return;
    
    // Clear existing projects
    // projectsContainer.innerHTML = '';
    
    // Add featured projects (if not already displayed)
    const featuredProjects = portfolioData.projects.filter(project => project.featured);
    const existingCardCount = projectsContainer.querySelectorAll('.project-card').length;
    
    if (existingCardCount === featuredProjects.length) {
        // Update existing project cards
        const projectCards = projectsContainer.querySelectorAll('.project-card');
        
        projectCards.forEach((card, index) => {
            const project = featuredProjects[index];
            
            // Update project information
            const title = card.querySelector('h3');
            const description = card.querySelector('p.text-gray-600');
            const icon = card.querySelector('.project-img i');
            const technologies = card.querySelector('.flex.flex-wrap.gap-2.mb-4');
            const githubLink = card.querySelector('a[href]:first-of-type');
            const demoLink = card.querySelector('a[href]:last-of-type');
            
            if (title) title.textContent = project.title;
            if (description) description.textContent = project.description;
            if (icon) icon.className = `${project.icon} ri-3x text-white`;
            
            // Update technologies
            if (technologies && project.technologies) {
                technologies.innerHTML = '';
                project.technologies.forEach(tech => {
                    const techSpan = document.createElement('span');
                    techSpan.className = 'tech-tag';
                    techSpan.textContent = tech;
                    technologies.appendChild(techSpan);
                });
            }
            
            // Update links
            if (githubLink) githubLink.href = project.github;
            if (demoLink) demoLink.href = project.demo;
        });
    }
}

// Add a console.log to check if the data is being loaded
console.log('portfolioData:', portfolioData);

// Function to update skills data in the chart
function updateSkillsData() {
    const chartContainer = document.getElementById('skill-chart');
    if (!chartContainer) return;
    
    // The chart will be initialized in skills.js with the data from portfolioData.skills.chart
    window.portfolioSkillsData = {
        categories: portfolioData.skills.chart.categories,
        values: portfolioData.skills.chart.values
    };
    
    // Check if ECharts instance exists and is ready
    if (echarts && window.skillsChart) {
        window.skillsChart.setOption({
            yAxis: {
                data: window.portfolioSkillsData.categories
            },
            series: [{
                data: window.portfolioSkillsData.values
            }]
        });
    }
}