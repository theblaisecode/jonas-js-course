"use strict";

// ---------------------------- Intro to the DOM
console.log(document.querySelector(".message").innerText);

// ---------------------------- What is the DOM and DOM Manipulation

// ---------------------------- Selecting and Manipulating Elements
// document.querySelector(".message").innerText = "🎉 Correct Number!";
// console.log(document.querySelector(".message").innerText);

// document.querySelector(".number").innerText = 13;
// document.querySelector(".score").innerText = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// ---------------------------- Handling click events
// document.querySelector(".check").addEventListener("click", function () {
//    // console.log(document.querySelector(".guess").value);
//    document.querySelector(".message").innerText = "🎉 Correct Number!";
//    const guess = Number(document.querySelector(".guess").value);
//    console.log(guess, typeof guess);

//    if (!guess) {
//       document.querySelector(".message").innerText = "⛔ No number!";
//    }
// });

// --------------------------- ImpLementing the game logic
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
   document.querySelector(".message").innerText = message;
};

document.querySelector(".check").addEventListener("click", function () {
   const guess = Number(document.querySelector(".guess").value);
   console.log(guess, typeof guess);

   // When there is no input
   if (!guess) {
      // document.querySelector('.message').innerText = '⛔️ No number!';
      displayMessage("⛔️ No number!");

      // When player wins
   } else if (guess === secretNumber) {
      // document.querySelector('.message').innerText = '🎉 Correct Number!';
      displayMessage("🎉 Correct Number!");
      document.querySelector(".number").innerText = secretNumber;

      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      if (score > highscore) {
         highscore = score;
         document.querySelector(".highscore").innerText = highscore;
      }

      // When guess is wrong
   } else if (guess !== secretNumber) {
      if (score > 1) {
         // document.querySelector('.message').innerText =
         // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
         displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
         score--;
         document.querySelector(".score").innerText = score;
      } else {
         // document.querySelector('.message').innerText = '💥 You lost the game!';
         displayMessage("💥 You lost the game!");
         document.querySelector(".score").innerText = 0;
      }
      // When guess is too high
   } else if (guess > secretNumber) {
      if (score > 1) {
         document.querySelector(".message").innerText = "📈 Too high!";
         score--;
         document.querySelector(".score").innerText = score;
      } else {
         document.querySelector(".message").innerText =
            "💥 You lost the game!";
         document.querySelector(".score").innerText = 0;
      }
      // When guess is too low
   } else if (guess < secretNumber) {
      if (score > 1) {
         document.querySelector(".message").innerText = "📉 Too low!";
         score--;
         document.querySelector(".score").innerText = score;
      } else {
         document.querySelector(".message").innerText =
            "💥 You lost the game!";
         document.querySelector(".score").innerText = 0;
      }
   }
});

////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

// --------------------------- Solution
document.querySelector(".again").addEventListener("click", function () {
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1;

   // document.querySelector('.message').innerText = 'Start guessing...';
   displayMessage("Start guessing...");
   document.querySelector(".score").innerText = score;
   document.querySelector(".number").innerText = "?";
   document.querySelector(".guess").value = "";

   document.querySelector("body").style.backgroundColor = "#222";
   document.querySelector(".number").style.width = "15rem";
});
