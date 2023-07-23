function search() {
    const serachbox = document.getElementById("search_item").value.toUpperCase();
    const product = document.querySelectorAll(".product")
    const productName = document.getElementsByTagName("h2")
    console.log(productName.length);
    for (let i = 0; i < productName.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];
        if (match) {
            let textvalue = match.innerHTML || match.textContent
            if (textvalue.toUpperCase().indexOf(serachbox) > -1) {
                product[i].style.display = "";

            } else {
                product[i].style.display = "none";
            }
        }
    }
}















