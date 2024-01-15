console.log("welcome to pjs");
console.log("hello world");
// data types
name = "Bushra";   //string
num = 1234;     //num
x = "undefined";  //undefined 
y = "null";     //null
boolean = "true"  //boolean(true,false)

console.table(name , num , x , y , boolean);
// we have two types of data types

//1) primitive data types String Num Boolen int etc
//2) non-primitive data types array object  functon etc
let obj ={
    name : "Bushra",
    age : 18,
    city : "Karachi",
    phone : 2675465,
    grade : "A-one"
}

//first method to getting value of an object

console.log(obj["name"]);
console.log(obj["grade"]);


//second method to getting value of an object
console.log(obj.city);


//for in loop
for(let i in obj){
    console.log(i , obj[i])
}