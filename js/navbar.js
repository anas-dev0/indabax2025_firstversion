document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.getElementById("navbar-toggler")
  const navbarLinks = document.getElementById("navbar-links")
  const logo = document.querySelector(".navbar-logo")
  const register = document.querySelector(".navbar-contact")
  const navbar = document.querySelector(".navbar")

  // Get all sections that should be tracked
  const sections = document.querySelectorAll(
    'section[id], div[id="hero"], div[id="About-Section"], div[id="Hackaton-Section"], div[id="registration"]',
  )

  // Get all nav links
  const navItems = document.querySelectorAll(".navbar-links li")

  // Add click event listener for navbar toggle
  navbarToggler.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")

    // Change icon
    const icon = navbarToggler.querySelector("i")
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })
  
  // Add click event listeners to all navbar links to close mobile menu when clicked
  const navLinks = document.querySelectorAll(".navbar-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Close the mobile menu if it's open
      if (navbarLinks.classList.contains("active")) {
        navbarLinks.classList.remove("active");
        
        // Change the hamburger icon back to bars
        const icon = navbarToggler.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });

  // Function to update active nav item based on scroll position
  function updateActiveNavItem() {
    let currentSection = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100 // Offset for navbar height
      const sectionHeight = section.offsetHeight

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id")
      }
    })

    // Update nav items active state
    navItems.forEach((item) => {
      const link = item.querySelector("a")
      item.classList.remove("active")

      if (link && link.getAttribute("href") === `#${currentSection}`) {
        item.classList.add("active")
      }
    })
  }

  // Initial call to set active nav item
  updateActiveNavItem()

  // Listen for scroll events
  window.addEventListener("scroll", updateActiveNavItem)

  // Handle dropdown on mobile (keep your existing code)
  const dropdowns = document.querySelectorAll(".dropdown")
  dropdowns.forEach((dropdown) => {
    // Your existing dropdown code
  })

  // Add navbar particles (keep your existing code)
  for (let i = 0; i < 6; i++) {
    // Your existing particle code
  }

  // Modified scroll event handler to add/remove scrolled class
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      // Change to a smaller value to trigger earlier
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Initial check in case page is loaded scrolled down
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled")
  }
})