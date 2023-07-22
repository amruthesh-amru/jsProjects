const URL = "https://meme-api.com/gimme/wholesomememes";
const generateMemeBtn = document.querySelector(".generate_meme_btn")

const memeImage = document.querySelector(".meme_generator img");
const memeTitle = document.querySelector(".meme_title");
const memeAuthor = document.querySelector(".meme_author");
const memeAuthor1 = document.getElementsByClassName("meme_author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by ${author}`;
}

// const generateMeme = () => {
//     fetch("https://meme-api.com/gimme/wholesomememes").then((response) => {
//         response.json()
//     }).then((data) => {
//         updateDetails(data.url, data.title, data.author)
//     })
// }

async function generateMeme() {
    const response = await fetch(URL)
    const data = await response.json();
    updateDetails(data.url, data.title, data.author);
}

generateMemeBtn.addEventListener("click", generateMeme);
generateMeme();