// FETCH API LẤY THÔNG TIN CHI NHÁNH ẢO

// Lấy dữ liệu từ API (ví dụ: JSONPlaceholder)
fetch("https://6580d5603dfdd1b11c422502.mockapi.io/shop")
  .then((response) => response.json())
  .then((data) => {
    // data trên màn hình
    const dataGrid = document.getElementById("data-grid");

    // Duyệt qua dữ liệu và thêm từng mục vào lưới Bootstrap
    data.forEach((item) => {
      // tạo ra 1 thẻ card
      const card = document.createElement("div");
      card.classList.add("col-md-6", "mb-3", "mt-6"); // classList (thêm css cho card (thuộc tính của đối tượng html) ) , sử dụng thuộc tính của bootrap

      //sử dụng innerHTML để tương tác với html , dùng backtick để thao tác với chuỗi html
      card.innerHTML = `
            <div class="cardNQ">
                    <div class="row">
                                <div class="col-md-6 col-6 col-sm-4">
                                    <!-- Hình ảnh -->
                                    <img src="${item.imageUrl}" alt="Hình ảnh mô tả" class="img-fluid">
                                </div>
                                <div class="col-md-6 col-6 col-sm-4">
                                    <!-- Mô tả bên cạnh hình ảnh -->
                                    <h5 style = "color : red;padding-top : 5%">
                                    ${item.name}
                                    </h5>
                                    <p>
                                    ${item.diachi}
                                    </p>
                                 
                                </div>
                    </div>
                </div>
                    `;

      // đẩy cục trên vào cuỗi cùng của id = "dataGrid"
      dataGrid.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Có lỗi xảy ra:", error);
  });
