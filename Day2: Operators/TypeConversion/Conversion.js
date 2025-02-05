var x = 10; //number
var y = "10"; //string

//Loose Equality : Implicit Type Conversion
console.log(x == y); //it will return true

let x2 = 10;
let y2 = "10";
//No implicit type conversion3
console.log(x2 === y2); //false

//Loose Not Equality
console.log(x != y); //false

//Strict Not Equality
console.log(x !== y) //true