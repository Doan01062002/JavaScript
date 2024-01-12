var a = +prompt("nhập giá trị a");
var b = +prompt("nhập giá trị b");
var c = +prompt("nhập giá trị c");

var delta = b**2 -4*a*c;

if(a===0){
    if(b===0){
        console.log("phương trình vô nghiệm");
    }else{
        var result = (-c)/b;
        console.log("Phương trình bậc nhất có nghiệm x= ", +result);
    }
}else{
    if(delta<0){
    console.log("phương trình không có nghiệm thực");
}else if(delta==0){
    var x = (-b)/(2*a);
    console.log("Phương trình có nghiệm kép", +x);
}else{
    var x1 = (-b -Math.sqrt(delta))/2*a;
    var x2 = (-b +Math.sqrt(delta))/2*a;

    console.log("Nghiệm x1= ", +x1);
    console.log("Nghiệm x2= ", +x2);
}
}

