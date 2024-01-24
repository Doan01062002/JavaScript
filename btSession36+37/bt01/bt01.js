var button = document.getElementById("button");
button.addEventListener("click", checkinput);

function checkinput(){
    var input = document.getElementById("input");
    var character = input.value;

    var check = false;
    for(var i=0; i<character.length; i++){
        if(i>10){
            check = true;
        }
    }
    if(check){
        alert("Số ký tự vượt quá 10");
    }
}