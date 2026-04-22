
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

function render (){
    
}