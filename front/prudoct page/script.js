// import { name } from "../module"
let shoeId;

const fetchData = async () => {
    const res = await fetch("http://localhost:3000/productPageData");
    const data = await res.json();
    console.log(data);
    return data;
};

const createPrudoct = async () => {
    let data = await fetchData();
    document.querySelector(".sliderImg1").src = `${data[0].img}`;
    document.querySelector(".sliderImg2").src = `${data[0].img}`;
    document.querySelector(".sliderImg3").src = `${data[0].img}`;
    const pElement = `<p class="totalNum">$${data[0].price}</p>`
    document.querySelector(".totalHed").insertAdjacentHTML("afterend", pElement);
    const hElement = `<h1 class="h1">${data[0].name}</h1>`
    document.querySelector(".likeButton").insertAdjacentHTML("beforebegin", hElement);
    // console.log(data);
    // this.shoeId = data[0].id;
}
// let data = await fetchData();
// shoeId = data[0].id;
// console.log(shoeId);
createPrudoct();

let likeNumber = 1;
document.querySelector(".likeButton").addEventListener("click", function () {
    likeNumber = likeNumber + 1;
    if (likeNumber % 2 === 0) {
        document.querySelector(".blackHeart").style.display = "none";
        document.querySelector(".redHeart").style.display = "inline-block";
    }
    if (likeNumber % 2 === 1) {
        document.querySelector(".redHeart").style.display = "none";
        document.querySelector(".blackHeart").style.display = "inline-block";
    }
})

const sentData = {
    id: shoeId,
    size: "40",
    color: "#dcdcdc",
    number: "1"
};

// let size;
document.querySelector(".sizeBtn1").addEventListener("click", function () {
    sizeBtn1()
    sizeBtn2()
    sizeBtn3()
    btn1Active()
    sentData.size = "40";
});

document.querySelector(".sizeBtn2").addEventListener("click", function () {
    sizeBtn1()
    sizeBtn2()
    sizeBtn3()
    btn2Active()
    sentData.size = "41";
});

document.querySelector(".sizeBtn3").addEventListener("click", function () {
    sizeBtn1()
    sizeBtn2()
    sizeBtn3()
    btn3Active()
    sentData.size = "42";

});

function sizeBtn1() {
    document.querySelector(".sizeBtn1").style.backgroundColor = "white";
    document.querySelector(".sizeBtn1").style.color = "#68717A";
    document.querySelector(".sizeBtn1").style.border = "#68717A solid";
}

function sizeBtn2() {
    document.querySelector(".sizeBtn2").style.backgroundColor = "white";
    document.querySelector(".sizeBtn2").style.color = "#68717A";
    document.querySelector(".sizeBtn2").style.border = "#68717A solid";
}

function sizeBtn3() {
    document.querySelector(".sizeBtn3").style.backgroundColor = "white";
    document.querySelector(".sizeBtn3").style.color = "#68717A";
    document.querySelector(".sizeBtn3").style.border = "#68717A solid";
}

function btn1Active() {
    document.querySelector(".sizeBtn1").style.backgroundColor = "black";
    document.querySelector(".sizeBtn1").style.color = "white";
    document.querySelector(".sizeBtn1").style.border = "white solid";
}

function btn2Active() {
    document.querySelector(".sizeBtn2").style.backgroundColor = "black";
    document.querySelector(".sizeBtn2").style.color = "white";
    document.querySelector(".sizeBtn2").style.border = "white solid";
}

function btn3Active() {
    document.querySelector(".sizeBtn3").style.backgroundColor = "black";
    document.querySelector(".sizeBtn3").style.color = "white";
    document.querySelector(".sizeBtn3").style.border = "white solid";
}
let color;
document.querySelector(".gray").addEventListener('click', function () {
    remove()
    document.querySelector(".gray").classList.add('img');
    sentData.color = "#dcdcdc"
});

document.querySelector(".green").addEventListener('click', function () {
    remove()
    document.querySelector(".green").classList.add('img');
    sentData.color = "#5e7274"
});

document.querySelector(".purple").addEventListener('click', function () {
    remove()
    document.querySelector(".purple").classList.add('img');
    sentData.color = "#8e4095"
});

document.querySelector(".brown").addEventListener('click', function () {
    remove()
    document.querySelector(".brown").classList.add('img');
    sentData.color = "#6a4c3c"
});

document.querySelector(".blue").addEventListener('click', function () {
    remove()
    document.querySelector(".blue").classList.add('img');
    sentData.color = "#1e90ff"
});

function remove() {
    document.querySelector(".gray").classList.remove('img');
    document.querySelector(".green").classList.remove('img');
    document.querySelector(".purple").classList.remove('img');
    document.querySelector(".brown").classList.remove('img');
    document.querySelector(".blue").classList.remove('img');

}

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

async function postData(data) {
    const res = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

let value = document.querySelector(".counterInput").value;
// console.log(shoeId, size, color, value);

// const sentData = {
//     id: shoeId,
//     size: size,
//     color: color,
//     number: value
// };
console.log(sentData);
document.querySelector(".buyButton").addEventListener("click", function () {
    console.log(sentData);
    postData(sentData)
    // window.location.href = "/cart page/index.html"
})