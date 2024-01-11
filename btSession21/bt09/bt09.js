var a = +prompt("Nhập giá trị a");
var b = +prompt("Nhập giá trị b");
var c = +prompt("Nhập giá trị c");

if(a>=b && a>=c){
    if(b>=c){
        console.log("Các số theo thứ tự tăng dần là: " +a,  +b,  +c);
    }else{
        console.log("Các số theo thứ tự tăng dần là: " +a,  +c,  +b);
    }
}else if(b>=a && b>=c){
    if(a>=c){
        console.log("Các số theo thứ tự tăng dần là: " +b,  +a,  +c);
    }else{
        console.log("Các số theo thứ tự tăng dần là: " +b,  +c,  +a);
    }
}else if(c>=a && c>=b){
    if(b>=a){
        console.log("Các số theo thứ tự tăng dần là: " +c,  +b,  +a);
    }else{
        console.log("Các số theo thứ tự tăng dần là: " +c,  +a,  +b);
    }
}
