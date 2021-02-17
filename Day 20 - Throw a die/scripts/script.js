"use strict";

window.addEventListener("load", () => {

  // Variables
  const main = document.querySelector("main");
  const button = document.querySelector("button");

  button.addEventListener("click", rollDice);


  function rollDice() {
    main.innerHTML = "";
    const randomNum = Math.floor(Math.random() * 6 + 1);
    const dice = document.createElement("img");
    dice.setAttribute("src", `images/${randomNum}.png`);
    dice.setAttribute("alt", `${randomNum} image`);
    main.appendChild(dice);
  };

















}); // End load event listener