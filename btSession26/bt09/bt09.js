let arr = [3, 4, -1, 1];
let n = arr.length;
let present = Array(n + 1).fill(false);

// Đánh dấu các phần tử dương và nằm trong khoảng từ 1 đến n
for (let i = 0; i < n; i++) {
  if (arr[i] > 0 && arr[i] <= n) {
    present[arr[i]] = true;
  }
}

// Tìm phần tử dương nhỏ nhất chưa xuất hiện trong mảng
let smallestMissingPositive = n + 1;
for (let i = 1; i <= n; i++) {
  if (!present[i]) {
    smallestMissingPositive = i;
    break;
  }
}

console.log("Phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng:");
console.log(smallestMissingPositive);