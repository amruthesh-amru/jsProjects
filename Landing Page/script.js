const current_dark_mode = document.getElementById("current_dark_mode");

current_dark_mode.style.color = "darkyellow"
current_dark_mode.style.fontSize = "14px"

// const preventDefaults = document.querySelectorAll("#preventDefault");

// preventDefaults.forEach(e => {
//     e.addEventListener("click", (event) => {
//         event.preventDefault();
//     })
// // })


// window.addEventListener("load", () => {

//     if (localStorage.getItem("theme")) {
//         if (localStorage.getItem("theme") == "light") {
//             current_dark_mode.setAttribute("class", "fa-solid fa-moon");
//             console.log(current_dark_mode.getAttribute("class"));
//         } else {
//             current_dark_mode.setAttribute("class", "fa-solid fa-sun");
//             console.log(current_dark_mode.getAttribute("class"));
//         }
//     }
// })

// current_dark_mode.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (current_dark_mode.getAttribute("class") === "fa-solid fa-sun") {
//         current_dark_mode.setAttribute("class", "fa-solid fa-moon")
//         localStorage.setItem("theme", "light")
//         document.body.style.background = "white"
//         document.querySelector("nav").style.background = "white"
//     } else {
//         current_dark_mode.setAttribute("class", "fa-solid fa-sun")
//         localStorage.setItem("theme", "dark")
//         // document.body.style.background = "#1F2937"
//     }

// })


current_dark_mode.addEventListener("click", () => {
    document.body.classList.toggle("light_theme")
    if (document.body.classList.contains("light_theme")) {
        current_dark_mode.setAttribute("class", "fa-solid fa-moon")
        localStorage.setItem("theme", "light")
        console.log(localStorage.getItem("theme"));
    } else {
        current_dark_mode.setAttribute("class", "fa-solid fa-sun")
        localStorage.setItem("theme", "dark")
        console.log(localStorage.getItem("theme"));
    }

})
window.addEventListener("load", () => {
    localStorage.getItem("theme");
    if (localStorage.getItem("theme") === "light" && document.body.classList.contains("light_theme")) {
        current_dark_mode.setAttribute("class", "fa-solid fa-moon")
    } else {
        current_dark_mode.setAttribute("class", "fa-solid fa-sun")
    }
})
// -----------------Preventing Defaults-----------------------------















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