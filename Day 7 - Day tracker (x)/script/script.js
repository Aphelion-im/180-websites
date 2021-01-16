"use strict";

window.addEventListener("load", () => {

  const date = new Date;

  let dayArray = [{
      id: 0,
      day: "Sunday",
      message: "It is Sunday. Going to church today?!"
    },
    {
      id: 1,
      day: "Monday",
      message: "It is Monday. Back to work!"
    },
    {
      id: 2,
      day: "Tuesday",
      message: "It is Tuesday. Taking it slow today!"
    },
    {
      id: 3,
      day: "Wednesday",
      message: "It is wednesday. Halfway there!"
    },
    {
      id: 4,
      day: "Thursday",
      message: "It is Thursday. Only one day to go!"
    },
    {
      id: 5,
      day: "Friday",
      message: "It is Friday. Almost there! Just a few hours!"
    },
    {
      id: 6,
      day: "Saturday",
      message: "It is Saturday. Finally free! Party time!"
    }
  ];

  const day = date.getDay();
  const message = document.querySelector(".message");

  message.innerHTML = `${dayArray[day].message}`;


  // Get value from tabs

  let dayTabs = document.querySelectorAll(".tab");

  for (let dayTab of dayTabs) {

    if ((dayTab.getAttribute("data-day")) == dayArray[day].id) {
      dayTab.style.backgroundColor = "#16A085";
      dayTab.classList.remove("tab");
      dayTab.classList.add("today");

    }


  }























}); // End load eventlistener