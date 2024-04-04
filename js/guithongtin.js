$(document).ready(function () {
    $('#addPostForm').submit(function (event) {
        event.preventDefault();
  
        var postImageUrl = $('#postImageUrl').val();
        var postTitle = $('#postTitle').val();
        var postContent = $('#postContent').val();
  
        // Thêm dữ liệu vào URL query string
        var url = 'https://6580d5603dfdd1b11c422502.mockapi.io/thongtinhangngay?image_url=' + encodeURIComponent(postImageUrl) +
                  '&title=' + encodeURIComponent(postTitle) +
                  '&content=' + encodeURIComponent(postContent);
  
        // Gửi request GET đến API
        $.ajax({
            type: 'GET',
            url: url,
            success: function (response) {
                console.log('Bài viết đã được thêm thành công:', response);
                alert("Gửi Bài Thành Công")
                // Sau khi thêm bài viết thành công, có thể thực hiện các hành động khác ở đây,
                // như hiển thị thông báo thành công, làm mới danh sách bài viết, vv.
            },
            error: function (error) {
              alert('Lỗi khi thêm bài viết:', error);
                // Xử lý lỗi ở đây, ví dụ: hiển thị thông báo lỗi cho người dùng
            }
        });
    });
  });
  