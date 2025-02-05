let movie = "TENET";
let val = movie.split("");
let reverse = val.reverse();
let result = reverse.join("");
console.log(result);

let movie2 = "tenet"
let result2 = movie2.split().reverse().join(); //method chaining 
console.log(movie2)

if(movie2 == result2) {
    console.log(movie2 + " is palindrome.");
} else {
    console.log(movie2 + " is not palindrome.");
}