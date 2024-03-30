// FETCH API LẤY THÔNG TIN CHI NHÁNH ẢO

// Lấy dữ liệu từ API (ví dụ: JSONPlaceholder)
fetch('http://localhost:3000/api/test-items')
.then(response => response.json())
.then(data => {

    // data trên màn hình
const dataGrid = document.getElementById('data-grid');

// Duyệt qua dữ liệu và thêm từng mục vào lưới Bootstrap
data.forEach(item => {
const card = document.createElement('div');
card.classList.add('col-md-6', 'mb-3'); // Sử dụng lớp Bootstrap cho cột

card.innerHTML = `
 

 <div class="row">
            <div class="col-md-6">
                <!-- Hình ảnh -->
                <img src="${item.imageUrl}" alt="Hình ảnh mô tả" class="img-fluid">
            </div>
            <div class="col-md-6">
                <!-- Mô tả bên cạnh hình ảnh -->
                <h5 style = "color : red;padding-top : 40%">
                ${item.name}
                </h5>
                <p>
                ${item.diachi}
                </p>
                <br><br>
            </div>
        </div>

`;

dataGrid.appendChild(card);
});
})
    .catch(error => {
console.error('Có lỗi xảy ra:', error);
    });


