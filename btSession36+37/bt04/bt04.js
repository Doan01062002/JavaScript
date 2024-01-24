var input1 = document.getElementById("input-1");
input1.addEventListener("input", caculate);

var input2 = document.getElementById("input-2");
input2.addEventListener("input", caculate);

var input3 = document.getElementById("input-3");

function caculate(){
    input3.value = parseInt(input1.value) + parseInt(input2.value);
}