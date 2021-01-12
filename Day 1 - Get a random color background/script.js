/* Based on Jennifer Dewalt's "Get a Random Color Background" (Day 3).
Built with jQuery and translated to Javascript.

https://jenniferdewalt.com/random_background.html
*/

"use strict";

window.addEventListener("load", () => {

    // Variables
    const randomColors = document.getElementsByTagName("body")[0];
    const buttonRed = document.querySelector(".buttonRed");
    let redColor, greenColor, blueColor;

    buttonRed.addEventListener("click", () => {

        redColor = Math.floor(Math.random() * 255);
        greenColor = Math.floor(Math.random() * 255);
        blueColor = Math.floor(Math.random() * 255);

        let colors = `rgb(${redColor}, ${greenColor}, ${blueColor})`;

        randomColors.style.backgroundColor = colors;

    });

}); // End load eventlistener