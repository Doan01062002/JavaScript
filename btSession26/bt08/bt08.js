let arr = [1, 2, 3, 4, 5, 2, 3, 4, 6, 7, 8, 5, 9, 2, 3, 5];
let countMap = {};
let repeatedElements = [];

// Đếm số lần xuất hiện của các phần tử trong mảng
for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  if (countMap[element] === undefined) {
    countMap[element] = 1;
  } else {
    countMap[element]++;
  }
}

// Lấy các phần tử xuất hiện từ hai lần trở lên
for (let element in countMap) {
  if (countMap[element] >= 2) {
    repeatedElements.push(parseInt(element));
  }
}

// In ra các phần tử xuất hiện từ hai lần trở lên
console.log("Các phần tử xuất hiện từ hai lần trở lên:");
for (let i = 0; i < repeatedElements.length; i++) {
  console.log(repeatedElements[i]);
}