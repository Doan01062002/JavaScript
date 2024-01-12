var number = +prompt("nhập số vào một số nguyên dương");

console.log("Các số nguyên tố nhỏ hơn " + number + " là:");
for (var i = 2; i < number; i++) {
  var isPrime = true;
  for (var j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}