var number = [6,34,88,45,66,89,99,3,5,22,1];
max = number[0];
min = number[0];

for(var i=0; i<number.length; i++){
    if(min > number[i]){
        min = number[i];
    }
    if(max < number[i]){
        max = number[i];
    }
}

console.log("giá trị lớn nhất là: "+ max +" giá trị nhỏ nhất là: "+ min);