var math = +prompt("nhập điểm toán");
var literature = +prompt("nhập điểm văn");
var english = +prompt("nhập điểm anh");

var medium = (math + literature +english)/3;

if(8<=medium && medium<=10){
    console.log("Xếp loại giỏi");
}else if(6.5<=medium && medium<=7.9){
    console.log("Xếp loại khá");
}else if(5<=medium && medium<=6.4){
    console.log("Xếp loại trung bình");
}else{
    console.log("Xếp loại yếu");
}