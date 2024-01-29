if (typeof(Storage) !== "undefined") {
    var registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault();

      var fullName = document.getElementById("fullNameInput").value;
      var email = document.getElementById("emailInput").value;
      var password = document.getElementById("passwordInput").value;

      var users = JSON.parse(localStorage.getItem("users"));

      if (users === null) {
        users = [];
      }

      var newUser = {
        fullName: fullName,
        email: email,
        password: password
      };
      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));

      fullNameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";

      alert("Đăng ký thành công!");
    });
  } else {
    document.write("Trình duyệt của bạn không hỗ trợ local storage.");
  }