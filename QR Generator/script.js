const generateBtn = document.getElementById("generateBtn");
const form = document.getElementById("form");
const qrImage = document.getElementById("qrImage");
const loadingText = document.getElementById("loading");
const qrSection = document.getElementById("qrSection");

// const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}"

generateQr = (url) => {
    loadingText.classList.remove("hide");
    qrImage.src = url;
    setInterval(() => {
        qrSection.classList.remove("hide");
        qrSection.classList.add("show");
        loadingText.classList.add("hide");
    }, 500);

}

generateBtn.addEventListener("click", (event) => {

    event.preventDefault();

    const formData = new FormData(form)
    const text = formData.get("text");

    url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`
    generateQr(url);
})