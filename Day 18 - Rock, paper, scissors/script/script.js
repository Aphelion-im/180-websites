"use strict";

window.addEventListener("load", () => {

  const buttons = document.querySelectorAll("button");
  const outputPlayer = document.querySelector(".outputPlayer");
  const outputComputer = document.querySelector(".outputComputer");
  const whoWins = document.querySelector(".whoWins");
  const outputScorePlayer = document.querySelector(".scorePlayer");
  const outputScoreComputer = document.querySelector(".scoreComputer");
  let scorePlayer = 0;
  let scoreComputer = 0;
  let message;


  // Event listeners
  buttons.forEach(button => button.addEventListener("click", choicesPlayers));

  function choicesPlayers() {
    const playerChoice = this.getAttribute("class");
    const computerChoice = Math.floor(Math.random() * choices.length);

    // Player choices:
    if (playerChoice == "btn_rock") {
      outputPlayer.innerText = "Player has chosen: Rock!";
      outputPlayer.innerHTML += `<img src="${choices[0].image}" alt="${choices[0].alt}">`;
    } else if (playerChoice == "btn_paper") {
      outputPlayer.innerText = "Player has chosen: Paper!";
      outputPlayer.innerHTML += `<img src="${choices[1].image}" alt="${choices[1].alt}">`;
    } else {
      outputPlayer.innerText = "Player has chosen: Scissors!";
      outputPlayer.innerHTML += `<img src="${choices[2].image}" alt="${choices[2].alt}">`;
    }

    // Computer choices:
    if (computerChoice == "0") {
      outputComputer.innerText = "Computer has chosen: Rock!";
      outputComputer.innerHTML += `<img src="${choices[0].image}" alt="${choices[0].alt}">`;
    } else if (computerChoice == "1") {
      outputComputer.innerText = "Computer has chosen: Paper!";
      outputComputer.innerHTML += `<img src="${choices[1].image}" alt="${choices[1].alt}">`;
    } else {
      outputComputer.innerText = "Computer has chosen: Scissors!";
      outputComputer.innerHTML += `<img src="${choices[2].image}" alt="${choices[2].alt}">`;
    }

    // Who wins?!
    if (playerChoice == "btn_rock" && computerChoice == "0") {
      message = "Draw!";
      showMessage(message);
    } else if (playerChoice == "btn_rock" && computerChoice == "1") {
      message = "Computer wins!";
      showMessage(message);
      updateComputerScore();
    } else if (playerChoice == "btn_rock" && computerChoice == "2") {
      message = "Player wins!";
      showMessage(message);
      updatePlayerScore();
    } else if (playerChoice == "btn_paper" && computerChoice == "0") {
      message = "Player wins!";
      showMessage(message);
      updatePlayerScore();
    } else if (playerChoice == "btn_paper" && computerChoice == "1") {
      message = "Draw!";
      showMessage(message);
    } else if (playerChoice == "btn_paper" && computerChoice == "2") {
      message = "Computer wins!";
      showMessage(message);
      updateComputerScore();
    } else if (playerChoice == "btn_scissors" && computerChoice == "0") {
      message = "Computer wins!";
      showMessage(message);
      updateComputerScore();
    } else if (playerChoice == "btn_scissors" && computerChoice == "1") {
      message = "Player wins!";
      showMessage(message);
      updatePlayerScore();
    } else if (playerChoice == "btn_scissors" && computerChoice == "2") {
      message = "Draw!";
      showMessage(message);
    }
  };

  function updatePlayerScore() {
    scorePlayer++;
    outputScorePlayer.innerText = "Player score: " + scorePlayer;
  }

  function updateComputerScore() {
    scoreComputer++;
    outputScoreComputer.innerText = "Computer score: " + scoreComputer;
  }

  function showMessage(message) {
    whoWins.innerText = message;
  };





















}); // end load event listener



/* 
Player chooses: Rock, paper or scissors.
The same instant, the computer chooses rocks, papers, or scissors.

Comparison and result who is the winner. 
Paper > Rock > scissors > Paper, etc.

Score player.
Score computer.



*/