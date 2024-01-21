var arr1 = [-1,0,1,2];
var arr2 = [1,2,3];

function sumZero(arr){
    var firstItem = arr[0];
    var newArr = [];
    for(var i=1; i<arr.length; i++){
        if((firstItem + arr[i]) === 0){
            newArr.push(firstItem, arr[i]);
            console.log(newArr);
        }else{
        var control = undefined;
    }
}
return control;
}

console.log(sumZero(arr1));
console.log(sumZero(arr2));