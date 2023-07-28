(async () => {
  const productContainerEl = document.getElementById("product_container")
  const inputField = document.getElementById("inputField")

  const url = "https://fakestoreapi.com/products";


  const fetchProducts = async () => {
    try {
      const res = await fetch(url)
      return await res.json();
    } catch (error) {
      return error
    }
  }

  //fecthProducts returns products and is stored in variable products
  let products = await fetchProducts()

  //generates the only single card by the given product
  const productCardGenerater = (products) => {
    return `<div class="card" id="card">
                <div class="image_container">
                  <img
                    src="${products.image}"
                    alt=""
                  />
                </div>
                <div class="product_content">
                  <h2>
                    ${products.title}
                  </h2>
                  ${products.description.split(" ").slice(0, 20).join(" ")}
                  <button>$ ${products.price}</button>
                </div>
              </div>`
  }
  //sends an array to generate multiple cards 
  const renderProducts = (products) => {
    productContainerEl.innerHTML = "";

    products.forEach((products => {
      productContainerEl.innerHTML += productCardGenerater(products)

    }))
  }

  //returns true if the searchText is present in either title,description or price
  const checkTextContains = (searchText, text) => {
    return text.toString().toLowerCase().includes(searchText)
  }

  const filterHandler = (event) => {
    const searchText = event.target.value;

    const filteredProducts = products.filter((products => {
      return checkTextContains(searchText, products.title) ||
        checkTextContains(searchText, products.description) ||
        checkTextContains(searchText, products.price)
    }))
    renderProducts(filteredProducts)
  }
  inputField.addEventListener("keydown", filterHandler)
  renderProducts(products)
})()
