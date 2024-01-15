var number = +prompt("nhập vào một số nguyên");

var count = 0;
for(var i=1; i<number; i++){
    if(i%2 === 0){
        count++;
    }
}
console.log("khoảng n có " +count +" chữ số chẵn");