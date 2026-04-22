let cartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;

let counter = document.querySelector(".cartCount");
counter.textContent = cartCount;