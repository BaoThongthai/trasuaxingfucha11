// Get thong tin từ API và Show ra (nobitavsxukanhieulam@gmail.com)
function fetchDailyInfo() {
  $.ajax({
    url: "https://6580d5603dfdd1b11c422502.mockapi.io/thongtinhangngay", // Thay đổi link thành API endpoint của bạn
    method: "GET",
    success: function (response) {
      // Lặp qua mảng các bài viết hàng ngày
      response.forEach(function (dailyInfo) {
        // Trích xuất dữ liệu từ bài viết hàng ngày
        var imageUrl = dailyInfo.image_url;
        var title = dailyInfo.title;
        var content = dailyInfo.content;

        // Tạo các phần tử mới cho mỗi bài viết
        var $dailyItem = $('<div class="daily-item">');
        var $image = $("<img>").attr("src", imageUrl);
        var $title = $("<h3>").text(title);
        var $content = $("<p>").text(content);

        // Thêm ảnh, tiêu đề và nội dung vào phần tử
        $dailyItem.append($image, $title, $content);

        // Thêm phần tử vào trang web
        $("#dailyInfoContainer").append($dailyItem);
      });
    },
    error: function (xhr, status, error) {
      console.error("Error fetching daily information:", error);
    },
  });
}

// Gọi hàm fetchDailyInfo() khi trang web được tải
$(document).ready(function () {
  fetchDailyInfo();
});

// Function to toggle form visibility
$("#openFormButton").click(function () {
  $("#addPostFormContainer").toggle();
});

document.addEventListener("DOMContentLoaded", function () {
  const addPostForm = document.getElementById("addPostForm"); // Chỉnh sửa id ở đây

  addPostForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Lấy dữ liệu từ form
    const imageUrl = document.getElementById("postImageUrl").value;
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;

    // Gửi yêu cầu POST đến API để thêm bài mới
    fetch("https://6580d5603dfdd1b11c422502.mockapi.io/thongtinhangngay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_url: imageUrl,
        title: title,
        content: content,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Nếu thành công, thông báo và làm mới trang
        alert("Thêm bài mới thành công!");
        $("#addPostModal").modal("hide"); // Đóng modal sau khi thêm thành công
        location.reload();
      })
      .catch((error) => {
        console.error("Error adding new post:", error);
        alert("Đã xảy ra lỗi khi thêm bài mới.");
      });
  });
});

//
