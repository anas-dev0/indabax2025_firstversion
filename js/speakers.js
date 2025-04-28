const open1 = document.querySelector(".open1");
const popup1 = document.querySelector(".dialog1");
const open2 = document.querySelector(".open2");
const popup2 = document.querySelector(".dialog2");
const close = document.querySelectorAll(".close_speaker");
const allpopups = document.querySelectorAll(".dialog");
const cards = document.querySelectorAll(".card");

// Speaker 1 popup
open1.addEventListener('click', () => {
  popup1.style.display = "flex";
  document.body.style.overflow = "hidden";
});

popup1.addEventListener("click", (e) => {
  if (e.target === popup1) {
    popup1.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Speaker 2 popup
open2.addEventListener('click', () => {
  popup2.style.display = "flex";
  document.body.style.overflow = "hidden";
});

popup2.addEventListener("click", (e) => {
  if (e.target === popup2) {
    popup2.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Close all popups
close.forEach(button => {
  button.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    allpopups.forEach(popup => {
      popup.style.display = "none";
    });
  });
});

// Card flip toggle for single tap
cards.forEach(card => {
  card.addEventListener("click", (e) => {
    // Prevent flip if tapping on buttons or links
    if (e.target.closest(".open1, .open2, .splinks a")) {
      return; // Allow buttons/links to handle their own events
    }
    e.stopPropagation(); // Prevent event from bubbling to document
    // Remove .flipped from other cards
    cards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove("flipped");
      }
    });
    // Toggle .flipped on the clicked card
    card.classList.toggle("flipped");
  });

  // Prevent long-press context menu
  card.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Disable context menu on long press
  });
});

// Unflip all cards when tapping outside
document.addEventListener("click", (e) => {
  // Check if the click is outside any card
  if (!e.target.closest(".card")) {
    cards.forEach(card => {
      card.classList.remove("flipped");
    });
  }
});

const open3=document.querySelector(".open3")
const popup3=document.querySelector(".dialog3")
open3.addEventListener('click', () => {
  popup3.style.display = "flex";
  document.body.style.overflow = "hidden";
});

popup3.addEventListener("click", (e) => {
  if (e.target === popup3) {
    popup3.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

const open4=document.querySelector(".open4")
const popup4=document.querySelector(".dialog4")
open4.addEventListener('click', () => {
  popup4.style.display = "flex";
  document.body.style.overflow = "hidden";
});

popup4.addEventListener("click", (e) => {
  if (e.target === popup4) {
    popup4.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

const open5=document.querySelector(".open5")
const popup5=document.querySelector(".dialog5")
open5.addEventListener('click', () => {
  popup5.style.display = "flex";
  document.body.style.overflow = "hidden";
});

popup5.addEventListener("click", (e) => {
  if (e.target === popup5) {
    popup5.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

const open6=document.querySelector(".open6")
const popup6=document.querySelector(".dialog6")
open6.addEventListener('click', () => {
  popup6.style.display = "flex";
  document.body.style.overflow = "hidden";
});

popup6.addEventListener("click", (e) => {
  if (e.target === popup6) {
    popup6.style.display = "none";
    document.body.style.overflow = "auto";
  }
});


const open7=document.querySelector(".open7")
const popup7=document.querySelector(".dialog7")
open7.addEventListener('click', () => {
  popup7.style.display = "flex";
  document.body.style.overflow = "hidden";
});

popup7.addEventListener("click", (e) => {
  if (e.target === popup7) {
    popup7.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

const open8=document.querySelector(".open8")
const popup8=document.querySelector(".dialog8")
open8.addEventListener('click', () => {
  popup8.style.display = "flex";
  document.body.style.overflow = "hidden";
});

popup8.addEventListener("click", (e) => {
  if (e.target === popup8) {
    popup8.style.display = "none";
    document.body.style.overflow = "auto";
  }
});


const open9=document.querySelector(".open9")
const popup9=document.querySelector(".dialog9")
open9.addEventListener('click', () => {
  popup9.style.display = "flex";
  document.body.style.overflow = "hidden";
});

popup9.addEventListener("click", (e) => {
  if (e.target === popup9) {
    popup9.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

const open10=document.querySelector(".open10")
const popup10=document.querySelector(".dialog10")
open10.addEventListener('click', () => {
  popup10.style.display = "flex";
  document.body.style.overflow = "hidden";
});

popup10.addEventListener("click", (e) => {
  if (e.target === popup10) {
    popup10.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
