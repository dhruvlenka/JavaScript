let currency;

//converting number to string
currency = "1000" + 1000;
console.log((currency + " - " + typeof(currency)));

currency = "1000" + true;
console.log(currency + " - " + typeof(currency));

currency = "1000" + null;

console.log(currency + " - " + typeof(currency));

console.log();

let x = 0;
let y = false;
console.log(x!=y);
console.log(x!==y);

