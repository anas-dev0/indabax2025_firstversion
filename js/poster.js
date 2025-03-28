document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const modal = document.getElementById('faq-modal');
    const readMoreBtn = document.getElementById('read-more-btn');
    const closeBtn = document.querySelector('.close-btn');
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Open modal when Read More button is clicked
    readMoreBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling of background
    });
    
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal when ESC key is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Toggle FAQ answers when questions are clicked
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            // First, close all other questions
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('active');
                    
                    // Update icon
                    const qIcon = q.querySelector('i');
                    qIcon.classList.remove('fa-chevron-up');
                    qIcon.classList.add('fa-chevron-down');
                }
            });
            
            // Then toggle the clicked question
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active');
            
            // Update the icon
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
    
    // Set the first question as active by default
    if (faqQuestions.length > 0) {
        const firstQuestion = faqQuestions[0];
        const firstAnswer = firstQuestion.nextElementSibling;
        
        firstQuestion.classList.add('active');
        firstAnswer.classList.add('active');
        
        // Update icon
        const icon = firstQuestion.querySelector('i');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
});