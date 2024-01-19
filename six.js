let heroes = [ "super man" , "Bat man" , "spider man" , "hulk" , "iron man" , "falcon"];
console.log(heroes);
//arrays are mutable
heroes[5] = "Aqua man";
console.log(heroes);

//splice
console.log(heroes.splice(2,4 ,"why man" , "acha man"));
console.log(heroes);
