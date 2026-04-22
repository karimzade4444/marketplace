import  getGuestData  from "./api.js";
import render from "./render.js";

async function three() {
    let data = await getGuestData()

    render(data.slice(0,3));
}
three()



let all = document.querySelector(".all")
all.onclick=()=>{
    window.location.href="/guest/guestmain/main.html"
}
let show = document.querySelector(".show")
show.onclick=()=>{
    window.location.href="/guest/guestmain/main.html"
}