var n = +prompt("nhập một số nguyên dương n");

if(n>0){
    var sum = 0;
    var m =0;
    while(sum<n){
        m++;
        sum += m;
    }
    console.log("Số nguyên dương m lớn nhất là: " +(m-1));
}else{
    console.log("Vui lòng nhập một số nguyên dương");
}