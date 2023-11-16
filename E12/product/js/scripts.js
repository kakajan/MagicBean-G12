let pList = '';
products.forEach((val, index) => {
    pList += `
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${val.images.main.url[0]}" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${val.title_fa}</h5>
                                    <!-- Product price-->
                                    ${val.default_variant.price.selling_price.toLocaleString()}ریال
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><buttom class="btn btn-outline-dark mt-auto" onclick="addtoCart(${index})">Add to cart</buttom></div>
                            </div>
                        </div>
                    </div>`;
})

document.querySelector(".productList").innerHTML = pList;
const cartData = [];
const totalPrice = document.querySelector(".totalPrice");
const cartList = document.querySelector(".cartList");
function addtoCart (i) {
    cartData.push(products[i]);
    calculateTotal();
    renderList();
}
function calculateTotal () {
    let total = 0;
    cartData.forEach(val => {
        total += val.default_variant.price.selling_price;
        console.log(total);
    })
    totalPrice.innerText = total.toLocaleString() + ' | ' + ' کالا' + cartData.length ;
}
function renderList () {
    let list = '';
    cartData.forEach((val, index) => {
        list += `
        <li>
        <img src="${val.images.main.url[0]}" style="width:60px" />
        &nbsp; ${val.title_fa}
        <button onclick="deleteItem(${index})">Delete</button> 
        </li>
        `;
    })
    cartList.innerHTML = list;
}
function deleteItem (i) {
    cartData.splice(i, 1);
    calculateTotal();
    renderList();
}