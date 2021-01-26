"use strict";

window.addEventListener("load", () => {

  // Variables
  const item = document.querySelector("#itemEnter");
  const todoList = document.querySelector("ul");
  let counter = 0;

  item.addEventListener("keypress", e => {

    if (e.keyCode == "13") {

      if (item.value == "") {
        console.log("Enter a value!");
      } else {
        const listItem = document.createElement("li");
        todoList.appendChild(listItem);
        const itemText = document.createTextNode(item.value);
        listItem.appendChild(itemText);
        item.value = "";
      }
    }
  });

  // Mark item as done
  todoList.addEventListener("click", e => {

    e.target.classList.toggle("markAsCompleted");

  });

















});