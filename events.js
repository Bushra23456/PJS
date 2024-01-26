let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "hello world";

let newBtn = document.createElement('button');
elem[0].appendChild(newBtn);

newBtn.innerHTML = "Click here";
newBtn.className = "btn btn-dark px-5 fw-bold";
newBtn.style.letterSpacing = "10px";

//EVENTS

newBtn.addEventListener('click' , hello);
    function hello(){
    console.log("you clicked on me!");
    newBtn.innerHTML = "wow!"

}
let apple = document.createElement('input');
elem[0].appendChild(apple);

apple.classList="form-control";
apple.style.margin = "20px";

apple.addEventListener('keyup' , app);
function app(){
    console.log("today work")
}