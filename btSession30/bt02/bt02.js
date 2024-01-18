var n = prompt("nhập một số nguyên dương bất kỳ");

function check(n){
    var newArray = [];
    for(var i=0; i<=n; i++){
        if(i%2 !== 0){
            newArray.push(i);
        }
    
    }
    for(var i=0; i<newArray.length; i++){
        if(newArray.length%2 === 0){
            newArray.pop();
        }
    }
    for(var number of newArray){
        console.log(number);
    }
}

console.log(check(n));