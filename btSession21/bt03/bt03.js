var number = +prompt("Nhập số");

if(!isNaN(number)){
    switch(number){
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        case 8:
            console.log("Sunday");
            break;
        default:
            console.log("Không hợp lệ");
    }
}else{
    console.log("Không hợp lệ");
}