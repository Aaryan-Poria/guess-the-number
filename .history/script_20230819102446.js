"use strict";

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const message = document.querySelector(".startGuessing").textContent;
//let usersInput = document.querySelector("#userInput").value;

let score = 20;
let highscore = 0;

const hiddenNumber = generateRandomNumber();

document.querySelector(".check").addEventListener("click", function () {
  console.log("Click Clicked!");
});
