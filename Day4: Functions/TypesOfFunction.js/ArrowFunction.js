const arrowFunctions = () => {
  console.log("I am Arrow Function.");
}
console.log(arrowFunctions());

//arrow function with no argument
var captain = () => "I am Captain Jack Sparrow";
console.log(captain());

//arrow function with one argument

var salary = sal => sal+5000;
console.log("Salary with initiative:  "+ salary(15000));

//division program
const arrowDivison = (a,b) => {
    return a/b;
}
let res = arrowDivison(10,2);
console.log(res);

//multiply program: shorter way to write 
const multiply = (x,y) => x*y;
console.log(multiply(10,5));


