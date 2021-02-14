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
  const ballStart = [492, 5]; // [x, y] -- Start position of the ball: 492, 5
  let ballCurrentPosition = ballStart;
  let timerId;
  let player1Score = 0;
  let player2Score = 0;

  const player1Start = [10, 230] // 10, 230
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

      console.log("Bottom wall");
      changeDirection();
    }


    // Check for user collision
    if (
      (ballCurrentPosition[0] > currentPositionPlayer1[0] && ballCurrentPosition[0] < currentPositionPlayer1[0] + player1Width) &&
      (ballCurrentPosition[1] > currentPositionPlayer1[1] && ballCurrentPosition[1] < currentPositionPlayer1[1] + player1Height)
    ) {
      changeDirection();
    }
  };

  // Ball change direction
  function changeDirection() {


    // Muur Top
    // Rule 1. Muur Top. Rechtsboven.
    if (xDirection === 2 && yDirection === 2 && ballCurrentPosition[1] > boardHeight - ballDiameter) {
      console.log("Rule 1 tiggered! Current pos: " + ballCurrentPosition[1]);
      xDirection = 2;
      yDirection = -2;
      return;
    }

    // Rule 2 Muur Top. Linksboven.
    if (xDirection === -2 && yDirection === 2 && ballCurrentPosition[1] > boardHeight - ballDiameter) // naar linksboven. Muur top. (ccw)
    {
      console.log("Rule 2 tiggered! Current pos: " + ballCurrentPosition[1]);
      xDirection = -2;
      yDirection = -2;
      return;
    }


    // Muur Rechts
    // Rule 3. Muur rechts. Rechtsboven.
    if (xDirection === 2 && yDirection === 2 && ballCurrentPosition[0] > boardWidth - 20) {
      console.log("Rule 3 tiggered! Current pos: " + ballCurrentPosition[0]);
      xDirection = -2;
      yDirection = 2;
      return;
    }

    // Rule 4. Muur rechts. Rechtsonder.  
    if (xDirection === 2 && yDirection === -2 && ballCurrentPosition[0] > boardWidth - 20) {
      console.log("Rule 4 tiggered! Current pos: " + ballCurrentPosition[0]);
      xDirection = -2;
      yDirection = -2;
      return;
    }

    // Muur bodem
    // Rule 5. Muur bodem. Naar rechtsonder.
    if (xDirection === 2 && yDirection === -2 && ballCurrentPosition[1] < 0) // naar rechtsonder.  Muur bodem.
    {
      console.log("Rule 5 tiggered! Current pos: " + ballCurrentPosition[1]);
      xDirection = 2;
      yDirection = 2;
      return;
    }

    // Rule 6. Muur bodem. Naar linksonder. 
    if (xDirection === -2 && yDirection === -2 && ballCurrentPosition[1] < 0) // naar rechtsonder.  Muur bodem.
    {
      console.log("Rule 6 tiggered! Current pos: " + ballCurrentPosition[1]);
      xDirection = -2;
      yDirection = 2;
      return;
    }

    // Muur links
    // Rule 7. Muur links. Naar linksboven
    if (xDirection === -2 && yDirection === 2 && ballCurrentPosition[0] < 20) {
      console.log("Rule 7 tiggered! Current pos: " + ballCurrentPosition[0]);
      xDirection = 2;
      yDirection = 2;
      return;
    }


    // Rule 8. Muur links. Naar linksonder.
    if (xDirection === -2 && yDirection === -2 && ballCurrentPosition[0] < 20) {
      console.log("Rule 8 tiggered! Current pos: " + ballCurrentPosition[0]);
      xDirection = 2;
      yDirection = -2;
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
      default:
        console.log("Nothing happened!");
    }
  };


  //draw User
  function drawUserPlayer1() {
    user.style.left = currentPositionPlayer1[0] + 'px'
    user.style.bottom = currentPositionPlayer1[1] + 'px'
  }























}); // End load eventlistener