let arr = ["Harshit", "Gaurav", "Ayush", "Dhruv", "Jayesh"];
//converting the array into string
console.log(arr.toString()); 

//to string with nested array
let nestedArray = [1,2,3,4,5, ["Harshit", "Gaurav", "Ayush", "Dhruv", "Jayesh"], [6,7]];
let result = nestedArray.toString();
console.log(result);