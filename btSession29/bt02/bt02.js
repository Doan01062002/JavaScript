function check(arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i].length > maxElement.length) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  }
  
  var array = ["apple",4,5, "banana", "orange", "watermelon", "grape",1,2,3];
  
  var maxElement = check(array);
  console.log("Phần tử có độ dài lớn nhất là: " + maxElement);