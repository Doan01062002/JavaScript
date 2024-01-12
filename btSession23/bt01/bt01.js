var number = +prompt("nhập một số nguyên bất kỳ");

if(number>0){
    for(var i = 1; i<=number; i++){
        console.log(i);
    }
}else{
    console.log("Không hợp lệ");
}