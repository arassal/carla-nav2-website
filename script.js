// ============================================
// WEBSITE FUNCTIONALITY
// ============================================

// Load and display project updates
function loadUpdates() {
    const updatesContainer = document.getElementById('updates-content');

    if (!updatesContainer) return;

    updatesContainer.innerHTML = '';

    projectUpdates.forEach((update, index) => {
        const updateCard = document.createElement('div');
        updateCard.className = 'update-card';
        updateCard.style.animationDelay = `${index * 0.1}s`;
        updateCard.innerHTML = `
            <div class="update-date">${update.date}</div>
            <div class="update-title">${update.title}</div>
            <div class="update-desc">${update.description}</div>
        `;
        updatesContainer.appendChild(updateCard);
    });
}

// Smooth scroll for navigation links
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

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll(
    '.vision-card, .feature-card, .team-member, .tech-card, .metric-box, .validation-card, .contact-box, .update-card'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (if you add a hamburger menu later)
function setupMobileMenu() {
    // This is a placeholder for mobile menu functionality
    // Can be expanded later if needed
}

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.borderBottom = '2px solid var(--primary)';
        } else {
            link.style.borderBottom = 'none';
        }
    });
});

// Add animation to stats on hero load
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (target > 0) {
            let current = 0;
            const increment = target / 30;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 30);
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadUpdates();
    setupMobileMenu();

    // Animate stats after a short delay
    setTimeout(animateStats, 500);

    // Log initialization
    console.log('🎉 CARLA Nav2 Website loaded successfully');
    console.log('📊 Project Updates:', projectUpdates.length);
    console.log('👥 Team Members:', teamInfo.mentees.length + 1);
});

// Export data for debugging
window.projectData = {
    projectUpdates,
    teamInfo,
    performanceMetrics,
    validationStatus,
    capabilities,
    techStack,
    repositoryLinks
};

// Print project summary to console
console.log(`
╔═══════════════════════════════════════════════════════╗
║    CARLA + ROS2 Navigation Stack                      ║
║    Professional Autonomous Navigation Pipeline        ║
║═══════════════════════════════════════════════════════╝

📊 Project Overview:
   - Professional autonomous navigation system
   - CARLA 0.10.0 + ROS2 Humble + Navigation2 stack
   - Sim-to-real pipeline ready
   - Original implementation by AVL mentor team

👥 Team:
   - Leader: Alexander (arassal)
   - Mentees: jchy05, AdamCastillo07, Adrian (Ad-Tap)

🎯 Key Metrics:
   - Control Loop: 20 Hz
   - Latency: 40-50 ms
   - CPU Usage: 30-40%
   - Memory: 2.5 GB

📍 Links:
   - GitHub: ${repositoryLinks.main}
   - Contributing: ${repositoryLinks.contributing}

✨ Website: Dynamic content management enabled
   - Easy to update with new images
   - Automatic data loading from data.js
   - Professional presentation ready

Powered by: Professional autonomous driving research
`);
