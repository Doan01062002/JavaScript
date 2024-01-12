const randomNumber = Math.floor(Math.random()*10) + 1;
var number = 0;

while(randomNumber !== number){
    number = +prompt("nhập một số ngẫu nhiên từ 1-10");
    if(number>randomNumber){
        console.log("Lớn hơn số ngẫu nhiên");
    }else if(number<randomNumber){
        console.log("Nhỏ hơn số ngẫu nhiên");
    }else{
        console.log("Chính xác! số ngẫu nhiên là: " +randomNumber);
    }
}

