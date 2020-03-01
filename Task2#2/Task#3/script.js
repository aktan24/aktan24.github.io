let info = function(){

const request = 'http://46.101.146.101:8081/categories/';

const xhr = new XMLHttpRequest();
xhr.open('GET', request);
xhr.onload = () => {
    let div = document.getElementById('request');
    let object = JSON.parse(xhr.response);
    for(let i = 0; i < object.length; i++){
        let h = document.createElement("h2");
        h.innerHTML = (object[i].id);
        h.style= 'padding-left:37px; padding-top:30px';
        let div2 = document.createElement("div");
        div2.innerHTML = (object[i].title);
        div2.style = 'padding-left:20px; padding-bottom:10px'
        div.style = 'background-color:lightgreen; padding-left:50px';
        let img = document.createElement("img");
        img.src = (object[i].category_image_url);
        img.style = 'width:300px; height: 200px; border-radius:10px';
        div.appendChild(h);
        div.appendChild(div2);
        div.appendChild(img);
    }
    console.log(object);
}
xhr.send();

}
