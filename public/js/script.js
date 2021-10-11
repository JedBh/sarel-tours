"use strict";

const navBarTop = document.querySelector(".navbar-top");
const journeyModal = document.querySelector("#journeyModal");
const journeyBtn = document.querySelector("#startYourJourney");
const journeyClose = document.querySelectorAll(".journeyClose");
const tasteModal = document.querySelector("#tasteModal");
const tasteBtn = document.querySelector("#getAtaste");
const tasteClose = document.querySelector("#tasteClose");
const sarelLogo = document.querySelector(".sarel-logo");
const navbarLinks = document.querySelector(".navbar-links");

window.addEventListener("scroll", (scroll) => {
  let scrollVal = window.scrollY;
  if (scrollVal > 150) {
    // navBarTop.style.background = "#000c68";
    navBarTop.classList.add("navbar-top-scroll");
    sarelLogo.classList.add("sarel-logo-scroll");
    navbarLinks.classList.add("navbar-links-scroll");
  } else {
    navBarTop.classList.remove("navbar-top-scroll");
    sarelLogo.classList.remove("sarel-logo-scroll");
    navbarLinks.classList.remove("navbar-links-scroll");
  }
});

journeyBtn.addEventListener("click", () => {
  journeyModal.style.display = "block";
});

for (let close of journeyClose) {
  close.addEventListener("click", () => {
    journeyModal.style.display = "none";
  });
}

tasteBtn.addEventListener("click", () => {
  tasteModal.style.display = "block";
});

tasteClose.addEventListener("click", () => {
  tasteModal.style.display = "none";
});
