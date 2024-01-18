let numbers = [2, 3, 4, 5, 6, 7];


function check(arr) {
    let count = 0;

    const isTriangle = (a, b, c) => {
        return a + b > c && b + c > a && c + a > b;
      };
  
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (isTriangle(arr[i], arr[j], arr[k])) {
            count++;
          }
        }
      }
    }
  
    return count;
  }
  
console.log("Số lượng hình tam giác: " +check(numbers));