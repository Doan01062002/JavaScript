var array = "Hello world";

function check(arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr.length !== " "){
            count++;
        }
    }
    return count;
}

console.log("số ký tự trong mảng là: ", check(array));