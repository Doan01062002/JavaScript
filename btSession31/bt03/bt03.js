var arrOrigin = "Hello world";
var arrChild = "world";

function check(origin,child){
    if(origin.endsWith(child)){
        return true;
    }else{
        return false;
    }
}

console.log(check(arrOrigin,arrChild));