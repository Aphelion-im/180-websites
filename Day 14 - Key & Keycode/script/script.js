window.addEventListener("load", () => {

  const output = document.querySelector(".output");


  document.addEventListener("keydown", e => {

    output.innerHTML = `e.keyCode: ${e.keyCode}<br>
    e.key: ${e.key}`;


  });



















}); // End eventlistener