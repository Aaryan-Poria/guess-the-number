"use strict";

const querySelector = document.querySelector.bind(document);

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
  if (Number(document.querySelector("#userInput").value) === 12)
    console.log("12 ke equal hai!");
});
