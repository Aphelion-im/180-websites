window.addEventListener("load", () => {

  const output = document.querySelector("#output");
  const dataIndexes = document.querySelectorAll(".input");
  let uitkomst;

  dataIndexes.forEach(index => index.addEventListener("mousedown", getValue));


  function getValue(e) {

    let input = e.target.getAttribute("data-id");

    switch (input) {

      case "1":
        output.textContent += input;
        uitkomst += parseFloat(input);
        console.log(typeof uitkomst);
        break;
      case "+":
        output.textContent += "+";
        uitkomst += input;
        break;
      case "clr":
        output.textContent = "";
        break;
      case "=":
        output.textContent = uitkomst;
        break;

      default:
        console.log("Default");


    }



  }


















}); // End load eventlistener