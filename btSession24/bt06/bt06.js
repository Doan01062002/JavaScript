var number = prompt("nhập một số nguyên dương");
var count = "";

if(number>0){
    for(var i = number.length -1; i>=0; i--){
        count += number[i];
    }
    console.log(count);
}else{
    console.log("Vui lòng nhập một số nguyên dương");
}