/* Based on and inspired by Jennifer Dewalt's "Paint a Mondrian" (Day 4). https://jenniferdewalt.com

Created by André de Groot.
*/
"use strict";

//Global variables
var artistName = document.getElementById("artistNameInput");
var outputArtistName = document.querySelector(".outputArtistName");
var paintColor = "white";
//Paint splatters
var redPaint = document.querySelector(".redPaint");
var bluePaint = document.querySelector(".bluePaint");
var whitePaint = document.querySelector(".whitePaint");
var yellowPaint = document.querySelector(".yellowPaint");
var blackPaint = document.querySelector(".blackPaint");
var painting = document.querySelector(".painting");



//Generate random blocks


//Enter artistname, handwriting font. On/Off.
artistName.addEventListener("input", function() {

        outputArtistName.textContent = artistName.value;
    }

);




//Paint splatters. (Refactor this code!)
redPaint.addEventListener("click", function() {

    paintColor = "red";
    return paintColor;

});

bluePaint.addEventListener("click", function() {

    paintColor = "blue";
    return paintColor;

});

yellowPaint.addEventListener("click", function() {

    paintColor = "yellow";
    return paintColor;

});

whitePaint.addEventListener("click", function() {

    paintColor = "white";
    return paintColor;

});

blackPaint.addEventListener("click", function() {

    paintColor = "black";
    return paintColor;

});


//Boxes
painting.addEventListener("click", function(event) {

    if (event.target.className === "painting") {
        //Do nothing!
    } else {
        event.target.style.backgroundColor = paintColor;
    }
});




//Generate random canvas





//Export canvas to picture + artist name bottom right. (.jpg, .png)
