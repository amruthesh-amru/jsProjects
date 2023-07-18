const accessKey = "jRhdVnnf8w0G8Oon-m_oWNCzxMKbeEkCPkIPzOZlou0";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search_input");
const searchResults = document.querySelector(".container");
const showMore = document.getElementById("show_more_button");
const searchBtnEl = document.getElementById("search_button");


let inputData = "";
let page = 1;


async function searchImages() {
    inputData = inputEl.ariaValueMax;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json();
    const results = data.results

    if (page === 1) {
        searchResults.innerHTML = ""
    }

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("card");
        const image = document.createElement("img")
        image.src = results.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = results.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description
    })
}

