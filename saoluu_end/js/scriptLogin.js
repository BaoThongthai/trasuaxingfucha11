 // Lấy dữ liệu từ Local Storage (simulated data)
function getData (){
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
        const formMessage_error= document.getElementById("formMessage_error");
          
            const enteredUsername = document.getElementById("username");
            const enteredPassword = document.getElementById("password");
           
            

            if (enteredUsername.value === userData.fullName && enteredPassword.value  === userData.password) {
                alert("đăng nhập thành công")
                // Thực hiện chuyển hướng sau khi đăng nhập thành công
                window.location = "http://127.0.0.1:5500/Project_xingfucha.html";
            } else {
                formMessage_error.textContent = 'Sai Thông Tin'
            }
        });


// tuyết rơi
const snowflakeContainer = document.querySelector('.snowfall');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';

    snowflake.innerText = '❄';

    snowflakeContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 200);


