var number = +prompt("nhập một số nguyên dương");

if(number>0){
    if(number === a || number === b){
        var count = 0;
        var sum = 0;
        var a=0;
        var b=1;
        while(b<number){
        sum = a + b;
        a=b;
        b=sum;
        count++;
    }
    console.log("Đây là số fibonacci thứ: " +count);
    }else{
        console.log("Đây không phải một số fibonacci");
    }
}else{
    console.log("Vui lòng nhập một số nguyên dương");
}