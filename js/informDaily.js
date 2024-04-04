function fetchDailyInfo() {
  $.ajax({
    url: "https://6580d5603dfdd1b11c422502.mockapi.io/thongtinhangngay",
    method: "GET",
    success: function (response) {
      // Xóa các phần tử cũ trong container trên trang web
      $("#dailyInfoContainer").empty();

      // Lặp qua mảng các bài viết hàng ngày
      response.forEach(function (dailyInfo) {
        // Trích xuất dữ liệu từ bài viết hàng ngày
        var imageUrl = dailyInfo.image_url;
        var title = dailyInfo.title;
        var content = dailyInfo.content;

        // Tạo các phần tử mới cho mỗi bài viết
        var $dailyItem = $('<div class="daily-item">');
        var $daugach = $("<br>")
        var $title = $("<h3>").text(title);
        var $image = $("<img>").attr("src", imageUrl);
        var $content = $("<p>").text(content);

        // Thêm ảnh, tiêu đề và nội dung vào phần tử
        $dailyItem.append($daugach,$title,$image, $content);

        // Thêm phần tử vào đầu container trên trang web
        $("#dailyInfoContainer").prepend($dailyItem);
      });
    },
    error: function (xhr, status, error) {
      console.error("Lỗi khi lấy thông tin hàng ngày:", error);
    },
  });
}

// Gọi hàm fetchDailyInfo() khi trang web được tải
$(document).ready(function () {
  fetchDailyInfo();
});




