let Products = document.querySelector((".Products"))


export function render(prods){
    Products.innerHTML=""
    prods.forEach(element => {
        let block=document.createElement("div")
        block.classList.add("block")
        let backimg = document.createElement("div")
        backimg.classList.add("backimg")
        let img = document.createElement("img")
        img.src=element.img
        backimg.append(img)
        let bottomBL= document.createElement("div")
        let title = document.createElement("p")
        title.textContent=element.title
        let price = document.createElement("p")
        price.textContent=element.price
    });
}