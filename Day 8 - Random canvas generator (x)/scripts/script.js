"use strict";

window.addEventListener("load", () => {


  const main = document.querySelector("main");

  let number = 10; // Number of blocks to create
  let widthArray = [];
  let heightArray = [];
  let height = 100;

  function generateNumber() {
    widthArray.push(Math.floor((Math.random() * 200) + 1));
  }

  for (let i = 0; i < number; i++) {
    generateNumber();
    console.log(`widthArray: ${widthArray[i]}`);
  }

  let totalWidth = widthArray.reduce(getSum, 0);



  console.log(`Total Width: ${totalWidth}`);

  function getSum(total, num) {

    return total + Math.round(num);
  }

  if (totalWidth >= 1000) {
    console.log("Meer dan 1000");
    let verschil = totalWidth - 1000;
    let newWidth = totalWidth - verschil;
    console.log(newWidth);
    widthArray[0] - verschil;
    console.log(`Index 0: ${widthArray[0]}`);
  } else {
    let verschil = 1000 - totalWidth;
    let newWidth = totalWidth + verschil;
    console.log(newWidth);
    widthArray[0] + verschil;
    console.log(`Index 0: ${widthArray[0]}`);
  }






  let blocks = document.querySelectorAll("div");

  for (let block of blocks) {

    block.style.width = `${widthArray[i]}px`;
    block.style.height = `${height}px`;

    for (let i = 0; i < widthArray.length; i++) {

      let blockZ = document.createElement("div");
      main.appendChild(blockZ);






    }
  }













});

// generate a number of blocks
// random dimensions
// total dimension not greater than 1000
// dimensions of each block must be different