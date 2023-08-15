const form = document.getElementById("form")
const earningsBtn = document.getElementById("earningsBtn")
const expenseBtn = document.getElementById("expenseBtn")
const amount = document.getElementById("amount")
const description = document.getElementById("description")


// const addTransaction = (e) => {
//     e.preventDefault();
//     const formData = new FormData(form)
//     const tData = {}
//     const key = formData.description.value
//     console.log(key);
//     formData.forEach((value, key) => {
//         tData[key] = value
//     })
//     console.log({ tData });
// } ;

let arrToStoreEntries = []


const addTransaction = (event) => {
    let isEarn;
    event.preventDefault();
    e = event || window.event;
    e = event.target || event.srcElement;
    console.log(event);
    if (event.nodeName == "earningsBtn") {
        isEarn = true;
    } else {
        isEarn = false;
    }
    console.log(event.nodeName);

    const earnOrExpense = {
        text: description.value,
        amount: +amount.value,
        // type: isEarn ? 
    }
    arrToStoreEntries.push(earnOrExpense)
    console.log(arrToStoreEntries);
}

earningsBtn.addEventListener("click", addTransaction)
expenseBtn.addEventListener("click", addTransaction)