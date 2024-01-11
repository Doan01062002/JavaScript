var birth = +prompt("Bạn sinh năm bao nhiêu");

if(birth<2024){
    var age = 2024 - birth;
    console.log("Tuổi của bạn là: " +age);
}else{
    console.log("Giá trị không hợp lệ");
}