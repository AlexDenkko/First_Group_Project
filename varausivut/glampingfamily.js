const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_links_hamburger");
const container = document.querySelector(".container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  container.classList.toggle("active");
});
