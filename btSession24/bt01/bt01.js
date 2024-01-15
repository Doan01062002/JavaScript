var number = +prompt("nhập một số nguyên dương");

if(number>0){
    var square = 1;
    for(var i=1; i<=number; i++){
        if(i%2 === 0){
            square = i*i;
        }
        console.log("Kết quả là: " +square);
    }
}else{
    console.log("Vui lòng nhập một số nguyên dương");
}