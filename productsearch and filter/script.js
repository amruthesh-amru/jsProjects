const url = "https://fakestoreapi.com/products";
const cardEl = document.getElementById("card")
const fetchDetails = async () => {
    const res = await fetch(url)
    const data = await res.json();
    console.log(data);

    data.map((data) => {
        const product_container = document.createElement("div")
        product_container.classList.add("product_container")
        const card = document.createElement("div")
        card.classList.add("card")
        const image_container = document.createElement("div")
        image_container.classList.add("image_container")
        const image = image_container.createElement("img")
        image.src = data.image;
        product_container.classList.add("")

    })
    // for (let i = 0; i < data.length; i++) {
    //     data.forEach((data) => {
    //         card.innerHTML = `<div class="card" id="card">
    //         <div class="image_container">
    //           <img
    //             src="${data.image}"
    //             alt=""
    //           />
    //         </div>
    //         <div class="product_content">
    //           <h2>
    //             ${data.title}
    //           </h2>
    //           ${data.description.split(" ").slice(0, 20).join(" ")}
    //           <button>${data.price}</button>
    //         </div>
    //       </div>`
    //     })
    // }

}
fetchDetails()
