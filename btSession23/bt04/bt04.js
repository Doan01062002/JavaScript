var a = +prompt("nhập giá trị a");
var b = +prompt("nhập giá trị b");

if(a>b){
    var result = 1;
    for(var i=1; i<=a; i++){
        if(i%b === 0){
            result = i/b;
            console.log(i);
        }
    }
}else{
    console.log("Vui lòng nhập giá trị a>b");
}