// Typed.js
var typing = new Typed(".text", {
  strings: ["", "Student", "Developer", "Learner", "Web Developer"],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,
});

// Smooth scroll & menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-links");

  // Toggle hamburger menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("active");
  });

  // Close menu on link click + smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("data-target");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
      // Close menu after click
      navMenu.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });
});
