"use strict";

window.addEventListener("load", () => {

  const main = document.querySelector("main");
  const button = document.querySelector("button");
  let numberOfBlocks = 20;

  function createBlock() {
    main.innerHTML = "";
    for (let i = 0; i <= numberOfBlocks; i++) {
      const width = Math.floor((Math.random() * 200));
      const height = Math.floor((Math.random() * 200));
      const block = document.createElement("div");
      block.style.height = `${height}px`;
      block.style.width = `${width}px`;
      main.appendChild(block);
    }
  }

  button.addEventListener("mousedown", createBlock);
























});

// generate a number of blocks
// random dimensions
// total dimension not greater than 1000
// dimensions of each block must be different
// All heights of all blocks must add up to 1000. (If possible)