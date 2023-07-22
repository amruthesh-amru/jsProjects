const buttons = document.querySelectorAll(".btn")
const screen = document.querySelector(".screen");
const equalsBtn = document.querySelector(".equals_btn")
const clearBtn = document.querySelector(".clear_btn");




buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        let value = e.target.dataset.num;
        screen.value += value;

    })
});

equalsBtn.addEventListener("click", function (e) {

    if (screen.value === '') {
        screen.value = ""
    } else {
        console.log(screen.value);
        const answer = eval(screen.value)
        console.log(answer);
        screen.value = answer;
    }
})
clearBtn.addEventListener("click", function (e) {
    screen.value = ""
})