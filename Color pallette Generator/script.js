const generateBtn = document.getElementById("generateBtn")
const divColor1 = document.getElementById("color1")
const divColor2 = document.getElementById("color2")
const divColor3 = document.getElementById("color3")
const divColor4 = document.getElementById("color4")

randomHexGenerator = () => {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        random = Math.floor(Math.random() * hex.length)
        hexColor += hex[random]
    }
    return hexColor;
}

assignColor = () => {
    const randomHex1 = randomHexGenerator()
    divColor1.style.backgroundColor = randomHex1
    const randomHex2 = randomHexGenerator()
    divColor2.style.backgroundColor = randomHex2
    const randomHex3 = randomHexGenerator()
    divColor3.style.backgroundColor = randomHex3
    const randomHex4 = randomHexGenerator()
    divColor4.style.backgroundColor = randomHex4

    divColor1.addEventListener("click", () => {
        navigator.clipboard.writeText(randomHex1);
        Toastify({
            text: `Color code ${randomHex1} has been copied to clipboard`,
            gravity: "bottom",
            position: "center",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    })
    divColor2.addEventListener("click", () => {
        navigator.clipboard.writeText(randomHex2);
        Toastify({
            text: `Color code ${randomHex2} has been copied to clipboard`,
            gravity: "bottom",
            position: "center",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast()

    })
    divColor3.addEventListener("click", () => {
        navigator.clipboard.writeText(randomHex3);
        Toastify({
            text: `Color code ${randomHex3} has been copied to clipboard`,
            gravity: "bottom",
            position: "center",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast()

    })
    divColor4.addEventListener("click", () => {
        navigator.clipboard.writeText(randomHex4);
        Toastify({
            text: `Color code ${randomHex4} has been copied to clipboard`,
            gravity: "bottom",
            position: "center",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast()

    })
}

generateBtn.addEventListener("click", assignColor)
