function findMax(...arrays) {
    let result = [];
    for (let arr of arrays) {
      let numberMax = Math.max(...arr);
      result.push(numberMax);
    }
    return result;
  }
  
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = [9, 10, 11, 12];

let result = findMax(arr1, arr2, arr3);
console.log(result);