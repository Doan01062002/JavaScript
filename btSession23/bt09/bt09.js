var number = +prompt("nhập vào một số nguyên dương");

var a=0;
var b=1;
var sum=0;

console.log(a);
while(b<number){
    console.log(b);
    sum = a+b;
    a=b;
    b=sum;
}