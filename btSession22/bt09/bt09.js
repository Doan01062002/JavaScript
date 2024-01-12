var year = +prompt("nhập năm muốn kiểm tra");

if(year%4===0){
    console.log("Đây là năm nhuận");
    var number = prompt("nhập vào số tháng trong năm(1-12)");
    if(number>=13 || number<=0){
        console.log("Không hợp lệ");
    }else{
        if(number == 2){
        console.log("29 ngày");
    }else if(number==4 || number==6 || number==9 || number==11){
        console.log("30 ngày");
    }else{
        console.log("31 ngày");
    }
    }
}else{
    console.log("Đây không phải là năm nhuận");
    var number = prompt("nhập vào số tháng trong năm(1-12)");
    if(number>=13 || number<=0){
        console.log("Không hợp lệ");
    }else{
         if(number == 2){
        console.log("28 ngày");
    }else if(number==4 || number==6 || number==9 || number==11){
        console.log("30 ngày");
    }else{
        console.log("31 ngày");
    }
    }
}