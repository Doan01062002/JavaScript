var icon = document.getElementById("icon");

var count = 0;

icon.addEventListener("click", function animation(){
    count++;
    var input = document.getElementById("input");

    if(count%2 === 0){
        input.style.width = "0px";
        input.style.height = "30px";
    }else{
        input.style.width = "200px";
    input.style.height = "30px";
    }
});