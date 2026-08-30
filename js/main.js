const hamburgerMenu = document.querySelector(".hamburger");
const bars = document.querySelector(".hamburger .fa-bars");
const xMark = document.querySelector(".hamburger .fa-xmark");
const navbar = document.querySelector(".navbar");
hamburgerMenu.addEventListener("click", () => {
  bars.classList.toggle("active");
  xMark.classList.toggle("active");
  navbar.classList.toggle("active");
});
// slider
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlide = 0;
// =============show slides=============
function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}
// next slide
nextBtn.addEventListener("click", () => {
  nextSlide();
});
// prev slide
prevBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < slides.length) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}
// setInterval(nextSlide, 1000);