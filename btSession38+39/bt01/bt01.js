var previous = document.getElementById("previous");
previous.addEventListener("click", previousNumber);
previous.disabled = true;
previous.style.backgroundColor = "rgb(178, 185, 190)";

var count = 0;

function previousNumber(){
    count--;
    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    var number3 = document.getElementById("number3");
    var number4 = document.getElementById("number4");

    if(count === 0){
        previous.style.backgroundColor = "rgb(178, 185, 190)";
        previous.disabled = true;
    }

    if(count < 4){
        next.style.backgroundColor = "rgb(0, 81, 255)";
        next.disabled = false;
    }
    
    if(count === 3){
        number4.style.backgroundColor = "white";
    }else if(count === 2){
        number3.style.backgroundColor = "white";
    }else if(count === 1){
        number2.style.backgroundColor = "white";    
    }else if(count === 0){
        number1.style.backgroundColor = "white";
    }
}

var next = document.getElementById("next");
next.addEventListener("click", nextNumber);

function nextNumber(){
    count++;

    if(count > 0){
    previous.style.backgroundColor = "rgb(0, 81, 255)";
    previous.disabled = false;
    }

    if(count === 4){
        next.style.backgroundColor = "rgb(178, 185, 190)";
        next.disabled = true;
    }

    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    var number3 = document.getElementById("number3");
    var number4 = document.getElementById("number4");

    if(count === 1){
        number1.style.backgroundColor = "rgb(0, 81, 255)";
    }else if(count === 2){
        number2.style.backgroundColor = "rgb(0, 81, 255)";
    }else if(count === 3){
        number3.style.backgroundColor = "rgb(0, 81, 255)";
    }else if(count === 4){
        number4.style.backgroundColor = "rgb(0, 81, 255)";
    }
};