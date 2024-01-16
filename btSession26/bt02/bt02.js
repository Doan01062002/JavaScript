var arr = [1,2,3,4,5,6,7,8,9,10];

var input = prompt("Vui lòng nhập một phần tử bất kỳ để tìm kiếm");

var check = false;

for(var item of arr){
    if(item == input){
        console.log(item);
        check = true;
    }
}

if(!check){
    console.log("Không tồn tại phần tử muốn tìm kiếm");
}