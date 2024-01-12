let sum = 0;
let number = +prompt("nhập một số nguyên để kiểm tra");

for(let i=1; i<number; i++){
    if(number%i === 0){
        sum = sum +i;
    }
}

if(sum === number){
    console.log(number+" là một số hoàn hảo");
}else{
    console.log(number+" không phải là một số hoàn hảo");
}