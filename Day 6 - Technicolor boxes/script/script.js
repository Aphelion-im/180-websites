"use strict";

window.addEventListener("load", () => {

  const blocks = document.querySelectorAll("div");



  for (let block of blocks) {

    block.addEventListener("mouseover", (e) => {

      const num1 = Math.floor(Math.random() * 255);
      const num2 = Math.floor(Math.random() * 255);
      const num3 = Math.floor(Math.random() * 255);

      block.style.backgroundColor = `#${num1}${num2}${num3}`;
      block.style.border = "5px solid black";

    });
  }












}); // End load eventlistener