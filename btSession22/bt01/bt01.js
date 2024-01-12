var a = +prompt("nhập giá trị a");
var b = +prompt("nhập giá trị b");

if(a>b){
    var divide = a/b;
    if(a%b==0){
        console.log("a chia hết cho b có kết quả là: " +divide);
    }else{
        console.log("a không chia hết cho b có kết quả là: " +divide);
    }
}else{
    var divide = b/a;
    if(b%a==0){
        console.log("b chia hết cho a có kết quả là: " +divide);
    }else{
        console.log("b không chia hết cho a có kết quả là: " +divide);
    }
}