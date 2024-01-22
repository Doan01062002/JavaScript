var count = +prompt("nhập số lượng sinh viên muốn cập nhật");

var student = {
    id: "",
    name: "",
};

var newStudent = [];
for(let i=1; i<=count; i++){
    student.id = prompt(`Vui lòng nhập id của sinh thứ ${i}`);
    student.name = prompt(`Vui lòng nhập tên của sinh viên thứ ${i}`);
    newStudent.push(student.id);
    newStudent.push(student.name);
};

console.log(newStudent);