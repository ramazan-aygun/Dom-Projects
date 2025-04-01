"use strict";

// document.querySelector() içine yazığımız class veya id veya herhangi bir html değerini seçmeyi sağlar.

/* document.querySelector(".message").textContent = "🎉 Correct Number !";
 console.log(document.querySelector(".message").textContent);
 document.querySelector(".secretNumber").textContent = 13;
 document.querySelector(".score").textContent = 10;
 document.querySelector(".guess").value = 23;
 console.log(document.querySelector(".guess").value); */

//

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = "?";
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //When there is no input
  if (!guess) {
    displayMessage(" 🤔 No secretNumber !");

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number !");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game !");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".guess").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.querySelector(".check").click();
  }
});
