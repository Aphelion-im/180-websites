"use strict";

window.addEventListener("load", () => {


const countDownDate = new Date("Dec 31, 2030 00:00:00").getTime();

const x = setInterval( () => {

    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("#output").innerHTML = `<span class='days'>${days} days<span><span class="hours">${hours} hours</span><span class="minutes">${minutes} minutes</span><span class="seconds">${seconds} seconds</span>`;


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("output").innerHTML = "OFFER EXPIRED";
    }
}, 1000);


}); // End load eventlistener