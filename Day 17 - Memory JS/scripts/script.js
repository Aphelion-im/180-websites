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
  let busy;



  // Eventlisteners
  btn_newGame.addEventListener("click", newGame);
  newGame();

  // HTML template for createBoard(): 
  /*
    <div class="card">
      <div class="card-back card-face">
        <img src="images/card-back-200x200-v2.png" alt="Card back">
      </div>
      <div class="card-front card-face">
        <img src="images/cards/card-front-apple-200x200.jpg" data-card="Apple" data-id="6" alt="Apple card">
      </div>
    </div>
  */
  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      const classCard = document.createElement("div");
      classCard.setAttribute("class", "card");
      classCard.addEventListener("click", turnCard);
      main.appendChild(classCard);
      const cardBack = document.createElement("div");
      cardBack.setAttribute("class", "card-back card-face");
      classCard.appendChild(cardBack);
      const imageCardBack = document.createElement("img");
      imageCardBack.setAttribute("src", "images/card-back-200x200-v2.png");
      imageCardBack.setAttribute("alt", "Card back");
      cardBack.appendChild(imageCardBack);
      const cardFront = document.createElement("div");
      cardFront.setAttribute("class", "card-front card-face");
      classCard.appendChild(cardFront);
      const imageCardFront = document.createElement("img");
      imageCardFront.setAttribute("src", cardsArray[i].location);
      imageCardFront.setAttribute("data-card", cardsArray[i].name);
      imageCardFront.setAttribute("data-id", cardsArray[i].id);
      imageCardFront.setAttribute("alt", cardsArray[i].name + " Card");
      cardFront.appendChild(imageCardFront);
    }
  };

  function turnCard() {
    console.clear();
    this.classList.add("visible");
    flips++;
    const dataId = this.lastElementChild.lastElementChild.getAttribute("data-id");
    const dataCard = this.lastElementChild.lastElementChild.getAttribute("data-card");

    chosenIds.push(dataId);
    console.log("chosenIds Array: " + chosenIds);
    chosenArray.push(dataCard);
    console.log("chosenArray: " + chosenArray);


    if (chosenArray.length === 2 && chosenIds.length === 2) {
      setTimeout(checkMatch, 1500);
    }
  };

  function checkMatch() {
    const cards = document.querySelectorAll(".card");
    const choiceId1 = chosenIds[0];
    const choiceId2 = chosenIds[1];
    const choice1 = chosenArray[0];
    const choice2 = chosenArray[1];

    if (choiceId1 == choiceId2) {
      cards[choiceId1].classList.remove("visible");
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
      cards[choiceId1].classList.remove("visible");
      cards[choiceId2].classList.remove("visible");
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
    feedback.textContent = "Congratulations you won the game! You have a very good memory!";
  };

  function displayFeedback(message) {
    feedback.textContent = message;
    setTimeout(() => {
      feedback.textContent = "";
    }, 3000);
  };

  // Start a new game. Reset all stats and shuffle the cards.
  function newGame() {
    console.clear();
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
}); // End load eventlistener