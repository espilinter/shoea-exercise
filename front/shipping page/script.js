let radioValue;
function radioButton() {
    var ele = document.getElementsByName('radio');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            radioValue = {
                shippingPrice: ele[i].value,
                shippingName: ele[i].id
            }
            postData(radioValue);
        }
    }
    console.log(radioValue);
}


async function postData(data) {
    const res = await fetch("http://localhost:3000/shippingAdress", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}