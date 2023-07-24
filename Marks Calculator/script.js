const submitBtn = document.getElementById("submit_btn")
const formValues = document.querySelector("form")



submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const max = 400;
    const formData = new FormData(formValues);
    const data = {}
    formData.forEach((value, key) => {
        data[key] = +value;
    })
    const totalMarks = data.maths + data.english + data.hindi + data.science;
    console.log(totalMarks);
    const percentage = totalMarks / max * 100
    console.log(percentage);
    const resultEl = document.createElement("p")
    resultEl.innerText = `You have got ${totalMarks} marks out of ${max}`;
    resultEl.className = "result"
    formValues.after(resultEl);

})