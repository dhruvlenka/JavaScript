let numbers = [1,2,3,4,5];
console.log(numbers.reverse());

let names = ["Harshit", "Gaurav", "Ayush", "Dhruv", "Jayesh"];
console.log(names.reverse());


//spread operator
let names2 = ["Kaya","Rishav", "Bhavika", "Deshmukh", "Gaurav", "Lucky", "Animesh Vastrakar"];

let reversed = [...names2].reverse();
console.log("Reversed: "+ reversed);