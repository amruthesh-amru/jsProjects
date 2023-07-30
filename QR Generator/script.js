const generateBtn = document.getElementById("generateBtn")
const form = document.getElementById("form")
const qrImage = document.getElementById("qrImage")
const loadingText = document.getElementById("loading")
const qrSection = document.getElementsByClassName("qrSection")

// const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}"
generateBtn.addEventListener("click", (event) => {

    event.preventDefault();

    const formData = new FormData(form)
    const text = formData.get("text");

    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`

    qrSection.classList.add("show")


})