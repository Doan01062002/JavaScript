var button = document.getElementById("myButton");
var text = document.getElementById("myText");

button.addEventListener("click", function(){
    text.style.backgroundColor = "orange";
});

button.style.width = "150px";
button.style.backgroundColor = "blue";
button.style.height = "50px";
button.style.borderRadius = "10px";