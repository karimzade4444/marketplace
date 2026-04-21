import  getGuestData  from "./api.js";
import render from "./render.js";

async function three() {
    let data = await getGuestData()

    render(data.slice(0,3));
}
three()
