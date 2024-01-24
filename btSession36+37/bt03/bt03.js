var input = document.getElementById("input");
input.addEventListener("input", addText);

function addText(){
    var text = document.getElementById("text");
    text.textContent = input.value;
    text.innerHTML = input.value;
}

