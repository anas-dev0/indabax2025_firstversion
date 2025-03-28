document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".trigger")
  const boundaries = document.querySelectorAll(".section-boundary")
  const textSections = document.querySelectorAll(".text-section")
  const featuredImage = document.getElementById("featured-image")
  const scrollSection = document.querySelector(".scroll-section")
  const contentWrapper = document.querySelector(".content-wrapper")
  let currentSection = "section1"
  let isInSection = false
  let scrollDirection = "down" // Track scroll direction
  let lastScrollTop = 0
  let initialScrollPassed = false // Track if initial scroll has happened
  const initialScrollThreshold = 50 // Pixels to scroll before transitioning from initial state
  let lastScrollDirection = "down" // Remember the last direction we entered the section with

  // Function to determine scroll direction
  function updateScrollDirection() {
    const st = window.pageYOffset || document.documentElement.scrollTop
    scrollDirection = st > lastScrollTop ? "down" : "up"
    lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
  }

  // Add scroll listener to track direction and handle initial state transition
  window.addEventListener("scroll", () => {
    updateScrollDirection()

    // Handle transition from initial centered image to side-by-side layout
    if (isInSection && !initialScrollPassed) {
      const scrollY = window.scrollY
      const sectionTop = scrollSection.offsetTop

      // Check if we've scrolled a certain amount from section start
      if (scrollY > sectionTop + initialScrollThreshold) {
        initialScrollPassed = true
        contentWrapper.classList.remove("initial-state")

        // After transition, activate the appropriate section based on scroll direction
        setTimeout(() => {
          if (lastScrollDirection === "down") {
            activateSection("section1")
          } else {
            // If coming from bottom, check if we should show section5
            const sectionHeight = scrollSection.offsetHeight
            const progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight)

            if (progress > 0.8) {
              activateSection("section5")
            } else {
              activateSection("section4")
            }
          }
        }, 600)
      } else if (scrollY < sectionTop && initialScrollPassed) {
        // Reset to initial state if scrolling back to top
        initialScrollPassed = false
        contentWrapper.classList.add("initial-state")
        textSections.forEach((section) => {
          section.classList.remove("active", "exit")
        })
      }
    }

    // Add subtle parallax effect to image
    // if (isInSection) {
    //   const scrollY = window.scrollY
    //   const sectionTop = scrollSection.offsetTop
    //   const sectionHeight = scrollSection.offsetHeight

    //   // Calculate position within section (0 to 1)
    //   const progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight)

    //   if (progress >= 0 && progress <= 1) {
    //     // Add subtle parallax effect to image (only vertical movement, no rotation)
    //     const translateY = (progress - 0.5) * 20 // -10px to +10px

    //     if (initialScrollPassed && currentSection !== "section5") {
    //       featuredImage.style.transform = `translateY(${translateY}px)`
    //     }
    //   }
    // }
  })

  // Create an observer for the entire scroll section
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        // Section is in view, determine if entering from top or bottom
        console.log("Section entering viewport, direction:", scrollDirection)

        if (!isInSection) {
          isInSection = true
          // Store the direction we entered with
          lastScrollDirection = scrollDirection

          // Different animation based on scroll direction
          if (scrollDirection === "down") {
            // Coming from top
            featuredImage.classList.remove("image-exit", "image-enter-bottom")
            featuredImage.classList.add("image-enter")

            // After a brief delay to see the enter animation
            setTimeout(() => {
              featuredImage.classList.remove("image-enter")
              featuredImage.classList.add("image-active")

              // Start in initial state with just the image
              contentWrapper.classList.add("initial-state")
              initialScrollPassed = false
            }, 200)
          } else {
            // Coming from bottom
            featuredImage.classList.remove("image-exit", "image-enter")
            featuredImage.classList.add("image-enter-bottom")

            setTimeout(() => {
              featuredImage.classList.remove("image-enter-bottom")
              featuredImage.classList.add("image-active")

              // When scrolling up from bottom, check if we should show section5
              const scrollY = window.scrollY
              const sectionTop = scrollSection.offsetTop
              const sectionHeight = scrollSection.offsetHeight
              const progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight)

              contentWrapper.classList.remove("initial-state")
              initialScrollPassed = true

              if (progress > 0.8) {
                // If we're in the last 20% of the scroll section, show section5
                activateSection("section5")
              } else {
                activateSection("section4")
              }

              // Important: Disable any automatic switching to section1
              // We'll clear any queued timeouts from other parts of the code
              clearTimeouts()
            }, 200)
          }
        }
      } else {
        // Only handle exit if we were previously in the section
        if (isInSection) {
          isInSection = false
          console.log("Section exiting viewport, direction:", scrollDirection)

          if (scrollDirection === "down") {
            // Exiting through bottom
            featuredImage.classList.remove("image-active", "image-enter", "image-enter-bottom")
            featuredImage.classList.add("image-exit")
            
          } else {
            // Exiting through top
            featuredImage.classList.remove("image-active", "image-enter", "image-enter-bottom")
            featuredImage.classList.add("image-exit")

            // Reset to initial state when scrolling up past the section
            // This is the key change to make the image return to center
            setTimeout(() => {
              contentWrapper.classList.add("initial-state")
              initialScrollPassed = false
            }, 300)
          }

          // Deactivate all text sections
          textSections.forEach((section) => {
            section.classList.add("exit")
            setTimeout(() => {
              section.classList.remove("active", "exit")
            }, 500)
          })

          // Reset initial scroll state when leaving section
          initialScrollPassed = false
        }
      }
    },
    {
      threshold: 0.1, // Trigger when at least 10% is visible
    },
  )

  // Store active timeouts so we can clear them if needed
  const activeTimeouts = []

  // Override setTimeout to keep track of timeouts
  const originalSetTimeout = window.setTimeout
  window.setTimeout = (fn, delay) => {
    const id = originalSetTimeout(fn, delay)
    activeTimeouts.push(id)
    return id
  }

  // Function to clear all pending timeouts
  function clearTimeouts() {
    while (activeTimeouts.length) {
      clearTimeout(activeTimeouts.pop())
    }
  }

  // Observe the scroll section
  sectionObserver.observe(scrollSection)

  // Content triggers observer - only activate after initial scroll has happened
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && isInSection && initialScrollPassed) {
          // Get the section ID this trigger is connected to
          const newSectionId = entry.target.dataset.section

          if (newSectionId !== currentSection) {
            // Start exit animation for current section
            document.getElementById(currentSection).classList.add("exit")

            // Start image transition - subtle change between sections
            if (1) {
              featuredImage.classList.remove("image-active")
              featuredImage.style.transform = `scale(0.95)`
            }

            // After a delay, change sections
            setTimeout(() => {
              // Remove all classes
              textSections.forEach((section) => {
                section.classList.remove("active", "exit")
              })

              // Update current section
              currentSection = newSectionId

              // Start entrance animations
              document.getElementById(newSectionId).classList.add("active")

              // Special handling for section5
              // For all sections, ensure the main logo is visible
                featuredImage.style.opacity = "1";

                // Image animation back to active
                setTimeout(() => {
                  featuredImage.style.transform = "";
                  featuredImage.classList.add("image-active");
                }, 50);
            }, 500)
          }
        }
      })
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is visible
    },
  )

  // Helper function to find currently visible trigger
  function findVisibleTrigger() {
    const triggers = document.querySelectorAll(".trigger")
    for (let i = 0; i < triggers.length; i++) {
      if (isInViewport(triggers[i])) {
        return triggers[i]
      }
    }
    return null
  }

  // Helper function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0
  }

  // Function to activate a specific section
  function activateSection(sectionId) {
    textSections.forEach((section) => {
      section.classList.remove("active", "exit");
    });
    document.getElementById(sectionId).classList.add("active");
    currentSection = sectionId;
  
    // For all sections, ensure the main logo is visible
    featuredImage.classList.remove("image-exit");
    featuredImage.classList.add("image-active");
    featuredImage.style.opacity = "1";
  }

  // Observer for boundary detection (still helpful for specific section transitions)
  const boundaryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const boundaryType = entry.target.dataset.boundary

        // We'll use this for finer control when needed
        if (boundaryType === "start" && entry.isIntersecting) {
          console.log("Start boundary crossed")
        } else if (boundaryType === "end" && entry.isIntersecting) {
          console.log("End boundary crossed")
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  // Observe section boundaries
  boundaries.forEach((boundary) => {
    boundaryObserver.observe(boundary)
  })

  // Observe all trigger elements
  triggers.forEach((trigger) => {
    observer.observe(trigger)
  })

  // Initialize image state based on visibility and scroll position
  function checkInitialVisibility() {
    const scrollSectionVisible = isInViewport(scrollSection)

    // Set initial scroll direction
    updateScrollDirection()
    lastScrollDirection = scrollDirection // Initialize last direction

    if (scrollSectionVisible) {
      // If scroll section is initially visible
      isInSection = true
      setTimeout(() => {
        // Check scroll position to determine if we should be in initial state
        const scrollY = window.scrollY
        const sectionTop = scrollSection.offsetTop

        if (scrollY < sectionTop + initialScrollThreshold) {
          // We're at the top of the section - show initial state
          contentWrapper.classList.add("initial-state")
          initialScrollPassed = false
        } else {
          // We're already scrolled down - show regular layout
          contentWrapper.classList.remove("initial-state")
          initialScrollPassed = true

          // Determine which section to show based on scroll position
          const sectionHeight = scrollSection.offsetHeight
          const progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight)

          if (progress > 0.8) {
            // If we're in the last 20% of the scroll section, show section5
            activateSection("section5")
          } else if (progress > 0.6) {
            activateSection("section4")
          } else if (progress > 0.4) {
            activateSection("section3")
          } else if (progress > 0.2) {
            activateSection("section2")
          } else {
            activateSection("section1")
          }
        }

        featuredImage.classList.remove("image-enter", "image-enter-bottom", "image-exit")
        if (currentSection !== "section5") {
          featuredImage.classList.add("image-active")
        }
      }, 300)
    } else {
      // If not initially visible, make sure image is in appropriate enter state
      isInSection = false

      // Check if section is below or above viewport
      const sectionRect = scrollSection.getBoundingClientRect()
      if (sectionRect.top > window.innerHeight) {
        // Section is below viewport
        featuredImage.classList.add("image-enter")
        featuredImage.classList.remove("image-active", "image-exit", "image-enter-bottom")
      } else {
        // Section is above viewport
        featuredImage.classList.add("image-enter-bottom")
        featuredImage.classList.remove("image-active", "image-exit", "image-enter")
      }

      // Start in initial state for when the user scrolls to this section
      contentWrapper.classList.add("initial-state")
      initialScrollPassed = false
    }
  }

  // Call this on page load
  checkInitialVisibility()
})

