document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('#Footer footer');
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Random size between 3px and 8px
        const size = Math.random() * 5 + 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random position
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = Math.random() * 15 + 10;
        particle.style.animationDuration = duration + 's';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        footer.appendChild(particle);
    }
});

  