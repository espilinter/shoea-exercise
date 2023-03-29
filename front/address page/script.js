function openForm() {
    document.querySelector(".addForm").style.display = "block"
    document.querySelector(".backGround").style.display = "block"
}

function closeForm() {
    document.querySelector(".addForm").style.display = "none"
    document.querySelector(".backGround").style.display = "none"
}

////////////////////////////////////////////

const fetchAddressData = async () => {
    const res = await fetch("http://localhost:3000/users");
    const addressData = await res.json();
    console.log(addressData);
    console.log(addressData[0].address);
    return addressData[0].address;
};

const createAddress = async () => {
    let addressData = await fetchAddressData();
    console.log(addressData);
    for (let i = 0; i < addressData.length; i++) {
        const addressDiv = `
        <div class="address">
        <div>
            <div class="addressContainer">
                <div class="locPicture">
                    <img class="locImg" src="location.svg" width="30">
                </div>
                <div class="addressData">
                    <h3 class="adHed">${addressData[i].name}</h3>
                    <p class="adP">${addressData[i].ad}</p>
                </div>
                <input class="radio" type="radio" name="radio" id="{addressData[i].id}">
            </div>
        </div>
    </div>`;
        document.querySelector(".topPart").insertAdjacentHTML("afterend", addressDiv);
    }

}
createAddress()

async function postData(data) {
    const res = await fetch("http://localhost:3000/shippingAdress", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

const getAddress = async () => {
    let addressData = await fetchAddressData();
    const postData = {
        "name": addressData[i].name,
        "ad": addressData[i].ad,
    }
}