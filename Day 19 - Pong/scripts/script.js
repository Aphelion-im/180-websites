"use strict";

window.addEventListener("load", () => {

  const player1 = document.querySelector(".player1");
  const player2 = document.querySelector(".player2");
  const ball = document.querySelector(".ball");
  let playerY = 250;
  let ballX = 500;
  let ballTimer;


  document.addEventListener("keydown", movePlayer1);
  document.addEventListener("keydown", movePlayer2);


  /* Controls player1 */
  function movePlayer1(e) {
    if (e.key === "w") {
      console.log("Moving up!");
      playerY -= 30;
      player1.style.top = `${playerY}px`;
    } else if (e.key === "s") {
      playerY += 30;
      player1.style.top = `${playerY}px`;
    }
  };

  /* Controls player2 */
  function movePlayer2(e) {
    if (e.key === "ArrowUp") {
      console.log("Moving up!");
      playerY -= 30;
      player2.style.top = `${playerY}px`;
    } else if (e.key === "ArrowDown") {
      playerY += 30;
      player2.style.top = `${playerY}px`;
    }
  };



    ballTimer = setInterval(() => {
      ballX -= 1;
      ball.style.left = `${ballX}px`;
    }, 10);



















}); // End load eventlistener