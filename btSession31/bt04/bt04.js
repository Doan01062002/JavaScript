var str = "Hello world";
var number = 3;

function truncate(str, number){
    var newstr = "";
    var dots = "..."
    for(var i=0; i<str.length - number; i++){
        newstr += str[i];
    }
    return newstr += dots;
}

console.log("chuỗi sau khi rút gọn là: ", truncate(str, number));