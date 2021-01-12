// Animated Pixel Ruler. By André de Groot 12-february 2017, 15:37.


"use strict";

//Variables
var inputField = document.getElementById("inputField");
var arrow = document.querySelector(".arrow");
var warning = document.querySelector(".warning");

inputField.addEventListener("change", function() {

        var inputValue = parseInt(inputField.value);

        if (inputValue < 0 || inputValue > 396) {
            warning.innerHTML = "Value not correct. Enter a number between 0 and 396.";
            arrow.style.left = 0 + "px";
            inputField.value = "";
        } else if (isNaN(inputValue)) {
            warning.innerHTML = "Enter a number between 0 and 396.";
            inputField.value = "";
        } else {

            warning.innerHTML = "You entered the value: " + inputValue + " pixels.";
            arrow.style.left = inputValue + "px";
            inputField.value = "";
        }

    }


);
