setTimeout(function () {
    document.querySelector('.onboardingPage1').style.display = "none";
    document.querySelector('.onboardingPage2').style.display = "inline-block";
    setTimeout(function () {
        document.querySelector('.onboardingPage2').style.display = "none";
        document.querySelector('.onboardingPage3').style.display = "inline-block";
    }, 3000);
}, 3000);

document.querySelector('.nextButton1').addEventListener("click", function () {
    document.querySelector('.onboardingPage3').style.display = "none";
    document.querySelector('.onboardingPage4').style.display = "inline-block";
})

document.querySelector('.nextButton2').addEventListener("click", function () {
    document.querySelector('.onboardingPage4').style.display = "none";
    document.querySelector('.onboardingPage5').style.display = "inline-block";
})

function page1_2() {
    document.querySelector('.onboardingPage3').style.display = "none";
    document.querySelector('.onboardingPage4').style.display = "inline-block";
}

function page1_3() {
    document.querySelector('.onboardingPage3').style.display = "none";
    document.querySelector('.onboardingPage5').style.display = "inline-block";
}

function page2_1() {
    document.querySelector('.onboardingPage4').style.display = "none";
    document.querySelector('.onboardingPage3').style.display = "inline-block";
}

function page2_3() {
    document.querySelector('.onboardingPage4').style.display = "none";
    document.querySelector('.onboardingPage5').style.display = "inline-block";
}

function page3_1() {
    document.querySelector('.onboardingPage5').style.display = "none";
    document.querySelector('.onboardingPage3').style.display = "inline-block";
}

function page3_2() {
    document.querySelector('.onboardingPage5').style.display = "none";
    document.querySelector('.onboardingPage4').style.display = "inline-block";
}