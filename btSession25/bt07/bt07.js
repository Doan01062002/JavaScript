var a = +prompt("nhập số nguyên a");
var b = +prompt("nhập số nguyên b");
var c = +prompt("nhập số nguyên c");
var d = +prompt("nhập số nguyên d");

function timUocChungLonNhat(a, b) {
    while (b !== 0) {
      var temp = b;
      b = a % b;
      a = temp;
    }
    return a;
}

function timBoiChungNhoNhat(a, b, c, d) {
    var uclnAB = timUocChungLonNhat(a, b);
    var uclnCD = timUocChungLonNhat(c, d);
    var uclnABC = timUocChungLonNhat(uclnAB, uclnCD);
    
    var bcnnAB = (a * b) / uclnAB;
    var bcnnCD = (c * d) / uclnCD;
    var bcnn = (bcnnAB * bcnnCD) / uclnABC;
    
    return bcnn;
}

var boiChung = timBoiChungNhoNhat(a, b, c, d);

console.log("Bội chung nhỏ nhất của", a, b, c, d, "là:", boiChung/2);