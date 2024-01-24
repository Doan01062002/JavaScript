var button = document.getElementById("button");
button.addEventListener("click", changeText);

function changeText(){
    if (button.innerText === "OFF") {
        button.innerText = "ON";
    } else {
        button.innerText = "OFF";
    }
};

