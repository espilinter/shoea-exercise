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

const fetchshippingData = async () => {
    const res = await fetch("http://localhost:3000/shippingAdress");
    const cartData = await res.json();
    console.log(cartData);
    return cartData;
};

const createCart = async () => {
    let shippingData = await fetchshippingData();
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
    </button>
    <div class="shoesColor" style="background-color: ${cartData[i].color};"></div>
    <p class="shoesP">Black | Size = ${cartData[i].size}</p>
    <p class="shoesPrice">$${productData[productId].price}</p>
    
        <div class="counter">
            <p class="counterP">${cartData[i].number}</p>
        </div>
    
</div>
</div>`;
        document.querySelector(".createer").insertAdjacentHTML("afterend", shoeDiv);
        totalPrice = (Number(totalPrice) + (Number(productData[productId].price) * cartData[i].number)).toFixed(2)
    }
    console.log(totalPrice);
    const totalPriceP = `<p class="totalNum">$${totalPrice}</p>`;
    document.querySelector(".amount").insertAdjacentHTML("afterend", totalPriceP);
    let shippingNumber = (Number(shippingData[0].shippingPrice)).toFixed(2);
    const ShippingP = `<p class="shippingNumber">$${shippingNumber}</p>`
    document.querySelector(".shipping").insertAdjacentHTML("afterend", ShippingP);
    const Ttotal = (totalPrice - shippingData[0].shippingPrice).toFixed(2);
    const totalNumber = `<p class="totalNumber">$${Ttotal}</p>`
    document.querySelector(".total").insertAdjacentHTML("afterend", totalNumber);
}


const createShipping = async () => {
    let shippingData = await fetchshippingData();

    const shippingDiv = `<div class="address">
    <div>
        <div class="addressContainer">
            <div class="locPicture">
                <img class="locImg" src="location.svg" width="30">
            </div>
            <div class="addressData">
                <h3 class="adHed">${shippingData[0].shippingName}</h3>
                <p class="adP">Estimated Arrival, Dec 18-19</p>
            </div>
            <div class="price">$${shippingData[0].shippingPrice}</div>
            <a href="../shipping page/index.html" class="chevronIcon">
            <img class="chevronImg" src="chevron.svg">
        </a>
        </div>
    </div>
    </div>`
    document.querySelector(".chShHed").insertAdjacentHTML("afterend", shippingDiv);
}

createCart()
createShipping()

//     < div class="address" >
//         <div>
//             <div class="addressContainer">
//                 <div class="locPicture">
//                     <img class="locImg" src="location.svg" width="30">
//                 </div>
//                 <div class="addressData">
//                     <h3 class="adHed">Express</h3>
//                     <p class="adP">Estimated Arrival, Dec 18-19</p>
//                 </div>
//                 <div class="price">$30</div>
//                 <input class="radio" type="radio" name="radio" id="4" value="30">
//             </div>
//         </div>
// </div >

//     ${ shippingData[0].shippingPrice }

// <div class="address">
//     <div>
//         <div class="addressContainer">
//             <div class="locPicture">
//                 <img class="locImg" src="location.svg" width="30">
//             </div>
//             <div class="addressData">
//                 <h3 class="adHed">Express</h3>
//                 <p class="adP">Estimated Arrival, Dec 18-19</p>
//             </div>
//             <div class="price">${shippingData[0].shippingPrice}</div>
//             <input class="radio" type="radio" name="radio" id="4" value="30">
//         </div>
//     </div>
//     </div>

//     <div class="chSh">
// <h2 class="chShHed">Choose Shipping</h2>
// <div>
//     <div class="shContainer">
//         <div class="carPicture">
//             <img class="carImg" src="car.svg" width="30">
//         </div>
//         <div class="shData">
//             <h3 class="shHed">Coose Shipping Type</h3>
//         </div>
//         <div class="price">$${shippingData[0].shippingPrice}</div>
//         <a href="#" class="chevronIcon">
//             <img class="chevronImg" src="chevron.svg">
//         </a>
//     </div>
// </div>
// </div>