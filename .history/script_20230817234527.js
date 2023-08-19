"use strict";

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const message = document.querySelector(".startGuessing").textContent;
let score = 20;
let highscore = 0;
console.log(message);
