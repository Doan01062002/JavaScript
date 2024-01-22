class Book{
    constructor(author, name){
        this.author = author;
        this.name = name;
    }
}

let books = [
    new Book('Adam Khoo', 'Tôi tài giỏi bạn cũng thế'),
    new Book('Robert Kiyosaki', 'Rich Dad, Poor Dad'),
];

let Name = prompt("Vui lòng nhập tên tác giả");

let found = false;

for(let i=0; i<books.length; i++){
    if(Name === books[i].author){
        console.log("Tên tác giả là: ", books[i].author);
        console.log("Tên sách là: ", books[i].name);
        found = true;
    }
}

if(!found){
    console.log("Không tìm thấy tác giả của sách");
}