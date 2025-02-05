const a = "hii";
const b = Symbol(a);

console.log(a);
console.log(b);

console.log(a==b);

console.log(a==b.description)

console.log("----------------------")
const sum = (a,b) => a+b;
const customSum = Symbol(sum);
console.log(customSum); //sum
console.log(customSum.description);

//creating symbol to a function
const fun = Function(customSum.description) //accessing sum
    console.log(fun);





