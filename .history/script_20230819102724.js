"use strict";

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const message = document.querySelector(".startGuessing").textContent;
//let usersInput = document.querySelector("#userInput").value;

let score = 20;
let highscore = 0;

const hiddenNumber = generateRandomNumber();

let enteredNum = Number(document.querySelector("#userInput").value);

document.querySelector(".check").addEventListener("click", function () {
  if (enteredNum === 11) console.log("11 ke equal hai!");
});
