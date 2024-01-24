//DPM-->DOCUMENT OBJECT MODEL

let elem = document.getElementById('second');
// console.log(elem);
elem.textContent = "apple color is red"
elem.style.backgroundColor = "yellow";
elem.style.textAlign = "center";
elem.style.padding = "20px";
elem.classList.add('two')
elem.classList.add('three')
elem.classList.remove('three')
elem.id = "work";

let pic = document.getElementsByClassName('container');
pic[0].innerHTML = "Bushra";
pic[0].style.backgroundColor = "pink";
pic[0].style.textAlign = "center";
pic[0].style.padding = "20px";
pic[0].style.fontSize = "40px";
pic[0].style.Color = "black";
pic[0].classList.add('world')
pic[0].id = "ink";

let newElem = document.createElement('p');
pic[0].appendChild(newElem);
newElem.innerHTML = "apple";

let image = document.createElement('img');
newElem.appendChild(image);

image.src ="app.jpg"








