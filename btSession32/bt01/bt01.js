var information = {
    id: "",
    name: "",
    phone: "",
    address: "",
}
information.id = +prompt("vui lòng nhập id");
information.name = prompt("vui lòng nhập tên");
information.phone = +prompt("vui lòng nhập số điện thoại");
information.address = prompt("vui lòng nhập địa chỉ");

console.log(information);