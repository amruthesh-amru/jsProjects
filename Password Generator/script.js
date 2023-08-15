const passRangeInputEl = document.getElementById("passRangeInput");
const passwaordLengthValueEl = document.getElementById("passRangeValue");
const genBtn = document.getElementById("genBtn");
const passwordEl = document.getElementById("password");

let passwordLength = 8;
let isUpperCase = false;
let isSymbols = false;
let isNumber = false;

generatePassword = (passwordLength) => {
    let password = "";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const symbols = isSymbols ? "!@#$%^&*()_" : "";
    const numbers = isNumber ? "1234567890" : "";

    const passwordChar = lowerCase + upperCase + symbols + numbers;

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * passwordChar.length);
        password += passwordChar[index];

    }
    return password;
}
passRangeInputEl.addEventListener("input", (e) => {
    passwordLength = +e.target.value;
    passwaordLengthValueEl.innerText = passwordLength;
})

genBtn.addEventListener("click", (e) => {
    const uppercaseEl = document.getElementById("uppercase");
    const numbersEl = document.getElementById("numbers");
    const symbolsEl = document.getElementById("symbols");

    isUpperCase = uppercaseEl.checked;
    isSymbols = symbolsEl.checked;
    isNumber = numbersEl.checked;

    password = generatePassword(passwordLength);
    passwordEl.innerHTML = password;
})

passwordEl.addEventListener("click", (e) => {
    if (e.target.innerText.length > 0) {
        navigator.clipboard.writeText(passwordEl.innerText).then(() => {
            alert("Copied to Clipboard")
        }).catch((err) => {
            alert(err);
        })
    }
})
