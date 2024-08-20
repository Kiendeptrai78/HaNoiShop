var Sign_in = document.getElementById('sign-in')
var useName = document.getElementById('firstname')
var passWord = document.getElementById('password1')

Sign_in.onclick = function() {
    if (useName.value== '') {
        alert('Bạn Chưa Nhập Tài Khoản')
        return false
    }
    if (passWord.value== '') {
        alert('Bạn Chưa Nhập Mật Khẩu')
        return false
 
    }

    return true
}