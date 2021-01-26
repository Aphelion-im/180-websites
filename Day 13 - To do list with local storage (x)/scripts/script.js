/* Oplossingen: 
Adding an Event Listener to Dynamically Created Elements:
https://forum.freecodecamp.org/t/adding-an-event-listener-to-dynamically-created-elements/185906/2

Nieuw 26-1-2021:
* setTimeout(function, seconds); --> Show/hide message for/after x seconds 
* children.length;
* e.target.tagName == "LI";
* .remove();
* CSS: user-select:none;
*/

"use strict";

window.addEventListener("load", () => {

  // Variables
  const item = document.querySelector("#itemEnter");
  const todoList = document.querySelector("ul");
  let output = document.querySelector("h1 ~ div");
  const maxNumberItems = 5;
  const button = document.querySelector(".button");
  let text, obj;


  let todoItems = [];

  item.addEventListener("keydown", e => {

    if (e.keyCode == "13") {
      inputCheck();
    }
  });

  // Mark item as done
  todoList.addEventListener("click", e => {

    if (e.target.tagName == "LI") {
      e.target.classList.toggle("markAsCompleted");
    }

  });


  button.addEventListener("click", () => {
    inputCheck();
  });



  function createListItem() {

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
    
    
    // todoItems.push(item.value);
    
    // Show To do items array
    // console.log(todoItems);

    // Empty input field after submit
    item.value = "";
  }

  function inputCheck() {

    if (item.value == "") {
      output.innerHTML = "Enter a value!";
      setTimeout(() => output.innerHTML = "", 3000); // Hide message after 3 seconds
    } else if (todoList.children.length >= maxNumberItems) {
      output.innerHTML = `No more than ${maxNumberItems} items!`;
      setTimeout(() => output.innerHTML = "", 3000); // Hide message after 3 seconds
    } else {
      createListItem();
    }

  }




  text = localStorage.getItem("testJSON");
  obj = JSON.parse(text);
  output.innerHTML = obj.todo;



}); // End load event