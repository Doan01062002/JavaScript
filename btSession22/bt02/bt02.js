var a = +prompt("nhập giá trị cạnh a");
var b = +prompt("nhập giá trị cạnh b");
var c = +prompt("nhập giá trị cạnh c");

var check = (a > 0 && b > 0 && c > 0) && (a + b > c) && (b + c > a) && (a + c > b);

if(check){
    console.log("Độ dài 3 cạnh của tam giác abc lần lượt là: " +a, +b, +c);
}else{
    console.log("Đây không phải một tam giác");
}