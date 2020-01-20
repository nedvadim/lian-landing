const carousel = document.querySelector(".slide-carousel");
const slideItems = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
// counter
let counter = 1;
const size = 100;
carousel.style.transform = "translateX(" + -size * counter + "vw)";

// button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= slideItems.length - 1) return;
  carousel.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carousel.style.transform = "translateX(" + -size * counter + "vw)";
});
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carousel.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carousel.style.transform = "translateX(" + -size * counter + "vw)";
});

carousel.addEventListener("transitionend", () => {
  if (slideItems[counter].id === "lastClone") {
    carousel.style.transition = "none";
    counter = slideItems.length - 2;
    carousel.style.transform = "translateX(" + -size * counter + "vw)";
  }
  if (slideItems[counter].id === "firstClone") {
    carousel.style.transition = "none";
    counter = slideItems.length - counter;
    carousel.style.transform = "translateX(" + -size * counter + "vw)";
  }
});
//=============================================================================
// carousel.style.transform = "translateX(-" + 100 + "vw)";
// var count = 0;
// setInterval(() => {
//   if (count < 1) {
//     count++;
//     carousel.style.transition = "all 1.2s ease-out";
//     carousel.style.transform = "translateX(-" + 100 * (count + 1) + "vw)";
//   } else {
//     count = -1;
//     carousel.style.transition = "none";
//     carousel.style.transform = "translateX(" + 0 + "vw)";
//   }
// }, 1500);
