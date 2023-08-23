
const current_dark_mode = document.getElementById("current_dark_mode");
const arrowAnimation = document.querySelectorAll(".arrowAnimation")
const activePage = window.location.pathname;

current_dark_mode.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("light_theme")
    if (document.body.classList.contains("light_theme")) {
        current_dark_mode.setAttribute("class", "fa-solid fa-moon")
        localStorage.setItem("theme", "light")
        console.log(localStorage.getItem("theme"));
    } else {
        current_dark_mode.setAttribute("class", "fa-solid fa-lightbulb")
        localStorage.setItem("theme", "dark")
        console.log(localStorage.getItem("theme"));
    }

})
window.addEventListener("load", () => {

    let currentMode = localStorage.getItem("theme");
    console.log("currnetMode " + currentMode);
    if (currentMode == "light") {
        current_dark_mode.setAttribute("class", "fa-solid fa-moon")
        document.body.classList.add("light_theme")
    } else {
        current_dark_mode.setAttribute("class", "fa-solid fa-lightbulb")
        document.body.classList.remove("light_theme")

    }
})






const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});





