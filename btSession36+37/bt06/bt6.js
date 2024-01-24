function createStudent() {
    var studentId = document.getElementById("studentId").value;
    var studentName = document.getElementById("studentName").value;
    var age = parseInt(document.getElementById("age").value);
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
  
    if (studentId.length !== 6) {
      alert("Student ID phải gồm 6 ký tự.");
      return;
    }
  
    if (studentName.trim() === "") {
      alert("Student Name không được để trống.");
      return;
    }
  
    if (age < 18) {
      alert("Age phải có giá trị lớn hơn hoặc bằng 18.");
      return;
    }
  
    if (!validatePhoneNumber(phone)) {
      alert("Phone phải có định dạng số điện thoại ở VN.");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("Email phải có định dạng email.");
      return;
    }
  
    document.getElementById("studentIdDisplay").innerText = "Student ID: " + studentId;
    document.getElementById("studentNameDisplay").innerText = "Student Name: " + studentName;
    document.getElementById("ageDisplay").innerText = "Age: " + age;
    document.getElementById("phoneDisplay").innerText = "Phone: " + phone;
    document.getElementById("emailDisplay").innerText = "Email: " + email;
  
    document.getElementById("studentInfo").style.display = "block";
  }
  
  function validatePhoneNumber(phone) {
    var phoneNumberLength = phone.length;
    var startsWithZero = phone.startsWith("0");
    var startsWithPlus84 = phone.startsWith("+84");
  
    if (phoneNumberLength === 10 && startsWithZero) {
      return true;
    }
  
    if (phoneNumberLength === 11 && startsWithPlus84) {
      return true;
    }
  
    return false;
  }
  
  function validateEmail(email) {
    var atIndex = email.indexOf("@");
    var dotIndex = email.lastIndexOf(".");
  
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
      return false;
    }
  
    return true;
  }