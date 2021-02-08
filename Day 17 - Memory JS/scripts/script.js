"use strict";

window.addEventListener("load", () => {
  // Variables
  const main = document.querySelector(".grid");
  const scoreOutput = document.querySelector(".output");
  const flipsOutput = document.querySelector(".flips");
  const btn_newGame = document.querySelector(".btn_newGame");
  const feedback = document.querySelector(".feedback");
  let chosenArray = [];
  let chosenIds = [];
  let winningArray = [];
  let flips = 0;
  let message;


  // Eventlisteners
  btn_newGame.addEventListener("click", newGame);
  newGame();

  // HTML template: 
  // <img class="card" src="images/cards/card-front-apple-200x200.jpg" data-card="Apple" data-id="6" alt="Apple card">
  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      const imageCard = document.createElement("img");
      imageCard.setAttribute("class", "card");
      imageCard.setAttribute("src", "images/card-back-200x200-v2.png"); // cardsArray[i].location
      imageCard.setAttribute("data-card", cardsArray[i].name);
      imageCard.setAttribute("data-id", cardsArray[i].id);
      imageCard.setAttribute("alt", cardsArray[i].name + " Card");
      imageCard.addEventListener("click", turnCard);
      main.appendChild(imageCard);
    }
  };

  function turnCard() {
    console.clear();
    flips++;
    const dataId = this.getAttribute("data-id");
    const dataCard = this.getAttribute("data-card");

    chosenIds.push(dataId);
    console.log("chosenIds Array: " + chosenIds);
    chosenArray.push(dataCard);
    console.log("chosenArray: " + chosenArray);

    this.setAttribute("src", cardsArray[dataId].location);

    if (chosenArray.length === 2 && chosenIds.length === 2) {
      setTimeout(checkMatch, 1000);
    } 
  };


  function checkMatch() {
    const cards = document.querySelectorAll(".card");
    const choiceId1 = chosenIds[0];
    const choiceId2 = chosenIds[1];
    const choice1 = chosenArray[0];
    const choice2 = chosenArray[1];


    if (choiceId1 == choiceId2) {
      cards[choiceId1].setAttribute("src", "images/card-back-200x200-v2.png");
      message = "You chose the same card!";
      displayFeedback(message);
    } else if (choice1 == choice2) {
      cards[choiceId1].removeEventListener("click", turnCard);
      cards[choiceId2].removeEventListener("click", turnCard);
      cards[choiceId1].style.cursor = "not-allowed";
      cards[choiceId2].style.cursor = "not-allowed";
      winningArray.push(choice1);
      winningArray.push(choice2);
      message = "Well done! Score +1!";
      displayFeedback(message);
    } else {
      message = "Alas! No matching cards.";
      displayFeedback(message);
      cards[choiceId1].setAttribute("src", "images/card-back-200x200-v2.png");
      cards[choiceId2].setAttribute("src", "images/card-back-200x200-v2.png");
    }

    if (winningArray.length / 2 == cardsArray.length / 2) {
      winner();
    }

    flipsOutput.textContent = `Flips: ${flips}`;
    scoreOutput.textContent = `Score: ${winningArray.length / 2}`;
    chosenIds = [];
    chosenArray = [];
  };


  function winner() {
    message = "Congratulations you won the game! You have a very good memory!";
    displayFeedback(message);
  };

  function displayFeedback(message) {
    feedback.textContent = message;
    setTimeout(() => {
      feedback.textContent = "";
    }, 3000);
  };

  // Start a new game. Reset all stats and shuffle the cards.
  function newGame() {
    main.innerHTML = "";
    createBoard();
    shuffle();
    flips = 0;
    chosenArray = [];
    chosenIds = [];
    winningArray = [];
    scoreOutput.textContent = `Score: ${winningArray.length}`;
    flipsOutput.textContent = `Flips: ${flips}`;
  };

  // Fisher-Yates shuffle algorithm.
  function shuffle() {
    const cards = document.querySelectorAll(".card");
    for (let i = cards.length - 1; i > 0; i--) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      cards[randIndex].style.order = i;
      cards[i].style.order = randIndex;
    }
  };

const cardZ = document.querySelector(".cardZ");
cardZ.addEventListener("click", () => {

cardZ.classList.toggle("visible");

});



}); // End load eventlistener


// Simple shuffle 1: 
// for (let card of cards) {
//   let num = Math.floor(Math.random() * cards.length);
//   card.style.order = num;
// }

// Simple shuffle 2:
// cardArray.sort(() => 0.5 - Math.random())