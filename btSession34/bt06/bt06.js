var button = document.getElementById("saveButton");
button.style.height = "50px";
button.style.width = "150px";
button.style.backgroundColor = "blue";
button.style.borderRadius = "10px";

var text = document.getElementById("textInput");
text.style.height = "50px";
text.style.width = "200px";
text.style.borderRadius = "10px";
text.style.fontSize = "20px";

var characters = [];

var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveCharacter);

function saveCharacter() {
  var input = document.getElementById("textInput");
  var character = input.value;

  if (character !== "") {
    characters.push(character);

    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(character));

    var characterList = document.getElementById("characterList");
    characterList.appendChild(listItem);

    input.value = "";
  }
}