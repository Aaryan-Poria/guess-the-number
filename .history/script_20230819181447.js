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
    document.querySelector("body").style.backgroundColor = "#7CFC00";
    if (score > highscore) {
      highscore = score;
      document.querySelector(
        ".highScore"
      ).textContent = `🏅 High Score: ${highscore}`;
    }
  } else if (guess > secretNumber) {
    document.querySelector(".startGuessing").textContent = "📈 Too High!";
    score--;
    document.querySelector(".score").textContent = `💯 Score: ${score}`;
  } else {
    document.querySelector(".startGuessing").textContent = "📉 Too Low!";
    score--;
    document.querySelector(".score").textContent = `💯 Score: ${score}`;
  }
});
