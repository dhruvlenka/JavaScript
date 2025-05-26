// Immediately Invoked Function Expression (IIFE)
const output = (function () {
    const res = console.log("I am Immediately Invoked Function Expression, i am executed immediately.");
    return res;
})();

console.log(output)

(function () {
    console.log("I am Immediately Invoked Function Expression, i am executed immediately.");
})();