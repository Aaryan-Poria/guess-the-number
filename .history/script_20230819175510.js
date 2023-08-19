"use strict";

const querySelector = document.querySelector.bind(document);

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let score = 20;
let highscore = 0;

const secretNumber = generateRandomNumber();

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#userInput").value);

  if (!guess)
    document.querySelector(".startGuessing").textContent =
      "🚫 No Number Guessed!";
  else if (guess === secretNumber) {
    document.querySelector(".startGuessing").textContent = "🎉 Correct Number!";
  }
});
