
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}


//Di chuyển Dot bên dưới ảnh
var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // 
  }


  // XỬ LÝ CHỌN SẢN PHÂM MUA

  // Chọn phần tử input, button và p bằng cách sử dụng DOM
  const userInput = document.getElementById('userInput');
  const submitButton = document.getElementById('submitButton');
  const message = document.getElementById('message');

  // Gắn sự kiện 'input' cho phần tử input
  userInput.addEventListener('input', function() {
      // Xóa thông báo khi người dùng nhập dữ liệu
      message.textContent = '';
  });

  // Gắn sự kiện 'click' cho nút (button)
  submitButton.addEventListener('click', function() {
      // Lấy giá trị từ input
      const inputValue = userInput.value;

      // Kiểm tra nếu giá trị nhập vào không trống
      if (inputValue !== '') {
          // Hiển thị thông báo
          if (inputValue==1) {
              alert (`Bạn đã nhập: ${inputValue} là Trà Sữa Khoai Môn, cám ơn bạn đã đặt hàng`)
              //xóa ô iput
              userInput.value = '';
          } if (inputValue==2){
            alert (`Bạn đã nhập: ${inputValue} là Oreo Đá Xay, cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } if (inputValue==3){
            alert (`Bạn đã nhập: ${inputValue} là Socola Đá Xay, cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } if (inputValue==4){
            alert (`Bạn đã nhập: ${inputValue} là Soda Chanh, cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } if (inputValue==5){
            alert (`Bạn đã nhập: ${inputValue} là Sữa Dâu, cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } if (inputValue==6){
            alert (`Bạn đã nhập: ${inputValue} là Sữa Tươi Đường, cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } if (inputValue==7){
            alert (`Bạn đã nhập: ${inputValue} là Trà Sữa Truyền Thống, cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } if (inputValue==8){
            alert (`Bạn đã nhập: ${inputValue} là Trà Thanh Đào, cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } 
      } else {
          // Nếu không có giá trị, hiển thị thông báo lỗi
          message.textContent = 'Vui lòng nhập thông tin trước khi nhấn Submit.';
      }
  });