// prompt: taking input from the user
const a = +prompt("Enter First Number ");
const b = +prompt("Enter Second Number ");

const result = (a>b ? a:b); //if a>b return false then it will directly pass to b, if true then it will pass to a.
console.log(result);

// If we pass string value to the both prompt a and b then it will return NaN.
// If we pass number value to the both prompt a and b then it wll return the biggest.