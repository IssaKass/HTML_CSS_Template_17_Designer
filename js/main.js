// PRELOADER
let preloader = document.querySelector(".preloader");

window.onload = function () {
  document.body.classList.add("load");
  setTimeout(() => {
    preloader.remove();
    document.body.classList.remove("load");
  }, 1500);
};

// SCROLL TO TOP
let toTopBtn = document.querySelector("button.to-top");

window.addEventListener("scroll", function () {
  window.scrollY >= 800
    ? toTopBtn.classList.add("active")
    : toTopBtn.classList.remove("active");
});

toTopBtn.onclick = () => window.scrollTo({ top: 0 });

// TOGGLE NAVIGATION
let header = document.querySelector(".header");
let navbar = document.querySelector(".header .nav");
let navToggleBtn = document.querySelector(".header .nav-toggle");

navToggleBtn.onclick = function () {
  navbar.classList.toggle("show");
};

// FIX HEADER ON SCROLL
window.addEventListener("scroll", function () {
  if (this.scrollY >= 300) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
