var array = ["apple", "orange", "banana"];
var string = prompt("Vui lòng nhập một chuỗi bất kỳ");

function check(newArray,string){
    var result = [];
  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i].includes(string)) {
      result.push(newArray[i]);
    }
  }
  return result;
}

console.log("Mảng sau khi cập nhật là: ", check(array,string));