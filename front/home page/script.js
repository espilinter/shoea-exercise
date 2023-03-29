// import { name } from "/prudoct page/script.js"
// name()
// export function esm() {
// const fetchData = async () => {
//     const res = await fetch("http://localhost:3000/product");
//     const data = await res.json();
//     console.log(data);
//     return data;
// };
// }


const fetchProductData = async () => {
    const res = await fetch("http://localhost:3000/product");
    const cartData = await res.json();
    console.log(cartData);
    return cartData;
};

const createCart = async () => {
    let productData = await fetchProductData();
    for (let i = 0; i < productData.length; i++) {
        const shoeDiv = `<div>
        <a href="../prudoct page/index.html" id="${i}" onclick="putData(this.id)">
            <div class="shoesPicture">
                <img class="shoesImg" src="${productData[i].img}" width="142">
            </div>
        </a>
        <p class="shoesName">${productData[i].name}</p>
        <p class="price">$${productData[i].price}</p>
        </div>`;
        document.querySelector(".products").insertAdjacentHTML("afterbegin", shoeDiv);
    }
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

function pageMaker(id) {
    const data = { mark: id }
    postMarkData(data)
}

async function postMarkData(data) {
    const res = await fetch("http://localhost:3000/shoesMark", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

// putData(sentData)

// function nameA(clicked_id) {
//     console.log(clicked_id);
// }
// document.querySelector(".buyButton").addEventListener("click", function () {
//     postData(sentData)
//     window.location.href = "/cart page/index.html"
// })

// const shoeDiv = `<div>
// <a href="#">
//     <div class="shoesPicture">
//         <img class="shoesImg" src="shoes2.png" width="142">
//     </div>
// </a>
// <p class="shoesName">K-Swiss ista Train...</p>
// <p class="price">$ 85.00</p>
// </div>`

// let email = document.getElementById("email");
// let password = document.getElementById("password");
// console.log(data.filter((user) => user.name === email));
// const filterData = async () => {
//     // console.log(email.value);
//     let data = await fetchData();
//     // console.log(await data);

//     document.querySelector(".sliderImg").src = `${data.img}`;
//     const user = await data.filter((user) => user.Email === email.value && user.password === password.value)
// }

