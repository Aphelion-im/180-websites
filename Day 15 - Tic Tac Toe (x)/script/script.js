/* Last update 2-2-2021 */

"use strict";

window.addEventListener("load", () => {

  // Variables
  const board = document.querySelector(".board");
  const output = document.querySelector(".output");
  const button = document.querySelector("button");
  const circles = document.querySelectorAll(".circle");
  let counter = true;

  function paintCircle() {
    if (counter) {
      this.classList.add("red");
      output.textContent = "Blue player's turn!";
      counter = false;
    } else {
      this.classList.add("blue");
      output.textContent = "Red player's turn!";
      counter = true;
    }
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
    ];

    for (let y = 0; y < winningCombinations.length; y++) {
      const square1 = circles[winningCombinations[y][0]];
      const square2 = circles[winningCombinations[y][1]];
      const square3 = circles[winningCombinations[y][2]];

      if (square1.classList.contains('red') && square2.classList.contains('red') && square3.classList.contains('red')) {
        output.textContent = 'Red player wins!';
      } else if (square1.classList.contains('blue') && square2.classList.contains('blue') && square3.classList.contains('blue')) {
        output.textContent = 'Blue player wins!';
      }
    }
  }

  // Reset board
  button.addEventListener("click", () => {
    console.clear();
    board.children.remove; // Destroy board and draw again
    for (let circle of circles) {
      circle.addEventListener("click", paintCircle);
      circle.classList.remove("red", "blue");
      counter = true;
      output.textContent = "Red player's turn";
    }
  });

  // Attach eventlisteners to each empty circle
  circles.forEach(circle => circle.addEventListener("click", paintCircle));

}); // Load eventlistener 