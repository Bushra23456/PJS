let name = prompt ("enter your name");
console.log(name);


let math = parseInt(prompt ("enter your math subject math")) ;
let comp = parseInt(prompt ("enter your comp subject comp")) ;
let isl = parseInt(prompt ("enter your pst subject isl")) ;
let pst = parseInt(prompt ("enter your urdu subject pst"));
let urdu = parseInt(prompt ("enter your isl subject urdu"));

let obtainedMarks = math + comp + isl + pst + urdu;

let per = obtainedMarks/500*100;
console.log(per);

if(per >=90 && per <=100){
    console.log("your grade is A+1")
}
else if (per >=80 && per <=90){
    console.log("your grade is A+1")
}
else if (per >=70 && per <=80){
    console.log("your grade is A")
}
else if (per >=60 && per <=70){
    console.log("your grade is B")
}
if (per >=40 && per <=50){
    console.log("you ARE FAIL")
}






