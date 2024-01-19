let heroes = [ "super man" , "Bat man" , "spider man" , "hulk" , "iron man" , "falcon"];
console.log(heroes);
//arrays are mutable
heroes[5] = "Aqua man";
console.log(heroes);

//splice
console.log(heroes.splice(2,4 ,"why man" , "acha man"));
console.log(heroes);
//

let bbq = ["tikka" , "seekh kabab" , "bihari boti" , "chabli kabab"];
let seaFood = ["prawn" , "fish" , "lobster"];
let sweetDish = ["ice-cream" , "jelly" , "cupcakes"];

let menu = bbq.concat(seaFood , sweetDish);
console.log(menu);