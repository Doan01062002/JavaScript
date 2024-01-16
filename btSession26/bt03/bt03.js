var arr = [1,2,3,4,5,6,7,8,9,10,2,6,8,2,4,9,4,5,2,3,5,7,9,9];

var number = +prompt("nhập vào một số nguyên bất kỳ");

var count = 0;

for(var item of arr){
    if(number == item){
        count++;
    }
}
console.log("Số lần xuất hiện của " +number +" là: " +count);