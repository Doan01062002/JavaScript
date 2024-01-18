var arr = [1,2,3,4,3,2,1];

function check(array){
    var n = array.length;
    for(var i=0; i<n/2; i++){
        if(array[i] !== array[n-i-1]){
            return false;
        }
    }
    return true;
}

console.log(check(arr));
