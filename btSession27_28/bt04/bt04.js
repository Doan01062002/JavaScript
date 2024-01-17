var arr = [1,2,3,4,5,6,7,8,9];
var newArr1 = [];
var newArr2 = [];

for(var i=0; i<arr.length; i++){
    if(arr[i]%2 == 0){
        newArr1.push(arr[i]);
    }else{
        newArr2.push(arr[i]);
    }
}

console.log("mảng chứa số chẵn là: ", newArr1);
console.log("mảng chứa số lẻ là: ", newArr2);