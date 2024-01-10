var physic = +prompt("Nhập điểm vật lý:");
var chemistry = +prompt("Nhập điểm hóa học:");
var biology = +prompt("Nhập điểm sinh học");

var sum = parseFloat(physic + chemistry + biology);
var medium = parseFloat(sum/3);

console.log("Tổng điểm: " +sum);
console.log("Điểm trung bình: " +medium);