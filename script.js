// Add smooth scrolling for better user experience
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add image loading animation
window.addEventListener('load', function() {
    const houseImg = document.getElementById('houseImg');
    if (houseImg) {
        houseImg.style.opacity = '0';
        setTimeout(() => {
            houseImg.style.transition = 'opacity 1s ease-in';
            houseImg.style.opacity = '1';
        }, 100);
    }
});

// Create particles
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Scroll progress indicator
function updateScrollProgress() {
    const scroll = document.createElement('div');
    scroll.className = 'scroll-progress';
    document.body.appendChild(scroll);
    
    window.addEventListener('scroll', () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = window.pageYOffset / height;
        scroll.style.transform = `scaleX(${progress})`;
    });
}

// Fade in elements on scroll
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    
    elements.forEach(element => observer.observe(element));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    updateScrollProgress();
    handleScrollAnimation();
});
