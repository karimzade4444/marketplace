// cart.js

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(prod) {
  let cart = getCart();

  let is = cart.find((el) => el.id === prod.id);

  if (is) {
    is.count += 1;
  } else {
    cart.push({
      ...prod,
      count: 1,
    });
  }

  saveCart(cart);
}

function getTotalCount() {
  let cart = getCart();
  return cart.reduce((sum, el) => sum + el.count, 0);
}

function getTotalPrice() {
  let cart = getCart();
  return cart.reduce((sum, el) => sum + el.price * el.count, 0);
}