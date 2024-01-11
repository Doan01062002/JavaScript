var number = +prompt("nhập số");

if(!isNaN(number)){
    if(number%2 === 0){
    console.log("Số chẵn: " +number);
    }else{
        console.log("Số lẻ: " +number);
    }
}else{
    console.log("không hợp lệ");
}
