"use strict";

window.addEventListener("load", () => {

  const secondenwijzer = document.querySelector(".secondenwijzer");
  const minutenwijzer = document.querySelector(".minutenwijzer");
  const urenwijzer = document.querySelector(".urenwijzer");

  setInterval(() => {

    // Clock variables
    const d = new Date();
    const seconden = (d.getSeconds()) * 6; // 60 seconds * 6 = 360 degrees.
    const minuten = (d.getMinutes()) * 6; // 60 minutes * 6 = 360 degrees.
    const uren = (((d.getHours()) * 30) + (d.getMinutes() / 2));

    secondenwijzer.style.transform = `rotate(${seconden}deg)`;
    minutenwijzer.style.transform = `rotate(${minuten}deg)`;
    urenwijzer.style.transform = `rotate(${uren}deg)`;

  }, 1000);

});