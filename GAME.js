

let gameNum = 25;
let usernumber = prompt("enter your number");
while(usernumber != gameNum){
    usernumber = prompt("you guess the wrong num ! guess again")
}
swal({
    title: "gamer alert!",
    text: "you are win the game😊.",
    timer: 5000
  });