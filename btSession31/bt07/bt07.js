function fakeFilter(arr, callback) {
    let filteredArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        filteredArray.push(arr[i]);
      }
    }
    
    return filteredArray;
}

let numbers = [1, 2, 3, 4, 5];

function isEven(element) {
  return element % 2 === 0;
}

let result = fakeFilter(numbers, isEven);
console.log(result);