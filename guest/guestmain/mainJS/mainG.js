import getGuestData from "./mainApi.js"

let range = document.getElementById("priceRange")
let value = document.getElementById("priceValue")


range.oninput=()=>{
    value.textContent=range.value
}




getGuestData();


let cartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;

let counter = document.querySelector(".cartCount");
counter.textContent = cartCount;
