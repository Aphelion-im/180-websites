"use strict";

window.addEventListener("load", () => {

  const player1 = document.querySelector(".player1");
  const player2 = document.querySelector(".player2");
  const ball = document.querySelector(".ball");
  let playerY = 225;
  let ballX = 500;
  let ballTimer;


  document.addEventListener("keydown", movePlayer1);
  document.addEventListener("keydown", movePlayer2);


  /* Controls player1 */
  function movePlayer1(e) {
    switch (e.key) {
      case "w":
        if (playerY >= 0) {
          console.log("Y coords: " + playerY);
          playerY -= 30;
          player1.style.top = `${playerY}px`;
        }
        break;
      case "s":
        if (playerY <= 550 - 70) {
          console.log("Moving down!");
          playerY += 30;
          player1.style.top = `${playerY}px`;
        }
        break;
    }
  };

  /* Controls player2 */
  function movePlayer2(e) {
    switch (e.key) {
      case "ArrowUp":
        if (playerY >= 0) {
          console.log("Moving up!");
          playerY -= 30;
          player2.style.top = `${playerY}px`;
        }
        break;
      case "ArrowDown":
        if (playerY <= 550 - 70) {
          playerY += 30;
          player2.style.top = `${playerY}px`;
        }
        break;
    }
  };



  ballTimer = setInterval(() => {

if (ballX >= 2) {
  ballX -= 1;
  ball.style.left = `${ballX}px`;
} else {
  ballX += 1;
  ball.style.left = `${ballX}px`;
}


  }, 10);



















}); // End load eventlistener