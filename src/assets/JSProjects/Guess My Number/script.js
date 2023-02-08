"use strict";

// let guess = Number(document.querySelector('.guess').value);
// const number = Math.trunc(Math.random() * 20) + 1;

// const guessEvent = function (guess, secretValue) {
//   guess = Number(guess) - 1;
//   if (!Number(guess)) {
//     console.log('Guess is falsey, guess: ' + guess);
//     document.querySelector('.message').textContent = 'Please enter a guess!';
//   } else {
//     checkGuess();
//   }
// };

// function losePoint() {
//   document.querySelector('.label-score').value;
// }

// function checkGuess(guess, secretValue) {
//   if (guess === secretValue) {
//     document.querySelector('.message').textContent = 'Correct';
//   } else if (guess < secretValue) {
//     document.querySelector('.message').textContent = 'Too low!';
//     losePoint();
//   } else {
//     document.querySelector('.message').textContent = 'Too high!';
//     losePoint();
//   }
// }

// document.querySelector('.check').addEventListener('click', guessEvent);

function guessingGame() {
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  let highscore = Number(document.querySelector(".highscore").textContent);
  let score = Number(document.querySelector(".score").textContent);
  console.log(document.querySelector(".highscore").textContent);
  document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log();

    let highscore = Number(document.querySelector(".highscore").textContent);

    if (!guess) {
      document.querySelector(".message").textContent = "Enter a guess!";
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct!!!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
      score = Number(document.querySelector(".score").textContent);
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (guess > secretNumber) {
      if (score > 0) {
        document.querySelector(".message").textContent = "Too high!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "Ha, loser!";
      }
    } else if (guess < secretNumber) {
      if (score > 0) {
        document.querySelector(".message").textContent = "Too low!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "Ha, loser!";
      }
    }
  });

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").textContent = "0";
    document.querySelector(".number").textContent = "?";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor = "#222222";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").style.width = "15rem";
  });
}
