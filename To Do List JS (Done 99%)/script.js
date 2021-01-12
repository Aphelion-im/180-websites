/* Based on the Udemy course: The Web Developer Bootcamp. 
Project: To-do list. https://www.udemy.com/the-web-developer-bootcamp, by Colt Steele. 

Built with Javascript instead of jQuery.

Colour palette: 
http://www.colourlovers.com/palette/4437356/mystical
https://uigradients.com
*/

"use strict";
//Variables
//Toggle inputfield variables: 
var toggleInputField = document.querySelector(".fa-minus");
var addItemInput = document.querySelector(".addItemInput");
//Mark items as done variables:
var toDoList = document.querySelector(".toDoList"); ///////
var lis = toDoList.children;


//Functions

//Attach trashbin icons to new list items:
function attachTrashBinIcons(listItem) {
    var attachIcon = document.createElement("SPAN");
    attachIcon.className = "fa fa-trash-o";
    //Insert the icon before the text:
    listItem.insertBefore(attachIcon, listItem.childNodes[0]);
}

//Attach Trashbin icons to existing list items:
for (var i = 0; i < lis.length; i++) {
    attachTrashBinIcons(lis[i]);
}


//Add item after pressing the Enter key
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {

        //Making sure an empty input field can not be submitted.
        if (addItemInput.value != "") {
            var listItem = document.createElement('li');
            listItem.textContent = addItemInput.value;
            toDoList.appendChild(listItem);

            //Add Trashbin Icon
            attachTrashBinIcons(listItem);


            //Clear input field after submit.
            addItemInput.value = '';
        } else {

            console.log("Please enter some text!");
        }
    }
});

//Mark item as completed or toggle not completed.
toDoList.addEventListener("click", function(event) {

    //Only List items allowed. Not the trashbin span.
    if (event.target.tagName == "LI") {

        event.target.classList.toggle("completed");
    }

});

//Toggle input field. 
//To do: Display: none, not animatable.
toggleInputField.addEventListener("click", function() {

        addItemInput.classList.toggle("hideItemInput");

        if (addItemInput.className == "addItemInput") {
            toggleInputField.setAttribute('title', 'Hide Input Field');
            toggleInputField.className = "fa fa-minus";
        } else {
            toggleInputField.setAttribute('title', 'Add a To Do');
            toggleInputField.className = "fa fa-plus";
        }
    }

);


//Delete item
toDoList.addEventListener("click", function(event) {

    //Only List items allowed. Not the trashbin span.
    if (event.target.tagName == "SPAN") {

        event.target.parentNode.remove();
    }

});



/*To do's
- Const and let not working on Ipad.
- Fadeout when deleting.
- Fadeout/in effect when pressing -/+
*/
