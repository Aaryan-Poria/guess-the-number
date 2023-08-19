"use strict";

const querySelector = document.querySelector.bind(document);

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let score = 20;
let highscore = 0;

const secretNumber = generateRandomNumber();

document.querySelector(".check").addEventListener("click", function () {
  let message = document.querySelector(".startGuessing").textContent;
  const guess = Number(document.querySelector("#userInput").value);

  if (!guess) message = "No Number guessed!";
});
