var number1 = +prompt("nhập số thứ nhất");
var number2 = +prompt("nhập số thứ hai");

var calculation = prompt("nhập lệnh muốn thực hiện +, -, *, /");

switch(calculation){
    case '+':
        var result = number1 +number2;
        console.log(result);
        break;
    case '-':
        var result = number1 - number2;
        console.log(result);
        break;
    case '*':
        var result = number1*number2;
        console.log(result);
        break;
    case '/':
        if(number2===0){
            console.log("vô nghiệm");
        }else{
            var result = number1/number2;
        console.log(result);
        }
        break;
    default:
        console.log("không hợp lệ");            
}