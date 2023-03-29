function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}
// shoescontainer

let div = document.querySelector(".shoescontainer");

function remove() {
    // div.parentNode.removeChild(div);
    deleteData(trashId)
    location.reload();
}

async function deleteData(id) {
    const res = await fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE",
    });
}

/////////////////////////////////////////////////////////

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.querySelector(".backGround").style.display = "block"
}

let trashId;

function getId(id) {
    openForm()
    console.log(id);
    trashId = id;
}


function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.querySelector(".backGround").style.display = "none"
}

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
        let shoeDiv = `<div class="shoescontainer">
<div class="shoesPicture">
    <img class="shoesImg" src="${productData[productId].img}" width="130">
</div>
<div class="shoesData">
    <h2 class="shoesHed">${productData[productId].name}</h2>
    <button class="trashButton" id=${cartData[i].id} onclick="getId(this.id)">
        <img class="trashIcon" src="trash-outline.svg" width="20">
    </button>
    <div class="shoesColor" style="background-color: ${cartData[i].color};"></div>
    <p class="shoesP">Black | Size = ${cartData[i].size}</p>
    <p class="shoesPrice">$${productData[productId].price}</p>
    <div class="quantity">
        <div class="counter">
            <span class="down" onClick='decreaseCount(event, this)'>-</span>
            <input type="text" value="${cartData[i].number}">
            <span class="up" onClick='increaseCount(event, this)'>+</span>
        </div>
    </div>
</div>
</div>`;
        document.querySelector(".container").insertAdjacentHTML("beforebegin", shoeDiv);
        totalPrice = (Number(totalPrice) + (Number(productData[productId].price) * cartData[i].number)).toFixed(2)
    }
    console.log(totalPrice);
    const totalPriceP = `<p class="totalNum">$${totalPrice}</p>`;
    document.querySelector(".totalHed").insertAdjacentHTML("afterend", totalPriceP);
}

createCart()


// let shoeDiv = `
// <div class="shoescontainer">
// <div class="shoesPicture">
//     <img class="shoesImg" src="${d}" width="130">
// </div>
// <div class="shoesData">
//     <h2 class="shoesHed">Air jordan 3 Retro</h2>
//     <button class="trashButton" onclick="openForm()">
//         <img class="trashIcon" src="trash-outline.svg" width="20">
//     </button>
//     <div class="shoesColor"></div>
//     <p class="shoesP">Black | Size = 42</p>
//     <p class="shoesPrice">$105.00</p>
//     <div class="quantity">
//         <div class="counter">
//             <span class="down" onClick='decreaseCount(event, this)'>-</span>
//             <input type="text" value="1">
//             <span class="up" onClick='increaseCount(event, this)'>+</span>
//         </div>
//     </div>
// </div>
// </div>`;