var arr = ['doan',2,3,4,5,6,7,8,9,'vỹ nước lèo'];

var newarr = [];

    for(var i=0; i<arr.length; i++){
        newarr.unshift(arr[i]);
    }

console.log("Mảng sau khi đảo ngược là: ", newarr);