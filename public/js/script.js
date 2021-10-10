"use strict";

const navBarTop = document.querySelector(".navbar-top");
const journeyModal = document.querySelector("#journeyModal");
const journeyBtn = document.querySelector("#startYourJourney");
const journeyClose = document.querySelectorAll(".journeyClose");
const tasteModal = document.querySelector("#tasteModal");
const tasteBtn = document.querySelector("#getAtaste");
const tasteClose = document.querySelector("#tasteClose");

window.addEventListener("scroll", (scroll) => {
  let scrollVal = window.scrollY;
  if (scrollVal > 150) {
    navBarTop.style.background = "#000c68";
  } else {
    navBarTop.style.background = "none";
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
