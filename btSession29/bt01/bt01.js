var number1 = (Math.floor(Math.random()*100));
var number2 = (Math.floor(Math.random()*100));
var number3 = (Math.floor(Math.random()*100));

function check(number){
    if(number%2 === 0){
        return "số chẵn";
    }else{
        return "số lẻ";
    }
}

console.log("Số " +number1 +" là " +check(number1));
console.log("Số " +number2 +" là " +check(number2));
console.log("Số " +number3 +" là " +check(number3));