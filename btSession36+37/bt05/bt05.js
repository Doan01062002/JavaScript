var button = document.getElementById("button");
button.addEventListener("click", addText);
var input = document.getElementById("input");
input.style.backgroundColor = "orange";

input.addEventListener("click", function changeColor(){
    var input = document.getElementById("input");
    input.style.backgroundColor = "white";
});

function addText(){
    var ul = document.getElementById("ul");
    var newItem = document.createElement("li");
    var inputValue = document.getElementById("input");

    newItem.appendChild(document.createTextNode(inputValue.value));
    ul.appendChild(newItem);

    inputValue.value = "";
}