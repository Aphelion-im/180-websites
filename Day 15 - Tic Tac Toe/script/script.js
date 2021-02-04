/* Last update 3-2-2021 */
"use strict";

window.addEventListener("load", () => {

  // Variables
  const board = document.querySelector(".board");
  const output = document.querySelector(".output");
  const button = document.querySelector("button");
  const circles = document.querySelectorAll(".circle");
  let moves = 9; 
  let counter = true;


  function paintCircle() {
    if (counter) {
      this.classList.add("red");
      this.removeEventListener("click", paintCircle);
      output.textContent = "Blue player's turn!";
      counter = false;
      moves--;
    } else {
      this.classList.add("blue");
      this.removeEventListener("click", paintCircle);
      output.textContent = "Red player's turn!";
      counter = true;
      moves--;
    }
    checkFullBoard();
    checkWinningCombinations();
  }


  function checkWinningCombinations() {

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [0, 4, 8],
      [2, 5, 8],
      [1, 4, 7]
    ];

    // Check each painted circle for red/blue paint. Check 3 painted circles and compare this to the WinningCombinations array
    // 9 circles in Nodelist: circles[winningCombinations[y][2]]; --> [winningCombinations[0][2] --> 3 --> circles[3];1 
    for (let y = 0; y < winningCombinations.length; y++) {
      const square1 = circles[winningCombinations[y][0]];
      const square2 = circles[winningCombinations[y][1]];
      const square3 = circles[winningCombinations[y][2]];

      if (square1.classList.contains('red') && square2.classList.contains('red') && square3.classList.contains('red')) {
        output.textContent = 'Red player wins!';
        circles.forEach(circle => circle.removeEventListener("click", paintCircle));
      } else if (square1.classList.contains('blue') && square2.classList.contains('blue') && square3.classList.contains('blue')) {
        output.textContent = 'Blue player wins!';
        // After a player wins, remove all eventlisteners in order to prevent players from playing
        circles.forEach(circle => circle.removeEventListener("click", paintCircle));
      }
    }
  }

  // Reset board
  button.addEventListener("click", () => {
    console.clear();
    board.children.remove; // Destroy board and draw again in order to add the eventlisteners again
    for (let circle of circles) {
      circle.addEventListener("click", paintCircle);
      circle.classList.remove("red", "blue");
      counter = true;
      output.textContent = "Red player's turn";
      moves = 9;
    }
  });


  // When all circles contain blue or red paint, without a winner, display a message
  function checkFullBoard() {
    if (moves == 0) output.textContent = "No winner!";
  }

  // Attach eventlisteners to each empty circle
  circles.forEach(circle => circle.addEventListener("click", paintCircle));

}); // Load eventlistener 