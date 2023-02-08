//CRUD doanh mục start
let btnCreateDashboard = document.getElementById("btnCreateDashboard");
btnCreateDashboard.addEventListener("click", function () {
  let listDashboard = JSON.parse(localStorage.getItem("listDashboard"));
  let dashboardId = document.getElementById("dashboardId").value;

  let exist = false;
  if (listDashboard != null) {
    for (const dashboard of listDashboard) {
      if (dashboard.dashboardId == dashboardId) {
        exist = true;
        break;
      }
    }
  }
  if (exist) {
    updateDashboard();
  } else {
    createDashboard();
  }
});

function createDashboard() {
  let listDashboard = JSON.parse(localStorage.getItem("listDashboard"));
  if (listDashboard == null) {
    listDashboard = [];
  }
  let dashboardId = document.getElementById("dashboardId").value;
  let dashboardName = document.getElementById("dashboardName").value;
  let dashboardDetail = document.getElementById("dashboardDetail").value;
  let dashboardNew = {
    dashboardId,
    dashboardName,
    dashboardDetail,
  };
  listDashboard.push(dashboardNew);
  localStorage.setItem("listDashboard", JSON.stringify(listDashboard));
}
function readListDashboard() {
  let listDashboard = JSON.parse(localStorage.getItem("listDashboard"));
  if (listDashboard == null) {
    listDashboard = [];
  }
  let tableDashboard = document.getElementById("tbBodyDashboard");
  tableDashboard.innerHTML = "";
  listDashboard.forEach((dashboard, index) => {
    tableDashboard.innerHTML += `
    <tr>
    <td>${index + 1}</td>
    <td>${dashboard.dashboardId}</td>
    <td>${dashboard.dashboardName}</td>
    <td>${dashboard.dashboardDetail}</td>
    <td>
        <button onclick="editDashboard('${
          dashboard.dashboardId
        }')" data-bs-toggle="modal" data-bs-target="#dashboardInfor">Edit</button>
        <button onclick="deleteDashboard('${
          dashboard.dashboardId
        }')">Delete</button>
    </td>
</tr>`;
  });
}
readListDashboard();
function editDashboard(dashboardId) {
  let listDashboard = JSON.parse(localStorage.getItem("listDashboard"));
  let dashboardUpdate = listDashboard.filter((dashboard) => {
    if (dashboard.dashboardId == dashboardId) {
      return dashboard;
    }
  });
  document.getElementById("dashboardId").value = dashboardUpdate[0].dashboardId;
  document.getElementById("dashboardName").value =
    dashboardUpdate[0].dashboardName;
  document.getElementById("dashboardDetail").value =
    dashboardUpdate[0].dashboardDetail;
}
function updateDashboard() {
  let listDashboard = JSON.parse(localStorage.getItem("listDashboard"));
  let dashboardId = document.getElementById("dashboardId").value;
  let dashboardName = document.getElementById("dashboardName").value;
  let dashboardDetail = document.getElementById("dashboardDetail").value;
  let dashboardUpdate = listDashboard.map((dashboard) => {
    if (dashboard.dashboardId == dashboardId) {
      dashboard.dashboardId = dashboardId;
      dashboard.dashboardName = dashboardName;
      dashboard.dashboardDetail = dashboardDetail;
    }
    return dashboard;
  });
  localStorage.setItem("listDashboard", JSON.stringify(dashboardUpdate));
  readListProduct();
}
function deleteDashboard(dashboardId) {
  let listDashboard = JSON.parse(localStorage.getItem("listDashboard"));
  for (i = 0; i < listDashboard.length; i++) {
    if (listDashboard[i].dashboardId == dashboardId) {
      listDashboard.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("listDashboard", JSON.stringify(listDashboard));
  readListDashboard();
}
//CRUD doanh mục end

//CRUD sản phẩm start
let btnCreateProduct = document.getElementById("btnCreateProduct");
btnCreateProduct.addEventListener("click", function () {
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  let dashboardId = document.getElementById("dashboardId").value;

  let exist = false;
  if (listProduct != null) {
    for (const dashboard of listProduct) {
      if (dashboard.dashboardId == dashboardId) {
        exist = true;
        break;
      }
    }
  }
  if (exist) {
    updateProduct();
  } else {
    createProduct();
  }
});
let listDashboard = JSON.parse(localStorage.getItem("listDashboard"));
console.log(listDashboard);
listDashboard.forEach((dashboard) => {
  document.getElementById("chooseGroup").innerHTML += `

  <option value="${dashboard.dashboardId}">${dashboard.dashboardName}</option>
`;
});
function createProduct() {
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  if (listProduct == null) {
    listProduct = [];
  }
  let productId = document.getElementById("productId").value;
  let productName = document.getElementById("productName").value;
  let productDetail = document.getElementById("productDetail").value;
  let productPrice = document.getElementById("productPrice").value;
  let productImg = document.getElementById("productImg").value;
  let productGroup = document.getElementById("chooseGroup").value;
  let productNew = {
    productId,
    productName,
    productDetail,
    productPrice,
    productImg,
    productGroup,
  };
  listProduct.push(productNew);
  localStorage.setItem("listProduct", JSON.stringify(listProduct));
}
function readListProduct() {
  //B1. Lấy listProduct từ localStorage
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  if (listProduct == null) {
    listProduct = [];
  }
  //B2. Hiển thị dữ liệu listProduct vào tableBody
  let tableBody = document.getElementById("tbBodyProduct");
  tableBody.innerHTML = "";
  listProduct.forEach((product, index) => {
    //Hiển thị ra một sản phẩm trong tableBody
    tableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.productId}</td>
                    <td>${product.productName}</td>
                    <td>${product.productDetail}</td>
                    <td>${product.productPrice}</td>
                    <td>${product.productGroup}</td>
                    <td>
                        <button onclick="updateProduct('${
                          product.productId
                        }')"  data-bs-toggle="modal" data-bs-target="#productInfor">Edit</button>
                        <button onclick="deleteProduct('${
                          product.productId
                        }')">Delete</button>
                    </td>
                </tr>`;
  });
}
readListProduct();
function updateProduct(productId) {
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  let productUpdate = listProduct.filter((product) => {
    if (product.productId == productId) {
      return product;
    }
  });
  document.getElementById("productId").value = productUpdate[0].productId;
  document.getElementById("productName").value = productUpdate[0].productName;
  document.getElementById("productDetail").value =
    productUpdate[0].productDetail;
  document.getElementById("productPrice").value = productUpdate[0].productPrice;
}
function editProduct() {
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  let productId = document.getElementById("productId").value;
  let productName = document.getElementById("productName").value;
  let productPrice = parseFloat(document.getElementById("price").value);
  let listProductUpdate = listProduct.map((product) => {
    if (product.productId == productId) {
      product.productName = productName;
      product.productDetail = productDetail;
      product.productPrice = productPrice;
    }
    return product;
  });
  localStorage.setItem("listProduct", JSON.stringify(listProductUpdate));
  readListProduct();
}

function deleteProduct(productId) {
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  for (let i = 0; i < listProduct.length; i++) {
    if (listProduct[i].productId == productId) {
      listProduct.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("listProduct", JSON.stringify(listProduct));
  readListProduct();
}

//CRUD sản phẩm end

//CRUD Bill start
function readListBill() {
  //B1. Lấy listProduct từ localStorage
  let listBill = JSON.parse(localStorage.getItem("listBill"));
  if (listBill == null) {
    listBill = [];
  }
  //B2. Hiển thị dữ liệu listBill vào tableBody
  let tableBody = document.getElementById("tbBodyBill");
  console.log(listBill.length);
  for (i = 0; i < listBill.length + 1; i++) {
    tableBody.innerHTML += `
    <tr>
      <td rowspan="${listBill[i].cartOder.length + 1}">${i + 1}</td>
      <td rowspan="${listBill[i].cartOder.length + 1}">${
      listBill[i].clientName
    }</td>
      <td>${listBill[i].cartOder[0].itemName}</td>
      <td>${listBill[i].cartOder[0].itemQuantity}</td>
      <td rowspan="${listBill[i].cartOder.length + 1}">${
      listBill[i].priceBill
    }</td>
      <td rowspan="${listBill[i].cartOder.length + 1}">${
      listBill[i].clientAdress
    }</td>
      <td rowspan="${listBill[i].cartOder.length + 1}">${
      listBill[i].clientPhone
    }</td>
      <td rowspan="${listBill[i].cartOder.length + 1}">
        <button onclick="doneBill('${product.productId}')" >Hoàn thành</button>
        <button onclick="cancelBill('${product.productId}')">Hủy</button>
    </td>
    <tr>
  `;
    for (j = 1; j <= listBill[i].cartOder.length; j++) {
      console.log(i);
      //Hiển thị ra một sản phẩm trong tableBody
      tableBody.innerHTML += `
                <tr>
                <td>${listBill[i].cartOder[j].itemName}</td>
                <td>${listBill[i].cartOder[j].itemQuantity}</td>
                </tr>`;
    }
  }

  // listBill.forEach((bill, index) => {
  //   //Hiển thị ra một sản phẩm trong tableBody

  //   tableBody.innerHTML += `
  //               <tr>
  //                   <td rowspan="">${index + 1}</td>
  //                   <td>${product.productId}</td>
  //                   <td>${product.productName}</td>
  //                   <td>${product.productDetail}</td>
  //                   <td>${product.productPrice}</td>
  //                   <td>${product.productGroup}</td>
  //                   <td>
  //                       <button onclick="updateProduct('${
  //                         product.productId
  //                       }')"  data-bs-toggle="modal" data-bs-target="#productInfor">Edit</button>
  //                       <button onclick="deleteProduct('${
  //                         product.productId
  //                       }')">Delete</button>
  //                   </td>
  //               </tr>`;
  // });
}
readListBill();
