var Book = {
    init: function(title, author, publishedYear) {
      this.title = title;
      this.author = author;
      this.publishedYear = publishedYear;
      this.isAvailable = true;
    },
    displayInfo: function() {
      console.log(`Tiêu đề: ${this.title}`);
      console.log(`Tác giả: ${this.author}`);
      console.log(`Năm xuất bản: ${this.publishedYear}`);
      console.log(`Trạng thái: ${this.isAvailable ? 'Có sẵn' : 'Đã mượn'}`);
      console.log('---------------------');
    },
    borrow: function() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`Bạn đã mượn cuốn sách "${this.title}".`);
      } else {
        console.log(`Cuốn sách "${this.title}" đã được mượn.`);
      }
    },
    returnBook: function() {
      if (!this.isAvailable) {
        this.isAvailable = true;
        console.log(`Bạn đã trả cuốn sách "${this.title}".`);
      } else {
        console.log(`Cuốn sách "${this.title}" đã có sẵn.`);
      }
    }
};
  
var Library = {
    books: [],
    addBook: function(book) {
      this.books.push(book);
    },
    displayAllBooks: function() {
      for (let i = 0; i < this.books.length; i++) {
        console.log(`Sách ${i + 1}:`);
        this.books[i].displayInfo();
      }
    },
    isBookAvailable: function(title) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].title === title) {
          return this.books[i].isAvailable;
        }
      }
      return false;
    }
};
  
var book1 = Object.create(Book);
book1.init("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 1997);

var book2 = Object.create(Book);
book2.init("To Kill a Mockingbird", "Harper Lee", 1960);

var book3 = Object.create(Book);
book3.init("1984", "George Orwell", 1949);

Library.addBook(book1);
Library.addBook(book2);
Library.addBook(book3);

Library.displayAllBooks();

book1.borrow();

book1.returnBook();

console.log(`Trạng thái sách "${book1.title}": ${Library.isBookAvailable(book1.title)}`);
console.log(`Trạng thái sách "${book2.title}": ${Library.isBookAvailable(book2.title)}`);