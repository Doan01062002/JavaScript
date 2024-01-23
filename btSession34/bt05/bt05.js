var names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

var nameList = document.getElementById("nameList");

for(let i=0; i<names.length; i++){
    var nameItem = document.createElement("li");
    nameItem.textContent = names[i];
    nameList.appendChild(nameItem);
};