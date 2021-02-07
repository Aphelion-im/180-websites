"use strict";

window.addEventListener("load", () => {

  const cardsArray = [{
      image: "../images/cards/card-front-apple-200x200.jpg",
      name: "Apple",
      alt: "Apple card"
    },
    {
      image: "../images/cards/card-front-banana-200x200.jpg",
      name: "Banana",
      alt: "Banana card"
    },
    {
      location: "../images/cards/card-front-beetle-200x200.jpg",
      name: "Beetle",
      alt: "Beetle card"
    }
  ];



  // Variables
  const cards = document.querySelectorAll(".card");
  const scoreOutput = document.querySelector(".output");
  const flipsOutput = document.querySelector(".flips");
  const btn_newGame = document.querySelector(".btn_newGame");
  let chosenArray = [];

  let score = 0;
  let flips = 0;
  let clicks = 0;


  // Eventlisteners
  cards.forEach(card => card.addEventListener("click", turnCard));
  btn_newGame.addEventListener("click", newGame);


  newGame();




  function turnCard(e) {

    console.clear();
    flips++;
    clicks++;
    flipsOutput.textContent = `Flips: ${flips}`;

    // Turn card. Show content of card. Remove background.
    this.style.background = "none";
    this.firstElementChild.style.opacity = 100;

    let choice = e.target.getAttribute("data-card");
    e.target.setAttribute("data-counter", 1);


    if (e.target.getAttribute("data-counter") == "1") {
      console.log("No more clicking allowed");
      this.removeEventListener("click", turnCard);
      e.target.style.cursor = "default";
    } 




    putBackCard();
  };






  function checkMatch() {
    const dataCard = card.firstElementChild.getAttribute("data-card");
    if (dataCard == chosenArray[0] || dataCard == chosenArray[1]) {
      console.log("Match!");
    } else {
      console.log("No match!");
      putBackCard();
    }

  }



  // Turn the card back again with blue side facing up
  function putBackCard() {
    for (let card of cards) {
      setTimeout(() => {
        card.removeAttribute("style");
        card.firstElementChild.style.opacity = 0;
        card.style.backgroundImage = `url(../images/card-back-200x200-v2.png)`;
        card.addEventListener("click", turnCard);
        card.style.cursor = "pointer";
      }, 2000);
    };
  }

  // Start a new game. Reset all stats and shuffle the cards.
  function newGame() {
    cards.forEach(card => card.firstElementChild.style.opacity = 0);
    cards.forEach(card => card.style.backgroundImage = `url(../images/card-back-200x200-v2.png)`);
    shuffle();
    flips = 0;
    score = 0;
    scoreOutput.textContent = `Score: ${score}`;
    flipsOutput.textContent = `Flips: ${flips}`;
  }

  // Shuffle the cards
  function shuffle() {
    for (let card of cards) {
      let num = Math.floor(Math.random() * cards.length);
      card.style.order = num;
    }
  }

















}); // End load eventlistener