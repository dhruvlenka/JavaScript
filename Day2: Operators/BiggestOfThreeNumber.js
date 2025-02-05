const a = prompt("Enter First Number: ");
const b = prompt("Enter Second Number: ");
const c = prompt("Enter Third Number: ");

const result = (a>b?a:b)>c?(a>b?a:b):c;
console.log(`Biggest number along bw ${a}, ${b} and ${c} is: ${result}`);