document.getElementById('franchiseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn gửi dữ liệu mặc định

    // Lấy dữ liệu từ form
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    // Gửi dữ liệu đến API
    fetch('https://65248470ea560a22a4e9e5cc.mockapi.io/api/v1/nhuongquyen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, phone: phone })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Có lỗi xảy ra khi gửi thông tin.');
      }
      return response.json();
    })
    .then(data => {
      alert('Thông tin đã được gửi thành công!');
      // Xử lý phản hồi từ API (nếu cần)
    })
    .catch(error => {
      alert('Đã xảy ra lỗi: ' + error.message);
      // Xử lý lỗi (nếu cần)
    });
});