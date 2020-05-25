


async function search(){
  const searchBox = document.getElementById('search-cont');
const seacrhInput = document.getElementById('search-input');
seacrhInput.addEventListener('submit', search);
const searchBttn = document.getElementById('search-button');
searchBttn.addEventListener('submit', search);
  let searchTerm = seacrhInput.value;
  await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}`)
  .then(res=> res.json())
  .then(data=> {
    searchRender(data);
  })
  .catch(err => console.log(err))
  seacrhInput.value = '';
  }
    
function searchRender(props){
  let container = document.querySelector('.result-box');
  container.innerHTML='';
  for(let i = 0; i < props.data.length; i++){
    let title = props.data[i].attributes.canonicalTitle;
    let img = props.data[i].attributes.posterImage.small;
    
    container.innerHTML += `
    
    <div class="content-anilist__box" onclick="about.html">
        <img class="content-anilist__img" src="${img}">
        <h5 class="content-anilist__title">${title}</h5>
    </div>`
    // console.log(content.data[i])
  }
}
 




async function aniRender(){
  let data = await fetch('https://kitsu.io/api/edge/anime');
  let content = await data.json();
  let container = document.querySelector('.content-anilist');
  container.innerHTML='';
  for(let i = 0; i < content.data.length; i++){
    let title = content.data[i].attributes.canonicalTitle;
    let img = content.data[i].attributes.posterImage.small;
    
    container.innerHTML += `
    
    <div class="content-anilist__box" onclick="about.html">
        <img class="content-anilist__img" src="${img}">
        <h5 class="content-anilist__title">${title}</h5>
    </div>`
    // console.log(content.data[i])
  }
}
 
// fucntion cartRender(){

// }



async function newsRender(){
  let data = await fetch('http://demo8114905.mockable.io/news');
  let content = await data.json();
  let container = document.querySelector('.news-box');
  let key;
  for(key in content){
    container.innerHTML += `
    <div class="content-news">
        <h3 class="content-news__title">${content[key].title}</h3>
        <p class="content-news__text">${content[key].text}</p>
        <p style="font-size: 13px; color:grey;">${content[key].date}</p>
    </div>
    `
  //  console.log([key])
  }
}



window.addEventListener("load",aniRender);
window.addEventListener("load",newsRender);