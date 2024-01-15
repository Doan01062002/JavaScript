var a = +prompt("nhập số nguyên a");
var b = +prompt("nhập số nguyên b");

if(a>b){
    var sum = 0;
    for(var i=b; i<=a; i++){
        sum += i;
    }
    console.log("Kết quả là: " +sum);
}else{
    var sum = 0;
    for(var i=a; i<=b; i++){
        sum += i;
    }
    console.log("Kết quả là: " +sum);
}