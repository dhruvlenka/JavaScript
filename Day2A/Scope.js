//outside the scope
var a = 10;
const b = 30;
let c = 40;

console.log("I am from outside the Local scope: " + a);
console.log("I am from outside the Local scope: " + b);
console.log("I am from outside the Local scope: " + c);

//inside the scope
{
    var a = 10;
    const b = 20 //this called variable shadowing because there is const b var outside the scope and we can only access the inside one.
    let c = 30;
    var d = 40;
    console.log("I am from inside/Local the scope: " + a)
    console.log("I am from inside/Local the scope: " + b);
    console.log("I am from inside/Local the scope: " + c);
    console.log("I am from inside/Local the scope: " + d);
    
}

