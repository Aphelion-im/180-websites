"use strict";

window.addEventListener("load", () => {

    // variables
    const artistName = document.querySelector("#artistNameInput");
    const outputArtistName = document.querySelector(".outputArtistName");
    let paintColor = "white";
    //Paint splatters
    const redPaint = document.querySelector(".redPaint");
    const bluePaint = document.querySelector(".bluePaint");
    const whitePaint = document.querySelector(".whitePaint");
    const yellowPaint = document.querySelector(".yellowPaint");
    const blackPaint = document.querySelector(".blackPaint");
    const painting = document.querySelector(".painting");

    //Enter artistname, handwriting font. On/Off.
    artistName.addEventListener("input", () => {

            outputArtistName.textContent = artistName.value;
        }

    );




    // Paint splatters. (Refactor this code!)
    redPaint.addEventListener("click", () => {

        paintColor = "red";
        return paintColor;

    });

    bluePaint.addEventListener("click", () => {

        paintColor = "blue";
        return paintColor;

    });

    yellowPaint.addEventListener("click", () => {

        paintColor = "yellow";
        return paintColor;

    });

    whitePaint.addEventListener("click", () => {

        paintColor = "white";
        return paintColor;

    });

    blackPaint.addEventListener("click", () => {

        paintColor = "black";
        return paintColor;

    });


    //Boxes
    painting.addEventListener("click", (event) => {

        if (event.target.className === "painting") {
            // Do nothing!
        } else {
            event.target.style.backgroundColor = paintColor;
        }
    });



}); // End load eventlistener


