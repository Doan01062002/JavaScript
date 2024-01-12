var number = +prompt("nhập một số bất kỳ để kiểm tra");

var check = Math.sqrt(number);

if(number === (check**2)){
    console.log("Đây là số chính phương");
}else{
    console.log("Đây không phải là một số chính phương");
}