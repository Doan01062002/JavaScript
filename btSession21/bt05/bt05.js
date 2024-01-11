var number = prompt("nhập vào số tháng trong năm(1-12)");

if(number == 2){
    console.log("28 ngày");
}else if(number==4 || number==6 || number==9 || number==11){
    console.log("30 ngày");
}else{
    console.log("31 ngày");
}