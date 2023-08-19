"use strict";

const querySelector = document.querySelector.bind(document);

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let score = 20;
let highscore = 0;

const secretNumber = generateRandomNumber();
console.log(secretNumber);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#userInput").value);

  if (!guess) {
    document.querySelector(".startGuessing").textContent =
      "🚫 No Number Guessed!";
  } else if (guess === secretNumber) {
    document.querySelector(".startGuessing").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("#qmark").style.width = "300px";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("#userInput").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(
        ".highScore"
      ).textContent = `🏅 High Score: ${highscore}`;
    }
  } else if (score > 1) {
    if (guess > secretNumber) {
      document.querySelector(".startGuessing").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = `💯 Score: ${score}`;
    } else {
      document.querySelector(".startGuessing").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = `💯 Score: ${score}`;
    }
  } else {
    document.querySelector(".startGuessing").textContent =
      "😔 You Lost the Game!";
  }
});
