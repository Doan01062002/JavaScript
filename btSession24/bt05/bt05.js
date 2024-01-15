var number = +prompt("nhập vào một số nguyên dương");

if(number>0){
    var sum = 0;
    for(var i=1; i<=number; i++){
        sum += 1/(i)**3;
    }
    console.log("Kết quả là: " +sum.toFixed(5));
}else{
    console.log("vui lòng nhập một số nguyên dương");
}