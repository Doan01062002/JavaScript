// Câu lệnh if/else được sử dụng khi có nhiều điều kiện cần kiểm tra và thực hiện các hành động khác nhau dựa trên kết quả của điều kiện.
//Có thể sử dụng nhiều khối else if để kiểm tra nhiều tùy chọn điều kiện.
//Câu lệnh if/else linh hoạt và có thể kiểm tra các biểu thức phức tạp hơn switch/case.
//Thường được sử dụng khi có nhiều trường hợp lệ cần kiểm tra và xử lý riêng.

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

//Công tắc/trường hợp lệnh được sử dụng khi cần kiểm tra một biểu thức duy nhất và thực hiện các hành động khác nhau dựa trên giá trị của biểu thức đó.
//Các trường hợp (trường hợp) được sử dụng để xác định giá trị cụ thể mà biểu thức có thể có và thực hiện hành động tương ứng.
//Mặc định hợp hợp (mặc định) được thực hiện khi không có trường hợp hợp nào phù hợp với giá trị của biểu thức.
//Thường được sử dụng khi có một số giới hạn giá trị có thể xảy ra và cần xử lý tương ứng với từng giá trị đó.

let color = "red";

switch (color) {
  case "blue":
    console.log("Màu là xanh dương");
    break;
  case "red":
    console.log("Màu là đỏ");
    break;
  case "yellow":
    console.log("Màu là vàng");
    break;
  default:
    console.log("Màu không được xác định");
    break;
}