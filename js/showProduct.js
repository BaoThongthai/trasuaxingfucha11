$(document).ready(function () {
  const getApi = "https://65248470ea560a22a4e9e5cc.mockapi.io/api/v1/product";//gmail : hoanglephibao.1212@gmail.com
  const searchInput = $("#searchInput");
  const cardContainer = $("#card-container");
  let products = []; // Mảng lưu trữ danh sách sản phẩm ban đầu

  // Hàm get data
  function updateProductsUI(products) {
    sortProductsById(products);
    cardContainer.empty();
    products.forEach(function (item) {
      const card = `
      <div class="col-6 col-md-6 col-lg-4 col-xl-2">
      <div class="card mb-6 col-12"> <!-- Thêm lớp col-12 ở đây -->
        <img src="${item.image}" class="card-img-top" alt="Image">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text" style="color:red">${item.price}</p>

        </div>
      </div>
    </div>
     
      `;
      cardContainer.append(card);
    });
          /**Chưc năng edit và button (cần thì sử dụng) : thêm vào dòng 19 */
          // <button class="btn btn-sm btn-warning editButton" data-id="${item.id}" data-toggle="modal" data-target="#myModal">Edit</button>
          // <button class="btn btn-sm btn-danger deleteButton" data-id="${item.id}" style="float:right;">Delete</button>

  

    //CỤM SỰ KIỆN XỬ LÝ UPDATE DATA FROM ID
    // Sử dụng sự kiện click cho nút "Edit"
    $(".editButton").on("click", function () {
      const productId = $(this).data("id"); // Lấy ID từ thuộc tính data-id
      console.log("ID lấy ra:", productId);

      // Get data from id và làm các thao tác tiếp theo
      getDataFromId(productId);

      //chỉnh sửa giao diện add new thanh edit new
      $("#editBtn").prop("disabled", false);
      $("#saveBtn").prop("disabled", true);
      $("#headAddProduct").hide();
      $("#headEditProduct").show();

      //Update data after edit
      $("#editBtn")
        .off("click")
        .on("click", function (event) {
          event.preventDefault();
          updateDataAfterEdit(productId);
        });
    });

    //DELETE
    $(".deleteButton").on("click", function () {
      const productId = $(this).data("id"); // Lấy ID từ thuộc tính data-id
      console.log("ID lấy ra:", productId);

      // Delete
      deleteItem(productId);
    });
  }

  // Load dữ liệu ban đầu
  $.ajax({
    url: getApi,
    method: "GET",
    dataType: "json",
    success: function (data) {
      products = data; // Lưu trữ danh sách sản phẩm
      updateProductsUI(products); // Cập nhật giao diện
    },
    error: function (error) {
      console.error("Error fetching data:", error);
    },
  });

  // Thêm sản phẩm
  function addProduct() {
    const nameProduct = $("#nameProduct").val();
    const numProduct = $("#numProduct").val();
    const priceProduct = $("#priceProduct").val();
    const LinkProduct = $("#LinkProduct").val();

    //câu 1
    if (!nameProduct || !numProduct || !priceProduct || !LinkProduct) {
      alert("chưa có dữ liệu");
      return;
    }

    const newProduct = {
      name: nameProduct,
      soluong: numProduct,
      price: priceProduct,
      image: LinkProduct,
    };
    console.log(newProduct);

    $.ajax({
      type: "POST",
      url: getApi,
      contentType: "application/json",
      data: JSON.stringify(newProduct),
      success: function () {
        $("#nameProduct, #numProduct, #priceProduct, #LinkProduct").val("");
        $("#myModal").modal("hide");

        // products.push(newProduct); // Thêm sản phẩm vào danh sách
        reloadData();
      },
      error: function (error) {
        console.error("Error adding new product:", error);
      },
    });
  }

  // Thêm sản phẩm khi nút "Lưu" được nhấn
  $("#saveBtn").on("click", function (event) {
    event.preventDefault();
    addProduct();
  });

  //Đẩy dữ liệu lên sau khi chỉnh sửa và cập nhật lại giao diện trên screen
  function updateDataAfterEdit(itemId) {
    const updatedData = {
      name: $("#nameProduct").val(),
      soluong: $("#numProduct").val(),
      price: $("#priceProduct").val(),
      image: $("#LinkProduct").val(),
    };

    $.ajax({
      url: `${getApi}/${itemId}`,
      method: "PUT",
      dataType: "json",
      data: updatedData,
      success: function (response) {
        // Sau khi cập nhật, làm các bước cần thiết, ví dụ, đóng modal và cập nhật giao diện
        $("#nameProduct, #numProduct, #priceProduct, #LinkProduct").val("");
        $("#editBtn").prop("disabled", true);
        $("#saveBtn").prop("disabled", false);
        $("#headAddProduct").show();
        $("#headEditProduct").hide();
        $("#myModal").modal("hide");
        // Load dữ liệu ban đầu
        reloadData();
      },
    });
  }

  //Chức năng : get data from id và đẩy data vào các trường trong form
  function getDataFromId(itemId) {
    // alert("vap")
    $.ajax({
      url: `${getApi}/${itemId}`,
      method: "GET",
      dataType: "json",
      success: function (data) {
        // Đổ dữ liệu sản phẩm vào các trường nhập trong form
        $("#nameProduct").val(data.name);
        $("#numProduct").val(data.soluong);
        $("#priceProduct").val(data.price);
        $("#LinkProduct").val(data.image);
      },
      error: function (error) {
        console.error("Error fetching data:", error);
      },
    });
  }

  function reloadData() {
    $.ajax({
      url: getApi,
      method: "GET",
      dataType: "json",
      success: function (data) {
        products = data; // Lưu trữ danh sách sản phẩm
        updateProductsUI(products); // Cập nhật giao diện
      },
      error: function (error) {
        console.error("Error fetching data:", error);
      },
    });
  }

  // Delete data
  function deleteItem(itemId) {
    // $.ajax({
    //     url: `${getApi}/${itemId}`,
    //     method: 'DELETE',
    //     dataType: 'json',
    //     success: function (response) {
    //         $(`#item_${itemId}`).closest('tr').remove();
    //         console.log('Mục đã được xóa thành công');
    //         reloadData()
    //     },
    //     error: function (error) {
    //         console.error('Error deleting item:', error);
    //     }
    // });
    $.ajax({
      url: `${getApi}/${itemId}`,
      method: "DELETE",
      dataType: "json",
      success: function (response) {
        console.log("Mục đã được xóa thành công");
        reloadData();
      },
      error: function (error) {
        console.error("Error deleting item:", error);
      },
    });
  }

  // Sự kiện tìm kiếm sản phẩm
  searchInput.on("input", function () {
    const searchQuery = $(this).val().toLowerCase(); // Lấy giá trị tìm kiếm và chuyển về chữ thường

    // Lọc danh sách sản phẩm dựa trên tên sản phẩm
    const filteredProducts = products.filter(function (item) {
      return item.name.toLowerCase().includes(searchQuery);
    });

    // Cập nhật giao diện với danh sách sản phẩm đã lọc
    updateProductsUI(filteredProducts);
  });

  // Sự kiện tìm kiếm sản phẩm dưới 1
  $("#filterButton").on("click", function () {
    alert("vào chưa");
    // Lọc danh sách sản phẩm dựa trên tên sản phẩm
    const filteredProductsNum = products.filter(function (item) {
      return parseInt(item.price) < 9;
    });

    // Cập nhật giao diện với danh sách sản phẩm đã lọc
    updateProductsUI(filteredProductsNum);
  });

  function sortProductsById(product) {
    products.sort(function (a, b) {
      return b.id - a.id;
    });
  }
});
