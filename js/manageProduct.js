
$(document).ready(function () {

const getApi = 'https://65248470ea560a22a4e9e5cc.mockapi.io/api/v1/product'
// Function get data
function productTable() {
    $.ajax({
        url: getApi,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const tableBody = $('#table-body');
            tableBody.empty();
            $.each(data, function (index, item) {
                const row = $('<tr>');
                row.html(`
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.soluong}</td>
                    <td>${item.price}</td>
                    <td class="imgTd"><img src="${item.image}" alt=""></td>
                    <td><button class="btn btn-sm btn-warning editButton" data-id="${item.id}" data-toggle="modal" data-target="#myModal">Edit</button></td>
                    <td><button class="btn btn-sm btn-danger deleteButton" data-id="${item.id}">Delete</button></td>
                `);

                // xử lý edit 
                row.find('.editButton').click(function() {  
                    const itemId = $(this).data('id');
                    //$(this) là DOM hiện tại
                    //.data('id') là một phương thức của jQuery để truy xuất giá trị của thuộc tính data-id của phần tử DOM hiện tại. 
                    console.log('Id hiện tại:', itemId);

                    //đẩy data từ sv về form
                    getDataFromId(itemId)

                    // Bỏ disible nút edit và disible nút save
                    $('#editBtn').prop('disabled', false);
                    $('#saveBtn').prop('disabled', true);

                    // update data after edit
                    $('#editBtn').on('click', function(event) {
                        event.preventDefault(); // ngăn sự kiên mặc định
                        updateDataAfterEdit(itemId)   
                    });
                     
                });

                //xử lý delete
                row.find('.deleteButton').click(function() {  
                    const itemId = $(this).data('id');
                    //$(this) là DOM hiện tại
                    //.data('id') là một phương thức của jQuery để truy xuất giá trị của thuộc tính data-id của phần tử DOM hiện tại. 
                    console.log('Id hiện tại:', itemId);
                    // gọi hàm delete khi bấm delete
                    if (confirm('Bạn có chắc muốn xóa mục này không?')) {
                        deleteItem(itemId);
                    }                               
                });



                tableBody.append(row);
            });
        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
}


//load data 
productTable();


//add Product
// function addProduct() {
//     const nameProduct = document.getElementById('nameProduct').value;
//     const numProduct = document.getElementById('numProduct').value;
//     const priceProduct = document.getElementById('priceProduct').value;
//     const LinkProduct = document.getElementById('LinkProduct').value;

//     const newProduct = {
//         name: nameProduct,
//         soluong: numProduct,
//         price: priceProduct,
//         image: LinkProduct,
//     };

//     fetch(getApi, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newProduct),
//         success: function (body) {
//             productTable()
//             // Clear the form inputs
//             document.getElementById('nameProduct').value = '';
//             document.getElementById('numProduct').value = '';
//             document.getElementById('priceProduct').value = '';
//             document.getElementById('LinkProduct').value = '';     
//         alert("cập nhật thành công")
//         },
//         error: function (error) {
//             console.error('Error adding new product:', error);
//         }
//     })
//     //Một cách trình bày khác
//     // .then(response => response.json())
//     // .then(data => {
//     //     productTable();
//     //     // Clear the form inputs
//     //     document.getElementById('nameProduct').value = '';
//     //     document.getElementById('numProduct').value = '';
//     //     document.getElementById('priceProduct').value = '';
//     //     document.getElementById('LinkProduct').value = '';
//     // })
//     // .catch(error => console.error('Error adding new product:', error));        
// }
//Ajax 
function addProduct() {
    const nameProduct = $('#nameProduct').val();
    const numProduct = $('#numProduct').val();
    const priceProduct = $('#priceProduct').val();
    const LinkProduct = $('#LinkProduct').val();

    const newProduct = {
        name: nameProduct,
        soluong: numProduct,
        price: priceProduct,
        image: LinkProduct,
    };

    $.ajax({
        type: 'POST',
        url: getApi,
        contentType: 'application/json',
        data: JSON.stringify(newProduct),
        success: function (data) {
            productTable();
            // Clear the form inputs
            $('#nameProduct').val('');
            $('#numProduct').val('');
            $('#priceProduct').val('');
            $('#LinkProduct').val('');
            // Đóng modal chỉnh sửa
            $('#myModal').modal('hide');
        },
        error: function (error) {
            console.error('Error adding new product:', error);
        }
    });
}

    /* Start btn save data*/
    $('#saveBtn').on('click', function(event) {
        event.preventDefault(); // ngăn sự kiên mặc định
        addProduct();
    });


   // get data from form follow id
    function getDataFromId(itemId) {
        // get data from id
        $.ajax({
            url: `${getApi}/${itemId}`, 
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                // Bỏ dữ liệu lấy về vào form
                $('#nameProduct').val(data.name);
                $('#numProduct').val(data.soluong);
                $('#priceProduct').val(data.price);
                $('#LinkProduct').val(data.image);
            },
            error: function (error) {
                console.error('Error fetching data:', error);
            }
        });
    }

    //update data after edit 
    function updateDataAfterEdit(itemId) {
        const updatedData = {
            name: $('#nameProduct').val(),
            soluong: $('#numProduct').val(),
            price: $('#priceProduct').val(),
            image: $('#LinkProduct').val()
        }

        // Gửi dữ liệu cập nhật lên máy chủ
        $.ajax({
            url: `${getApi}/${itemId}`,
            method: 'PUT', 
            dataType: 'json',
            data: updatedData,
            success: function(response) {
                productTable()
                //đoạn này cần phải xử lý form lại thành bình thường chứ nếu ko méo biết sao nó nhớ
                // Clear the form inputs
                $('#nameProduct').val('');
                $('#numProduct').val('');
                $('#priceProduct').val('');
                $('#LinkProduct').val('');
                 // Bỏ disible nút edit và disible nút save
                 $('#editBtn').prop('disabled', true);
                 $('#saveBtn').prop('disabled', false);
                 // Đóng modal chỉnh sửa
                $('#myModal').modal('hide');
                // alert('Dữ liệu đã được cập nhật thành công');
            },
            error: function(error) {
                // alert('Lỗi khi cập nhật dữ liệu:', error);
            }
        });
      }  


      //delete data
      function deleteItem(itemId) {
        $.ajax({
            url: `${getApi}/${itemId}`,
            method: 'DELETE',
            dataType: 'json',
            success: function(response) {
                $(`#item_${itemId}`).closest('tr').remove();
                console.log('Mục đã được xóa thành công');
                productTable();
            },
            error: function(error) {
                console.error('Lỗi khi xóa mục:', error);
            }
        });
    }
    
























































});