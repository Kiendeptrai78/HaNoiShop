// Danh sách sản phẩm
var products = [
  {
    id: "1",
    name: "PHỞ HÀ NỘI",
    img: "jpg/anh1..jpg",
    price: 30000,
    status: true,
  },
  {
    id: "2",
    name: "Cháo Sườn HÀ NỘI",
    img: "jpg/chaosuon.jpg",
    price: 20000,
    status: true,
  },
  {
    id: "3",
    name: "Miến Trộn HÀ NỘI",
    img: "jpg/mientron.jpg",
    price: 15000,
    status: true,
  },
  {
    id: "4",
    name: "Miến Ngan HÀ NỘI",
    img: "jpg/mienngan.jpg",
    price: 25000,
    status: true,
  },
  {
    id: "5",
    name: "Bún Ốc Hà Nội",
    img: "jpg/bunoc.jpg",
    price: 30000,
    status: true,
  },
  {
    id: "6",
    name: "Bún Đậu Mắm Tôm",
    img: "jpg/bundaumantom.jpg",
    price: 40000,
    status: true,
  },
  {
    id: "7",
    name: "Bún Thang Hà Nội",
    img: "jpg/bunthang.jpg",
    price: 30000,
    status: true,
  },
  {
    id: "8",
    name: "Bún Chả Hà Nội",
    img: "jpg/buncha.jpg",
    price: 30000,
    status: true,
  },
  {
    id: "9",
    name: "Phở Cuốn Hà Nội",
    img: "jpg/phocuon.jpg",
    price: 30000,
    status: true,
  },
  {
    id: "10",
    name: "Chả Lá Vọng Hà Nội",
    img: "jpg/chalavong.jpg",
    price: 35000,
    status: true,
  },
  {
    id: "11",
    name: "Chả Rươi Cuốn Hà Nội",
    img: "jpg/charuoi.jpg",
    price: 35000,
    status: true,
  },

  {
    id: "12",
    name: "Bánh Cuốn Thanh Trì",
    img: "jpg/banhcuonthanhtri.jpg",
    price: 30000,
    status: true,
  },
  {
    id: "13",
    name: "Bánh Đa Cua",
    img: "jpg/banhdacua.jpg",
    price: 25000,
    status: true,
  },
  {
    id: "14",
    name: "Bánh Giò Đông Các",
    img: "jpg/banhgiodongcac.jpg",
    price: 30000,
    status: true,
  },
  {
    id: "15",
    name: "Bánh Khúc",
    img: "jpg/banhkhuchanoi.jpg",
    price: 20000,
    status: true,
  },
  {
    id: "16",
    name: "Bánh Tôm Hồ Tây",
    img: "jpg/banhtomhotay.jpg",
    price: 10000,
    status: true,
  },

  {
    id: "17",
    name: "Xôi Xéo",
    img: "jpg/xoixeo.jpg",
    price: 15000,
    status: true,
  },
  {
    id: "18",
    name: "Kem Tràng Tiền",
    img: "jpg/kemtrangtien.jpg",
    price: 10000,
    status: true,
  },
  {
    id: "19",
    name: "Nem Nướng Rán",
    img: "jpg/nemran.jpg",
    price: 12000,
    status: true,
  },
  {
    id: "20",
    name: "Tào Phớ",
    img: "jpg/taopho.jpg",
    price: 20000,
    status: true,
  },
  {
    id: "21",
    name: "Bánh MÌ",
    img: "jpg/banhmi.jpg",
    price: 15000,
    status: true,
  },
];
// Danh sách đơn hàng đã thanh toán
var orderHistory = [];

// Danh sách đơn hàng tạm thời
var currentOrder = [];

// Hiển thị sản phẩm
function showProduct() {
  var productDiv = document.getElementById("content");
  productDiv.innerHTML = ""; // Xóa nội dung cũ trước khi thêm nội dung mới
  for (var i = 0; i < products.length; i++) {
    productDiv.innerHTML += `
      <div class="box">
        <div class="imgBx">
          <img src="${products[i].img}" alt="">
        </div>
        <div class="text">
          <h3>${products[i].name}</h3>
          <span>${products[i].price} VND</span>
        </div>
        <button class="buy" onclick="addToCart('${products[i].id}')">Đặt hàng</button>
      </div>
    `;
  }
}

showProduct();

var cartData = [];

// Thêm sản phẩm vào giỏ hàng
function addToCart(id) {
  var newProduct = products.find(product => product.id === id);
  if (newProduct) {
    cartData.push(newProduct);
    alert("Bạn đã thêm vào giỏ hàng thành công!");
    showCart(); // Hiển thị lại giỏ hàng
  }
}

// Hiển thị giỏ hàng
function showCart() {
  var tableData = document.getElementById("table-data");
  tableData.innerHTML = ""; // Xóa nội dung cũ
  var total = 0;
  for (var i = 0; i < cartData.length; i++) {
    tableData.innerHTML += `
      <tr>
        <td><p>${i + 1}</p></td>
        <td><p>${cartData[i].name}</p></td>
        <td><img src="${cartData[i].img}" alt="Ảnh"></td>
        <td><p>${cartData[i].price} VND</p></td>
        <td><p>${cartData[i].status ? "Còn Hàng" : "Hết Hàng"}</p></td>
      </tr>
    `;
    total += cartData[i].price; // Tính tổng giá
  }
  document.getElementById("table-total").innerHTML = `
    <tr>
      <td colspan="3"><b>Tổng Tiền</b></td>
      <td colspan="2"><p>${total} VND</p></td>
    </tr>
  `;
}

// Xóa giỏ hàng
document.getElementById("btn-remove").addEventListener("click", function() {
  cartData = [];
  showCart();
  alert("Giỏ hàng đã được xóa!");
});

// Xử lý thanh toán
document.getElementById('btn-checkout').addEventListener('click', function() {
  if (cartData.length === 0) {
    alert("Giỏ hàng trống, không thể thanh toán.");
  } else {
    var totalAmount = cartData.reduce((total, product) => total + product.price, 0);
    alert("Thanh toán thành công! Tổng số tiền: " + totalAmount + " VND");

    // Lưu đơn hàng vào lịch sử
    orderHistory.push({
      id: 'ORD-' + Date.now(), // Tạo ID đơn hàng dựa trên thời gian
      items: cartData.map(item => ({ name: item.name, price: item.price })),
      total: totalAmount,
      date: new Date().toLocaleDateString()
    });

    // Xóa giỏ hàng sau khi thanh toán
    cartData = [];
    showCart();

    // Hiển thị lịch sử đơn hàng
    showOrderHistory();
  }  
});

// Hiển thị lịch sử đơn hàng
function showOrderHistory() {
  var overlay = document.createElement('div');
  overlay.className = 'dialog-overlay';

  var content = document.createElement('div');
  content.className = 'dialog-content';

  var historyContent = '<h2>Lịch Sử Đơn Hàng</h2>';
  historyContent += '<table>';
  historyContent += '<thead><tr><th>ID Đơn Hàng</th><th>Ngày</th><th>Tổng</th><th>Chi Tiết</th></tr></thead><tbody>';

  orderHistory.forEach(order => {
    historyContent += `<tr>
      <td>${order.id}</td>
      <td>${order.date}</td>
      <td>${order.total} VND</td>
      <td>
        <ul>
          ${order.items.map(item => `<li>${item.name}: ${item.price} VND</li>`).join('')}
        </ul>
      </td>
    </tr>`;
  });

  historyContent += '</tbody></table>';
  historyContent += '<button id="btn-close-history">Đóng</button>';
  
  content.innerHTML = historyContent;
  overlay.appendChild(content);
  document.body.appendChild(overlay);

  // Đóng cửa sổ lịch sử đơn hàng
  document.getElementById('btn-close-history').addEventListener('click', function() {
    document.body.removeChild(overlay);
  });
}

// Thêm nút xem lịch sử đơn hàng
document.getElementById('btn-show-history').addEventListener('click', function() {
  showOrderHistory();
});
