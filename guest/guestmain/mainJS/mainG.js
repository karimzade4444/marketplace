let range = document.getElementById("priceRange")
let value = document.getElementById("priceValue")


range.oninput=()=>{
    value.textContent=range.value
}