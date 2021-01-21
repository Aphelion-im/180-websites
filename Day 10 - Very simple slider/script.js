"use strict";

window.addEventListener("load", () => {

    // variables
    const BUTTON_LEFT = document.querySelector("#buttonLeft");
    const BUTTON_RIGHT = document.querySelector("#buttonRight");
    let i = 0;

    var pictureArray = [
        "images/animal0.jpg",
        "images/animal1.jpg",
        "images/animal2.jpg",
        "images/animal3.jpg",
        "images/animal4.jpg"
    ];


    let functionLeftButton = () => {

        if (i < 0) {
            i = (pictureArray.length) - 1;
        } else {
            console.log(i);
            console.log(pictureArray[i]);
            document.getElementById("slider").setAttribute("src", pictureArray[i]);
            i--;
        }


    }

    let functionRightButton = () => {

        if (i < pictureArray.length) {
            console.log(i);
            console.log(pictureArray[i]);
            document.getElementById("slider").setAttribute("src", pictureArray[i]);
            i++;
        } else {
            i = 0;
        }

    }

    BUTTON_LEFT.addEventListener("click", functionLeftButton);
    BUTTON_RIGHT.addEventListener("click", functionRightButton);


});