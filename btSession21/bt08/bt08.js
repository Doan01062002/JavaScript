var weight = +prompt("Nhập cân nặng");
var height = +prompt("Nhập chiều cao");

var bmi = weight/(height**2);

if(bmi<18.5){
    console.log("Cân nặng thấp (gầy)");
}else if(bmi>=18.5 && bmi<=24.9){
    console.log("Bình thường");
}else if(bmi=25){
    console.log("Béo phì");
}else if(bmi>25 && bmi<=29.9){
    console.log("Tiền béo phì");
}else if(bmi>=30 && bmi<=34.9){
    console.log("Béo phì độ I");
}else if(bmi>=35 && bmi<=39.9){
    console.log("Béo phì độ II");
}else if(bmi>=40){
    console.log("Béo phì độ III");
}