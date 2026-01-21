/* ==================================================
   NAVBAR + SCROLL LOGIC (GITHUB PAGES SAFE)
================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- MOBILE NAVBAR TOGGLE ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");
  const navLinksAll = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  /* ---------- CLOSE MENU ON LINK CLICK (MOBILE) ---------- */
  navLinksAll.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

  /* ---------- ACTIVE NAV LINK ON SCROLL ---------- */
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
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

});
