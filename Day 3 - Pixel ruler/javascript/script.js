// Animated Pixel Ruler. Updated 31-2-2021.

"use strict";


window.addEventListener("load", () => {

//Variables
const inputField = document.querySelector("#inputField");
const arrow = document.querySelector(".arrow");
const warning = document.querySelector(".warning");

inputField.addEventListener("change", () => {

        const inputValue = parseInt(inputField.value);

        if (inputValue < 0 || inputValue > 396) {
            warning.innerHTML = "Value not correct. Enter a number between 0 and 396.";
            arrow.style.left = 0 + "px";
            inputField.value = "";
        } else if (isNaN(inputValue)) {
            warning.innerHTML = "Enter a number between 0 and 396.";
            inputField.value = "";
        } else {
            warning.innerHTML = `You entered the value: ${inputValue} pixels.`;
            arrow.style.left = inputValue + "px";
            inputField.value = "";
        }
    }
);


}); // End load eventlistener.