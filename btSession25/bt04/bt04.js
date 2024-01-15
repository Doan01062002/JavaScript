var n = +prompt("nhập số nguyên dương n");

if(n>0){
    var term = 1;
    var sum = 0;
    for(var i=1; i<=n; i++){
        term *= i;
        sum += term;
    }
    console.log("Giá trị của biểu thức S là: " +sum);
}else{
    console.log("Vui lòng nhập một số nguyên dương");
}