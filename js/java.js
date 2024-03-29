

// 1. Funtion change carousel
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

//2 . Lấy TÊN PHẦN TỬ TỪ ẢNH
function hienTen(img) {
  // Lấy tên của hình ảnh từ thuộc tính alt
  var tenHinh = img.alt;

  // Lấy thẻ input bằng id "userInput"
  var userInputElement = document.getElementById("userInput");

  // Đặt giá trị của thẻ input thành tên của hình ảnh
  userInputElement.value = tenHinh;
}


//3. Di chuyển Dot bên dưới ảnh
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



  //4 .SỰ KIỆN MUA HÀNG
  // Gắn sự kiện 'click' cho nút (button) 
  submitButton.addEventListener('click', function() {
      // Lấy giá trị từ input
      const inputValue = userInput.value;

      // Kiểm tra nếu giá trị nhập vào không trống
      if (inputValue !== '') {
          // Hiển thị thông báo
          if (inputValue==='Trà Sữa Khoai Môn') {
              alert (`Sản phẩm bạn chọn là  ${inputValue} , cám ơn bạn đã đặt hàng`)
              //xóa ô iput
              userInput.value = '';
          } if (inputValue=='Oreo Đá Xay'){
            alert (`Sản phẩm bạn chọn là ${inputValue} , cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } if (inputValue=='Socola Đá Xay'){
            alert (`Sản phẩm bạn chọn là ${inputValue} , cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } if (inputValue=='Soda Chanh'){
            alert (`Sản phẩm bạn chọn là ${inputValue} , cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } if (inputValue=='Sữa Dâu'){
            alert (`Sản phẩm bạn chọn là ${inputValue} , cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } if (inputValue=='Sữa Tươi Đường'){
            alert (`Sản phẩm bạn chọn là ${inputValue} , cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } if (inputValue=='Trà Sữa Truyền Thống'){
            alert (`Sản phẩm bạn chọn là ${inputValue} , cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          } if (inputValue=='Trà Thanh Đào'){
            alert (`Sản phẩm bạn chọn là ${inputValue} , cám ơn bạn đã đặt hàng`)
            userInput.value = '';
          }if (inputValue !='Trà Thanh Đào' && inputValue !='Trà Sữa Khoai Môn'&& inputValue !='Oreo Đá Xay'&& inputValue !='Socola Đá Xay'
          && inputValue !='Soda Chanh'&& inputValue !='Sữa Dâu'&& inputValue !='Sữa Tươi Đường'&& inputValue !='TTrà Sữa Truyền Thống') {
            alert (`Không có hoặc hết sản phẩm  ${inputValue} , Mời đặt lại`)
          }

      } else {
          // Nếu không có giá trị, hiển thị thông báo lỗi
          alert (`Chưa nhập gì, mời bạn nhập lại`)
      }

  });

  //SƯ KIỆN LỌC SẢN PHẨM
  // Lấy tham chiếu đến ô input và tất cả các card
const searchInput = document.getElementById('userInput');
const cards = document.querySelectorAll('.product');

// Gắn sự kiện input vào ô input
searchInput.addEventListener('input', function () {
    const searchText = this.value.toLowerCase().trim(); // Lấy giá trị nhập vào và chuyển về chữ thường

    cards.forEach(card => {
        const cardTitle = card.querySelector('.card-title'); // Lấy tiêu đề của card
   
        if (cardTitle) {
            //nếu cardTitle tồn tại thì lấy ra phần Textcontent của nó , làm chữ nhỏ sau mang đi so sánh với searchtext
            const cardText = cardTitle.textContent.toLowerCase();
            // Kiểm tra xem tiêu đề của card có chứa searchText hay không (thẻ include để kiểm tra searchText có nằm trên cardText hay không ?)
            if (cardText.includes(searchText)) {
                card.style.display = 'block'; // Hiển thị card nếu phù hợp
             //   cardTitle.style.color = 'red';
            } else {
                card.style.display = 'none'; // Ẩn card nếu không phù hợp
               // cardTitle.style.color = ' ';
            }
        }
        
    });
});




// Xử lý thanh menu đính trên đầu trang
// Lấy tham chiếu đến thanh menu
const navbar = document.getElementById('menu');
// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Số 100 là khoảng cách từ đỉnh trang web để thêm lớp CSS, là kéo trang xuống dưới 100px là nó show ra)
            navbar.classList.add('fixed');
     }
});

