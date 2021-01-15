"use strict";

window.addEventListener("load", () => {

  const date = new Date;

  let dayArray = [
    {
      day: "Sunday",
      message: "Going to church today?"
    },
    {
      day: "Monday",
      message: "Back to work!"
    },
    {
      day: "Tuesday",
      message: "Taking it slow today"
    },
    {
      day: "Wednesday",
      message: "Hlafway there!"
    },    
    {
      day: "Thursday",
      message: "Only one day to go!"
    },
    {
      day: "Friday",
      message: "Almost there! Just a few hours"
    },
    {
      day: "Saturday",
      message: "Finally free! Party time"
    }
  ];

  const day = date.getDay();
  const message = document.querySelector(".message");

  message.innerHTML = `${dayArray[day].message}`;











}); // End load eventlistener