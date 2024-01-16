
var arr = [3, 'abc', 5, true, 8, 'xyz', 12.5];

var hasInteger = false;

for (var item of arr) {
  if (Number.isInteger(item)) {
    console.log(item);
    hasInteger = true;
  }
}

if (!hasInteger) {
  console.log("Trong mảng không tồn tại số nguyên");
}