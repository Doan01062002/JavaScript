function maxSubArraySum(array, n) {
    if (n > array.length) {
      return null;
    }
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < n; i++) {
      maxSum += array[i];
    }
    for (let i = n; i < array.length; i++) {
      currentSum = maxSum + array[i] - array[i - n];
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }

const array1 = [1, 2, 5, 2, 8, 1, 5];
const n1 = 2;
const result1 = maxSubArraySum(array1, n1);
console.log(result1);

const array2 = [1, 2, 5, 2, 8, 1, 5];
const n2 = 4;
const result2 = maxSubArraySum(array2, n2);
console.log(result2);