'use strict';

window.addEventListener('load', function () {

  // Variabelen
  const kleur1 = document.querySelector('#colorPicker1');
  const kleur2 = document.querySelector('#colorPicker2');
  const output = document.querySelector('#output');
  const copypaste = document.querySelector('.fa-copy');

  const achtergrond = document.querySelector('body');


  kleur1.addEventListener('input', function () {

    achtergrond.style.backgroundImage = `linear-gradient(${kleur1.value}, ${kleur2.value})`;
    output.textContent = `background: linear-gradient(${kleur1.value}, ${kleur2.value});`;

  });

  kleur2.addEventListener('input', function () {

    achtergrond.style.backgroundImage = `linear-gradient(${kleur1.value}, ${kleur2.value})`;
    output.innerHTML = `<code>background: linear-gradient(${kleur1.value}, ${kleur2.value});</code>`;

  });

  copypaste.addEventListener('click', function () {
    // Copy to clipboard
    navigator.clipboard.writeText(`background: linear-gradient(${kleur1.value}, ${kleur2.value});`);
    console.log('Copied to clipboard!');
  });





}); // End window addEventListener