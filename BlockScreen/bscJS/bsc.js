
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



let namePR = document.querySelector('.namePR')
let img = document.querySelector(".img")
let title =document.querySelector(".title")
let model =document.querySelector(".model")
let price = document.querySelector(".price") 
let about = document.querySelector(".about")
let bottom = document.querySelector(".bottom")
const params = new URLSearchParams(window.location.search);
const id = params.get("id");



function render(element) {
  namePR.textContent = element.title;
  img.src = element.img;
  title.textContent = element.title;
  model.textContent = element.model;
  price.textContent = "$"+element.price;
  about.textContent = element.about;
}



async function getOneProduct() {
  const res = await axios.get(`${api}/${id}`);
  render(res.data);
}
getOneProduct();


let cartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;

let counter = document.querySelector(".cartCount");
counter.textContent = cartCount;

let buyBtn = document.querySelector(".buy");

buyBtn.onclick = () => {
  cartCount++; // +1

  localStorage.setItem("cartCount", JSON.stringify(cartCount));

  counter.textContent = cartCount;
};