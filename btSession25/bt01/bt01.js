var number = +prompt("nhập một số nguyên bất kỳ");

if(number>0){
    var sum = 0;
    for(var i=0; i<=number; i++){
        console.log(i);
        sum += i;
    }
    if(sum%2 === 0){
        console.log("Tổng của của các số nguyên trên không phải là một số lẻ");
    }else{
        console.log("tổng các số trên là: " +sum);
    }
}else{
    console.log("vui lòng nhập một số nguyên dương");
}

