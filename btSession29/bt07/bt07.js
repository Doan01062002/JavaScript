var array = [1,2,3,4,5,6,7,8,9];
var number = +prompt("Vui lòng nhập một số nguyên");

function check(arr, number) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === number) {
          return [arr[i], arr[j]];
        }
      }
    }
    return null;
  }
var two_number = check(array,number);

if (two_number !== null) {
  console.log("Cặp số có tổng bằng " + number + " là: " +two_number[0] +", " +two_number[1]);
} else {
  console.log("Không tìm thấy cặp số có tổng bằng " + number);
}