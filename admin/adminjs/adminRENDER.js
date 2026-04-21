import { deleteData, creatData, getData } from "./adminAPI.js";

let container = document.querySelector(".container")
let tbody = document.querySelector(".tbody")
let add = document.querySelector(".add")
let creatmodal = document.querySelector(".creatmodal")
let Closeml = document.querySelector(".Closeml")
let CreatForm = document.querySelector(".CreatForm")
let Closeed = document.querySelector(".Closeed")
let editmodal = document.querySelector(".editmodal")
let editForm = document.querySelector(".editForm")


export function render (users){
tbody.innerHTML=""
users.forEach(element => {
let tr = document.createElement("tr")
tbody.append(tr)
let imgback = document.createElement("td")
let imgs = document.createElement("img")
imgs.src=element.img
imgs.alt="PHOTO"
imgs.classList.add("imgs")
imgback.append(imgs)
imgback.style.width="150px"
imgback.style.textAlign="center"
imgback.style.verticalAlign="middle"
let title = document.createElement("td")
title.textContent=element.title
title.style.width="150px"
let about=document.createElement("td")
about.textContent=element.about
let price = document.createElement("td")
price.textContent=element.price+"$"
price.style.width="150px"
let actions = document.createElement("td")
let div = document.createElement("div")
let editbtn=document.createElement("button")
editbtn.textContent="EDIT"
let deletebtn = document.createElement("button")
deletebtn.textContent="DELETE"
deletebtn.style.backgroundColor="red"
deletebtn.style.color="white"
div.append(editbtn,deletebtn)
div.style.display="flex"
div.style.gap="10px"
div.style.justifyContent="center"
div.style.alignItems="center"
actions.style.width="200px"
actions.append(div)
tr.append(imgback,title,about,price,actions)


deletebtn.onclick=()=>{
deleteData(element.id)
}

add.onclick=()=>{
creatmodal.style.display="block"

Closeml.onclick=()=>{
    creatmodal.style.display="none"
}
}
});
}



CreatForm.onsubmit = (event) => {
  event.preventDefault();
  let formcrData = Object.fromEntries(new FormData(CreatForm));
  creatData(formcrData);
  creatmodal.style.display = "none";
  CreatForm.reset();
};