const nav = document.querySelector(".main-menu");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".main-menu li");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("display");

  navLinks.forEach(navli => {
    navli.addEventListener("click", () => {
      nav.classList.toggle("display");
    });
  });
});
