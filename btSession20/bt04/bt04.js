var message = "Bạn đã đủ 18 tuổi chưa!";
var isConfirmed = confirm(message);

if (isConfirmed){
    alert("Ok");
}else{
    alert("Hủy");
}