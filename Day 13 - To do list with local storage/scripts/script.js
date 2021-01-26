/* Oplossingen: 
Adding an Event Listener to Dynamically Created Elements:
https://forum.freecodecamp.org/t/adding-an-event-listener-to-dynamically-created-elements/185906/2

Nieuw 26-1-2021:
* setTimeout(function, seconds); --> Show message for 
* children.length;
* e.target.tagName == "LI";
*/

"use strict";

window.addEventListener("load", () => {

  // Variables
  const item = document.querySelector("#itemEnter");
  const todoList = document.querySelector("ul");
  let output = document.querySelector("h1 ~ div");
  const maxNumberItems = 5;

  item.addEventListener("keydown", e => {

    if (e.keyCode == "13") {

      if (item.value == "") {
        console.log("Enter a value!");
      } else if (todoList.children.length >= maxNumberItems) {
        output.innerHTML = `No more than ${maxNumberItems} items!`;
        setTimeout(() => output.innerHTML = "", 3000); // Show message for 3 seconds
      } else {
        const listItem = document.createElement("li");
        todoList.appendChild(listItem);
        const itemText = document.createTextNode(item.value);
        listItem.appendChild(itemText);
        const span = document.createElement("span");
        listItem.appendChild(span);
        const icon = document.createElement("i");
        icon.addEventListener("click", () => icon.parentNode.parentNode.remove()); // Attach an eventlistener to an element before it's created
        span.appendChild(icon);
        icon.setAttribute("class", "fas fa-trash-alt");

        // Empty input field after submit
        item.value = "";
      }
    }
  });

  // Mark item as done
  todoList.addEventListener("click", e => {

    if (e.target.tagName == "LI") {
      e.target.classList.toggle("markAsCompleted");
    }

  });



});