if (typeof(Storage) !== "undefined") {
    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      var email = document.getElementById("emailInput").value;
      var password = document.getElementById("passwordInput").value;

      var users = JSON.parse(localStorage.getItem("users"));

      var loggedInUser = users.find(function(user) {
        return user.email === email && user.password === password;
      });

      if (loggedInUser) {
        sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

        emailInput.value = "";
        passwordInput.value = "";

        alert("Đăng nhập thành công!");
      } else {
        alert("Email hoặc mật khẩu không chính xác.");
      }
    });
  } else {
    document.write("Trình duyệt của bạn không hỗ trợ local storage và session storage.");
  }