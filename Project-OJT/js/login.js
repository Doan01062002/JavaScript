// Element của trang 
const formLogin = document.getElementById("formLogin");
const emailElement = document.getElementById("login-email");
const passwordElement = document.getElementById("login-pass");

formLogin.addEventListener("submit", function(e){
    //ngăn chặn load lại trang
    e.preventDefault();

    //validate dữ liệu đầu vào

    //lấy dữ liệu từ local
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];


    //tìm kiếm email và mật khẩu trên local
    const findUser = userLocal.find((user) => user.email === emailElement.value && user.password === passwordElement.value);

    if(!findUser){
        alert("Email hoặc mật khẩu không chính xác");
    }else{
        setTimeout(function(){
            window.location.href = "index.html";
        }, 1000)
    }
    //nếu có đăng nhập thành công trở về trang chủ

    //nếu không thì thông báo cho người dùng nhập lại dữ liệu
})

