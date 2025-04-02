// Items to be displayed in the scroller
const lyeItems = [
    { id: 1, content: "Image 1", imageUrl: "../assests/previous_year_edition/picture_1.jpg" },
    { id: 2, content: "Image 2", imageUrl: "../assests/previous_year_edition/picture_2.jpg" },
    { id: 3, content: "Image 3", imageUrl: "../assests/previous_year_edition/picture_3.jpg" },
    { id: 4, content: "Image 4", imageUrl: "../assests/previous_year_edition/picture_4.jpg" },
    { id: 5, content: "Image 5", imageUrl: "../assests/previous_year_edition/picture_5.jpg" },
    { id: 6, content: "Image 6", imageUrl: "../assests/previous_year_edition/picture_6.jpg" },
    { id: 7, content: "Image 7", imageUrl: "../assests/previous_year_edition/picture_7.jpg" },
    { id: 8, content: "Image 8", imageUrl: "../assests/previous_year_edition/picture_8.jpg" },
    { id: 9, content: "Image 9", imageUrl: "../assests/previous_year_edition/picture_9.jpg" },
    { id: 10, content: "Image 10", imageUrl: "../assests/previous_year_edition/picture_10.jpg"}
];

// Get DOM elements
const lyeScroller = document.getElementById('lyeScroller');
const lyeScrollerContainer = document.getElementById('lyeScrollerContainer');

// Function to create a scroll item with image
function createLyeScrollItem(item, index) {
    const scrollItem = document.createElement('div');
    scrollItem.className = 'lye-scroll-item';
    scrollItem.setAttribute('data-id', `lye-${item.id}-${index}`);
    
    // Create image element
    const img = document.createElement('img');
    img.src = item.imageUrl;
    img.alt = item.content || 'Last year edition image';
    img.className = 'lye-scroll-image';
    
    scrollItem.appendChild(img);
    return scrollItem;
}

// Function to initialize the scroller
function initLyeScroller() {
    // Clear any existing content
    lyeScroller.innerHTML = '';
    
    // Populate the scroller with original items
    lyeItems.forEach((item, index) => {
        lyeScroller.appendChild(createLyeScrollItem(item, 'original'));
    });

    // Duplicate items to create the illusion of infinite scrolling
    lyeItems.forEach((item, index) => {
        lyeScroller.appendChild(createLyeScrollItem(item, 'duplicate'));
    });

    // Check if more items are needed
    checkLyeScrollerWidth();
}

// Add pause functionality on hover
lyeScrollerContainer.addEventListener('mouseenter', () => {
    lyeScroller.style.animationPlayState = 'paused';
});

lyeScrollerContainer.addEventListener('mouseleave', () => {
    lyeScroller.style.animationPlayState = 'running';
});

// Check if items need to be added dynamically based on viewport width
function checkLyeScrollerWidth() {
    const scrollerWidth = lyeScroller.offsetWidth;
    const containerWidth = lyeScrollerContainer.offsetWidth;
    
    // If we need more items to fill the scroller for wider screens
    if (scrollerWidth < containerWidth * 3) {
        // Add more duplicates as needed
        lyeItems.forEach((item, index) => {
            lyeScroller.appendChild(createLyeScrollItem(item, 'extra'));
        });
    }
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', initLyeScroller);

// Run on resize
window.addEventListener('resize', checkLyeScrollerWidth);