let api = "https://69e5ff70ce4e908a155ec5a1.mockapi.io/mmj";
const getGuestData = async (params) => {
  try {
    const response = await axios.get(api, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    container.innerHTML = "404";
  }
};
let currentProduct = null;

async function getOneProduct() {
  const res = await axios.get(`${api}/${id}`);
  currentProduct = res.data; // 👈 сохраняем
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
let totalprice=document.querySelector(".totalprice")

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function render(element) {
  namePR.textContent = element.title;
  img.src = element.img;
  title.textContent = element.title;
  model.textContent = element.model;
  price.textContent = "$" + element.price;
  about.textContent = element.about;
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
    tovar.innerHTML += `
      <div class="itemss" data-id="${el.id}">
        
        <div class="leftT">
          <img src="${el.img}" width="100%" height="100%">
        </div>

        <div class="middleT">
          <p class="titleM">${el.title}</p>
          <p class="priceM">$${el.price}</p>

          <div class="how">
            <div class="minus">-</div>
            <p class="count">${el.count}</p>
            <div class="plus">+</div>
          </div>
        </div>

        <div class="rightT delete">✖️</div>
      </div>
    `;

    total += el.price * el.count;
  });

  totalprice.textContent = "$" + total;
}

function updateCounter() {
  let totalCount = cart.reduce((sum, el) => sum + el.count, 0);
  counter.textContent = totalCount;
}


let counter = document.querySelector(".cartCount");

buyBtn.onclick = () => {
  addToCart(currentProduct);
};


renderCart();
updateCounter();


