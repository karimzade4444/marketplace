let api = "https://69e5ff70ce4e908a155ec5a1.mockapi.io/mmj";

async function getOneProduct() {
  const res = await axios.get(`${api}/${id}`);
  currentProduct = res.data;
  render(res.data);
}

let namePR = document.querySelector(".namePR");
let img = document.querySelector(".img");
let title = document.querySelector(".title");
let model = document.querySelector(".model");
let price = document.querySelector(".price");
let about = document.querySelector(".about");
let bottom = document.querySelector(".bottom");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
let TGTRight = document.querySelector(".TGTRight");
let backmodal = document.querySelector(".backmodal");

let tovar = document.querySelector(".tovar");
let leftT = document.querySelector(".leftT");
let titleM = document.querySelector(".titleM");
let priceM = document.querySelector(".priceM");
let ccount = document.querySelector(".ccount");
let close = document.querySelector(".close");
let totalprice = document.querySelector(".totalprice");
let counter = document.querySelector(".cartCount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function render(element) {
  namePR.textContent = element.title;
  img.src = element.img;
  title.textContent = element.title;
  model.textContent = element.model;
  price.textContent = "$" + element.price;
  about.textContent = element.about;
  buyBtn.onclick = () => {
    addToCart(element);
  };
}

async function getOneProduct() {
  const res = await axios.get(`${api}/${id}`);
  currentProduct = res.data;
  render(res.data);
}
getOneProduct();

let buyBtn = document.querySelector(".buy");

TGTRight.onclick = () => {
  backmodal.style.display = "block";
  close.onclick = () => {
    backmodal.style.display = "none";
  };
};

function addToCart(prod) {
  let is = cart.find((el) => el.id === prod.id);

  if (is) {
    is.count += 1;
  } else {
    cart.push({
      ...prod,
      count: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart)); // сохранить
  updateCounter(); // обновить счетчик
  renderCart();
}

function renderCart() {
  tovar.innerHTML = "";
  let total = 0;

  cart.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add("itemss");
    let leftT = document.createElement("div");
    leftT.classList.add("leftT");
    let img = document.createElement("img");
    img.classList.add("img");
    img.src = el.img;
    img.style.width = "100%";
    img.style.height = "100%";
    leftT.append(img);
    let middleT = document.createElement("div");
    let titleM = document.createElement("p");
    titleM.classList.add("titleM");
    titleM.textContent = el.title;
    let priceM = document.createElement("p");
    priceM.classList.add("priceM");
    priceM.textContent = "$" + el.price;
    let how = document.createElement("div");
    how.classList.add("how");
    let minus = document.createElement("div");
    minus.classList.add("minus");
    minus.textContent = "-";
    let count = document.createElement("p");
    count.classList.add("count");
    count.textContent = el.count;
    let plus = document.createElement("div");
    plus.classList.add("plus");
    plus.textContent = "+";
    plus.onclick = () => {};
    how.append(minus, count, plus);
    middleT.append(titleM, priceM, how);

    let rightT = document.createElement("div");
    rightT.classList.add("rightT");
    rightT.textContent = "✖️";
    div.append(leftT, middleT, rightT);
    tovar.append(div);
    total += el.price * el.count;
  });

  totalprice.textContent = "$" + total;
}

function updateCounter() {
  let totalCount = cart.length;
  counter.textContent = totalCount;
}

renderCart();
updateCounter();
