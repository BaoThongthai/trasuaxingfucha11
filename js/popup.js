//TUYỂN DỤNG
document.getElementById("registerLink").addEventListener("click", function(event){
    // Có thể thêm bất kỳ hành động khác bạn muốn thực hiện ở đây
    alert("Hiện không có thông tin tuyển dụng");
  })
  
  // POPUP
  document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById('popup-container');
    var closeButton = document.querySelector('.close');
  
    function showPopup() {
        popup.style.display = 'block';
    }
  
    function hidePopup() {
        popup.style.display = 'none';
    }
  
    // Hiển thị popup khi trang được load
    showPopup();
  
    // Ẩn popup khi người dùng nhấp vào nút đóng
    closeButton.addEventListener('click', hidePopup);
  });
  // POPUP
  