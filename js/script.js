"use strict";

/////////////////////////////////////////////////////////////////////
//Binary Code Animations
/////////////////////////////////////////////////////////////////////
gsap.registerPlugin(TextPlugin);

const binaryCodeTextEl = document.querySelectorAll(".binary");

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

binaryCodeTextEl.forEach((el, ind) => {
  const randomDur = Math.floor(Math.random() * 10) + 5;
  const randomLengthNew = Math.floor(Math.random() * 40) + 20;
  const randomLengthOld = Math.floor(Math.random() * 30) + 10;
  const randomSequenceNew = generateSequence(randomLengthNew);
  const randomSequenceOld = generateSequence(randomLengthOld);
  addTextAnimation(el, randomDur, randomSequenceNew, randomSequenceOld);
});

/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////
