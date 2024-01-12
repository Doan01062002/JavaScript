var number = prompt("nhập 1 giá trị có 4 chữ số");

if(number.length !== 4){
    console.log("Nhập số nguyên có 4 chữ số");
}else{
    console.log("Hàng nghìn: ", number[0]);
console.log("Hàng trăm: ", number[1]);
console.log("Hàng chục: ", number[2]);
console.log("Hàng đơn vị: ", number[3]);
}

