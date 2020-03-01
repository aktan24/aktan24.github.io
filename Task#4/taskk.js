const API_KEY = "47crAhMrT0oysseuU8yM2WgBMG2fgbuB";
document.addEventListener("DOMContentLoaded", input);
let limit = 15;
function input() {
    document.getElementById("searchBtn").addEventListener("click", event => {
        event.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${limit}&q=`;
        let src = document.getElementById("search").value.trim();
        url = url.concat(src);
        fetch(url)
            .then(response => response.json())
            .then(data => inputItems(data))
            .catch(err => console.error(err))
    })
}
function inputItems(item) {
    for(let i = 0; item.data.length; i++) {
        let fig = document.createElement('figure');
        let img = document.createElement('img');
        img.src = item.data[i].images.downsized.url;
        img.alt = item.data[i].title;
        fig.appendChild(img);
        let out = document.querySelector('.out');
        out.insertAdjacentElement('beforeend', fig); 
        document.querySelector('#search').value = '';
    }
    document.getElementById('clearBtn').addEventListener('click', () => {
        document.body.removeChild(output);
    });
}