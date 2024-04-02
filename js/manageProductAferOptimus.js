$(document).ready(function () {
  const getApi = "https://65248470ea560a22a4e9e5cc.mockapi.io/api/v1/product";
  const tableBody = $("#table-body");
  const searchInput = $("#searchInput");

  // Function get data
  function productTable(data) {
    tableBody.empty();
    let stt = 1;
    $.each(data, function (index, item) {
      const row = $("<tr>");
      row.html(`
                <td>${stt}</td>
                <td>${item.name}</td>
                <td>${item.soluong}</td>
                <td>${item.price}</td>
                <td class="imgTd"><img src="${item.image}" alt=""></td>
                <td><button class="btn btn-sm btn-warning editButton" data-id="${item.id}" data-toggle="modal" data-target="#myModal">Edit</button></td>
                <td><button class="btn btn-sm btn-danger deleteButton" data-id="${item.id}">Delete</button></td>
            `);
      stt = stt + 1;

      //Even update data from ID
      row.find(".editButton").click(function () {
        const itemId = $(this).data("id");
        getDataFromId(itemId);
        $("#editBtn").prop("disabled", false);
        $("#saveBtn").prop("disabled", true);
        $("#headAddProduct").hide();
        $("#headEditProduct").show();
        //star even when clik
        $("#editBtn")
          .off("click")
          .on("click", function (event) {
            event.preventDefault();
            updateDataAfterEdit(itemId);
          });
      });

      //Even delete from ID
      row.find(".deleteButton").click(function () {
        const itemId = $(this).data("id");
        if (confirm("Bạn có chắc muốn xóa mục này không?")) {
          deleteItem(itemId);
        }
      });

      tableBody.append(row);
    });
  }

  // Load data
  $.ajax({
    url: getApi,
    method: "GET",
    dataType: "json",
    success: function (data) {
      productTable(data);
    },
    error: function (error) {
      console.error("Error fetching data:", error);
    },
  });

  // Add Product
  function addProduct() {
    const nameProduct = $("#nameProduct").val();
    const numProduct = $("#numProduct").val();
    const priceProduct = $("#priceProduct").val();
    const LinkProduct = $("#LinkProduct").val();

    const newProduct = {
      name: nameProduct,
      soluong: numProduct,
      price: priceProduct,
      image: LinkProduct,
    };

    $.ajax({
      type: "POST",
      url: getApi,
      contentType: "application/json",
      data: JSON.stringify(newProduct),
      success: function () {
        $("#nameProduct, #numProduct, #priceProduct, #LinkProduct").val("");
        $("#myModal").modal("hide");
        reloadTable();
      },
      error: function (error) {
        console.error("Error adding new product:", error);
      },
    });
  }

  $("#saveBtn").on("click", function (event) {
    event.preventDefault();
    addProduct();
  });

  // Get data from form by ID
  function getDataFromId(itemId) {
    $.ajax({
      url: `${getApi}/${itemId}`,
      method: "GET",
      dataType: "json",
      success: function (data) {
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

  // Update data after edit (mean : afer edit then update )
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
        productTable();
        $("#nameProduct, #numProduct, #priceProduct, #LinkProduct").val("");
        $("#editBtn").prop("disabled", true);
        $("#saveBtn").prop("disabled", false);
        $("#headAddProduct").show();
        $("#headEditProduct").hide();
        $("#myModal").modal("hide");
        reloadTable();
      },
      error: function (error) {
        console.error("Error updating data:", error);
      },
    });
  }

  // Delete data
  function deleteItem(itemId) {
    $.ajax({
      url: `${getApi}/${itemId}`,
      method: "DELETE",
      dataType: "json",
      success: function (response) {
        $(`#item_${itemId}`).closest("tr").remove();
        console.log("Mục đã được xóa thành công");
        reloadTable();
      },
      error: function (error) {
        console.error("Error deleting item:", error);
      },
    });
  }

  // Search product by name
  function searchProductByName(name) {
    $.ajax({
      url: getApi,
      method: "GET",
      dataType: "json",
      success: function (data) {
        const filteredData = data.filter(function (item) {
          return item.name.toLowerCase().includes(name);
        });
        productTable(filteredData);
      },
      error: function (error) {
        console.error("Error searching for products:", error);
      },
    });
  }

  // Handle search event when typing in Input
  searchInput.on("input", function () {
    const searchValue = searchInput.val().trim().toLowerCase();
    if (searchValue !== "") {
      searchProductByName(searchValue);
    } else {
      reloadTable();
    }
  });

  function reloadTable() {
    $.ajax({
      url: getApi,
      method: "GET",
      dataType: "json",
      success: function (data) {
        productTable(data);
      },
      error: function (error) {
        console.error("Error fetching data:", error);
      },
    });
  }
});
