import getGuestData from "./mainApi.js";



let middleRight = document.querySelector(".middleRight")
let search = document.querySelector(".search")
let pars = document.querySelectorAll(".par")

export function render(users){
    middleRight.innerHTML=""
    users.forEach(element => {
     let block=document.createElement("div")
        block.classList.add("block")
        let backimg = document.createElement("div")
        backimg.classList.add("backimg")
        let img = document.createElement("img")
        img.src=element.img
        img.classList.add("imgss")
        backimg.append(img)
        
        let bottomBL= document.createElement("div")
        bottomBL.classList.add("bottomBL")
        let title = document.createElement("p")
        title.textContent=element.title
        title.style.color="gray"
        title.style.fontSize="20px"
        let price = document.createElement("p")
        price.textContent=element.price+"$"
        price.style.fontSize="20px"
        bottomBL.append(title,price)
        block.append(backimg,bottomBL)
        middleRight.append(block)  
        block.onclick=()=>{
          window.location.href="/BlockScreen/blocksc.html"
        }
    });
}

search.oninput = () => {
  getGuestData({ title: search.value });
};


pars.forEach(el => {
  el.onclick = () => {
    getGuestData({ model: el.textContent });
  };
});
