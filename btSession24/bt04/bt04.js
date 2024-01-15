var number = +prompt("nhập vào một số nguyên dương");

if(number>0){
    var result = 1;
    var sum = 0;
    for(var i=2; i<=number; i++){
        if(i%2 == 0){
            result = i**2;
            sum += result;
            
        }else if(sum<number){
            console.log(result);
        }
    }
}else{
    console.log("Vui lòng nhập một số nguyên dương");
}