// Lấy dữ liệu từ Local Storage (simulated data)
function getData() {
    // sử dụng hàm getItem để lấy data
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
        const userData = JSON.parse(userDataString); // hàm JSON.parse dùng để chuyển json->chuỗi js
        return userData;
    } else {
        console.log('No data')
    }
}
// gọi hàm Lấy dữ liệu từ Local Storage (simulated data)
const userData = getData()
console.log(userData)
// Xử lý sự kiện đăng nhập
document.getElementById("loginButton").addEventListener("click", function () {
    // Lấy các phần tử DOM
   
    const enteredUsername = document.getElementById("username");
    const enteredPassword = document.getElementById("password");
    const formMessage_error = document.getElementById("formMessage_error");
    if (enteredUsername.value === userData.fullName && enteredPassword.value === userData.password) {
        alert("Đăng nhập thành công")
        window.location = "Project_xingfucha.html";
    } else {
        formMessage_error.textContent = ' **Sai Thông Tin'
    }
});
// Hiệu ứng zoom heading khi trang load
// sự kiện  DOMContentLoaded xảy ra sau khi đã load toàn bộ html
document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".heading");
    content.style.transform = "scale(1)";
});


