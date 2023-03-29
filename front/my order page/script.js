
const fetchCartData = async () => {
    const res = await fetch("http://localhost:3000/cart");
    const cartData = await res.json();
    console.log(cartData);
    return cartData;
};

const fetchProductData = async () => {
    const res = await fetch("http://localhost:3000/product");
    const cartData = await res.json();
    console.log(cartData);
    return cartData;
};

const createCart = async () => {
    let cartData = await fetchCartData();
    let totalPrice = 0;
    for (let i = 0; i < cartData.length; i++) {
        const productId = (cartData[i].id) - 1;
        let productData = await fetchProductData();
        let shoeDiv = `
<div class="shoescontainer">
<div class="shoesPicture">
    <img class="shoesImg" src="${productData[productId].img}" width="130">
</div>
<div class="shoesData">
    <h2 class="shoesHed">${productData[productId].name}</h2>
    <div class="shoesColor" style="background-color: ${cartData[i].color};"></div>
    <p class="shoesP">Black | Size = ${cartData[i].size}</p>
    <p class="shoesPrice">$${productData[productId].price}</p>
    <button class="trackButton">Track Order</button>
</div>
</div>
`;
        document.querySelector(".activePage").insertAdjacentHTML("afterbegin", shoeDiv);
    }
}

createCart()

function completed() {
    document.querySelector(".activePage").style.display = "none"
    document.querySelector(".completedPage").style.display = "block"
    document.querySelector(".activeBtn").style.color = "#969696"
    document.querySelector(".activeBtn").style.borderBottom = "#cccccc solid 1px"
    document.querySelector(".completedBtnn").style.color = "black"
    document.querySelector(".completedBtnn").style.borderBottom = "black solid 3px"
}

function active() {
    document.querySelector(".completedPage").style.display = "none"
    document.querySelector(".activePage").style.display = "block"
    document.querySelector(".completedBtnn").style.color = "#969696"
    document.querySelector(".completedBtnn").style.borderBottom = "#cccccc solid 1px"
    document.querySelector(".activeBtn").style.color = "black"
    document.querySelector(".activeBtn").style.borderBottom = "black solid 3px"
}