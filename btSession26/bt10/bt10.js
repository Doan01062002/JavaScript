let arr1 = [1, 3, 4, 6, 7, 9];
let arr2 = [2, 3, 5, 7, 8];
let arr3 = [3, 7, 10, 12];

let i = 0;
let j = 0;
let k = 0;

let commonElements = [];

while (i < arr1.length && j < arr2.length && k < arr3.length) {
  if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
    commonElements.push(arr1[i]);
    i++;
    j++;
    k++;
  } else if (arr1[i] < arr2[j]) {
    i++;
  } else if (arr2[j] < arr3[k]) {
    j++;
  } else {
    k++;
  }
}

console.log("Các phần tử chung của ba mảng:");
commonElements.forEach(element => {
  console.log(element);
});