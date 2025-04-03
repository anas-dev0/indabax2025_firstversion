document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    const logoContainer = document.getElementById('logoContainer');
    const expandingCircle = document.getElementById('expandingCircle');
    const progcont = document.querySelector(".progress-container");
    
    let progress = 0;
    let isLoaded = false;
    
    // Function to track loading progress
    function trackLoadingProgress() {
        const resources = Array.from(document.querySelectorAll('script, img, link[rel="stylesheet"]'));
        const totalResources = Math.max(1, resources.length);
        let loadedResources = 0;
        
        // Update progress bar based on loaded resources
        function updateProgressBar() {
            const currentProgress = Math.min(95, Math.round((loadedResources / totalResources) * 100));
            
            // Ensure we don't decrease the progress
            if (currentProgress > progress) {
                progress = currentProgress;
                progressBar.style.width = `${progress}%`;
                progressText.textContent = `Loading... ${progress}%`;
            }
            
            // If we've detected page is ready, animate to 100%
            if (isLoaded && progress < 100) {
                animateToCompletion();
            }
        }
        
        // Check already loaded resources
        resources.forEach(resource => {
            if ((resource.tagName === 'LINK' && resource.sheet) || 
                (resource.tagName === 'IMG' && resource.complete) ||
                (resource.tagName === 'SCRIPT' && resource.readyState === 'complete')) {
                loadedResources++;
            }
        });
        
        // First update with initial state
        updateProgressBar();
        
        // When window loads, complete the progress
        window.addEventListener('load', function() {
            isLoaded = true;
            animateToCompletion();
        });
        
        // Fallback to ensure we eventually show the site
        setTimeout(function() {
            isLoaded = true;
            animateToCompletion();
        }, 5000);
    }
    
    // Function to animate progress to 100%
    function animateToCompletion() {
        // Animate progress from current value to 100%
        const startProgress = progress;
        const startTime = Date.now();
        const duration = 500; // Animation duration in ms
        
        function step() {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progressDelta = elapsed / duration;
            
            if (progressDelta < 1) {
                progress = startProgress + Math.round((100 - startProgress) * progressDelta);
                progressBar.style.width = `${progress}%`;
                progressText.textContent = `Loading... ${progress}%`;
                requestAnimationFrame(step);
            } else {
                // Reached 100%
                progress = 100;
                progressBar.style.width = '100%';
                progressText.textContent = 'Loading... 100%';
                
                // Start transition animations
                completeLoading();
            }
        }
        
        // Start animation
        requestAnimationFrame(step);
    }
    
    // Function to handle transition animations after loading completes
    function completeLoading() {
        progcont.classList.add('no_display');
        logoContainer.classList.add('completed');
        
        setTimeout(() => {
            expandingCircle.classList.add('expand');
            
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 500);
        }, 800);
    }
    
    // Start tracking loading progress
    trackLoadingProgress();
});