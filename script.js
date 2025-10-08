document.querySelector(".cer-1").addEventListener('click', function() {
  window.open('https://www.linkedin.com/posts/koushik25_genai-google-googlecloud-activity-7222641355871723520-0vN8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbppVEBIpjZY-8hqklQDeDVqn4zHrruvrQ', '_blank');
});
document.querySelector(".cer-2").addEventListener('click', function() {
  window.open(' https://www.linkedin.com/posts/koushik25_git-github-versioncontrol-activity-7288580091322802177-91xx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbppVEBIpjZY-8hqklQDeDVqn4zHrruvrQ', '_blank');
});
document.querySelector(".cer-3").addEventListener('click', function() {
  window.open('https://www.linkedin.com/posts/koushik25_dataanalytics-deloitte-forage-activity-7359266325141098497-a_Fb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEbppVEBIpjZY-8hqklQDeDVqn4zHrruvrQ', '_blank');
});
document.querySelector(".cer-4").addEventListener('click', function() {
  window.open('https://media.licdn.com/dms/image/v2/D562DAQHQq6XXdz2TtA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719383782522?e=1760374800&v=beta&t=2bFbz1IYyW7WiFo6T_bZfrM95P6172hPa8p8tL6g0Z4', '_blank');
});
document.querySelector(".cer-5").addEventListener('click', function() {
  window.open('https://media.licdn.com/dms/image/v2/D562DAQFV7Ojx8wKfTA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1715875668466?e=1760374800&v=beta&t=XDfKxiIYXJiKKEo2lBPFEnU2Oqygr8OtyVlWSwwmq_Y', '_blank');
});
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

