var Sign_in = document.getElementById('Sign-in')
var useName = document.getElementById('firstname')
var email = document.getElementById('email')
var password1 = document.getElementById('password1')
var password2 = document.getElementById('password2')

Sign_in.onclick = function (){
    if(useName.value==""){
        alert("Bạn Chưa Nhập Tài khoản")
        return false
    }
    if(email.value==""){
        alert("Bạn Chưa Nhâp Email")
        return false
    }

    if(password1.value==""){
        alert("Bạn Chưa Nhập mật Khẩu")
        return false

    }

    if (password2.value==""){
        alert("Bạn Chưa Nhập lại mật Khẩu")
        return false
    }
    if(password2.value != password1.value){
        alert("Mật khẩu Không Trùng Nhau")
        return false
    }
    else{
        alert("Đăng Kí Thành Công")
    }
    return true
}