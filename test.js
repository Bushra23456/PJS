let user = prompt ("enter any number");
for(let i=1; i<=10; i++){
    console.log(`${user} x ${i} = ${user*i}`)
} 
let usernum = prompt ("enter any number");
for (let r=1; r<=usernum; r++){
  if(r%2 == 0){
    console.log (`${r} is even`)
  }
  else{
    console.log (`${r} is odd`)
  }
}