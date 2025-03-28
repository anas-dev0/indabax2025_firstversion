document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    const logoContainer = document.getElementById('logoContainer');
    const expandingCircle = document.getElementById('expandingCircle');
    const progcont =document.querySelector(".progress-container")
    // ===== CONTROL LOADING TIME HERE =====
    // Set the loading duration in milliseconds (e.g., 3000 = 3 seconds)
    const LOADING_DURATION = 1500; 
    // ====================================
    
    let progress = 0;
    const startTime = Date.now();
    const endTime = startTime + LOADING_DURATION;
    
    // Function to update progress based on elapsed time
    function updateProgress() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        progress = Math.min(100, (elapsedTime / LOADING_DURATION) * 100);
        
        // Update progress bar and text
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `Loading... ${Math.round(progress)}%`;
        
        if (progress < 100) {
            // Continue updating if not complete
            requestAnimationFrame(updateProgress);
        } else {
            progcont.classList.add('no_display')
            // Loading complete - animate logo getting bigger
            logoContainer.classList.add('completed');
            
            // Wait a moment after logo grows, then expand the circle
            setTimeout(() => {
                // Start circle expansion
                expandingCircle.classList.add('expand');
                
                // After circle expansion completes, transition to main content
                setTimeout(() => {
                    // Hide loading screen but keep the background color
                    loadingScreen.style.opacity = '0';
                    loadingScreen.style.pointerEvents = 'none';
                    
                    // Show main content
                    //mainContent.style.display = 'block';
                    
                    // After transition completes, remove the loading screen from DOM
                    // but keep the background color of the page unchanged
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }, 500); // Match this with the circle expansion duration
            }, 800);
        }
    }
    
    // Start the progress update
    requestAnimationFrame(updateProgress);
});
window.onload = function() {
    window.scrollTo(0, 0);
};