var number = +prompt("nhập vào một số nguyên dương");

var triangle1 = "";
var triangle2 = "";

for(var i=1; i<=number; i++){
    for( var j=1; j<=i; j++){
        triangle1 += "*";
    }
    triangle1 += "\n";
}
for(var i=number; i>=1; i--){
    for( var j=1; j<=i; j++){
        triangle2 += "*";
    }
    triangle2 += "\n";
}

console.log("Tam giác vuông thứ nhất:");
console.log(triangle1);
console.log("Tam giác vuông thứ hai:");
console.log(triangle2);