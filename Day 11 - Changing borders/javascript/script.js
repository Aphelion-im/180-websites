"use strict";

window.addEventListener("load", () => {

	let x = 0;
	const matrix = ["hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"];
	const changeBorder = document.querySelector("#border");
	const output = document.querySelector("#output");

	document.addEventListener("click", () => {
		changeBorder.style.borderStyle = matrix[x];
		output.innerHTML = matrix[x].toLocaleUpperCase();
		x++;

		// If the loop reaches the end of the array, set the array to index 0
		if (x === matrix.length) {
			x = 0;
		}

	});


});