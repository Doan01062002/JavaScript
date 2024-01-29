if (typeof(Storage) !== "undefined") {
    var person = JSON.parse(localStorage.getItem("person"));

    if (person === null) {
      person = {};
    }

    person.name = prompt("Nhập họ tên:");
    person.age = prompt("Nhập tuổi:");
    person.email = prompt("Nhập email:");

    localStorage.setItem("person", JSON.stringify(person));

    document.write("<p>Họ tên: " + person.name + "</p>");
    document.write("<p>Tuổi: " + person.age + "</p>");
    document.write("<p>Email: " + person.email + "</p>");
  } else {
    document.write("Trình duyệt của bạn không hỗ trợ local storage.");
  }