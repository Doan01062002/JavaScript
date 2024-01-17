var array1 = prompt("Vui lòng nhập vào một chuỗi");
var array2 = prompt("Vui lòng nhập vào một ký tự bất kỳ");

function check(a,b){
    var count = 0;
    for(var i=0; i<a.length; i++){
        if(a[i] === b){
            count++;
        }
    }
    return count;
}

console.log("Số lần xuất hiện của ký trong mảng là: ", check(array1,array2));