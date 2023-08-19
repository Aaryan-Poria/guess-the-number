"use strict";

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const message = document.querySelector(".startGuessing").textContent;
const userInput = document.querySelector("#userInput").value;

let score = 20;
let highscore = 0;

const hiddenNumber = generateRandomNumber();
console.log(userInput);
