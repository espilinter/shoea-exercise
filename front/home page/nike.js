const fetchProductData = async () => {
    const res = await fetch("http://localhost:3000/product");
    const cartData = await res.json();
    console.log(cartData);
    return cartData;
};

const fetchMarkData = async () => {
    const res = await fetch("http://localhost:3000/shoesMark");
    const cartData = await res.json();
    console.log(cartData);
    return cartData;
};



const createCart = async () => {
    let MarkData = await fetchMarkData();
    let productData = await fetchProductData();
    for (let i = 0; i < productData.length; i++) {
        const shoeDiv = `<div>
        <a href="#" id="${i}" onclick="putData(this.id)">
            <div class="shoesPicture">
                <img class="shoesImg" src="${productData[i].img}" width="142">
            </div>
        </a>
        <p class="shoesName">${productData[i].name}</p>
        <p class="price">$${productData[i].price}</p>
        </div>`;
        if (productData[i].mark === MarkData[MarkData.length - 1].mark) {
            document.querySelector(".products").insertAdjacentHTML("afterbegin", shoeDiv);
        }
    }
    const markDiv = `<h1 class="header">${MarkData[MarkData.length - 1].mark}</h1>`
    document.querySelector(".arrow").insertAdjacentHTML("afterend", markDiv);
}

createCart()

const putData = async (clicked_id) => {

    async function postData(data) {
        const res = await fetch("http://localhost:3000/productPageData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }
    let productData = await fetchProductData();
    console.log(productData);

    const sentData = {
        "id": 1,
        "name": productData[clicked_id].name,
        "price": productData[clicked_id].price,
        "img": productData[clicked_id].img
    };
    postData(sentData)
    window.location.href = ""
}