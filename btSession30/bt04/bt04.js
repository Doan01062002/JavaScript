var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var primes = [];

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }

for (let i = 0; i < arr.length; i++) {
  if (isPrime(arr[i])) {
    primes.push(arr[i]);
  }
}

console.log(primes);