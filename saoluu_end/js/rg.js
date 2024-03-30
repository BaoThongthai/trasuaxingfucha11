function validateForm() {
    const fullNameVal = document.getElementById('fullName').value;
    const emailVal = document.getElementById('email').value;
    const passwordVal = document.getElementById('password').value;
    const confirmPasswordVal = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if(fullNameVal.length === 0  ){
        passwordError.textContent = 'Chưa nhập tên'; 
        return false;
    }

    if(emailVal.length === 0 ){
        passwordError.textContent = 'Chưa nhập email'; 
        return false;
    }
    
    if (passwordVal !== confirmPasswordVal) {
        passwordError.textContent = 'Mật khẩu không khớp.';
        return false;
    } else {

        // Xác thực thành công, lưu dữ liệu vào localStorage
	   // Đẩy các giá trị vào 1 object dưới dạng key : value
       //userData chính là key được lưu trên localStorage và sẽ được dùng để lấy ra khi gọi lại
        const userData = {
            fullName: fullNameVal,
            email: emailVal,
            password: passwordVal
        }; // bên trái là id , bên phải là giá trị lấy ở trên

	// thực hiện lưu userData  vào localStorage bằng hàm setItem 
        localStorage.setItem('userData', JSON.stringify(userData)); //stringify dùng để chuyển obj sang json
        passwordError.textContent = '';

        kiemtrajson();
        displayUserData();
        resetRegistrationForm()
        return true;
    } 
}

const registerButton = document.getElementById('registerButton');
registerButton.addEventListener('click',function(){
    validateForm()
})

// kiểm tra xem đã đẩy được json chưa ?
function kiemtrajson (){
// hiển thị thông báo khi có dữ liệu ở controler
    if (localStorage.getItem('userData')) {
    console.log('Dữ liệu đã được lưu vào localStorage.');
    // Thực hiện các hành động khác nếu dữ liệu đã tồn tại
        } else {
    console.log('Dữ liệu chưa được lưu vào localStorage.');
    // Thực hiện các hành động khác nếu dữ liệu chưa tồn tại
    }
}



// Lấy dữ liệu từ localStorage 
function getUserData() {
    // sử dụng hàm getItem để lấy data
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
        const userData = JSON.parse(userDataString); // hàm JSON.parse dùng để chuyển json->chuỗi obj
        return userData;
    } else {
        return null; // Trường hợp không có dữ liệu được lưu trữ
    }
}

// Hiển thị dữ liệu lên màn hình
function displayUserData() {
    const userData = getUserData();
    if (userData) {
        // Lấy các phần tử HTML để hiển thị thông tin người dùng
        const fullNameElement = document.getElementById('fullNameShow');//document dùng để lấy giá trị phần tử tương ứng với html trên screen
        const emailElement = document.getElementById('emailSshow');

        // sau khi lấy ra rồi thi ta cập nhật nội dung các phần tử HTML với dữ liệu từ localStorage
        fullNameElement.textContent = 'Họ và Tên: ' + userData.fullName; // dư liệu json đc lấy ra
        emailElement.textContent = 'Email: ' + userData.email;
       
    } else {
        console.log('Không có dữ liệu');
    }
}

// Gọi hàm để hiển thị dữ liệu
displayUserData();



//chỉnh sửa
// Đổ dữ liệu từ userData vào các ô đăng ký để chỉnh sửa
// FUNTION EDIT button nho
const editButton = document.getElementById('editButton');
editButton.addEventListener('click', function () {
    
    // lấy lại dũ liệu đã lưu trong local
    const userData = getUserData();

    if (userData) {
        // tương tác với trên màn hình bằng document
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const registerButton = document.getElementById('registerButton');
        const editButton = document.getElementById('EditButtonAll');

        // Vô hiệu hóa các ô mật khẩu
        passwordInput.disabled = true;
        confirmPasswordInput.disabled = true;
        registerButton.style.display = 'none';
        editButton.style.display = 'block';

        // Đổ dữ liệu từ userData vào các ô đăng ký (input)
        fullName.value = userData.fullName;
        email.value = userData.email;

    }
});



// FUNTION EDIT button All
const EditButtonAll = document.getElementById('EditButtonAll');
EditButtonAll.addEventListener('click', function () {
    validateForm()    
    displayUserData()
    resetRegistrationForm()
});


function resetRegistrationForm() {
    // Lấy các trường nhập liệu và nút "Edit" bằng id
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const editButton = document.getElementById('EditButtonAll');
    const registerButton = document.getElementById('registerButton');

    // Đặt lại giá trị trong các trường nhập liệu
    fullNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';

    // Ẩn nút "Edit"
    editButton.style.display = 'none';
    registerButton.style.display = 'block'
    passwordInput.disabled = false;
    confirmPasswordInput.disabled = false;
}


//Delete
function deleteLocal(){
    localStorage.removeItem('userData');
    location.reload();
}

const deleteElement = document.getElementById('deleteElement');
deleteElement.addEventListener('click', function (){
    deleteLocal()
})


