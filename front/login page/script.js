const fetchData = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    console.log(data);
    return data;
};

let email = document.getElementById("email");
let password = document.getElementById("password");

const filterData = async () => {
    let data = await fetchData();
    const user = await data.filter((user) => user.Email === email.value && user.password === password.value)

    if (user.length > 0) {
        window.location.href = "../home page/home page.html"
    }

    else {
        document.querySelector(".erorSpace").style.display = "block";
    }
};