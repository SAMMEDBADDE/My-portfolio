/* ==================================================
   MOBILE NAVBAR TOGGLE (FINAL & CLEAN)
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});

/* ==================================================
   ACTIVE NAV LINK ON SCROLL
================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinksAll = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinksAll.forEach(link => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (href === `#${current}`) {
      link.classList.add("active");
    }
  });
});
