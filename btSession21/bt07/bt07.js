var a = +prompt("nhập giá trị a");
var b = +prompt("nhập giá trị b");
var c = +prompt("nhập giá trị c");

if(a>b && a>c){
    console.log("Số lớn nhất là: " +a);
}else if(b>a && b>c){
    console.log("Số lớn nhất là: " +b);
}else{
    console.log("Số lớn nhất là: " +c);
}