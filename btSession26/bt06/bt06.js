var arr = [1,2,3,4,5,-6,-7,-8,-9];

var newArray = [];

for(var item of arr){
    if(item<0){
        newArray.unshift(item);
    }else{
        newArray.push(item);
    }
}

console.log("Mảng sau khi sắp xếp là: ", newArray);