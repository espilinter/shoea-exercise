function openForm() {
    document.querySelector(".paymentSuccessful").style.display = "block";
    document.querySelector(".backGround").style.display = "block"
    setTimeout(closeForm, 5000)
}

function closeForm() {
    document.querySelector(".paymentSuccessful").style.display = "none";
    document.querySelector(".backGround").style.display = "none"
    window.location.href = "../home page/home page.html"
}