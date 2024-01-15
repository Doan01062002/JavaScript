var a = +prompt("nhập giá trị của a");
var b = +prompt("nhập giá trị của b");

if(a>b){
    var sum_even = 0;
    var sum_odd = 0;
    for(i=b; i<=a; i++){
        if(i%2 === 0){
            sum_even += i;
        }else{
            sum_odd += i;
        }
    }
    console.log("Tổng các số chẵn là: " +sum_even);
    console.log("Tổng các số lẻ là: " +sum_odd);
}else{
    var sum_even = 0;
    var sum_odd = 0;
    for(i=a; i<=b; i++){
        if(i%2 === 0){
            sum_even += i;
        }else{
            sum_odd += i;
        }
    }
    console.log("Tổng các số chẵn là: " +sum_even);
    console.log("Tổng các số lẻ là: " +sum_odd);
}