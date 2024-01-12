var number = +prompt("nhập một số nguyên dương bất kỳ");

if(number<=0){
    console.log("Không hợp lệ");
}else{
    var result = 1;
    for(var i=1; i<=number; i++){
        result = result*i;
    }
    console.log(result);
}