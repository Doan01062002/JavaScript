var a = +prompt("Vui lòng nhập giá trị của a");
var b = +prompt("Vui lòng nhập giá trị của b");

var arr = [];

if(a>b){
    for(i=1; i<=a; i++){
        if(i%b == 0){
            arr.push(i);
        }
    }
    console.log("Mảng sau khi được cập nhật là: ", arr);
}else{
    for(i=1; i<=b; i++){
        if(i%a == 0){
            arr.push(i);
        }
    }
    console.log("Mảng sau khi được cập nhật là: ", arr);
}