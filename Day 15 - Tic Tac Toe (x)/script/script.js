/* 
console.clear();
forEach(circle => { circle.expressions });
children.remove
removeEventListener();
circle.classList.remove("red", "blue");
circle.classList.contains("red");

Some ideas from:
https://www.thecrazyprogrammer.com/2019/09/javascript-tic-tac-toe-game.html

*/

"use strict";

window.addEventListener("load", () => {

  // Variables
  const board = document.querySelector(".board");
  const output = document.querySelector(".output");
  const button = document.querySelector("button");
  const winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
  const redArray = [];
  const blueArray = [];
  const numberOfCircles = 9;
  let counter = true;

  output.innerHTML = "Red's turn"; // Standard message
  createBoard();

  function createBoard() {
    for (let i = 1; i <= numberOfCircles; i++) {
      const circle = document.createElement("div");
      circle.setAttribute("class", "circle");
      circle.setAttribute("data-item", i);
      circle.addEventListener("click", paintCircle);
      board.appendChild(circle);
    }
  }

  function paintCircle(e) {

    if (counter) {
      e.target.classList.add("red");
      output.innerHTML = "Blue's turn";
      counter = false;
      redArray.push("red");
    } else {
      e.target.classList.add("blue");
      output.innerHTML = "Red's turn";
      counter = true;
      blueArray.push("blue");
    }
    checkWinner();
  }

  // Reset board
  button.addEventListener("click", () => {
    console.clear();
    board.children.remove; // Destroy board and draw again
    const circles = document.querySelectorAll(".circle");
    for (let circle of circles) {
      circle.addEventListener("click", paintCircle);
      circle.classList.remove("red", "blue");
      circle.classList.remove("crsr");
      counter = true;
      output.innerHTML = "Red's turn";
      redArray.length = "";
      blueArray.length = "";
    }
  });


  function checkWinner() {

    console.clear();

    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {

      // After painting a color remove the event listener and change the cursor to default
      if (circle.classList.contains("red") || circle.classList.contains("blue")) {
        circle.removeEventListener("click", paintCircle);
        circle.classList.add("crsr");
      }

    });
    countColors();
  }

  function countColors() {

    const totalArray = redArray.length + blueArray.length;
    console.log("Red array: " + redArray);
    console.log("Blue array: " + blueArray);
    console.log("Total: " + totalArray);

    if (totalArray >= 9) {
      output.innerHTML = "No more moves available!";
    }

  }







}); // Load eventlistener 