"use strict";

/////////////////////////////////////////////////////////////////////
//Reveal Animations
/////////////////////////////////////////////////////////////////////

const revealSectionEl = document.querySelectorAll(".reveal-section");
const navBar = document.querySelector(".nav-bar");
const logoEl = document.querySelector(".logo");

revealSectionEl.forEach((el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 100,
    },
    {
      scrollTrigger: el,
      opacity: 1,
      duration: 1,
      y: 0,
    }
  );
});

gsap.fromTo(
  navBar,
  {
    opacity: 0,
    y: 20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 2,

    ease: "power2.out",
  }
);

gsap.fromTo(
  logoEl,
  {
    opacity: 0,
  },
  {
    opacity: 1,

    duration: 2,

    ease: "power2.out",
  }
);

/////////////////////////////////////////////////////////////////////
//Form Submission
/////////////////////////////////////////////////////////////////////

const btnSubmit = document.querySelector(".btn-submit");
const formEl = document.querySelector(".form");
const successMessage = document.querySelector(".success-message");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelectorAll(".field").forEach((el) => {
    el.value = "";
  });

  successMessage.classList.toggle("hidden");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 3000);
});
