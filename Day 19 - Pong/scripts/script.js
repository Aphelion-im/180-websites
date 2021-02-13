"use strict";

window.addEventListener("load", () => {

  const grid = document.querySelector('.grid')
  const scoreDisplay1 = document.querySelector('.scorePlayer1')
  const scoreDisplay2 = document.querySelector('.scorePlayer2')
  const ballDiameter = 10;
  const boardWidth = 1000;
  const boardHeight = 550;
  const player1Width = 10;
  const player1Height = 70;
  let xDirection = -2;
  let yDirection = 2;
  const ballStart = [492, 5]; // [x, y] -- Start position of the ball
  let ballCurrentPosition = ballStart;
  let timerId;
  let player1Score = 0;
  let player2Score = 0;

  const player1Start = [10, 230]
  let currentPositionPlayer1 = player1Start // [x, y]

  //add ball
  const ball = document.createElement('div');
  ball.classList.add('ball');
  grid.appendChild(ball);
  drawBall();

  //draw Ball
  function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'
  }

  //move ball
  function moveBall() {
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkForCollisions();
  }
  timerId = setInterval(moveBall, 30);


  function checkForCollisions() {

    // check for wall hits

    if (ballCurrentPosition[0] >= (boardWidth - ballDiameter)) {
      player1Score++;
      scoreDisplay1.textContent = player2Score;
      console.log("Right wall");
      changeDirection();
    }

    if (ballCurrentPosition[0] <= 0) {
      player2Score++;
      scoreDisplay2.textContent = player2Score;
      console.log("Left wall");
      changeDirection();

    }

    if (ballCurrentPosition[1] >= (boardHeight - ballDiameter)) {
      console.log("Top wall");
      changeDirection();
    }

    if (ballCurrentPosition[1] <= 0) {
      console.log("ballCurrentPosition[1]" + ballCurrentPosition[1]);
      console.log("Bottom wall");
      changeDirection();
    }


    //check for user collision
    if (
      (ballCurrentPosition[0] > currentPositionPlayer1[0] && ballCurrentPosition[0] < currentPositionPlayer1[0] + player1Width) &&
      (ballCurrentPosition[1] > currentPositionPlayer1[1] && ballCurrentPosition[1] < currentPositionPlayer1[1] + player1Height)
    ) {
      changeDirection();
    }
  };

  // Ball change direction
  function changeDirection() {

    if (xDirection === 2 && yDirection === 2) // Naar rechtsonder
    {
      yDirection = -2; // Naar boven
      return;
    }

    if (xDirection === 2 && yDirection === -2) // Naar rechtsboven
    {
      xDirection = -2; // Naar links
      return;
    }

    if (xDirection === -2 && yDirection === -2) // Naar linksonder
    {
      yDirection = 2; // --> Naar onder
      return;
    }

    if (xDirection === -2 && yDirection === 2) // Naar rechtsonder
    {
      xDirection = 2; // --> Naar rechts
      return;
    }
  };




  // Players
  //add user
  const user = document.createElement('div');
  user.classList.add('player1');
  grid.appendChild(user);
  drawUserPlayer1();




  document.addEventListener("keydown", movePlayer1);




  /* Controls player1 */
  function movePlayer1(e) {
    switch (e.key) {
      case "w":
        if (currentPositionPlayer1[1] < boardHeight - player1Height) {
          currentPositionPlayer1[1] += 10;
          console.log(currentPositionPlayer1[1])
          drawUserPlayer1();
        }
        break;
      case "s":
        if (currentPositionPlayer1[1] > 0) {
          currentPositionPlayer1[1] -= 10;
          console.log(currentPositionPlayer1[1])
          drawUserPlayer1();
        }
        break;
    }
  };


  //draw User
  function drawUserPlayer1() {
    user.style.left = currentPositionPlayer1[0] + 'px'
    user.style.bottom = currentPositionPlayer1[1] + 'px'
  }























}); // End load eventlistener