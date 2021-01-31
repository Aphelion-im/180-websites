/* 
Based on Jennifer Dewalt's Technicolor boxes (jQuery) - https://jenniferdewalt.com/technicolor_boxes.html



*/

"use strict";

window.addEventListener("load", () => {

  const main = document.querySelector("main");

  let numberOfBlocks = 200;


  const createBlocks = () => {
    for (let i = 0; i < numberOfBlocks; i++) {
      let colorBlock = document.createElement("div");
      main.appendChild(colorBlock);
    }
  };

  createBlocks();

  main.addEventListener("mouseover", e => {
    if (e.target.localName === "div") {
      let num1 = Math.floor(Math.random() * 255);
      let num2 = Math.floor(Math.random() * 255);
      let num3 = Math.floor(Math.random() * 255);
      e.target.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
      e.target.style.boxShadow = "0 0 8px white";
    } 
  });
}); // End load eventlistener