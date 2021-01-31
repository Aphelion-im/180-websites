"use strict";

window.addEventListener("load", () => {

  // Variables
  const item = document.querySelector("#itemEnter");
  const todoList = document.querySelector("ul");
  const output = document.querySelector("h1 ~ div");
  const maxNumberItems = 5;
  const button = document.querySelector(".button");

  item.addEventListener("keydown", e => {

    if (e.key == "Enter") {
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


}); // End load event