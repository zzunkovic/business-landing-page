"use strict";

/////////////////////////////////////////////////////////////////////
//Binary Code Animations
/////////////////////////////////////////////////////////////////////
gsap.registerPlugin(TextPlugin, ScrollTrigger, ScrollToPlugin);

const binaryCodeTextEl = document.querySelectorAll(".binary");
const binaryCodeShortTextEl = document.querySelectorAll(".binary-short");

// const masterTl = gsap.timeline({ repeat: -1, yoyo: true });

function generateSequence(length) {
  let sequence = "";

  for (let i = 0; i < length; i++) {
    const randomBit = Math.round(Math.random());
    sequence += randomBit;
  }
  return sequence;
}

function addTextAnimation(el, dur, newVal, oldVal) {
  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  tl.fromTo(
    el,
    {
      text: { value: oldVal },
    },
    {
      duration: dur,
      text: { value: newVal },
      ease: "ease-in",
    }
  );
}

binaryCodeTextEl.forEach((el) => {
  const randomDur = Math.floor(Math.random() * 10) + 5;
  const randomLengthNew = Math.floor(Math.random() * 40) + 20;
  const randomLengthOld = Math.floor(Math.random() * 30) + 10;
  const randomSequenceNew = generateSequence(randomLengthNew);
  const randomSequenceOld = generateSequence(randomLengthOld);
  addTextAnimation(el, randomDur, randomSequenceNew, randomSequenceOld);
});
binaryCodeShortTextEl.forEach((el) => {
  const randomDur = Math.floor(Math.random() * 10) + 5;
  const randomLengthNew = Math.floor(Math.random() * 18) + 12;
  const randomLengthOld = Math.floor(Math.random() * 10) + 5;
  const randomSequenceNew = generateSequence(randomLengthNew);
  const randomSequenceOld = generateSequence(randomLengthOld);
  addTextAnimation(el, randomDur, randomSequenceNew, randomSequenceOld);
});

/////////////////////////////////////////////////////////////////////
//Reveal Animations
/////////////////////////////////////////////////////////////////////

const revealSectionEl = document.querySelectorAll(".reveal-section");
const revealSectionAboutEl = document.querySelectorAll(".reveal-section-about");
const revealSectionCTAEl = document.querySelectorAll(".reveal-section-cta");
const aboutUsSectionEl = document.querySelector(".about-us-section");
const CTASectionEl = document.querySelector(".cta-section");
const mainTitle = document.querySelector(".main-title");
const navBar = document.querySelector(".nav-bar");
const codeContainer = document.querySelectorAll(".code-container");
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
  revealSectionAboutEl,
  {
    opacity: 0,
    y: 100,
  },
  {
    scrollTrigger: aboutUsSectionEl,
    opacity: 1,
    duration: 2,
    y: 0,
  }
);

gsap.fromTo(
  revealSectionCTAEl,
  {
    opacity: 0,
    y: 100,
  },
  {
    scrollTrigger: CTASectionEl,
    opacity: 1,
    duration: 2,
    y: 0,
  }
);

gsap.fromTo(
  mainTitle,
  {
    opacity: 0,
    y: -50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 2,

    ease: "power2.out",
  }
);

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

codeContainer.forEach((el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
    },
    {
      opacity: 1,

      duration: 5,

      ease: "power2.out",
    }
  );
});

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
// gsap.fromTo(
//   ourServicesSectionEl,
//   {
//     opacity: 0,
//     y: 100,
//   },
//   {
//     scrollTrigger: ourServicesSectionEl,
//     opacity: 1,
//     duration: 1,
//     y: 0,
//   }
// );

/////////////////////////////////////////////////////////////////////
//Mobile Nav
/////////////////////////////////////////////////////////////////////
const navBtnEl = document.querySelector(".mobile-btn");
const closeBtnEl = document.querySelector(".mobile-close");
const menuBtnEl = document.querySelector(".mobile-menu");
const navContainer = document.querySelector(".nav-container");
const bodyEl = document.querySelector(".body");

navBtnEl.addEventListener("click", () => {
  closeBtnEl.classList.toggle("hidden");
  menuBtnEl.classList.toggle("hidden");
  navContainer.classList.toggle("max-[715px]:opacity-0");
  navContainer.classList.toggle("max-[715px]:opacity-1");
  bodyEl.classList.toggle("overflow-hidden");
});

/////////////////////////////////////////////////////////////////////
//Smooth Scroll
/////////////////////////////////////////////////////////////////////
const scrollServiceEl = document.querySelector(".scroll-service");
const scrollChooseUsEl = document.querySelector(".scroll-choose-us");
const scrollAboutEl = document.querySelector(".scroll-about");

const ourServicesSectionEl = document.querySelector(".our-services-section");
const whyChooseUsSectionEl = document.querySelector(".why-choose-us-section");

scrollServiceEl.addEventListener("click", () => {
  gsap.to(window, {
    duration: 2,
    scrollTo: { y: ourServicesSectionEl, offsetY: 200 },
  });
});

scrollAboutEl.addEventListener("click", () => {
  gsap.to(window, {
    duration: 2,
    scrollTo: { y: aboutUsSectionEl, offsetY: 300 },
  });
});

scrollChooseUsEl.addEventListener("click", () => {
  gsap.to(window, {
    duration: 2,
    scrollTo: { y: whyChooseUsSectionEl, offsetY: 200 },
  });
});
