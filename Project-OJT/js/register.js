// Lấy ra element của trang

const formRegister = document.getElementById("formRegister");
const emailElement = document.getElementById("login-email");
const passwordElement = document.getElementById("login-pass");
const repasswordElement = document.getElementById("relogin-pass");
const repasswordError = document.getElementById("repasswordError");

//lấy dữ liệu từ local

const userLocal = JSON.parse(localStorage.getItem("users")) || [];

//lắng nghe sự kiện

formRegister.addEventListener("submit", function(e){
    //ngăn sự kiện load lại trang
    e.preventDefault();

    //kiểm tra lại mật khẩu

    if(passwordElement.value !== repasswordElement.value){
        repasswordError.style.display = "block";
        repasswordError.innerHTML = "Mật khẩu không chính xác"
    }

    //gửi dữ liệu lên localstorage

    if(passwordElement.value === repasswordElement.value){
        //Lấy dữ liệu từ form và gộp thành đối tượng
        const user = {
            userId: Math.ceil(Math.random() * 1000000000),
            email: emailElement.value,
            password: passwordElement.value,
        };

        //Push user vào trong mảng Userlocal
        userLocal.push(user);

        //lưu trữ dữ liệu lên local
        localStorage.setItem("users", JSON.stringify(userLocal));

        //chuyển hướng trang trong 1s
        setTimeout(function(){
            window.location.href = "login.html";
        }, 1000)
    }
});