var a = +prompt("vui lòng nhập số nguyên a");
var b = +prompt("vui lòng nhập số nguyên b");

var arr = [];

if(a>b){
    for(var i=b; i<=a; i++){
        arr.push(i)
    }
}else{
    for(var i=a; i<=b; i++){
        arr.push(i)
    }
}

console.log("mảng trong khoảng a và b là: ", arr);