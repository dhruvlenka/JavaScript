//global scope
var a = 1;
let b = 2;
const c = 3;

{
    //local scope
    var a = 10;
    let b = 20;
    const c = 30;
    var d = 40;
    console.log("I am from inside/Local the scope: " + a)
    console.log("I am from inside/Local the scope: " + b);
    console.log("I am from inside/Local the scope: " + c);
    console.log("I am from inside/Local the scope: " + d);
}

console.log();

console.log("I am from outside the Local scope: " + a);
console.log("I am from outside the Local scope: " + b);
console.log("I am from outside the Local scope: " + c);
console.log("I am from outside the Local scope: " + d);
