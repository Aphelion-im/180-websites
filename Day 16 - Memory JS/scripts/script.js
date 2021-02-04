"use strict";

window.addEventListener("load", () => {

  // Variables
  const grid = document.querySelector(".grid");
  const cards = document.querySelectorAll(".card");
  const output = document.querySelector(".output");
  let score = 0;
  const cardsArray = ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"];
  let chosenCards = [];

  // Eventlisteners
  cards.forEach(card => card.addEventListener("click", turnCard));

  // Array



  // for (let i = 0; i < cardsArray.length; i++) {
  //   for (let card of cards) {
  //     card.textContent = cardsArray[i];
  //   }
  // }





  // Setup
  output.textContent = `Score: ${score}`;




  function turnCard() {
    console.log("Turn card!");
    this.style.backgroundColor = "white";
    let chosenCard = this.textContent;
    console.clear();
    console.log("Card chosen: " + chosenCard);
    chosenCards.push(chosenCard);
    console.log("Chosen cards: " + chosenCards);

    if (chosenCards[0] == chosenCards[1]) {
      console.log("Equal");
      chosenCards.splice(0, 2);
      console.log(chosenCards);
      score++;
      output.textContent = `Score: ${score}`;
    } else {
      console.log("Not equal");
      setTimeout(() => {
        this.style.backgroundColor = "blue"
      }, 4000);
    }



  }




















}); // End load eventlistener